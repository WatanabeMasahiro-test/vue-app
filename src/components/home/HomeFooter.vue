<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer>
    <div>
      <p>ホームのフッター</p>
      <ul>
        <li><RouterLink to="terms-of-service">利用規約</RouterLink></li>
        <li><RouterLink to="privacy-policy">プライバシーポリシー</RouterLink></li>
        <li><RouterLink to="user-guide">ご利用ガイド</RouterLink></li>
        <li><a href="https://cred-in.com/company/" target="_blank" rel="noopener noreferrer">運営会社</a></li>
      </ul>
    </div>

    <p class="copyright">Copyright©CRED INTERNATIONAL Co,Ltd. All rights reserved</p>
  </footer>
</template>

<style scoped>

</style>
