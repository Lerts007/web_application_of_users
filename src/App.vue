<template>
  <Users />
  <UserWindowModal v-if="getActivUser" />
</template>

<script>
import UserWindowModal from "./components/UserWindowModal.vue";
import Users from "./components/Users.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Users,
    UserWindowModal,
  },
  computed: {
    ...mapGetters(["getActivUser"]),
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
