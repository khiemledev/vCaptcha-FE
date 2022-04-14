<script lang="ts">

    import ChallengeModalImagesRow from "./ChallengeModalImagesRow.svelte";

    let rowCount = 4, colCount = 4;

</script>

<div id="vcaptcha-content-container">
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