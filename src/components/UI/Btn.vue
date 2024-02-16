<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
button {
  padding: 5px;
  border: 1px solid #cda274;
  border-radius: 5px;
  font-size: 15px;
  background-color: #fff;
  cursor: pointer;
  transition: color 0.5s, background-color 0.5s;
  @media (hover: hover) {
    &:hover {
      background-color: #cda274;
      color: #fff;
    }
  }
}
</style>
