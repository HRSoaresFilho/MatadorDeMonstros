<script>
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {

        }
    },
    components: {

    },
    computed: {
        ...mapState(['logs']),
    },
    methods: {

    },
}
</script>

<template>
<div v-if="logs.length" class="panel logs">
    <ul>
        <li v-for="log in logs" :key="log.id" class="log">
            {{ log.text }}
        </li>
    </ul>
</div>
</template>

<style scoped>

</style>
