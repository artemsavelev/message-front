<template>
  <v-app-bar app color="primary" dark dense flat>
    <v-toolbar-title>Messages</v-toolbar-title>
    <v-spacer ></v-spacer>
    <MessageForm/>
  </v-app-bar>
</template>


<script>
import MessageForm from "@/components/MessageForm";

export default {
name: "NavBar",
  components: {MessageForm},
  data: () => ({

  }),
  methods: {
    message() {
      this.$router.push('/')
    },
    about() {
      this.$router.push('/about')
    }
  }
}
</script>

<style scoped>

</style>