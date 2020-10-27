<template>
  <div>
    <input class="input-message" v-model="message" placeholder="Дата завершения работ"/>


    <button class="button-message" v-on:click="save">
      Сохранить
    </button>

  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "MessageForm",
  data() {
    return {
      message: ''
    }
  },

  methods: {
    ...mapActions(['addMessage']),
    save() {
      const message = {
        message: this.message,
      };
      this.addMessage(message);
      this.message = '';
      //console.log(message)
    }
  }
}
</script>

<style scoped>
.input-message {
  margin: 5px;
  padding: 10px;
  width: 400px;
  border: 1px solid #ccc;
}

.button-message {
  margin: 5px;
  padding: 9px;
  border: 1px solid black;

}

</style>