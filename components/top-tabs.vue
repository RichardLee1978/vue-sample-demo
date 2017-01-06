<style lang="less" scoped>
.top-tabs {
    display: -webkit-flex;
    -webkit-flex-direction: row;
    display: flex;
    flex-direction: row;   
    width:100%;
    
    background: #fff;
    div {
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
        
        text-align:center;
        a {
            width:100%;
            height:100%;
            display:block;
            font-size:1.4rem;
            padding:1rem 0rem;
            position: relative;
            &:after {
                content:"|";
                color: #e7eaef;
                right: -0.2rem;
                position: absolute;
                height:2.4rem;
               
                bottom:.8rem;
                
                display:inline-block;
            }

        }
       &:last-child {
            a {
                
               &:after {
                content:"";
               } 
                
            }
        } 
    }
    
}

</style>
<template>
    <nav class="top-tabs">
       <div><router-link :to="{ path: 'list', query: { key: 0 }}">今天</router-link></div>
       <div><router-link :to="{ path: 'list', query: { key: 1 }}">昨天</router-link></div>
       <div><router-link :to="{ path: 'list', query: { key: 7 }}">一周</router-link></div>
    </nav>
</template>
<script>
   
    export default {
       
    }
</script>