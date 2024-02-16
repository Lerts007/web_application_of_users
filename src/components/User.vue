<template>
  <div class="user">
    <img :src="user.avatar" alt="" />
    <h3>{{ user.first_name }} {{ user.last_name }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    user: null,
  },
};
</script>

<style lang="scss" scoped>
.user {
  width: 300px;
  padding: 10px;
  border: 1px solid #cda274;
  border-radius: 10px;
  cursor: pointer;
}
</style>
