<script lang="ts" setup>
const numArr = ref<string[]>([])
const showAnswer = ref(true)

function randF(n: number = 100) {
  return Number.parseInt(String(Math.random() * n))
}

function plus(isMinus = true) {
  const n1 = randF()
  const n2 = randF(10)
  const n3 = randF(10)
  const lt0 = n2 > 0 && n1 > 0
  // 减乘
  if (isMinus && n1 - n2 * n3 > 0 && n3 > 0 && lt0)
    return `${n1} - ${n2} × ${n3} = ${n1 - n2 * n3}`

  // 加乘
  if (!isMinus && n3 > 0 && lt0)
    return `${n1} + ${n2} × ${n3} = ${n1 + n2 * n3}`
}

function minus(isMinus = true) {
  const n1 = randF()
  const n2 = randF(100)
  const n3 = randF(10)
  const int = n3 > 0 && n2 % n3 === 0 && n2 > 0 && n1 > 0 && n2 / n3 < 10
  // 减除
  if (int && n1 - n2 / n3 >= 0 && isMinus)
    return `${n1} - ${n2} ÷ ${n3} = ${n1 - n2 / n3}`

  // 加除
  if (!isMinus && int && n1 + n2 / n3 >= 0)
    return `${n1} + ${n2} ÷ ${n3} = ${n1 + n2 / n3}`
}

function create() {
  let i = 0
  numArr.value = []
  while (1) {
    const rand = Math.floor(Math.random() * 14)
    const result = [plus(), plus(false), minus(), minus(false), minus(), minus(false), minus(), minus(false), minus(), minus(false), minus(), minus(false), minus(), minus(false)][rand]
    console.log(rand, result)
    if (result) {
      i++
      numArr.value.push(result)
    }
    if (i >= 160)
      break
  }
}

function chunk(array: string[], size: number) {
  const chunkedArray = []

  for (let i = 0; i < array.length; i += size)
    chunkedArray.push(array.slice(i, i + size))

  return chunkedArray
}

definePageMeta({
  layout: false
})
</script>

<template>
  <div class="print" mb2 cursor-pointer pb2 text-center>
    <span mr2 @click="create">
      {{ numArr.length ? '重新生成' : '生成' }}
    </span>
    <span @click="showAnswer = !showAnswer">
      {{ showAnswer ? '隐藏答案' : '显示答案' }}
    </span>
  </div>
  <div v-for="(row, index) in chunk(numArr, 5)" :key="index" class="row">
    <div v-for="(item, itemIndex) in row" :key="itemIndex" class="col">
      {{ item.split('= ')[0] }} = <span v-if="showAnswer">{{ item.split('= ')[1] }}</span>
    </div>
  </div>
</template>

<style>
.row {
  display: flex;
  flex-direction: row;
}

.col {
  margin-top: 9px;
  flex: 1;
  text-align: center;
}
@media print {
  .print {
    visibility: hidden !important;
  }
}
</style>
