<script setup lang="ts">
const list = [{
  title: '备忘清单',
  href: 'https://quickref.cms.im/',
  icon: 'i-twemoji:blue-book',
  desc: '开发人员分享快速参考备忘清单',
  target: '_blank'
},
{
  title: 'JS框架对比',
  href: 'https://component-party.cms.im/',
  icon: 'i-twemoji:party-popper',
  desc: 'JavaScript框架语法特性对比',
  target: '_blank'
},
{
  title: 'IT工具箱',
  href: 'https://tools.cms.im/',
  icon: 'i-twemoji:toolbox',
  desc: '助力开发人员和 IT 工作者',
  target: '_blank'
},
{
  title: 'NPM下载统计',
  href: 'https://npm-stat.link/',
  icon: 'i-twemoji-chart-increasing',
  desc: '查看使用包的各个版本的NPM下载统计',
  target: '_blank'
},
{
  title: 'RGB转十六进制',
  href: '/rgb2hex',
  icon: 'i-twemoji:currency-exchange',
  desc: 'RGB颜色值与十六进制颜色码转换工具'
},
{
  title: '批量删除微博博文',
  href: 'https://github.com/dxhuii/delWeibo',
  icon: 'i-twemoji-delivery-truck',
  desc: '批量删除新浪微博的小工具',
  target: '_blank'
},
{
  title: 'Hello Nav!',
  href: 'https://hello-nav.cms.im/',
  icon: 'https://hello-nav.cms.im/favicon/favicon-192.png',
  desc: '面向开发人员的导航',
  target: '_blank'
},
{
  title: '简繁转换',
  href: '/simple2traditional',
  icon: 'i-twemoji:cyclone',
  desc: '在线繁体字转换工具'
},
{
  title: 'GitHub 关注排行榜',
  href: 'https://github-rank.cms.im/',
  icon: 'https://github.githubassets.com/favicon.ico',
  desc: 'GitHub 全球用户的关注排行榜',
  target: '_blank'
},
{
  title: '程序代码图片',
  href: 'https://code-image.cms.im',
  icon: 'https://code-image.cms.im/favicon.ico',
  desc: '可以把程序代码生成图片的网站',
  target: '_blank'
}
]
</script>

<template>
  <div>
    <div flex="~ col" items-center>
      <h1 text="2xl">
        内容清单 <sup text="base" bg-card border-base top--3 border rounded px1 text-3 tracking-0.5 style="">CMS.IM</sup>
      </h1>
      <div mt-4 text="base gray-500">
        收集一些有用的内容
      </div>
    </div>
    <h2 class="mt-4 flex">
      项目目录
    </h2>
    <div class="grid grid-cols-1 mt-4 gap-4 sm:grid-cols-2 md:sm:grid-cols-4">
      <NuxtLink
        v-for="item in list" :key="item.href"
        :to="item.href"
        class="rounded-md bg-gray-100 px-4 py-3 decoration-none transition-colors dark:bg-gray-50/10 hover:bg-gray-200 dark:hover:bg-gray-50/20"
        :target="item.target"
      >
        <div class="h-full flex items-center justify-center">
          <div flex-1>
            <div font-medium leading-relaxed>
              {{ item.title }}
            </div>
            <div text-sm font-normal op-50>
              {{ item.desc }}
            </div>
          </div>
          <div ml-4 text-4xl op-75>
            <img v-if="item.icon.includes('https')" w10 h10 :src="item.icon" :alt="item.title">
            <div v-else :class="item.icon" />
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
