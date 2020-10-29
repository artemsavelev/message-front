<template>
  <div>
    <div>
      <input class="input-message" v-model="message" placeholder="Введите сообщение"/>
      <button class="button-message" v-on:click="save">
        Сохранить
      </button>
    </div>
    <br/>
    <div>
      <p>Введите необходимое количество сообщений</p>
      <p></p>
      <input class="input-message" v-model="max" placeholder="Введите количество"/>
      <br/>
      <br/>
      <p>Введите шаблон сообщений</p>
      <input class="input-message" v-model="messageTemp" placeholder="Шаблон сообщений"/>
      <br/>
      <button class="button-message button-message-width" v-on:click="saveAll">
        Сохранение массива сообщений
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {addHandler} from "@/utils/ws";

export default {
  name: "MessageForm",
  data() {
    return {
      message: '',
      messageTemp: '',
      max: 0
    }
  },

  methods: {
    ...mapActions(['addMessage', 'addAllMessage']),
    save() {
      //
      const message = {
        message: this.message,
      };
      this.addMessage(message);
      addHandler(message)
      this.message = '';
      // console.log('MessageForm: ' + message.message)

    },
    saveAll() {
      let array = [];

      for (let i = 0; i < this.max; i++) {
        array.push({message: this.messageTemp + ' ' + Math.floor(Math.random() * i)})
      }
      // array.forEach(el => console.log(el))
      console.log(array.length)
      this.addAllMessage(array)
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

.input-message2 {
  width: 150px;
}

.input-message:before {
  border: 1px solid red;
}
.button-message {
  margin: 5px;
  padding: 10px;
  border: 1px solid black;

}

.button-message-width {
  width: 400px;
}

</style>