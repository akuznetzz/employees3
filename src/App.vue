<template>
  <v-app class="app ">
    <v-main class="main mx-auto pt-10">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style>
.app {
  background-color: #E5E5E5;

}

.main {
  position: relative;
  width: 1920px;
  min-height: 1788px;
  overflow-x: scroll;
  background: #F7F8F9;

}
</style>
