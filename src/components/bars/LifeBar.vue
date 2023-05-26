<script>
export default {
    props: {
        life: {
            type: Number,
            required: true
        },
        player: {
            type: String,
            required: true
        },
        classLife: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
        }
    }
}
</script>
<template>
    <div class="life-bar">
        <div class="life"
             :class="[classLife]"
             :style="{width: life + '%'}">
        </div>
    </div>
    <div>{{ life }}%</div>
</template>
<style scoped>
.life-bar{
    width: 80%;
    height: 20px;
    border: 1px solid #aaa;
}
.life{
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: green;
}
.life.danger{
    background-color: red;
}
</style>