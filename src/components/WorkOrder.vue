<template>
  <div class="work-order">
    <span>@ {{ order.time }} on {{ order.date }}</span>
    <h4>{{ order.title }}</h4>
  </div>
</template>

<script>
export default {
  name: "WorkOrder",
  props: {
    order: {
      type: Object,
      required: true
    }
  }
  // data() {
  //   return {
  //     order: {
  //       id: 5928101,
  //       category: 'animal welfare',
  //       title: 'Cat Adoption Day',
  //       description: 'Find your new feline friend at this event.',
  //       location: 'Meow Town',
  //       date: 'January 28, 2022',
  //       time: '12:00',
  //       petsAllowed: true,
  //       organizer: 'Kat Laydee'
  //     }
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.work-order {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.work-order:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
