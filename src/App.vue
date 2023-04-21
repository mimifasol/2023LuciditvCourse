

<template>
  <header>
  </header>
  <main>
    <Q1 v-show="selectedQuestionNo == 1" :answer-function="answerFunction_Q1" @go-to-next="goToNext" />
    <Q2 v-show="selectedQuestionNo == 2" :answer-function="answerFunction_Q2" @go-to-next="goToNext" />
    <Q3 v-show="selectedQuestionNo == 3" :answer-function="answerFunction_Q3" @go-to-next="goToNext" />
    <Q4 v-show="selectedQuestionNo == 4" :answer-function="answerFunction_Q4" @go-to-next="goToNext" />
    <Q5 v-show="selectedQuestionNo == 5" :answer-function="answerFunction_Q5" @go-to-next="goToNext" />
  </main>
</template>

<script setup lang="ts">

import { reactive, ref, computed, onMounted, watch } from 'vue'
import Q1 from '@/components/question/Q1.vue';
import Q2 from '@/components/question/Q2.vue';
import Q3 from '@/components/question/Q3.vue';
import Q4 from '@/components/question/Q4.vue';
import Q5 from '@/components/question/Q5.vue';

const selectedQuestionNo = ref<number>(1);

function answerFunction_Q1(inputArray: Array<string>) {
  let name = inputArray[1];
  let age = inputArray[0];
  
  //第一題請填這裡

  return ``;
}

function answerFunction_Q2(inputArray: Array<string>) {
  let endNumber: number = +inputArray[0];
  
  //第二題請填這裡

  return ``;
}

function answerFunction_Q3(inputArray: Array<string>) {
  let endNumber: number = +inputArray[0];
  
  //第三題請填這裡
  
  return ``;
}

function answerFunction_Q4(inputArray: Array<string>) {
  let friendHands: string = inputArray[0];

  //第四題請填這裡
  
  return ``;
}

function answerFunction_Q5(inputArray: Array<string>) {
  
  //第五題請填這裡

  return ``;
}

function goToNext() {
  if (selectedQuestionNo.value >= 5) {
    selectedQuestionNo.value = 1;
  } else {
    selectedQuestionNo.value++;
  }
}
</script>

<style scoped></style>
