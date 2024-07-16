<template>
  <div class="text-white rounded w-12 h-12 flex items-center justify-center">
    <img :src="iconSrc" alt="Icon" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { getIcon } from "../../utils/getIcon";

const { title } = defineProps(['title']);
const iconHTML = getIcon(title);

const iconSrc = computed(() => {
  if (iconHTML) {
    return `data:image/svg+xml;utf8,${encodeURIComponent(iconHTML)}`;
  }
  return '';
});
</script>