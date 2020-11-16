<template>
  <div>
    <MessageForm/>
    <!--  лоадер, появляется при ожидании данных  -->
    <v-progress-circular
        v-if="loading"
        :size="70"
        :width="7"
        color="primary"
        indeterminate
        class="ma-16">
    </v-progress-circular>
    <ListMessages v-else-if="allMessage.length"
                  v-bind:messages="allMessage"/>

    <p v-else class="ma-16">No messages</p>

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
  // получаем данные после отображения всех представлений
  mounted() {
    this.fetchMessage().then(() => {
      this.loading = false
    })
  },

}
</script>
<style scoped>



</style>
