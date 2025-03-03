import { ref } from 'vue'

export const isCopy = ref(false)

export function copy(text: string): void {
  if (navigator.clipboard) {
    // clipboard api 复制
    navigator.clipboard.writeText(text)
  }

  isCopy.value = true
  setTimeout(() => isCopy.value = false, 1000)
}
