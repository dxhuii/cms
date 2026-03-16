<script setup>
import { TranslatorFactory } from "cn-poe-utils/translator/zh2en";
import { ref, watch } from "vue";

const factory = new TranslatorFactory();
const textTranslator = factory.getTextTranslator();


const originalText = ref("");
const translatedText = ref("");
const copySuccess = ref(false);
const hasUserInput = ref(false);


function translate() {
  translatedText.value = textTranslator.trans(originalText.value);
}


function copyToClipboard() {
  if (translatedText.value) {
    navigator.clipboard.writeText(translatedText.value);
    copySuccess.value = true;
    setTimeout(() => {
      copySuccess.value = false;
    }, 2000);
  }
}


// 监听输入变化
watch(originalText, (newValue) => {
  if (newValue && !hasUserInput.value) {
    hasUserInput.value = true;
  }
});


// 初始化示例文本
const exampleText = `物品类别: 腰带
稀 有 度: 稀有
劲风 束灵
忆境 饰布腰带
--------
品质（属性词缀）: +20% (augmented)
--------
需求:
等级: 66
--------
物品等级: 100
--------
击中被你恐惧的敌人时，该次击中的法术暴击率提高 50% (enchant)
--------
力量提高 18% (implicit)
--------
+99 最大生命
+68 最大魔力
药剂充能使用降低 20%
药剂效果的持续时间延长 33%
冷却回复速度加快 16%
伤害提高 17% (crafted)
--------
忆境物品`;


// 初始化翻译 - 默认不加载示例
// originalText.value = exampleText;
// translate();
</script>

<template>
  <main
    flex="~ col"
    items-center
    justify-center
    bg-gradient-to-b
    from-gray-50
    to-gray-100
    dark:from-gray-800
    dark:to-gray-900
    p-6
    rounded-xl
    shadow-sm
    max-w-4xl
    mx-auto
  >
    <div text="2xl gray-800 dark:gray-100" font-bold mb-6>流放之路装备词条翻译工具</div>

    <div w-full grid grid-cols-1 md:grid-cols-2 gap-6>
      <!-- 原文部分 -->
      <div w-full bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm>
        <div flex items-center justify-between mb-4>
          <h3 text="lg gray-700 dark:gray-200" font-medium>原文（中文）</h3>
          <button
            v-if="originalText"
            bg-gray-200
            hover:bg-gray-300
            text-gray-800
            dark:bg-gray-700
            dark:hover:bg-gray-600
            dark:text-gray-200
            px-3
            py-1
            rounded
            text-sm
            transition-colors
            @click="
              originalText = '';
              translatedText = '';
              hasUserInput = false;
            "
          >
            清空
          </button>
        </div>
        <textarea
          v-model="originalText"
          class="w-full h-80 rounded border border-gray-400 bg-gray-50 text-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 px-3 py-2 focus:(ring-2 ring-blue-300 outline-none) resize-y"
          placeholder="请输入流放之路装备词条，或使用快捷键 Ctrl+V 粘贴..."
        ></textarea>
        <div mt-4 flex justify-end gap-3>
          <button
            bg-gray-200
            hover:bg-gray-300
            text-gray-800
            dark:bg-gray-700
            dark:hover:bg-gray-600
            dark:text-gray-200
            px-4
            py-2
            rounded
            transition-colors
            @click="
              originalText = exampleText;
              hasUserInput = false;
              translate();
            "
          >
            加载示例
          </button>
          <button
            bg-blue-500
            hover:bg-blue-600
            text-white
            px-4
            py-2
            rounded
            transition-colors
            @click="translate"
          >
            翻译
          </button>
        </div>
      </div>

      <!-- 译文部分 -->
      <div w-full bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm>
        <div flex items-center justify-between mb-4>
          <h3 text="lg gray-700 dark:gray-200" font-medium>译文（英文）</h3>
          <button
            v-if="translatedText"
            bg-gray-200
            hover:bg-gray-300
            text-gray-800
            dark:bg-gray-700
            dark:hover:bg-gray-600
            dark:text-gray-200
            px-3
            py-1
            rounded
            text-sm
            transition-colors
            flex
            items-center
            gap-1
            @click="copyToClipboard"
          >
            <span v-if="!copySuccess">复制</span>
            <span v-else>已复制</span>
          </button>
        </div>
        <textarea
          v-model="translatedText"
          class="w-full h-80 rounded border border-gray-400 bg-gray-50 text-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 px-3 py-2 focus:(ring-2 ring-blue-300 outline-none) resize-y"
          placeholder="翻译结果将显示在这里..."
          readonly
        ></textarea>
      </div>
    </div>

    <div mt-6 text-xs text="gray-500 dark:gray-400">
      提示：输入流放之路装备词条后点击翻译按钮，即可在右侧查看英文译文。点击复制按钮可复制译文到剪贴板。
    </div>
  </main>
</template>
