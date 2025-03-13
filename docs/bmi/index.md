---
title: BMI身体质量指数
description: 身体质量指数（英语：Body Mass Index，简称BMI）又称凯特莱指数（Quetelet index），简称体质指数，是由一个人的质量（体重）和身高计算出的一个数值。BMI的定义是体重除以身高的平方，以千克/平方米为单位表示，由质量（千克）和身高（米）得出：BMI=w/h^2，其中w为体重；h为身高。
---

<script setup>
import Bmi from '../components/bmi.vue'
import { appName } from '../constants'
</script>

# BMI身体质量指数

身体质量指数（英语：Body Mass Index，简称BMI）又称凯特莱指数（Quetelet index，/kɛtəˈleɪ/），简称体质指数，是由一个人的质量（体重）和身高计算出的一个数值。BMI的定义是体重除以身高的平方，以千克/平方米为单位表示，由质量（千克）和身高（米）得出：

$BMI = \frac{w}{h^2}$，其中w为体重；h为身高。

## 计算方法

<Bmi />

### 标准对照表

| 分类 | 身体质量指数(BMI)(kg/m2) | 腰围(cm) |
|------|--------------------------|----------|
| 体重过轻 | BMI ＜ 18.5 | - |
| 体重正常 | 18.5≦BMI＜24 | - |
| 体重超重 | 过重：24≦BMI＜27 | 男性：≧90公分 |
| 体重超重 | 轻度肥胖：27≦BMI＜30 | 女性：≧80公分 |
| 体重超重 | 中度肥胖：30≦BMI＜35 | |
| 体重超重 | 重度肥胖：BMI≧35 | |
