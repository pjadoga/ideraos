<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Ideraos
        </h1>
      </v-flex>

      
      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Important Notice</h2>

        <v-layout justify-center class=" font-weight-bold v-avatar--tile">
          <a btn
            :href= "'#orders'"
            class=" title mx-3"
            target="_nofollow"
          >
            Click to Check Orders
          </a>
        </v-layout>
      </v-flex>      
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      
    })
  }
</script>

<style>

</style>
