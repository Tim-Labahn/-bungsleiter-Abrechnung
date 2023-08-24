<template>
  <div v-if="route === 'home'">tst</div>
  <Form v-else></Form>
</template>
<script lang="ts" setup>
const route = ref('homfe');
import { ref } from 'vue';
import Form from './components/Form.vue';
</script>
