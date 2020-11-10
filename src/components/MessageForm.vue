<template>

  <v-dialog v-model="dialog" scrollable width="40%">

    <template v-slot:activator="{ on }" class="mt-10">
      <v-btn dark v-on="on" text tile>add message</v-btn>
    </template>
    <v-card>

      <v-card-title class="headline grey lighten-2">
        <span class="header-modal ml-3">Добавление сообщений</span>
      </v-card-title>

      <v-card-text>
        <v-container>

          <v-row>
            <v-col cols="12" sm="12" md="12">
              <p>1. Введите необходимое количество сообщений</p>
              <p>2. Введите шаблон сообщений</p>

                <v-text-field dense
                              v-model="max"
                              label="Количество сообщений">
                </v-text-field>
                <v-text-field dense
                              v-model="message"
                              label="Шаблон сообщений">
                </v-text-field>
            </v-col>
          </v-row>

        </v-container>
        <v-card-actions>
          <v-btn v-on:click="save" color="primary" class="mr-2" tile>Сохранение сообщений</v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-dialog>

</template>

<script>
import {mapActions} from "vuex";
import {sendMessage} from "@/utils/ws";

export default {
  name: "MessageForm",
  data() {
    return {
      dialog: false,
      id: Number,
      created_date: '',
      message: '',
      max: null,
    }
  },

  methods: {
    ...mapActions(['addMessage']),

    save() {

      if (this.max !== null || this.message !== '') {

        let array = []; // массив сообщений
        let size = 300; // размер подмассива

        for (let i = 0; i < this.max; i++) {
          array.push({
            id:  Math.floor(Math.random() * 1000),
            message: this.message + ' ' + Math.floor(Math.random() * 1000)
          })
        }

        // нужен для разбиения больших массивов на подмассивы
        for (let i = 0; i < Math.ceil(array.length / size); i++) {
          sendMessage(array.slice((i * size), (i * size) + size))
        }
      }

      this.dialog = false
      this.message = ''
      this.max = ''
    }
  }
}
</script>

<style lang="scss">

</style>