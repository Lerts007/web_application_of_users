<template>
  <!-- {{ users }} -->
  <div class="btnBlock">
    <Btn @click="getUsers" :text="'Обновить'" />
  </div>
  <div class="users">
    <User
      @click="setActivUser(user)"
      v-for="(user, index) in users"
      :key="index"
      :user="user"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import User from "@/components/User.vue";
import Btn from "@/components/UI/Btn.vue";

export default {
  mounted() {
    this.getUsers();
  },
  computed: {
    ...mapState(["users", "activUser"]),
  },
  methods: {
    ...mapMutations(["setActivUser"]),
    ...mapActions(["getUsers"]),
  },
  components: { User, Btn },
};
</script>

<style lang="scss" scoped>
.btnBlock,
.users {
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
}
.users {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
