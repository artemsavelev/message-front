<template>
  <div>

    <v-snackbar v-model="snackbar"
                :bottom="y === 'bottom'"
                :color="color"
                :left="x === 'left'"
                :multi-line="mode === 'multi-line'"
                :right="x === 'right'"
                :timeout="timeout"
                :top="y === 'top'"
                :vertical="mode === 'vertical'">

      {{ message }}

      <template v-slot:action="{ attrs }">

        <v-btn dark text @click="snackbar = false" v-bind="attrs" tile>
          Close
        </v-btn>

      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "Notifier",
  props: ['snackbar', 'message'],
  data () {
    return {

      color: 'error',
      mode: '',
      timeout: 2000,
      x: '',
      y: 'top',
    }
  },
}
</script>

<style scoped>

</style>