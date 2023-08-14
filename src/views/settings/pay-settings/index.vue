<template>
  <div class="container-padding h-full bg-white">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="微信支付" name="wechat">
        <hForm :form-fields="formWechatFields" />
      </el-tab-pane>
      <el-tab-pane label="支付宝支付" name="alipay"><hForm :form-fields="formAlipayFields" /></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import hForm from './comps/h-form.vue'
import type { TabsPaneContext } from 'element-plus'
import type { IFormFields } from './comps/h-form.vue'

const activeName = ref('wechat')

const formWechatFields: IFormFields[] = [
  {
    label: 'AppId',
    name: 'wechat_appid',
    value: '',
    type: 'input',
  },
  {
    name: 'merchant_id',
    label: '商户号',
    value: '',
    type: 'input',
  },
  {
    name: 'platform_key',
    label: 'Ket（平台密钥）',
    value: '',
    type: 'input',
  },
  {
    name: 'certificate_serial_number',
    label: '证书序列号',
    value: '',
    type: 'input',
  },
  {
    name: 'wechat_public_key', // 公钥
    label: '公钥',
    value: '',
    type: 'input',
  },
  {
    name: 'wechat_private_key',
    label: '私钥',
    value: '',
    type: 'textarea',
  },
  {
    name: 'enable',
    label: '是否启用',
    value: false,
    type: 'switch',
  },
]
const formAlipayFields: IFormFields[] = [
  {
    label: '支付宝AppId',
    name: 'alipay_appid',
    placeholder: '请输入支付宝AppId',
    value: '',
    type: 'input',
  },
  {
    name: 'alipay_public_key', // '支付宝公钥
    label: '支付宝公钥',
    value: '',
    type: 'input',
  },
  {
    name: 'alipay_private_key',
    label: '支付宝私钥',
    value: '',
    type: 'textarea',
  },
  {
    name: 'alipay_partner_id',
    label: '支付宝合作者ID',
    value: '',
    type: 'textarea',
  },
  {
    name: 'enable',
    label: '是否启用',
    value: false,
    type: 'switch',
  },
]

const handleClick = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab, event)
}
</script>
<style lang="scss" scoped></style>
