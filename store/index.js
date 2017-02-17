import Vue from 'vue'
import Vuex from 'vuex'
import vueResource from 'vue-resource';
Vue.use(Vuex)
Vue.use(vueResource);
export default new Vuex.Store({
  state: {
    search: {
    	type:1,
    	textFull:""
    },
    list:[],
    loading:{
        isShow:false,
        text:"加载中..",
        hasData:true
    }
    
  },
   mutations: {
    changeType (state,n) {
      state.search.type = n;
    },
    changeText (state,text) {
    	state.search.textFull = text;
    },
    getLists (state,list) {
    	
        state.list =list;
    },
    changeLoad (state,load) {
    	state.loading = load;
    }
  },
   actions: {
    changeType (context,n) {
      context.commit('changeType',n);
    },
    changeText (context,text) {
      context.commit('changeText',text);
    },
    changeLoad (context,load) {
    	
    	context.commit('changeLoad',load)
    },
    getLists (context) {
    
    	var loading = {
		        	isShow:true,
		        	text:"加载中..",
		        	hasData:true
    			}
    	context.commit('changeLoad',loading);
    	Vue.http.get('/api/users/list?key='+context.state.search.type+'&textFull='+context.state.search.textFull)
                .then((response)=>{
                    
                    if(response.data && response.data.length > 0){
                    	loading.isShow = false;
                    	loading.hasData = true;
                    	context.commit('changeLoad',loading);
                    	context.commit('getLists',response.data);
                    } else {
                    	loading.isShow = false;
                    	loading.hasData = false;
                    	context.commit('changeLoad',loading);
                    }
                    
                }, (response)=>{

                	loading.isShow = false;
                    loading.hasData = false;
                    context.commit('changeLoad',loading);
                    context.commit('getLists',[]);

                    console.log(response.data);
                });
    	
    }
  },
  getters: {
    Lists (context) {
      return context.list;
    },
    Searchs (context) {
  		return context.search;
  	},
  	Loading (context) {
  		
  		return context.loading;
  	}
  }
  
})