<template>
  <p>{{ order.time }} on {{ order.date }} @ {{ order.location }}</p>
  <p>{{ order.description }}</p>
</template>

<script>
export default {
  props: ['order'],
}
</script>

<style scoped>

</style>