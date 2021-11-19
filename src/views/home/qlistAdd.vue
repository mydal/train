<template>
    <qlistAddTop></qlistAddTop>
    <qlistAddEstablish></qlistAddEstablish>
</template>
<script>
import { defineComponent } from "vue";

import qlistAddTop from '../../components/qlistAddTop'
import qlistAddEstablish from '../../components/qlistAddEstablish'
export default defineComponent({
    name:'qlistAdd',
    setup() {
        
    },
    components:{
        qlistAddTop,
        qlistAddEstablish
    }
})
</script>
