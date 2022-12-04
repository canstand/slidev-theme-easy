<template>
  <footer class="flex abs-bl w-full py-0.5 px-4 text-sm mix-blend-exclusion">
    <div v-if="$slidev.nav.currentLayout !== 'cover'" class="w-1/2 text-left">
      <span v-if="$slidev.themeConfigs.title" class="px-2">{{
          $slidev.themeConfigs.title
      }}</span>
    </div>
    <div v-if="$slidev.nav.currentLayout !== 'cover'" class="w-1/2 flex space-x-3 justify-end">
      <span v-if="$slidev.themeConfigs.twitter">
        <mdi-twitter /> @{{ $slidev.themeConfigs.twitter }}
      </span>
      <span v-if="$slidev.themeConfigs.github">
        <mdi-github /> {{ $slidev.themeConfigs.github }}
      </span>
      <span>
        {{ $slidev.nav.currentPage - 1 }} / {{ $slidev.nav.total - 1 }}
      </span>
    </div>
  </footer>
</template>
