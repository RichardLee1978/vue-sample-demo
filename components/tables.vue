<style lang="less" scoped>
.tables {
    width:100%;   
    background: #f4f5f7;
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
            }
        }
    }
}
</style>
<template>

    <section class="tables">
        <ol>
            <li v-for="item in list">
                <div class="details">
                    <p>
                        <span class="item name">{{item.GoodsName}}</span>
                        <span class="item Grade">{{item.Texture}}</span>
                    </p>
                    <p>
                        <span class="item producer">{{item.Producer}}</span>
                        <span class="item texture" v-if="item.Quality==='1'">正品</span>
                        <span class="item texture" v-else-if="item.Quality==='2'">让步材</span>
                        <span class="item texture" v-else-if="item.Quality==='3'">大尾卷</span>
                        <span class="item texture" v-else-if="item.Quality==='4'">小尾卷</span>
                        <span class="item date">{{item.CreateTime}}</span>
                    </p>
                </div>
                <div class="price">
                    &yen;{{item.UnitPrice}}
                </div>
            </li>
        </ol>
    </section>
   <!-- <table class="tables" cellpadding="0" cellspacing="0">
    <thead>
        <tr>
            <th>品名</th>
            <th>厂家</th>
            <th>牌号</th>
            <th>材质</th>
            <th>单价</th>
            <th>时间</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in list">
            <td>{{item.name}}</td>
            <td>{{item.producer}}</td>
            <td>{{item.grade}}</td>
            <td>{{item.texture}}</td>
            <td class="price">{{item.price}}</td>
            <td>{{item.}}</td>
        </tr>
       
    </tbody>
       
    </table>
    -->
</template>
<script>
   
    export default {
        data(){
            return {
                list:[],
                searchKey: {
                    key: 0
                }
            };
        },
       mounted(){
        this.getList();
       },
       methods: {
        getList(){
        if (this.$route.query && this.$route.query.key) {
                this.searchKey.key = this.$route.query.key;
            }
            this.$http.get('/api/test/list?key='+this.searchKey.key)
                .then((response)=>{
                    this.list = response.data;
                    console.log(typeof response.data);
                    //quality:1正品 2让步 3大尾卷 4小尾卷
                }, (response)=>{
                    console.log(response.data);
                });
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