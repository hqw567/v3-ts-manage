<script setup lang="ts">
import loginLeftJPG from '@/assets/images/login/login-left.jpg'
import { isUrl } from '@/utils/is'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
console.log('r :>> ', route.query)
let redirectUrl = route.query?.redirect || ''
if (typeof redirectUrl === 'string') {
  redirectUrl = decodeURIComponent(redirectUrl)
}

const nextUrl = ref('/')
if (redirectUrl && isUrl(redirectUrl as string)) {
  nextUrl.value = redirectUrl as string
}
const handleLogin = () => {
  router.replace(nextUrl.value)
}
const handleRetrievePassword = () => {
  // router.push('/retrieve-password')
}
</script>

<template>
  <section class="grid h-screen w-screen place-content-center">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <div
        class="mx-auto transform justify-center rounded-lg bg-white text-left align-bottom transition-all sm:w-full sm:max-w-2xl sm:align-middle"
      >
        <div class="mx-auto grid grid-cols-1 flex-wrap items-center justify-center rounded-xl shadow-xl lg:grid-cols-2">
          <div class="w-full px-6 py-3">
            <div>
              <div class="mt-3 text-left sm:mt-5">
                <div class="inline-flex w-full items-center">
                  <h3 class="text-lg font-bold leading-6 text-neutral-600 lg:text-5xl">登录</h3>
                </div>
                <div class="mt-4 text-base text-gray-500">
                  <p>赶快工作吧~</p>
                </div>
              </div>
            </div>

            <div class="mt-6 space-y-2">
              <div>
                <label for="account" class="sr-only">账号</label>
                <input
                  type="text"
                  name="account"
                  id="account"
                  class="block w-full transform rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="输入你的账号"
                />
              </div>
              <div>
                <label for="password" class="sr-only">密码</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  class="block w-full transform rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="输入你的密码"
                />
              </div>
              <div class="mt-4 flex flex-col lg:space-y-2">
                <button
                  @click="handleLogin"
                  type="button"
                  class="flex w-full transform items-center justify-center rounded-xl bg-primary-600 px-10 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  登录
                </button>
                <a
                  @click="handleRetrievePassword"
                  href="#"
                  type="button"
                  class="inline-flex justify-center py-4 text-base font-medium text-gray-500 hover:text-neutral-600 focus:text-primary-600 focus:outline-none sm:text-sm"
                >
                  忘记密码?
                </a>
              </div>
            </div>
          </div>
          <div class="order-first hidden w-full lg:block">
            <img class="h-full rounded-l-lg bg-cover object-cover" :src="loginLeftJPG" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
