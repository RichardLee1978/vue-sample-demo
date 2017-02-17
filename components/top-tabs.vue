<style lang="less" scoped>
.top-tabs {
    display: -webkit-flex;
    -webkit-flex-direction: row;
    display: flex;
    flex-direction: row;   
    width:100%;
    
    background: #fff;
    .search {
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;       
        text-align:center;      
        margin: 13px auto;
        input[type="text"] {
          border-radius: 50px;
          -webkit-border-radius: 50px;
          border:1px solid #e7eaef;
          padding:22px 10px;
          width: -webkit-calc(~"(100% - 60px)");
          width: calc(~"(100% - 60px)");
          height:30px;
          background:url(./icon-search.png) no-repeat 0.85rem 0.583rem;
          text-indent:40px;
          font-size:1.6rem;
          color:#c5c8cc;
        }   
    }
    
}

</style>
<template>
    <nav class="top-tabs">
       <div class="search">
         <input type="text" placeholder="请输入：品名、厂家、牌号" v-on:keyup.enter="submit"/>
       </div>
    </nav>
</template>
<script>
    import { mapActions,mapGetters } from 'vuex'
    export default {
       computed: mapGetters(['Lists','Searchs']),
       
       mounted(){
            this.curUrl();
       },
       methods:{
         curUrl(){
            if (this.$route.query && this.$route.query.key) {
              var key = this.$route.query.key;
                this.$store.dispatch('changeType', key) ;
            } 
         },
         submit(e){
            var v = e.target.value;
            this.$store.dispatch('changeText', v) ;
            this.$store.dispatch('getLists');
            e.target.value ="";
         }
       },
       watch:{
            '$route' (to, from) {
                // 对路由变化作出响应...
                this.curUrl();
            }
       }
    }
</script>