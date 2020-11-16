<template>
  <div>
    <!--  итерация по массиву сообщений   -->
    <div class="message" v-for="(message, idx) in messages" :key="idx">
      <p>id: {{ idx + 1 }}</p>
      <p>text message: {{ message.message }}</p>
      <p v-if="message.createdDate === null">
        date added message:
        {{ new Date().toISOString().substr(0, 10) + ' ' + new Date().toTimeString().substr(0, 8) }}
      </p>
      <p v-else>date added message: {{ message.createdDate }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "ListMessages",
  props: ['messages']
}
</script>

<style scoped>
.message {
  border: 1px solid #ccc;
  margin-top: 1em;
  margin-left: 10em;
  margin-right: 10em;
  padding: 5px;
}
</style>