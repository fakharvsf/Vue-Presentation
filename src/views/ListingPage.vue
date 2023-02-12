<template>
  <div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useModalStore } from "@/store/modal";
import { useUserStore } from "@/store/modal";
export default {
  name: "listing",
  data() {
    return {};
  },
  mounted() {
    this.getUserData();
  },
  computed: {
    ...mapStores(useUserStore, useModalStore),
    ...mapState(useModalStore, ["hiddenClass", "isOpen"]),
    ...mapState(useUserStore, ["hiddenClass"]),
    ...mapActions(useUserStore, ["getData"]),
  },
  methods: {
    getUserData() {
      this.userStore.getData();

      console.log(
        "🚀 ~ file: TheHeader.vue:28 ~ toggleAuthModel ~ this.userStore.hiddenClass",
        this.userStore.hiddenClass
      );
      console.log(this.userStore);
      console.log(this.isOpen);
    },
  },
};
</script>



<style scoped>
</style>
