<script lang="ts">
    import ChallengeModalImage from "./ChallengeModalImage.svelte";
    export let rowIndex = 0;
    export let colCount = 3;
</script>

<div class="ndtv-images-row">
    {#each {length: colCount} as _, i}
    <ChallengeModalImage {rowIndex} colIndex={i}/>
    {/each}
</div>

<style>
    /* --- main content section */
    .ndtv-images-row {
        display: flex;
    }
</style>