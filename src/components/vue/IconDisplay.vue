<template>
  <div
    class="text-white rounded w-12 h-12 flex items-center justify-center"
    v-html="iconHTML"
  />
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import { getIcon } from "../../utils/getIcon";
const { title } = defineProps(['title']);
const iconHTML = getIcon(title);

</script>