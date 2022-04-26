<script lang="ts">

    import ChallengeModalImagesRow from "./ChallengeModalImagesRow.svelte";

    export let isHidden = false;

    let rowCount = 4, colCount = 4;

</script>

<div id="vcaptcha-content-container" style="visibility: {isHidden ? "hidden" : "visible"};">
    <div>
        {#each {length: rowCount} as _, i}
        <ChallengeModalImagesRow rowIndex={i} {colCount}/>
        {/each}
    </div>
</div>

<style>
    #vcaptcha-content-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>