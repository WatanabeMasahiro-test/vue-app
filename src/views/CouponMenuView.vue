<script setup lang="ts">
import PerPageHeader from '@/components/PerPageHeader.vue'

const method1 = ()=> {
  console.log("HELL!!!O12345")
}
method1()
</script>

<template>
  <PerPageHeader />
  <div>ここにパンくずリスト</div>
    <hr />
    <div> <!-- ここをv-for -->
      <p class="division-icon">区分アイコン</p>
      <p class="category-icon">
        <span>カテゴリアイコン</span> <!-- ここをv-for -->
      </p>
      <div class="menu-price">
        <p>メニュー名</p>
        <p></p>
      </div>
    </div>
</template>