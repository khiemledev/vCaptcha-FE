<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    import ChallengeStatus from "../commons/enums/challengeStatus"
    import LoadingAnimation from "../components/commons/LoadingAnimation.svelte"
	import { fade } from 'svelte/transition';
    import { imageData, status, challengeAnchor } from '../store';
    import services from '../services';

	const dispatch = createEventDispatcher();

    function handleShowChallenge() {
        if ($status == ChallengeStatus.Failed) {
            services.postCreateCaptcha().then(() => services.getNextImageData());
        }
        dispatch("showChallenge");
    }
</script>

<div id="vcaptcha-front-container">
    <span id="vcaptcha-front-checkbox" class="mx-2" bind:offsetHeight={$challengeAnchor.top} bind:offsetWidth={$challengeAnchor.left}>
        {#if $status === ChallengeStatus.Loading}
        <div class="mx-2">
            <LoadingAnimation/>
        </div>
        {:else if $status === ChallengeStatus.Succeed}
        <div
            id="vcaptcha-front-checkbox-succeed"
            style="margin-left: 24px;"
            transition:fade
        >
            <svg fill="pink" width="32" height="32" viewBox="0 0 16 16">
                <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                />
            </svg>
        </div>
        {:else}
        <div id="vcaptcha-front-checkbox-empty" on:click|stopPropagation={handleShowChallenge} transition:fade/>
        {/if}
    </span>
    <span>Tôi không phải người máy</span>
</div>

<style>

    #vcaptcha-front-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        color: darkslategray;
        background-color: lightcyan;
    }

    #vcaptcha-front-checkbox {
        width: 5rem;
        height: 2rem;
        margin: 0px;
        display: flex;
    }

    #vcaptcha-front-checkbox-empty {
        width: 2rem;
        height: 2rem;
        background-color: white;
        border: 1px solid gray;
        border-radius: 3px;
        margin: auto;
    }
</style>
