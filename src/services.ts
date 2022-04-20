import { imageData, imagesSelectStatus, imageCount, sessionId, status } from './store';
import ChallengeStatus from "./commons/enums/challengeStatus"

let localSelectStatus = {image1: [], image2: [],},
  localImageCount = 0,
  localSessionId = "";

function postJSON(path: string, jsonData: any) {
    return fetch(path, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    }).then((resp) => resp.json())
}

function resetImageSelectStatus(){
    imagesSelectStatus.set({
        image1: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        image2: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    })
}

imageCount.subscribe((value) => {
    console.log(value)
    localImageCount = value
})
imagesSelectStatus.subscribe((value) => {
    if (localImageCount == 0) return;
    const localImageName = `image${localImageCount}`;
    localSelectStatus[localImageName] = [];
    value[localImageName].forEach((val, ind) =>  val && localSelectStatus[localImageName].push(ind));
})
sessionId.subscribe((value) => {
    localSessionId = value;
});

class Services {
    postCreateCaptcha = async () => {
        status.set(ChallengeStatus.Empty);
        resetImageSelectStatus();
        imageCount.set(0);
        sessionId.set("");
        const resp = await postJSON("/captcha/demo/create_captcha", {
            secret: "captcha_secret",
            hostname: "recaptcha.com",
        });
        if (resp.code == 1000){
            sessionId.set(resp.session_id);
            return;
        }
        status.set(ChallengeStatus.Failed);
        return;
    }

    getNewImageData = async () => {
        status.set(ChallengeStatus.Loading);
        imageCount.set(++localImageCount);
        resetImageSelectStatus();
        return fetch(`/captcha/demo/get_captcha_image?session_id=${localSessionId}&image=${localImageCount}`)
          .then((resp) => resp.arrayBuffer())
          .then((data) => {
            var binary = "";
            var bytes = new Uint8Array(data);
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
              binary += String.fromCharCode(bytes[i]);
            }
            imageData.set("data:image/png;base64," + window.btoa(binary));
            window.setTimeout(() => {
                status.set(ChallengeStatus.Loaded)
                if (localImageCount == 2){
                    status.set(ChallengeStatus.LastChallenge);
                }
            }, 300);
          });
    }

    postClientChallengeAnswer = async () => {
        status.set(ChallengeStatus.Loading);
        const resp = await postJSON("/captcha/demo/verify_captcha", {
          secret: "captcha_secret",
          session_id: localSessionId,
          client_response: localSelectStatus,
        });
        if (resp.success) {
            document.cookie = `vcaptcha_session_id=${localSessionId}`;
            status.set(ChallengeStatus.Succeed);
            return;
        }
        status.set(ChallengeStatus.Failed);
    }
}

export default new Services();