<script lang="ts">
    import { imageData, imagesSelectStatus } from '../../store';

    export let rowIndex = 0;
    export let colIndex = 0;

    $: imgIndex = rowIndex * 3 + colIndex;
    $: isSelected = $imagesSelectStatus[imgIndex];

    function handleClick() {
        isSelected = !isSelected;
        $imagesSelectStatus[imgIndex] = isSelected;
        console.log($imagesSelectStatus);
    }


</script>

<div class="ndtv-image-container" class:selected="{isSelected}" on:click={handleClick}>
    {#if isSelected}
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16" style="position: relative">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </svg>
    {/if}
    <img class="ndtv-image"
        src={$imageData}
        alt={`image-${rowIndex}-${colIndex}`}
        style="position: relative; top: { -rowIndex * 100}px; left: { -colIndex * 100}px;"
    />
</div>

<style>
    .ndtv-image-container {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        margin: 1px;
        overflow: hidden;

    }

    .ndtv-image-container.selected {
        width: 94px;
        height: 94px;
        border: 3px solid pink;
        border-radius: 3px;
    }
</style>