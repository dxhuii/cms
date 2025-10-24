import { ref } from "vue";

export const isCopy = ref(false);

export async function copy(text: string): Promise<void> {
  if (navigator.clipboard) {
    // clipboard api 复制
    await navigator.clipboard.writeText(text);
  }

  isCopy.value = true;
  setTimeout(() => (isCopy.value = false), 1000);
}
