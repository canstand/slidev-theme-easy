<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
const props = defineProps({
  image: {
    type: String,
    default: 'https://source.unsplash.com/collection/94734566/1920x1080',
  },
  class: {
    type: String,
    default: ''
  },
  left: {
    type: Boolean,
    default: true,
    required: false
  }
})
const style = computed(() => handleBackground(props.image))
</script>

<template>
  <div class="slidev-layout intro">
    <div class="w-1/4 h-full bg-$slidev-theme-primary opacity-30" :class="[left ? 'abs-tl' : 'abs-tr']"></div>
    <div class="absolute top-1/4 left-30 w-3/4 h-1/3" :class="class" :style="style"></div>
    <div class="mt-4" :class="[left ? 'ml-1/4 mr-16' : 'mr-1/4 ml-16']">
      <slot />
    </div>
  </div>
</template>

<style>
.intro h1 {
  @apply pb-1/3 mb-8;
}
</style>
