<template>
  <div>
    hello {{ a }}
     slot: <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    a: [String]
  }
}
</script>

<style lang="scss" scoped>
div {
  color: red;
}
</style>