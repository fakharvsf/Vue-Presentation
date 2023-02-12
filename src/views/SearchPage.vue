<template>
  <v-card class="mx-auto" min-width="450">
    <v-toolbar color="primary" height="88" flat>
      <v-text-field
        v-model="search"
        clearable
        hide-details
        label="Search News"
        prepend-inner-icon="mdi-magnify"
        single-line
      ></v-text-field>
    </v-toolbar>

    <v-divider></v-divider>
    <v-list lines="three">
      <v-list-item v-for="(item, i) in searching" :key="i" link>
        <template v-slot:prepend>
          <v-avatar class="me-4 mt-2" rounded="0">
            <v-img :src="item.thumbnail" cover></v-img>
          </v-avatar>
        </template>

        <v-list-item-title
          class="text-uppercase font-weight-regular text-caption"
          v-text="item.category"
        ></v-list-item-title>
        <div v-text="item.title"></div>
        <div v-text="item.description"></div>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapStores } from "pinia";
import { useModalStore } from "@/store/modal";
export default {
  name: "search",
  data: () => ({
    items: [
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg",
        title: "TBI’s 5 Best: SF Mocktails to Finish Dry January Strong",
        category: "Travel",
        keyword: "Drinks",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*BBNtYUieAqHoXKjiJ2mMjQ.png",
        title:
          "PWAs on iOS 12.2 beta: the good, the bad, and the “not sure yet if good”",
        category: "Technology",
        keyword: "Phones",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*rTEtei1UEmNqbq6evRsExw.jpeg",
        title: "How to Get Media Mentions for Your Business",
        category: "Media",
        keyword: "Social",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*FD2nkJewVeQnGf0ommQfrw.jpeg",
        title:
          "The Pitfalls Of Outsourcing Self-Awareness To Artificial Intelligence",
        category: "Technology",
        keyword: "Military",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg",
        title: "Degrees of Freedom and Sudoko",
        category: "Travel",
        keyword: "Social",
      },
    ],
    search: "",
    products: "",
  }),

  computed: {
    ...mapStores(useModalStore),
    // ...mapActions(useModalStore, ["getProducts"]),
    searching() {
      if (!this.search) return this.productsList;

      const search = this.search.toLowerCase();

      return this.productsList.filter((item) => {
        const text = item.title.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
    productsList() {
      console.log(this.modalStore);

      return this.modalStore.getProductsGetter;
    },
  },
  methods: {
    searchProducts() {},
    getProductsData() {
      console.log(this.modalStore);
      this.modalStore.getProducts();
      console.log(this.modalStore.isOpen);
    },
  },
  mounted() {
    this.getProductsData();
  },
};
</script>
