<style lang="less" scoped>
.phone-wrapper {
    height: 51px;
    width:100%;
}
.phone-banner {
    width:100%;   
    background: #3090fe;
    text-align:center;
    position:fixed;
    bottom:0;
    left:0;
    z-index: 100;
    padding:1rem 0rem;
    display: table;
   .icon {
        display:inline-block;
        width:1.5rem;
        height:1.5rem;
        background:url(./phone-banner.png) no-repeat left top;
        background-size: contain;
        margin-right: 1.2rem;
        position: relative;
        top:4px;
       animation:am-rotate2 300ms steps(12) infinite;
       -webkit-animation:am-rotate2 300ms steps(12) infinite;
   }
   .phone-number {

       display: table-cell;
       vertical-align: middle;
        color:#fff;
        height:1.5rem;
        font-size:1.8rem;
        
   }
}
</style>
<template>
    <section class="phone-wrapper">
        <section class="phone-banner">

            <a class="phone-number" v-bind:href="href_"><i class="icon"></i>{{phone}}</a>
        </section>
    </section>

    
    
</template>
<script>
import { mapActions,mapGetters } from 'vuex'   
    export default {
        data () {
            return {
                phone: "13585615054",
                href_: "tel:13585615054"
            }
        },
       computed: mapGetters(['Searchs']),
       mounted () {
            this.differentPhoneNumber()
       },
       methods: {
            differentPhoneNumber () {
                
                if(this.$store.state.search.type==2) {
                    this.phone = '15801718349'
                    this.href_ = 'tel:15801718349'
                } else {
                    this.phone = '13585615054'
                    this.href_ = 'tel:13585615054'
                }
            }
       },
       watch:{
            Searchs:{
                handler:function() {
                // 对数据变化作出响应...
                
                this.differentPhoneNumber();
            },
            deep: true
        }
       }
    }
</script>