//@ts-nocheck
import App from './App.svelte';

const defaultId = "vcaptcha-body"

window.vCaptcha = {
    sessionId: "",
    isRendered: false,
    targetId: defaultId,
    render: function (id?: string) {
        this.renderred = true;
        if (id) this.targetId = id;
        this.app = new App({
            target: document.getElementById(this.targetId),
            props: {}
        });
    }
}

// let app = new App({
// 	target: document.getElementById(window.vCaptcha.targetId),
// 	props: {
// 	}
// });

window.vCaptcha.app = null;

window.addEventListener('load', function() {
    if (!window.vCaptcha.isRendered)
        window.vCaptcha.render();
})

export default window.vCaptcha.app;