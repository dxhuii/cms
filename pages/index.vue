<template>
  <div>
    <h1 text="3xl">
      内容清单
    </h1>
    <div mt-4 text="base gray-500">
      收集一些有用的内容
    </div>
    <h2 class="flex items-center mt-4">
      <span flex-1>项目目录</span>
      <div class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer">
        <a target="_blank" href="https://github.com/dxhuii">
          <div class="m-2 i-ri-arrow-right-up-line" />
        </a>
      </div>
    </h2>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 mt-4">
      <a
        class="px-4 py-3 rounded-md bg-gray-100 transition-colors decoration-none hover:bg-gray-200 dark:bg-gray-50/10 dark:hover:bg-gray-50/20"
        target="_blank" href="https://quickref.cms.im/"
      >
        <div class="flex h-full items-center justify-center">
          <div flex-1>
            <div font-medium leading-relaxed>备忘清单</div>
            <div op-50 font-normal text-sm>开发人员分享快速参考备忘清单</div>
          </div>
          <div ml-4 text-4xl op-75>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em">
              <path d="m21.66 10.44-.98 4.18c-.84 3.61-2.5 5.07-5.62 4.77-.5-.04-1.04-.13-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19c.2-.85.44-1.59.74-2.2 1.17-2.42 3.16-3.07 6.5-2.28l1.67.39c4.19.98 5.47 3.05 4.49 7.23Z" fill="#c9d1d9" />
              <path d="M15.06 19.39c-.62.42-1.4.77-2.35 1.08l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76L2.5 13.28c-1.28-3.97-.22-6.07 3.75-7.35l1.58-.52c.41-.13.8-.24 1.17-.31-.3.61-.54 1.35-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4c.58.14 1.12.23 1.62.27Zm2.43-8.88c-.06 0-.12-.01-.19-.02l-4.85-1.23a.75.75 0 0 1 .37-1.45l4.85 1.23a.748.748 0 0 1-.18 1.47Z" fill="#228e6c" />
              <path d="M14.56 13.89c-.06 0-.12-.01-.19-.02l-2.91-.74a.75.75 0 0 1 .37-1.45l2.91.74c.4.1.64.51.54.91-.08.34-.38.56-.72.56Z" fill="#228e6c" />
            </svg>
          </div>
        </div>
      </a>
      <a
        class="px-4 py-3 rounded-md bg-gray-100 transition-colors decoration-none hover:bg-gray-200 dark:bg-gray-50/10 dark:hover:bg-gray-50/20"
        target="_blank" href="https://github.com/dxhuii/delWeibo"
      >
        <div class="flex h-full items-center justify-center">
          <div flex-1>
            <div font-medium leading-relaxed>批量删除微博博文</div>
            <div op-50 font-normal text-sm>批量删除新浪微博的小工具</div>
          </div>
          <div ml-4 text-4xl op-75>
            <div class="i-twemoji-delivery-truck" />
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
