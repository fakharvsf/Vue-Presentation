<template>
  <v-card>
    <main class="d-flex align-center justify-space-around">
      <v-chip>
        <router-link to="/"> Home </router-link>
      </v-chip>
      <v-chip> <router-link to="/listing"> Listing </router-link> </v-chip>
      <v-chip> <router-link to="/camera"> Camera </router-link> </v-chip>
      <v-chip>
        <router-link to="/search" @click.prevent="toggleAuthModel"
          >Search</router-link
        >
      </v-chip>
    </main>
  </v-card>
</template>

<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useModalStore } from "@/store/modal";
import { useUserStore } from "@/store/modal";
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  computed: {
    ...mapStores(useUserStore, useModalStore),
    ...mapState(useModalStore, ["hiddenClass", "isOpen"]),
    ...mapState(useUserStore, ["hiddenClass"]),
    ...mapActions(useUserStore, ["getData"]),
  },
  methods: {
    toggleAuthModel() {
      this.userStore.getData();

      console.log(
        "🚀 ~ file: TheHeader.vue:28 ~ toggleAuthModel ~ this.userStore.hiddenClass",
        this.userStore.hiddenClass
      );
      console.log(this.userStore);
      this.modalStore.isOpen = !this.modalStore.isOpen;
      console.log(this.isOpen);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
