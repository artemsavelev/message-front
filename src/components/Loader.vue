<template>
  <v-col cols="11">
  <v-progress-circular
      color="primary"
      :rotate="360"
      :size="100"
      :width="15"
      :value="value"
  >
    {{ value }}
  </v-progress-circular>
  </v-col>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style scoped>

</style>