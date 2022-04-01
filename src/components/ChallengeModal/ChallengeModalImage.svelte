<script lang="ts">
    import { imageData } from '../../store';

    export let rowIndex = 0;
    export let colIndex = 0;

    let isSelected = false;

    function handleClick() {
        isSelected = !isSelected;
    }
</script>

<div class="ndtv-image-container" class:selected="{isSelected}" on:click={handleClick}>
    <img class="ndtv-image"
        src={$imageData}
        alt={`image-${rowIndex}-${colIndex}`}
        style="position: relative; top: { -rowIndex * 100}px; left: { -colIndex * 100}px;""
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
        width: 96px;
        height: 96px;
        border: 2px solid pink;
    }
</style>