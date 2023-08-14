<template>
  <el-form :model="formData" label-width="120px" ref="formRef">
    <template v-for="i in formFields" :key="i.name">
      <el-form-item :label="i.label" :prop="i.name">
        <template v-if="i.type === 'input'">
          <el-input v-model="formData[i.name]" :placeholder="i.placeholder ? i.placeholder : `请输入${i.label}`" />
        </template>
        <template v-if="i.type === 'textarea'">
          <el-input
            type="textarea"
            :rows="4"
            v-model="formData[i.name]"
            :placeholder="i.placeholder ? i.placeholder : `请输入${i.label}`"
          />
        </template>
        <template v-if="i.type === 'switch'">
          <el-switch v-model="formData[i.name]" />
        </template>
      </el-form-item>
    </template>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">保存</el-button>
      <el-button @click="onReset(formRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'

const props = defineProps<{
  formFields: IFormFields[]
}>()

export interface IFormFields {
  label: string
  name: string
  placeholder?: string
  value?: string | boolean
  type: string
}

const formRef = ref<FormInstance>()
// const formFields: IFormFields[] = [
//   {
//     label: '支付宝AppId',
//     name: 'alipay_appid',
//     placeholder: '请输入支付宝AppId',
//     value: '',
//     type: 'input',
//   },
//   {
//     name: 'alipay_public_key', // '支付宝公钥
//     label: '支付宝公钥',
//     value: '',
//     type: 'input',
//   },
//   {
//     name: 'alipay_private_key',
//     label: '支付宝私钥',
//     value: '',
//     type: 'textarea',
//   },
//   {
//     name: 'alipay_partner_id',
//     label: '支付宝合作者ID',
//     value: '',
//     type: 'textarea',
//   },
//   {
//     name: 'enable',
//     label: '是否启用',
//     value: false,
//     type: 'switch',
//   },
// ]
const initialFormData: any[] = []
props.formFields.forEach((field: any) => {
  initialFormData[field.name] = field.value
})

const formData = reactive<any>(initialFormData)

const onSubmit = () => {
  console.log('submit!', formData)
}
const onReset = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
