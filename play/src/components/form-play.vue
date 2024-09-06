<template>
  <div>
    <sp-form
      ref="form"
      :model="state"
      :rules="{
        password: {
          required: true,
          message: '请输入密码'
        }
      }"
    >
      <sp-form-item
        prop="username"
        label="用户名-prop"
        :rules="[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 6,
            max: 12,
            message: '用户名长度在6-12之间',
            trigger: 'blur'
          }
        ]"
      >
        <template #label>
          <span>用户名-slot</span>
        </template>
        <template #default>
          <sp-input
            placeholder="请输入用户名"
            v-model="state.username"
          ></sp-input>
        </template>
      </sp-form-item>
      <sp-form-item
        prop="password"
        label="密码-prop"
        :rules="[{ min: 6, max: 12, message: '密码要6-12为', trigger: 'blur' }]"
      >
        <sp-input
          placeholder="请输入密码"
          v-model="state.password"
          type="password"
          show-password
        ></sp-input>
      </sp-form-item>
      <sp-form-item>
        <sp-button @click="btn">登录</sp-button>
      </sp-form-item>
    </sp-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
const state = reactive({ username: '', password: '' });

const form = ref();
const btn = () => {
  form.value.validate((valid, errors) => {
    console.log('valid', valid);
    console.log('errors', errors);
  });
};
</script>

<style scoped></style>
