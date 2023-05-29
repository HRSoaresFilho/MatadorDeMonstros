<script>
import BaseButton from './buttons/BaseButton.vue';
import { mapState, mapMutations } from 'vuex';

export default {
    components: {
        BaseButton
    },
    computed: {
        ...mapState(['playerLife', 'monsterLife', 'running']),
    },
    methods: {
        ...mapMutations(['setPlayerLife', 'setMonsterLife', 'setRunning', 'updateLogs', 'setLogs']),
        startGame() {
            this.setMonsterLife(100)
            this.setPlayerLife(100)
            this.setRunning(true)
            this.setLogs([])
        },
        endGame() {
            this.setRunning(false)
        },
        attack(especial) {
            this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'player')
            if (this.monsterLife > 0) {
                this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
            }
        },
        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        heal(min, max) {
            const heal = this.getRandon(min, max)
            this.setPlayerLife(Math.min(this.playerLife + heal, 100))
            this.updateLogs({text: `Jogador ganhou força de ${heal}`, cls: 'player'})
        },
        hurt(atr, min, max, especial, source, target, cls) {
            const plus = especial ? 5 : 0
            const hurt = this.getRandon(min + plus, max + plus)

            if (atr == 'playerLife') {
                this.setPlayerLife(Math.max(this.playerLife - hurt, 0))
            }
            if (atr == 'monsterLife') {
                this.setMonsterLife(Math.max(this.monsterLife - hurt, 0))
            }
            this.updateLogs({text: `${source} atingiu ${target} com ${hurt}`, cls: cls})
        },
        getRandon(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        }
    },
}
</script>

<template>
    <div class="panel buttons">
        <template v-if="running">
            <BaseButton @click="attack(false)"
                        name="Ataque"
                        classBtn="attack" />

            <BaseButton @click="attack(true)"
                        name="Ataque Especial"
                        classBtn="especial-attack" />

            <BaseButton @click="healAndHurt"
                        name="Curar"
                        classBtn="heal" />

            <BaseButton @click="endGame"
                        name="Desistir"
                        classBtn="give-up" />
        </template>

        <BaseButton v-else @click="startGame"
                           name="Iniciar Jogo"
                           classBtn="new-game" />
    </div>
</template>

<style scoped>
.buttons {
    display: flex;
    justify-content: center;

}
</style>
