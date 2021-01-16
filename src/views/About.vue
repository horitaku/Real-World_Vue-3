<template>
  <div class="about">
    <h1>A site for orders to better the world.</h1>
  </div>
  <form>
    <BaseInput
      v-model="event.title"
      label="Title"
      type="text"
    />
    <h3>Where is your event?</h3>
    <BaseInput
      v-model="event.location"
      label="Location"
      type="text"
    />

    <BaseSelect
      :options="categories"
      v-model="event.category"
      label="Select a category"
    />

    <BaseCheckbox
      v-model="event.extras.catering"
      label="Catering"
    />

    <BaseCheckbox
      v-model="event.extras.music"
      label="Live music"
    />
    <BaseRadioGroup
      v-model="event.pets"
      name="pets"
      :options="petOptions"
      vertical
    />
    <BaseRadioGroup
      v-model="event.pets"
      name="pets2"
      :options="petOptions"
    />
<!--    <BaseRadio-->
<!--      v-model="event.pets"-->
<!--      :value="1"-->
<!--      label="Yes"-->
<!--      name="pets"-->
<!--    />-->

<!--    <BaseRadio-->
<!--      v-model="event.pets"-->
<!--      :value="0"-->
<!--      label="No"-->
<!--      name="pets"-->
<!--    />-->
  </form>
  <pre>{{ event }}</pre>
</template>
<script>
// import BaseCheckbox from "@/components/BaseCheckbox";
// import BaseRadio from "@/components/BaseRadio";
// import BaseRadioGroup from "@/components/BaseRadioGroup";
export default {
  // components: { BaseRadioGroup, BaseRadio, BaseCheckbox },
  data () {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      },
      petOptions: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
      ]

    }
  }
}
</script>
