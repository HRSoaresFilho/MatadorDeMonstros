<script>
import PanelScores from './PanelScores.vue';
import { mapState } from 'vuex';

export default {
    data() {
        return {

        }
    },
    components: {
        PanelScores
    },
    computed: {
        ...mapState(['playerLife', 'monsterLife']),
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    }
}
</script>

<template>
    <div v-if="hasResult" class="panel">
        <div v-if="monsterLife == 0" class="win">Você ganhou!</div>
        <div v-else class="lose">Você perdeu!</div>
    </div>
</template>

<style scoped></style>
