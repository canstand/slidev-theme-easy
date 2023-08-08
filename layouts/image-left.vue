<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
const props = defineProps({
  image: {
    type: String,
  },
  class: {
    type: String,
  },
  backgroundSize: {
    type: String,
    default: 'cover',
  },
  equal: {
    type: Boolean,
    default: true
  },
  imageFrame: {
    type: Boolean,
    default: false
  }
})
const style = computed(() => handleBackground(props.image, false, props.backgroundSize))
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full auto-rows-fr" :class="[props.equal ? 'grid-cols-2' : 'grid-cols-3']">
    <div class="w-full h-full  bga-slidev-theme-primary bg-opacity-30" :class="props.imageFrame ? 'px-16 py-24' : ''">
      <div class="w-full h-full" :style="style" />
    </div>
    <div v-if="equal" class="slidev-layout default" :class="props.class">
      <slot />
    </div>
    <div v-else class="slidev-layout default col-span-2" :class="props.class">
      <slot />
    </div>
  </div>
</template>