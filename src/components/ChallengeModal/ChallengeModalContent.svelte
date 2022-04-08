<script lang="ts">

    import ChallengeModalImagesRow from "./ChallengeModalImagesRow.svelte";

    let rowCount = 3, colCount = 3;

</script>

<div id="ndtv-content-container">
    <div>
        {#each {length: rowCount} as _, i}
        <ChallengeModalImagesRow rowIndex={i} {colCount}/>
        {/each}
    </div>
</div>

<style>
    #ndtv-content-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>