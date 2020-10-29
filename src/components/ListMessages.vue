<template>
  <div>
    <div class="message" v-for="message in messages" :key="message.id">
      <p>id: {{ message.id }}</p>
      <p>text message: {{ message.message }}</p>
      <p>date added message: {{ message.createdDate }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "ListMessages",
  props: ['messages'],

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