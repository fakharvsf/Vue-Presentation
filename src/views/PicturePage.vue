 <template>
  <v-card class="imageEnlarged">
    <v-img :lazy-src="pic" max-height="600" max-width="900" :src="pic"></v-img>
  </v-card>
</template>

<script>
export default {
  name: "picturePage",
  data() {
    return {
      pic: null,
    };
  },
  mounted() {
    this.pic = JSON.parse(window.localStorage.getItem("pic"));

    console.log(
      "🚀 ~ file: PicturePage.vue:1dsssssssssssssssssssssssssssssss6 ~ mounted ~ this.$route.params.pic;",
      this.pic
    );

    // context.drawImage(this.$route.params.pic, 0, 0, 450, 337.5);
  },
};
</script>



