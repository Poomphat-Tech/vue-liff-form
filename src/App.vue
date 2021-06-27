<template>
  <router-view></router-view>
</template>

<script>
import liff from "@line/liff";
import { ref, provide } from "vue";

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
      profile: null,
      liffContext: null,
      hasExternalBrowserLogin: true,
    };
  },
  created() {
    if (this.liffID != "") {
      this.initLiff();
    }
  },
  methods: {
    async initLiff() {      
      await liff.init({liffId: this.liffID,});           
      if(liff.isInClient()){
        this.profile = await this.setLiffProfile(); 
      }else{
        if(!this.hasExternalBrowserLogin){
          return
        }
        if(!liff.isLoggedIn()){     
          console.log("liff is not logging in");     
          liff.login({redirectUri: window.location.href})
          return
        }
        this.profile = await this.setLiffProfile(); 
      }                  
      console.log(this.userId);
      console.log(this.profile);
    },
    async setLiffProfile(){
      const profile = await liff.getProfile();
      const context = liff.getContext();
      this.userId = profile.userId;
      const liffInfo = {
        profile: profile,
        context: context
      }
      return liffInfo;
    }
  },
};
</script>
