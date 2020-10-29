<template>
  <div>
    <MessageForm/>
    <Loader v-if="loading"/>
    <ListMessages v-else-if="allMessage.length"
                  v-bind:messages="allMessage"/>

    <p v-else>No messages</p>
  </div>
</template>

<script>

import MessageForm from "@/components/MessageForm";
import Loader from "@/components/Loader";
import ListMessages from "@/components/ListMessages";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Message',
  components: { MessageForm, Loader, ListMessages },
  comments: {
    MessageForm
  },
  data() {
    return {
      messages: [],
      loading: true
    }
  },
  computed: mapGetters(['allMessage']),
  methods: mapActions(['fetchMessage']),
  async mounted() {
    await this.fetchMessage()
      this.loading = false;
  },

}
</script>
<style scoped>
p {
  margin: 4em;
}


</style>
