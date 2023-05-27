<script>
import PanelScores from './PanelScores.vue';
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {

        }
    },
    components: {
        PanelScores
    },
    computed: {
        ...mapState(['playerLife', 'monsterLife', 'running']),
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods:{
        ...mapMutations(['setRunning']),
    },
    watch: {
        hasResult(value){
            if(value) this.setRunning(false)
        }
    }
}
</script>

<template>
    <div v-if="hasResult" class="panel result">
        <div v-if="monsterLife == 0" class="win">Você ganhou!</div>
        <div v-else class="lose">Você perdeu!</div>
    </div>
</template>

<style scoped>
.result {
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: 600;
}

.win {
    color: green;
}

.lose {
    color: red;
}
</style>
