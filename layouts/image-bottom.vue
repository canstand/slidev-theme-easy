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
  thin: {
    type: Boolean,
    default: false
  }
})
const style = computed(() => handleBackground(props.image))
</script>

<template>
  <div class="h-full">
    <div class="slidev-layout default" :class="props.class" >
      <slot />
    </div>
    <div class="abs-bl -z-1 w-full bga-slidev-theme-primary bg-opacity-30" :class="props.thin ? 'h-1/6' : 'h-1/3'" >
      <div class="w-full h-full" :style="style" />
    </div>
  </div>
</template>