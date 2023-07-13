<script setup lang="ts">
import { useRoute } from 'vue-router'
const pageTitle = useRoute().meta.title
</script>

<template>
  <header>
    <div>
      <div> ＜ </div>
      <div>{{ pageTitle }}</div>
      <!-- TO DO ここはMENUのコンポーネント化 -->
      <div>三</div>
    </div>
</header>
</template>