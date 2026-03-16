---
title: 流放之路装备词条翻译工具
description: 流放之路装备词条中译英工具
---

<script setup>
import PoeTranslator from '../components/poe-translator.vue'
import { appName } from '../constants'
</script>

# 流放之路装备词条翻译工具

## 翻译

<PoeTranslator />

## 使用说明

1. 在左侧输入框中粘贴流放之路装备的中文词条
2. 点击「翻译」按钮
3. 右侧将显示翻译后的英文词条
4. 点击「复制」按钮可将译文复制到剪贴板

## 示例

**输入（中文）：**
```
物品类别: 腰带
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
忆境物品
```

**输出（英文）：**
```
Item Class: Belt
Rarity: Rare
Galeforce Binding
Elder Silk Belt
--------
Quality (Attribute Modifiers): +20% (augmented)
--------
Requirements:
Level: 66
--------
Item Level: 100
--------
Hits against enemies you have feared have 50% increased spell critical strike chance (enchant)
--------
18% increased Strength (implicit)
--------
+99 to maximum Life
+68 to maximum Mana
20% reduced Flask Charges used
33% increased Flask Effect Duration
16% increased Cooldown Recovery Rate
17% increased Damage (crafted)
--------
Elder Item
```