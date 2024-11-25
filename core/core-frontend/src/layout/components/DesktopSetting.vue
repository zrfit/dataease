<script lang="ts" setup>
import iconSetting from '@/assets/svg/icon-setting.svg'
import { useRouter } from 'vue-router'
import { useAppearanceStoreWithOut } from '@/store/modules/appearance'
import { computed } from 'vue'

const appearanceStore = useAppearanceStoreWithOut()
const navigateBg = computed(() => appearanceStore.getNavigateBg)
const { push, resolve } = useRouter()
const redirectUser = () => {
  const sysMenu = resolve('/sys-setting')
  const kidPath = sysMenu.matched[0].children[0].path
  push(`${sysMenu.path}/${kidPath}`)
}
</script>

<template>
  <el-tooltip class="box-item" effect="dark" content="系统设置" placement="top">
    <div
      class="sys-setting in-iframe-setting"
      :class="{
        'is-light-setting': navigateBg && navigateBg === 'light'
      }"
    >
      <el-icon @click="redirectUser">
        <Icon class="icon-setting" name="icon-setting"
          ><iconSetting class="svg-icon icon-setting"
        /></Icon>
      </el-icon>
    </div>
  </el-tooltip>
</template>

<style lang="less" scoped>
.sys-setting {
  margin: 0 10px 0 0;
  padding: 5px;
  height: 28px;
  width: 28px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background-color: #1e2738;
  }
}
.in-iframe-setting {
  margin-left: 10px !important;
}
.is-light-setting {
  &:hover {
    background-color: #1f23291a !important;
  }
}
</style>
