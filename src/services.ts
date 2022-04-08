import { imageData, imagesSelectStatus, status } from './store';
import ChallengeStatus from "./commons/enums/challengeStatus"

class Services {
    getNewImageData = async () => {
        status.set(ChallengeStatus.Loading);
        imagesSelectStatus.set([false, false, false, false, false, false, false, false, false]);
        return fetch("/captcha/demo/get_image")
            .then(resp => resp.arrayBuffer()).then(data => {
                var binary = '';
                var bytes = new Uint8Array(data);
                var len = bytes.byteLength;
                for (var i = 0; i < len; i++) {
                    binary += String.fromCharCode( bytes[ i ] );
                }
                imageData.set('data:image/png;base64,' + window.btoa( binary ));
                window.setTimeout(() => status.set(ChallengeStatus.Empty), 300);
            });
    }
}

export default new Services();