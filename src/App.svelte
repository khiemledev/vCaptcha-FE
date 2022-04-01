<script lang="ts">
    import ChallengeSolvingModal from "./views/ChallengeModal.svelte";
    import OuterDisplayBox from "./views/OuterDisplayBox.svelte";
    import { imageData } from './store'

    let isShowingChallenge: boolean = false;
    
    fetch("/captcha/demo/get_image")
        .then(resp => resp.arrayBuffer()).then(data => {
            var binary = '';
            var bytes = new Uint8Array(data);
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
                binary += String.fromCharCode( bytes[ i ] );
            }
            $imageData = 'data:image/png;base64,' + window.btoa( binary );
        });

</script>

<main>
    <div class="deleteable-content">
        <p>ntbvavnvanerjvniaiieagineigen</p>
        <p>ntbvavnvanerjvniaiieagineigen</p>
    </div>
    <div style="width: auto;">
        <div id="ndtv-container">
            <OuterDisplayBox on:showChallenge={() => isShowingChallenge = true}/>
            {#if isShowingChallenge}
            <ChallengeSolvingModal/>
            {/if}
        </div>
    </div>
</main>

<style>
    #ndtv-container {
        font-family: Arial !important;
        color: white;
        border: 1px solid pink;
        border-radius: 2px;
        width: 60%;
        height: 4rem;
        max-width: 300px;
        overflow: visible;
    }

    :global(.mx-2) {
        margin-left: 32px;
        margin-right: 32px;
    }

    :global(.py-2) {
        padding-bottom: 16px;
        padding-top: 16px;
    }

    :global(.my-0) {
        margin-bottom: 0px;
        margin-top: 0px;
    }
</style>
