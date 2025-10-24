<template>
  <div class="p-4 bmi-calculator dark:bg-gray-900 transition-colors duration-300">
    <!-- 结果区域和引导区域的包装容器 -->
    <div class="relative mb-6" style="min-height: 260px;">
      <!-- 结果展示区域 -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-500 absolute top-0 left-0 right-0 w-full overflow-hidden"
        :class="{ 'scale-100 opacity-100 z-10': bmi, 'scale-95 opacity-0 z-0': !bmi }">
        <!-- 装饰元素 -->
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-green-100 dark:bg-green-900/30 rounded-full opacity-50">
        </div>
        <div class="absolute -left-10 -bottom-10 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-50">
        </div>

        <!-- BMI值 -->
        <div class="flex items-center justify-between mb-6 relative z-10">
          <div class="text-gray-600 dark:text-gray-300 font-medium">BMI值</div>
          <div class="text-3xl font-bold text-green-500 dark:text-green-400">
            <span class="inline-block transform transition-all duration-500"
              :class="{ 'translate-y-0 opacity-100': bmi, 'translate-y-4 opacity-0': !bmi }">
              {{ bmi }}
            </span>
          </div>
        </div>

        <!-- 身体状况 -->
        <div class="flex items-center justify-between mb-6 relative z-10">
          <div class="text-gray-600 dark:text-gray-300">身体状况</div>
          <div class="text-lg font-medium" :class="statusColorClass">
            <span class="inline-block transform transition-all duration-500 delay-100"
              :class="{ 'translate-y-0 opacity-100': status, 'translate-y-4 opacity-0': !status }">
              {{ status }}
            </span>
          </div>
        </div>

        <!-- 建议体重 -->
        <div class="flex items-center justify-between relative z-10">
          <div class="text-gray-600 dark:text-gray-300">建议体重</div>
          <div class="text-lg font-medium text-teal-600 dark:text-teal-400">
            <span class="inline-block transform transition-all duration-500 delay-200"
              :class="{ 'translate-y-0 opacity-100': suggest, 'translate-y-4 opacity-0': !suggest }">
              {{ suggest }} kg
            </span>
          </div>
        </div>

        <!-- 进度条 -->
        <div class="mt-6 relative z-10" v-if="bmi">
          <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div class="h-full transition-all duration-1000 ease-out" :class="progressColorClass"
              :style="{ width: progressWidth }"></div>
          </div>
          <div class="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
            <span>18.5</span>
            <span>24</span>
            <span>27</span>
            <span>30</span>
            <span>35</span>
          </div>
        </div>
      </div>

      <!-- 默认引导区域 -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-500 absolute top-0 left-0 right-0 w-full overflow-hidden"
        :class="{ 'scale-100 opacity-100 z-10': !bmi, 'scale-95 opacity-0 z-0': bmi }">
        <!-- 装饰元素 -->
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-50"></div>
        <div class="absolute -left-10 -bottom-10 w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full opacity-50">
        </div>

        <div class="flex flex-col items-center justify-center text-center py-2 relative z-10">
          <div class="w-16 h-16 text-green-500 dark:text-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
              <path d="M11 11h2v6h-2zm0-4h2v2h-2z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold !mt-0 text-gray-800 dark:text-white mb-3">BMI 健康指数</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">输入您的身高和体重，计算您的身体质量指数</p>
          <div class="flex flex-wrap justify-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <div class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">体重过轻 &lt; 18.5</div>
            <div class="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">体重正常 18.5-24</div>
            <div class="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 rounded-full">过重 24-27</div>
            <div class="px-3 py-1 bg-red-100 dark:bg-red-900/30 rounded-full">肥胖 &gt; 27</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 输入表单 -->
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative overflow-hidden">
      <!-- 装饰元素 -->
      <div class="absolute -left-6 -top-6 w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full opacity-50"></div>

      <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-6 relative z-10">BMI计算器</h2>

      <form @submit.prevent="formSubmit" class="space-y-6 relative z-10">
        <!-- 身高输入 -->
        <div class="relative group">
          <label class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">身高</label>
          <div class="flex items-center">
            <input v-model="height" type="number"
              class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent outline-none transition-all duration-300 dark:text-white"
              placeholder="请输入身高" min="50" max="250" />
            <div class="ml-2 text-gray-500 dark:text-gray-400 font-medium">cm</div>
          </div>
        </div>

        <!-- 体重输入 -->
        <div class="relative group">
          <label class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">体重</label>
          <div class="flex items-center">
            <input v-model="weight" type="number"
              class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent outline-none transition-all duration-300 dark:text-white"
              placeholder="请输入体重" min="10" max="300" step="0.1" />
            <div class="ml-2 text-gray-500 dark:text-gray-400 font-medium">kg</div>
          </div>
        </div>

        <!-- 提交按钮 -->
        <button type="submit"
          class="w-full bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
          :disabled="!height || !weight" :class="{ 'opacity-70 cursor-not-allowed': !height || !weight }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd" />
          </svg>
          开始计算
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: '',
      weight: '',
      bmi: '',
      status: '',
      suggest: ''
    }
  },
  computed: {
    statusColorClass() {
      if (!this.status) return '';

      const statusMap = {
        '体重过轻': 'text-yellow-500 dark:text-yellow-400',
        '体重正常': 'text-green-500 dark:text-green-400',
        '过重': 'text-orange-500 dark:text-orange-400',
        '轻度肥胖': 'text-red-400 dark:text-red-300',
        '中度肥胖': 'text-red-500 dark:text-red-400',
        '重度肥胖': 'text-red-600 dark:text-red-500'
      };

      return statusMap[this.status] || 'text-gray-600 dark:text-gray-300';
    },
    progressColorClass() {
      if (!this.bmi) return '';

      if (this.bmi < 18.5) return 'bg-yellow-400';
      if (this.bmi < 24) return 'bg-green-400';
      if (this.bmi < 27) return 'bg-orange-400';
      if (this.bmi < 30) return 'bg-red-400';
      if (this.bmi < 35) return 'bg-red-500';
      return 'bg-red-600';
    },
    progressWidth() {
      if (!this.bmi) return '0%';

      // 设置进度条的最小和最大值
      const min = 15;
      const max = 40;

      // 计算百分比位置（限制在0-100%之间）
      let percentage = ((this.bmi - min) / (max - min)) * 100;
      percentage = Math.max(0, Math.min(100, percentage));

      return `${percentage}%`;
    }
  },
  methods: {
    formatNumber(number) {
      return Math.round(number * 100) / 100;
    },
    formSubmit() {
      if (!this.height || !this.weight) return;

      const height = parseFloat(this.height);
      const weight = parseFloat(this.weight);

      if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('请输入有效的身高和体重');
        return;
      }

      const bmi = this.formatNumber(weight / Math.pow(height / 100, 2));
      this.bmi = bmi;
      this.suggest = this.formatNumber(Math.pow(height / 100, 2) * 22) + '';

      const status = ['体重过轻', '体重正常', '过重', '轻度肥胖', '中度肥胖', '重度肥胖'];
      let i = 0;

      if (bmi < 18.5) {
        i = 0;
      } else if (bmi >= 18.5 && bmi < 24) {
        i = 1;
      } else if (bmi >= 24 && bmi < 27) {
        i = 2;
      } else if (bmi >= 27 && bmi < 30) {
        i = 3;
      } else if (bmi >= 30 && bmi < 35) {
        i = 4;
      } else if (bmi >= 35) {
        i = 5;
      }

      this.status = status[i];
    }
  }
}
</script>

<style scoped>
.bmi-calculator input::-webkit-outer-spin-button,
.bmi-calculator input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.bmi-calculator input[type=number] {
  -moz-appearance: textfield;
}
</style>
