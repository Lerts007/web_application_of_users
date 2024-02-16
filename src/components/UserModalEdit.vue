<template>
  <div class="UserModalEdit">
    <table>
      <tr>
        <td>
          <label for="name"> Имя: </label>
        </td>
        <td>
          <input name="name" type="text" v-model="getActivUser.first_name" />
        </td>
      </tr>
      <tr>
        <td>
          <label for="name"> Фамилия: </label>
        </td>
        <td>
          <input name="name" type="text" v-model="getActivUser.last_name" />
        </td>
      </tr>
      <tr>
        <td>
          <label for="name"> Почта: </label>
        </td>
        <td>
          <input name="name" type="text" v-model="getActivUser.email" />
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
.UserModalEdit {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & input,
  label {
    font-size: 20px;
  }
  & tr {
    & td:first-child {
      text-align: left;
      padding: 10px;
    }
  }
  & input {
    &:focus {
      outline: none;
      border-bottom: 3px solid #cda274;
    }
    border: none;
    border-bottom: 1px solid #cda274;
  }
}
</style>
