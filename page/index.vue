<style lang="less" scoped>
</style>
<template>
    <div>
        <v-tabs></v-tabs>
        <v-tables></v-tables>
        <v-phone></v-phone>
    </div>
</template>
<script>
    import vTabs from '../components/top-tabs.vue'
    import vTables from '../components/tables.vue'
    import vPhone from '../components/phone-banner.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            vTabs,
            vTables,
            vPhone
        }
    }
</script>