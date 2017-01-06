<style lang="less" scoped>
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
   }
   .phone-number {

       display: table-cell;
       vertical-align: middle;
        color:#fff;
        height:1.5rem;
        &:after {
            content:"021-62580630";
            position:relative;
            top:0px;
            font-size:1.8rem;
        }
   }
}
</style>
<template>
    <section class="phone-banner">
        
        <a class="phone-number" href="tel:021-62580630"><i class="icon"></i></a>
    </section>
    
    
</template>
<script>
   
    export default {
       
    }
</script>