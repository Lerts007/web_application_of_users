<template>
  <div class="UserModalInfo">
    <table>
      <tr>
        <td>
          <p>Имя:</p>
        </td>
        <td>
          <p>{{ getActivUser.first_name }}</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Фамилия:</p>
        </td>
        <td>
          <p>{{ getActivUser.last_name }}</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Почта:</p>
        </td>
        <td>
          <p>{{ getActivUser.email }}</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getActivUser"]),
  },
};
</script>

<style lang="scss" scoped>
.UserModalInfo {
  text-align: left;
  & tr {
    & td:first-child {
      text-align: left;
      padding: 10px;
    }
  }
  & p {
    font-size: 20px;
  }
}
</style>
