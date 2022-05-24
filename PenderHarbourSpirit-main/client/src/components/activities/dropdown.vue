<template>
  <div>
    <b-dropdown aria-role="list">
      <template #trigger="{ active }">
        <b-button
          label="Acrivities"
          type="is-primary"
          :icon-right="active ? 'menu-up' : 'menu-down'"
        />
      </template>
      <b-dropdown-item v-for="item in dropdownItems" :key="item.id"
      v-bind:class="{'is-active': currentNav == item.id}" @click="router.replace({ path: item.link })">{{item.desc}} </b-dropdown-item>
      </b-dropdown>
  </div>
</template>

<script>

export default {
  name: "Dropdown",
  props: {
    currentNav: Number,
  },
  data() {
    return {
      dropdownItems: [
        {id: 1,
        desc: "Hiking and Biking",
        link: "/Activity/Boating"},
        {id: 2,
        desc: "Festivals and Events",
        link: "/Activity/Boating"},
        {id: 3,
        desc: "Self-guided Heritage Tour",
        link: "/Activity/Boating"},
        {id: 4,
        desc: "Fishing, Crabbing & Prawning",
        link: "/Activity/Boating"},
        {id: 5,
        desc: "Boating & Tour Boat Cruises",
        link: "/Activity/Boating"},
        {id: 6,
        desc: "Kayaking, Paddleboarding, Canoeing",
        link: "/Activity/Boating"},
        {id: 7,
        desc: "Ocean & Lake Swimming",
        link: "/Activity/Boating"},
        {id: 8,
        desc: "Scuba Diving",
        link: "/Activity/Boating"},
        {id: 9,
        desc: "Golfing",
        link: "/Activity/Boating"},
        {id: 10,
        desc: "Wildlife Viewing",
        link: "/Activity/Boating"},
        {id: 11,
        desc: "Kid-Friendly Activities",
        link: "/Activity/Boating"},
      ]
      }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>