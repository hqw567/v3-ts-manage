<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

interface IProps {
  data: { title: string; content: string }
}
const props = defineProps<IProps>()

function usePropsData() {
  return {
    title: shallowRef(props.data.title),
    content: shallowRef(props.data.content),
  }
}

const { title, content } = usePropsData()

// refs
// const input = ref(title)
// const valueHtml = ref(content)

const editData = ref({
  title: title.value,
  content: content.value,
})

defineExpose({
  editData,
})

const editorRef = shallowRef()

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

const emit = defineEmits(['onContent'])

const handleSave = () => {
  emit('onContent', editData.value)
}
</script>

<template>
  <div class="mt-6 space-y-6 pl-4">
    <div class="flex items-center">
      <span class="mr-4 text-sm"> 标题 </span>
      <div class="w-80">
        <el-input v-model="editData.title" placeholder="请输入标题" />
      </div>
    </div>
    <div>
      <span>
        <span class="mr-4 text-sm"> 内容 </span>
        <div class="w-full pt-4">
          <div class="overflow-hidden rounded border border-stone-200">
            <Toolbar
              class="border-b border-stone-200"
              :editor="editorRef"
              :defaultConfig="toolbarConfig"
              mode="simple"
            />
            <div class="h-[450px]">
              <Editor
                v-model="editData.content"
                :defaultConfig="editorConfig"
                mode="simple"
                @onCreated="handleCreated"
              />
            </div>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
