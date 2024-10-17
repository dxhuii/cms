<script lang="ts" setup>
useHead({
  title: '简易百度图床 | 图片上传'
})

const imgArr = ref([
  { name: '风景', url: 'https://imgsrc.baidu.com/forum/pic/item/b151f8198618367ad8318fef68738bd4b31ce54c.jpg' },
  { name: '猫', url: 'https://imgsrc.baidu.com/forum/pic/item/37d12f2eb9389b5036a51060c335e5dde7116eae.png' },
  { name: '动漫', url: 'https://imgsrc.baidu.com/forum/pic/item/30adcbef76094b36c6c7ebdfe5cc7cd98d109daf.png' }
])
</script>

<template>
  <main flex="~ col" mx-auto mt4 max-w-7xl w-full rounded bg-gray-1 p4>
    <h1 text-2xl text-red-6 font-bold>
      百度图床上传必看
    </h1>
    <p my2>
      请先到百度 <a href="https://www.baidu.com/" text-blue-6 target="_blank" rel="noopener noreferrer">https://www.baidu.com/</a> 登录账号（已登录的请忽略），再上传图片；部分浏览器 可以直接解析链接，但那个旧链接已经被百度和谐，所以需要手动提取并补全；
    </p>
    <h2 text-lg font-bold>
      例如
    </h2>
    <h3 my2>
      返回内容
    </h3>
    <pre rounded bg-white p2>
{
  "err_no": 0,
  "err_msg": "",
  "data": {
    ...
    "pic_id_encode": "09fa513d269759ee5e75dfeff4fb43166d22dfe9",
    ...
  }
}
    </pre>
    <p my2>
      然后补全链接最后得到 https://imgsrc.baidu.com/forum/pic/item/<b text-red-6>pic_id_encode</b>.jpg/.png/.gif(上传时的图片后缀) 就是图片链接了。
    </p>
    <h2 my2 text-2xl text-red-6 font-bold>
      开始上传
    </h2>
    <p my2>
      点击下面的浏览文件，开始上传吧。
    </p>
    <form my2 rounded bg-white p2 enctype="multipart/form-data" target="_blank" action="https://sp0.baidu.com/6_R1fD_bAAd3otqbppnN2DJv/Pic/upload?pid=super&app=skin&l&logid=3915152959" method="post">
      <input type="file" name="file">
      <button type="submit" border border-base rounded bg-gray-2 px2>
        点击上传
      </button>
    </form>
    <h2 my2>
      示例图片
    </h2>
    <div my2>
      <div v-for="item in imgArr" :key="item.url" mb2>
        <img mb2 :src="item.url" w-80 alt="">{{ item.name }} <a text-blue-6 href="item.url">{{ item.url }}</a>
      </div>
    </div>
  </main>
</template>
