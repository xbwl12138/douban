<template>
    <div>
        <zu-fang-b :arr="arr"></zu-fang-b>
    </div>
</template>
<script>
import zuFangB from '../../components/group/zuFangB'
export default {
    components:{
        zuFangB
    },
    props: {
        arr:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>
    
</style>