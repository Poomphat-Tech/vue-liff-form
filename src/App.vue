<template>
  <router-view></router-view>
</template>

<script>
import liff from "@line/liff";
import { computed, ref, reactive, provide } from "vue";

export default {
  setup() {
    const uid = ref("");
    // Inject uid to child component
    provide("userId", uid);
    return { userId: uid };
  },
  data() {
    return {
      liffID: "1656147398-AKEdKNd7",
    };
  },
  mounted: function () {
    if (this.liffID != null) {
      this.initLiff();
    }
  },
  methods: {
    async initLiff() {
      await liff.init({
        liffId: this.liffID,
      });
      const profile = await liff.getProfile();
      this.userId = profile.userId;
    },
  },
};
</script>
