<script>
import BaseButton from './buttons/BaseButton.vue';
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {

        }
    },
    components: {
        BaseButton
    },
    computed: {
        ...mapState(['playerLife', 'monsterLife', 'running']),
    },
    methods: {
        ...mapMutations(['setPlayerLife', 'setMonsterLife', 'setRunning']),
        startGame() {
            this.setMonsterLife(100)
            this.setPlayerLife(100)
            this.setRunning(true)
        },
        endGame(){
            this.setRunning(false)
        }
    },
}
</script>

<template>
    <div class="panel buttons">
        <template v-if="running">
            <BaseButton name="Ataque" classBtn="attack" />
            <BaseButton name="Ataque Especial" classBtn="especial-attack" />
            <BaseButton name="Curar" classBtn="heal" />
            <BaseButton @click="endGame" name="Desistir" classBtn="give-up" />
        </template>
        <BaseButton v-else @click="startGame" name="Iniciar Jogo" classBtn="new-game" />
    </div>
</template>
<style scoped>
.buttons {
    display: flex;
    justify-content: center;

}
</style>
