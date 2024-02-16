<template>
  <div
    class="UserModal"
    @click.self="setActivUser(null)"
    @keydown.esc="setActivUser(null)"
    ref="modal"
  >
    <div class="UserModalWindow">
      <BtnIconClose @click="setActivUser(null)" />
      <img :src="getActivUser.avatar" alt="" />
      <UserModalInfo v-if="UserEdit" />
      <UserModalEdit v-else />

      <div class="BtnModal">
        <Btn :text="'Удалить'" @click="deletUser(getActivUser)" />
        <Btn
          v-if="UserEdit"
          :text="'Редактировать'"
          @click="UserEdit = false"
        />
        <Btn
          v-else
          :text="'Сохранить'"
          @click="
            UserEdit = true;
            addLocalStorage(getUser);
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import BtnIconClose from "@/components/UI/BtnIconClose.vue";
import Btn from "@/components/UI/Btn.vue";
import UserModalInfo from "./UserModalInfo.vue";
import UserModalEdit from "./UserModalEdit.vue";

export default {
  mounted() {
    this.$el.contentEditable = true;
    this.$el.children[0].contentEditable = false;
    this.$el.focus();
  },
  data() {
    return {
      UserEdit: true,
    };
  },
  computed: {
    ...mapGetters(["getUser", "getActivUser"]),
  },
  methods: {
    ...mapMutations(["setActivUser", "addLocalStorage"]),
    ...mapActions(["deletUser"]),
  },
  components: { BtnIconClose, Btn, UserModalInfo, UserModalEdit },
};
</script>

<style lang="scss" scoped>
.UserModal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(#000, 0.3);
}
.UserModalWindow {
  position: relative;
  padding: 15px;
  background-color: #fff;
  border-radius: 20px;
  & img {
    margin-bottom: 20px;
  }
}

.BtnModal {
  margin-top: 10px;
  display: flex;
  gap: 20px;
  justify-content: center;
}
</style>
