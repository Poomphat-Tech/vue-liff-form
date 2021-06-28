<template> 
  <component :is="currentPage" :page="currentPage" @changePage:page="onChange($event)"></component>
</template>

<script>
// import liff from "@line/liff";
import { reactive, provide } from "vue";

import SurveyPage from './components/survey/Survey.vue';
import ThankYouPage from './components/thankyou/ThankYou.vue';
import ErrorPage from './components/error/Error.vue';


export default {
  components: {
    SurveyPage,
    ThankYouPage,
    ErrorPage,
  },
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
      currentPage: '',
      liffID: '',
      hasExternalBrowserLogin: true,      
    };
  },
  mounted() {    
    this.liffID = window.global.liffID;                  
    if (this.liffID !== ''){         
      this.setUpLiff(this.liffID);
    }else{
      this.SetupDefaultPage();
    }        
  },
  methods: {
    onChange(event){         
      this.currentPage = event;
    },
    SetupDefaultPage(){
      this.currentPage = 'SurveyPage'
    },
    async setUpLiff(liffId) {          
      console.log('liff id' + this.liffID);
      await liff.init({liffId: this.liffID});
      if(liff.isInClient()){        
        await this.setLiffProfile(); 
      }else{        
        if(!this.hasExternalBrowserLogin){
          this.SetupDefaultPage();
          return Promise.resolve();
        }
        console.log(liff.isLoggedIn());
        if(!liff.isLoggedIn()){                
          liff.login({redirectUri: window.location.href})
          return Promise.resolve();
        }
        
        await this.setLiffProfile();         
      }       

      this.SetupDefaultPage();            
    },
    async setLiffProfile(){
      const profile = await liff.getProfile();
      const context = liff.getContext();            
      this.lineProfile.userId = profile.userId;
      this.lineProfile.displayName = profile.displayName;
      this.lineProfile.pictureUrl = profile.pictureUrl;
      this.lineProfile.appLaunchType = context.type
      console.log(profile);
    }
  },
};
</script>
