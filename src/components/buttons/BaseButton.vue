<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        classBtn: {
            type: String,
            required: false
        }
    },
    data() {
        return {
        }
    }
}
</script>

<template>
    <button class="btn"
            :class="classBtn">
        {{ name }}
    </button>
</template>

<style scoped>
.btn {
    padding: 8px 10px;
    margin: 0px 10px;
    border: none;
    text-transform: uppercase;
    font-size: 1.1rem;
    cursor: pointer;
}

.new-game {
    background-color: #4253af;
    color: #fff;
}

.attack {
    background-color: #e51c23;
    color: #fff;
}

.especial-attack{
    background-color: #ff9800;
    color: #000;
}

.heal{
    background-color: #259b24;
    color: #fff;
}

.give-up{
    background-color: #bbb;
    color: #000;
}
</style>