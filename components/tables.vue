<style lang="less" scoped>
.tables {
    width:100%;   
    background: #f4f5f7;
    margin-bottom: 51px;
    .no-more {
        margin: auto;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        width: 100%;
        height: 25px;
        text-align: center;
    }
    ol {
        width:100%;
        padding: 5px 0px;
        background: #f4f5f7;
        li {
            width:100%; 
            margin: 5px auto auto auto;
            background: #ffffff;
            padding:1rem 1rem;
            display: table;
            &:after,&:before{
                content:"";
                clear: both;
                display: block;
            }
            &:first-child{
                margin: 0px auto auto auto;
            }
            .details {
                width: 70%;
                display: table-cell;
                vertical-align: middle;
                p {
                    width:100%;
                    .item {
                        margin-right: 0.5rem;
                        display: inline-block;
                        &.name {
                            font-size: 1.25rem;
                            color:#46484c;
                        }
                        &.Grade {
                            font-size: 1.25rem;
                            color:#46484c;
                        }
                        &.producer {
                            font-size: 1rem;
                            color:#969ba3;
                            background: url("./icon-producer.png") no-repeat left -1px;
                            background-size: contain;
                            height: 1rem;
                            text-indent: 1.2rem;
                            line-height: 1rem;
                        }
                        &.texture {
                            font-size: 1rem;
                            color:#969ba3;
                            background: url("./icon-texture.png") no-repeat left 0px;
                            background-size:contain;
                            height: 1rem;
                            text-indent: 1.2rem;
                            line-height: 1rem;
                        }
                        &.date {
                            font-size: 1rem;
                            color:#969ba3;
                            background: url("./icon-date.png") no-repeat left -1px;
                            background-size: contain;
                            height: 1rem;
                            text-indent: 1.2rem;
                            line-height: 1rem;
                        }
                    }
                }
            }
            .price{
                display: table-cell;
                vertical-align: middle;
                text-align: center;
                font-size: 1.8rem;
                color:#f30e8f;
                .i-down{
                    width:6px;
                    height:9px;
                    background:url(./icon-down.png) no-repeat left top;
                    background-size:contain;
                    display:inline-block;
                }
                .i-up{
                    width:6px;
                    height:9px;
                    background:url(./icon-up.png) no-repeat left top;
                    background-size:contain;
                    display:inline-block;
                }
                .i-steady {
                     width:6px;
                    height:9px;
                    display:inline-block;
                    color:#969ba3;
                }
                .text-down{
                    color:#12a812;
                    display:inline-block;
                }
                 .text-up{
                    color:#ff3000;
                    display:inline-block;
                }
            }
        }
    }
}
</style>
<template>

    <section class="tables">
        <div v-if="Loading.isShow" class="loading-wrap">
            <span class="loading"></span>
            {{Loading.text}}
        </div>
        <ol v-if="Loading.hasData">
            <li v-for="item in Lists">
                <div class="details">
                    <p>
                        <span class="item name">{{item.goodsName}}</span>
                        <span class="item Grade">{{item.texture}}</span>
                    </p>
                    <p>
                        <span class="item producer">{{item.producer}}</span>
                        <span class="item texture" v-if="item.quality===1">正品</span>
                        <span class="item texture" v-else-if="item.quality===2">让步材</span>
                        <span class="item texture" v-else-if="item.quality===3">大尾卷</span>
                        <span class="item texture" v-else-if="item.quality===4">小尾卷</span>
                        <span class="item date">{{item.createTime.split(' ')[0]}}</span>
                    </p>
                </div>
                <div class="price">
                    &yen;{{item.unitPrice}}<br/>
                    <span v-if="item.unitPriceFloat===1" class="i-down">
                        
                    </span>
                    <i class="text-down" v-if="item.unitPriceFloat===1">跌 &yen;{{item.priceSpread}}</i>
                    
                    <span v-if="item.unitPriceFloat===2" class="i-up">
                        
                    </span>
                    <i class="text-up" v-if="item.unitPriceFloat===2">涨 &yen;{{item.priceSpread}}</i>
                    <span v-if="item.unitPriceFloat===0" class="i-steady">-</span>
                </div>
            </li>
        </ol>
        <div v-else class="no-more">
            没有更多数据了
        </div>
    </section>

</template>
<script>
import { mapActions,mapGetters } from 'vuex'
    export default {
       
       computed: mapGetters(['Lists','Searchs','Loading']),
       mounted(){
          this.getList()
       },
       methods: {
        getList(){
            //console.log(typeof this.$route.query.key)
            if (this.$route.query && !this.$route.query.key ) {
                //取向硅钢
                this.$store.dispatch('changeType',1);
            } else if(this.$route.query && this.$route.query.key=="1") {
                console.log('1')
                this.$store.dispatch('changeType',1);
            } else if(this.$route.query && this.$route.query.key=="2")  {
                console.log('2')
                this.$store.dispatch('changeType',2);
            }
            
            this.$store.dispatch('changeText',"");
            this.$store.dispatch('getLists'); 
             
            
            /*this.$http.get('/api/users/list?key='+this.searchKey.key+'&textFull='+this.searchKey.textFull)
                .then((response)=>{
                    this.loading.isShow=false;
                    this.list =response.data;
                    //console.log(response.data);
                    if(this.list==null){
                        this.hasData=false;
                    } else if(this.list.length==0) {
                        this.hasData=false;
                    } else{
                        this.hasData=true;
                    }
                    //searchKey:1取向2无取
                    //quality:1正品 2让步 3大尾卷 4小尾卷
                }, (response)=>{
                    this.loading.isShow=false;
                    this.hasData=false;
                    console.log(response.data);
                });*/
        }
       },
       watch:{
            '$route' (to, from) {
                // 对路由变化作出响应...
                this.getList();
            }
       }
    }
</script>