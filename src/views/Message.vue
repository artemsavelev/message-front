<template>
  <div>
    <MessageForm/>
    <div class="message" v-for="message in allMessage" :key="message.id">
      <p>{{ message.id }}</p>
      <p>{{ message.message }}</p>
      <p>{{ message.createdDate }}</p>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'
import MessageForm from "@/components/MessageForm";

export default {
  name: 'Message',
  components: {MessageForm},
  comments: {
    MessageForm
  },
  computed: mapGetters(['allMessage']),
  methods: mapActions(['fetchMessage']),
  mounted() {
    this.fetchMessage();
  },
}
</script>
<style>

.message {
  border: 1px solid #ccc;
  margin-top: 1em;
  padding: 5px;
}

</style>
