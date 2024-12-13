<template>
<div class="radial-progress text-[#f9b703] bg-[#272423] "  :style="`--value:${progress};`" role="progressbar">{{progress}}%</div>
</template>

<script setup>
    const props = defineProps({
        progress: Number
    })
</script>
