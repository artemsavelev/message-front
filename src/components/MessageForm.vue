<template>
  <div>
    <div class="one">
      <p>Добавление одной записи</p>
      <input class="input-message" v-model="message" placeholder="Введите сообщение"/>
      <button class="button-message" v-on:click="save">
        Сохранить
      </button>
    </div>
    <br/>
    <div class="array">
      <p>Добавление массива соосбщений</p>
      <p>1. Введите необходимое количество сообщений</p>
      <p>2. Введите шаблон сообщений</p>
      <input class="input-message input-message2" v-model="max" placeholder="Введите количество"/>

      <input class="input-message" v-model="messageTemp" placeholder="Шаблон сообщений"/>
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
    ...mapActions(['addMessage', 'addArrayMessage']),
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
      this.addArrayMessage(array)
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
  border: 1px solid blue;
}
button:focus {
  outline: none;
}
button:hover {
  background-color: #64B5F6;
}

.one {
  border: 1px dashed gray;
  margin-right: 10em;
  margin-left: 10em;
  padding-bottom: 1em;
  padding-top: 1em;
}
.array {
  border: 1px dashed gray;
  margin-right: 10em;
  margin-left: 10em;
  padding-bottom: 1em;
  padding-top: 1em;
}

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
  /*width: 400px;*/
}

</style>