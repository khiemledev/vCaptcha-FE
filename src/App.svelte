<script lang="ts">
    import ChallengeSolvingModal from "./views/ChallengeModal.svelte";
    import OuterDisplayBox from "./views/OuterDisplayBox.svelte";
    import services from "./services";
    import type PositionModel from '../commons/models/positionModel';

    let isShowingChallenge: boolean = false;

    services.getNewImageData();
    
    document.addEventListener("click", function(event: PointerEvent) {
        for (let ele of event.composedPath()) {
            if (ele.id === "ndtv-main-container") return;
        }
        isShowingChallenge = false;
    });

    function showChallengeModal() {
        isShowingChallenge = true
    }

    

</script>

<main>
    <div class="deleteable-content">
        <p>ntbvavnvanerjvniaiieagineigen</p>
        <p>ntbvavnvanerjvniaiieagineigen</p>
    </div>
    <div style="width: auto;">
        <div id="ndtv-container">
            <OuterDisplayBox on:showChallenge={showChallengeModal}/>
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
