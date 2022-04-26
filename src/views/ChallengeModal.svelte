<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
    import ChallengeStatus from "../commons/enums/challengeStatus.ts"
    import services from "../services";
    import ChallengeModalContent from "../components/ChallengeModal/ChallengeModalContent.svelte";
    import {status, challengeAnchor, imagesSelectStatus, imageCount} from "../store"
    

	const dispatch = createEventDispatcher();
    let imageName = "image1";
    
    imageCount.subscribe((value) => {
        if (value == 0) imageName = "image1";
        imageName = `image${value}`;
    })

    $: isSelectionEmpty = $imagesSelectStatus[imageName] ? $imagesSelectStatus[imageName].every((a) => !a) : true;

    function handleReload() {
        services.postCreateCaptcha().then(() => services.getNextImageData());
    }

    function handleNextChallenge() {
        if (isSelectionEmpty){
            services.getRenewedImageData();
            return;
        }
        services.getNextImageData();
    }

    function handleSubmitVerify() {
        services.postClientChallengeAnswer();
        dispatch("closeChallenge");
    }
</script>

<div id="vcaptcha-main-container" transition:fade 
    style="position: relative; top: { $challengeAnchor.top - 78}px; left: { $challengeAnchor.left }px;">
    <div id="vcaptcha-header" class="py-2">
        <div class="px-2">
            <p class="my-0" style="font-size: 1.25rem; font-weight: bold">
                Chọn các ô có chứa tiếng Việt
            </p>
            <p class="my-0" style="font-size: 1.1rem;">
                Nếu không có, hãy nhấn nút "Bỏ qua"
            </p>
        </div>
    </div>
    <ChallengeModalContent/>
    <div id="vcaptcha-footer" class="py-2 px-2">
        <!-- RELOAD BUTTON -->
        <div id="vcaptcha-footer-reload-button" on:click={handleReload}>
            <svg
                width="32"
                height="32"
                fill="pink"
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
        {#if isSelectionEmpty}
        <button on:click={handleNextChallenge} class="mx-2 vcaptcha-button">Bỏ qua</button>
        {:else if $status != ChallengeStatus.LastChallenge}
        <button on:click={handleNextChallenge} class="mx-2 vcaptcha-button">Tiếp tục</button>
        {:else}
        <button id="vcaptcha-footer-submit-button" on:click={handleSubmitVerify} class="mx-2 vcaptcha-button">Kiểm tra</button>
        {/if}
    </div>
</div>

<style>
    #vcaptcha-main-container {
        width: 50vw;
        min-width: 390px;
        max-width: 450px;
        background-color: white;
        position: absolute;
        border: 1px solid pink;
        border-radius: 5px;
    }

    #vcaptcha-header {
        width: 100%;
        align-items: center;
    }

    /* --- main header section */

    #vcaptcha-header {
        background-color: plum;
    }

    /* --- footer section */

    #vcaptcha-footer {
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #vcaptcha-footer-reload-button {
        float: left;
    }

    #vcaptcha-footer-reload-button svg:hover{
        fill: #6ac;
    }
    
    #vcaptcha-footer-reload-button svg:active {
        fill: palevioletred;
    }

    .vcaptcha-button {
        height: 2.5rem;
        width: 32%;
        background-color: palevioletred;
        border: 1px solid palevioletred;
        color: white;
        border-radius: 5px;
        float: right;
    }
    .vcaptcha-button:hover {
        background-color: #6ac;
        border: 0px;
    }

    .vcaptcha-button:active {
        background-color: pink;
    }

    .vcaptcha-button {
        font-size: 1.1rem;
        transition: background-color 0.3s, fill 0.3s;
    }
</style>