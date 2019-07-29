<template lang="pug">
  .categories-row
    ul
      li(
      v-for="category in categories"
      :key="categories.id"
      ) {{categories.category}}

  //- input(
  //-   type="text"
  //-   placeholder="Название категории"
  //- )
  //- button(@click="addNewCategory") Добавить

</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      categories: []
    };
  },
  computed: {
    ...mapState({
      categories: state => state.categories.data
    })
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    ...mapActions(["fetchCategories"])
  }
};
</script>

