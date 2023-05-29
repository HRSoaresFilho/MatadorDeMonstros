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
<div v-if="logs.length" class="panel logs">Logs</div>
</template>

<style scoped>

</style>
