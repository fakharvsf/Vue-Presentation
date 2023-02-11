
<template>
  <div class="cam-container">
    <main class="camera-box" :class="{ flash: isShotPhoto }">
      <div class="camera-shutter" :class="{ flash: isShotPhoto }"></div>

      <video
        v-show="!isPhotoTaken"
        ref="camera"
        :width="450"
        :height="337.5"
        autoplay
      ></video>

      <canvas
        v-show="isPhotoTaken"
        id="photoTaken"
        ref="canvas"
        :width="450"
        :height="337.5"
      ></canvas>
    </main>

    <div class="camera-shoot">
      <v-btn @click="takePhoto">
        <img
          src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png"
        />
      </v-btn>
    </div>

    <div v-if="isPhotoTaken" class="camera-download">
      <v-btn @click="enlarge"> Enlarge </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPhotoTaken: false,
      isShotPhoto: false,
      imageContext: null,
      imageVideo: null,
      picturePart: null,
    };
  },
  mounted() {
    this.createCameraElement();
  },
  methods: {
    createCameraElement() {
      const constraints = (window.constraints = {
        audio: false,
        video: true,
      });
      console.log(
        "🚀 ~ file: HelloWorld.vue:58 ~ createCameraElement ~ video",
        navigator.mediaDevices.getUserMedia(constraints)
      );

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.$refs.camera.srcObject = stream;
        })
        .catch((error) => {
          console.log(
            "🚀 ~ file: HelloWorld.vue:154 ~ createCameraElement ~ error",
            error
          );

          alert("May the browser didn't support or there is some errors.");
        });
    },

    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach((track) => {
        track.stop();
      });
    },

    takePhoto() {
      if (!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }

      this.isPhotoTaken = !this.isPhotoTaken;

      const context = this.$refs.canvas.getContext("2d");
      this.imageContext = context;
      this.imageVideo = this.$refs.camera;
      console.log(
        "🚀 ~ file: HelloWorld.vue:148 ~ takePhoto ~ this.imageVideo",
        this.imageVideo
      );
      context.drawImage(this.imageVideo, 0, 0, 450, 337.5);
      this.picturePart = this.$refs.canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      localStorage.setItem("pic", JSON.stringify(this.picturePart));
      console.log(
        "🚀 ~ file: HelloWorld.vue:155 ~ takePhoto ~ this.picture",
        this.picturePart
      );
    },

    enlarge() {
      this.stopCameraStream();
      this.$router.push({
        name: "picturePage",
        params: { id: 1 },
      });
    },
  },
};
</script>

<style scoped>
.cam-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 500px;
}
.cam-container .camera-button {
  margin-bottom: 2rem;
}
.cam-container .camera-box .camera-shutter {
  opacity: 0;
  width: 450px;
  height: 337.5px;
  background-color: #fff;
  position: absolute;
}
.cam-container .camera-box .camera-shutter.flash {
  opacity: 1;
}
.cam-container .camera-shoot {
  margin: 1rem 0;
}

.cam-container .camera-shoot button img {
  height: 35px;
  object-fit: cover;
}
</style>
