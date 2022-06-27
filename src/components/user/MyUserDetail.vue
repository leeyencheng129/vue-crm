<template>
  <div>
  userDetail --- {{id}}
  <button @click="$router.back()">後退</button>
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>

<style lang="scss" scoped>

</style>
