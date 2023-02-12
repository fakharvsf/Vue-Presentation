// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/FirstPage.vue"),
  },
  {
    path: "/camera",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/SearchPage.vue"),
  },
  {
    path: "/picture/:id",
    name: "picturePage",
    props: true,
    component: () => import("@/views/PicturePage.vue"),
  },
  {
    path: "/listing",
    name: "listing",
    component: () => import("@/views/ListingPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
