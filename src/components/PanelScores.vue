<script>
import LifeBar from './bars/LifeBar.vue';

export default {
    data() {
        return {
            playerLife: 100,
            monsterLife: 100
        }
    },
    components: {
        LifeBar
    }
}
</script>

<template>
    <div class="panel scores">
        <div class="score">
            <h1>Jogador</h1>
            <LifeBar :life="playerLife" 
                     player="Jogador"
                     :classLife="{danger: playerLife < 20}" />
        </div>
        <div class="score">
            <h1>Monstro</h1>
            <LifeBar :life="monsterLife"
                     player="Monstro"
                     :classLife="{danger: monsterLife < 20}" />
        </div>
    </div>
</template>

<style scoped>
.scores{
    display: flex;
}
.score{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1 {
    font-size: 1.6rem;
}
</style>
