<script>
import PanelScores from './PanelScores.vue';

export default {
    data() {
        return {
            
        }
    },
    components: {
        PanelScores
    },
    computed:{
        hasResult(){
            return 0
        }
    }
}
</script>

<template>
<div class="panel">
    {{ playerLife }}
</div>
</template>

<style scoped>

</style>
