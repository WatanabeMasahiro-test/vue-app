<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PerPageHeader from '@/components/PerPageHeader.vue'

const router = useRouter()

const courses = [ 
  { id: 1, name: 'てすと１' }, 
  { id: 2, name: 'てすと２' }, 
  { id: 3, name: 'てすと３' } 
]

const confirm = () => {
  console.log("test")
  router.push('/payment-method')
}

const courseOne = ref()
const courseSelect = (courseId: number) => {
  courseOne.value = courseId
  console.log(courseOne.value)
}

// 現在時刻の取得
const dateTime = new Date();
const nowdateTime = dateTime.getFullYear() + '-'
  + ('0' + (Number(dateTime.getMonth()) + 1)).slice(-2) + '-'
  + ('0' + dateTime.getDate()).slice(-2) + 'T'
  + ('0' + dateTime.getHours()).slice(-2) + ':' 
  + ('0' + dateTime.getMinutes()).slice(-2)

</script>

<template>
  <PerPageHeader />
  <form @submit.prevent="confirm">
    <div>
      <label>コース・金額</label>
      <input
        type="hidden"
        :value="courseOne" />
      <div
        class="reservation-course"
        v-for="course in courses" 
        :value="course.id" 
        :key="course.id"
        @click="courseSelect(course.id)"
      >{{ course.name }}</div>
    </div>
    <div>
      <label for="reservation-datetime">日付選択</label>
      <input
        id="reservation-datetime"
        type="datetime-local"
        :value="nowdateTime" />
    </div>
    <div>
      <button type="submit">この内容で予約を行う</button>
    </div>
  </form>
</template>