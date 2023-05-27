<script>
import BaseButton from './buttons/BaseButton.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        BaseButton
    }
}
</script>

<template>
    <div class="panel buttons">
        <BaseButton name="Ataque" classBtn="attack" />
        <BaseButton name="Ataque Especial" classBtn="especial-attack" />
        <BaseButton name="Curar" classBtn="heal" />
        <BaseButton name="Desistir" classBtn="give-up" />
        <BaseButton name="Iniciar Jogo" classBtn="new-game" />
    </div>
</template>
<style scoped>
.buttons{
    display: flex;
    justify-content: center;

}
</style>
