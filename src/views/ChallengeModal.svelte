<script lang="ts">
import ChallengeModalContent from "../components/ChallengeModal/ChallengeModalContent.svelte";


    function handleSubmitVerify() {
        console.log("verifying")
    }
</script>

<div id="ndtv-main-container">
    <div id="ndtv-header" class="py-2">
        <p class="my-0" style="font-size: 1.25rem;">
            Nhận diện Tiếng Việt
        </p>
    </div>
    <ChallengeModalContent/>
    <div id="ndtv-footer" class="py-2">
        <div id="ndtv-footer-reload-button">
            <svg
                width="32"
                height="32"
                fill="pink"
                class="bi bi-arrow-repeat"
                viewBox="0 0 16 16"
            >
                <path
                    d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
                />
                <path
                    fill-rule="evenodd"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                />
            </svg>
        </div>
        <button id="ndtv-footer-submit-button">Kiểm tra</button>
    </div>
</div>

<style>
    #ndtv-main-container {
        width: 50vw;
        min-width: 350px;
        max-width: 428px;
        background-color: white;
        position: absolute;
        border: 1px solid pink;
        border-radius: 5px;
    }

    #ndtv-header {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* --- main header section */

    #ndtv-header {
        background-color: plum;
    }

    /* --- footer section */

    #ndtv-footer {
        width: 95%;
        padding-left: 16px;
        padding-right: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #ndtv-footer-reload-button {
        float: left;
    }

    #ndtv-footer-submit-button {
        height: 2.5rem;
        width: 32%;
        background-color: palevioletred;
        border: 1px solid palevioletred;
        color: white;
        border-radius: 5px;
        float: right;
    }

    #ndtv-footer-submit-button:active {
        border: 2px solid darkturquoise;
        border-radius: 5px;
    }

</style>