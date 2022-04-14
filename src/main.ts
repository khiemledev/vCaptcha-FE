//@ts-nocheck
import App from './App.svelte';

window.vCaptcha = {
    targetId: "vcaptcha-body",
    render: function (id: string) {
        if (this.initialLoadId) {
            clearTimeout(window.vCaptcha.initialLoadId);
            this.initialLoadId = false;
        }
        this.targetId = id;
        this.app = new App({
            target: document.getElementById(this.targetId),
            props: {
            }
        });
    }
}

// let app = new App({
// 	target: document.getElementById(window.vCaptcha.targetId),
// 	props: {
// 	}
// });

window.vCaptcha.app = null;

window.vCaptcha.initialLoadId = setTimeout(function () {
    window.vCaptcha.render("vcaptcha-body")
}, 500)

export default window.vCaptcha.app;