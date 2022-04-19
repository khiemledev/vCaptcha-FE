<script lang="ts">
    import { imageData, imageCount, imagesSelectStatus } from '../../store';

    export let rowIndex = 0;
    export let rowCount = 4;
    export let colIndex = 0;
    export let colCount = 4;

    let imageWidth = 380, imageHeight = 380, imageName = "image1";
    
    imageCount.subscribe((value) => {
        if (value == 0) imageName = "image1";
        imageName = `image${value}`;
    })
    $: imgIndex = rowIndex * colCount + colIndex;
    $: isSelected = $imagesSelectStatus[imageName] ? $imagesSelectStatus[imageName][imgIndex] : false;
    $: selectedBorder = isSelected ? 6 : 0;

    function handleClick() {
        isSelected = !isSelected;
        $imagesSelectStatus[imageName][imgIndex] = isSelected;
    }


</script>

<div class="vcaptcha-image-container" class:selected="{isSelected}" on:click={handleClick}
    style="width: {imageWidth/colCount - selectedBorder}px; height: {imageHeight/rowCount - selectedBorder}px"
>
    {#if isSelected}
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="pink" class="vcaptcha-check-circle" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </svg>
    {/if}
    <img class="vcaptcha-image"
        src="{$imageData}"
        alt={`image-${rowIndex}-${colIndex}`}
        style="position: relative; top: { -rowIndex * 100}%; left: { -colIndex * 100}%;"
    />
</div>

<style>
    .vcaptcha-image-container {
        display: flex;
        align-items: center;
        margin: 1px;
        overflow: hidden;
        /* transition: width 0.5s, height 0.5s, border 0.5s; */
    }

    .vcaptcha-check-circle {
        position: absolute;
        z-index: 10000;
    }

    .vcaptcha-image-container.selected {
        /* width: 89px;
        height: 89px; */
        border: 3px solid plum;
        border-radius: 3px;
    }
</style>