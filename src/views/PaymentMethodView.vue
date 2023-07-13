<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PerPageHeader from '@/components/PerPageHeader.vue'

const router = useRouter()

const selectedInfomation = ref(0)
const optionInfo = [ 
  { id: 1, name: 'てすと１' }, 
  { id: 2, name: 'てすと２' }, 
  { id: 3, name: 'てすと３' } 
]
const cardNumber = ref()
const expirationDate = ref()
const securityCode = ref()
const cardholderName = ref()

const confirm = () => {
  alert("test")
  router.push('/payment-method-confirm')
}

</script>

<template>
  <PerPageHeader />
  <div>
    <h2>クレジットカード情報入力</h2>
    <p>ここにクレカimage</p>
  </div>

  <form @submit.prevent="confirm">
    <div>
      <label for="registed-infomation">登録済みカード情報選択</label>
      <select
        id="registed-infomation"
        v-model="selectedInfomation"
      >
        <option value="0">新規入力</option>
        <option
          v-for="option in optionInfo" 
          :value="option.id" 
          :key="option.id"
        >{{ option.name }}</option>
      </select>
    </div>
    <div>
      <label for="card-number">カード番号</label>
      <input
        id="card-number"
        type="text"
        placeholder="1234 5678 9012 3456"
        v-model="cardNumber" />
    </div>
    <div>
      <label for="expiration-date">有効期限</label>
      <input
        id="expiration-date"
        type="text"
        placeholder="MM/YY"
        v-model="expirationDate" />
    </div>
    <div>
      <label for="security-code">セキュリティコード</label>
      <input
        id="security-code"
        type="text"
        placeholder="123"
        v-model="securityCode" />
    </div>
    <div>
      <label for="cardholder-name">カード所有者の氏名</label>
      <input
        id="cardholder-name"
        type="text"
        placeholder="TARO TANAKA"
        v-model="cardholderName" />
    </div>
    <div>
      <button type="submit">依頼内容を確認する</button>
    </div>


  </form>

</template>

<style scoped>

</style>