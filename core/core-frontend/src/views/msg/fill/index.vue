<template>
  <p class="router-title">{{ t('data_fill.fill_in_the_task') }}</p>
  <el-tabs v-model="activeName">
    <el-tab-pane v-for="item in tabArray" :key="item.name" :label="item.label" :name="item.name" />
  </el-tabs>
  <div class="sys-setting-p setting-auto-h">
    <div class="container-sys-param"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
const { t } = useI18n()
const activeName = ref('toBeFilled')

const tabArray = ref([
  { label: t('v_query.to_be_filled'), name: 'toBeFilled' },
  { label: t('data_fill.form.status_1'), name: 'completed' }
])
</script>
<style lang="less">
.router-title {
  color: #1f2329;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: var(--de-custom_font, 'PingFang');
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}
.sys-setting-p {
  width: 100%;
  height: calc(100vh - 176px);
  box-sizing: border-box;
  margin-top: 12px;
}
.setting-auto-h {
  height: auto !important;
}

.container-sys-param {
  height: 100%;
  overflow: hidden;
  background: var(--ContentBG, #ffffff);
  border-radius: 4px;
}
</style>
