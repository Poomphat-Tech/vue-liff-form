<template>
  <router-view></router-view>
</template>

<script>
import liff from "@line/liff";
import { reactive, provide } from "vue";

export default {
  setup() {
    const lProfile = reactive({
      userId: '',
      displayName: '',
      pictureUrl: '',
      statusMessage: '',
      appLaunchType: '', //utou, group, room, external, none
    });
    // Inject uid to child component
    provide("lineProfile", lProfile);
    return { lineProfile: lProfile };
  },
  data() {
    return {
      liffID: '',
      hasExternalBrowserLogin: true,
    };
  },
  created() {    
    this.liffID = window.global.liffID;         
    if (this.liffID !== ''){      
      this.initLiff();
    }
  },
  methods: {
    async initLiff() {      
      console.log('init liff id ' + this.liffID);
      await liff.init({liffId: this.liffID,});           
      if(liff.isInClient()){
        await this.setLiffProfile(); 
      }else{
        if(!this.hasExternalBrowserLogin){
          return
        }
        if(!liff.isLoggedIn()){     
          console.log("liff is not logging in");     
          liff.login({redirectUri: window.location.href})
          return
        }
        await this.setLiffProfile(); 
      }                  
      console.log("Current user " + this.lineProfile.displayName);      
    },
    async setLiffProfile(){
      const profile = await liff.getProfile();
      const context = liff.getContext();      
      console.log(profile)
      this.lineProfile.userId = profile.userId;
      this.lineProfile.displayName = profile.displayName;
      this.lineProfile.pictureUrl = profile.pictureUrl;
      this.lineProfile.appLaunchType = context.type
    }
  },
};
</script>
