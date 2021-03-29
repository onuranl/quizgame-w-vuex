<template>
<div>
    <div v-if="uiState === 'win'">
    <p>You won the game ! Your score is {{score}} </p>
    <button @click="restartGame" class="btn btn-outline-success" > Restart Game </button>
    </div>

    <div v-if="uiState === 'lose'">
    <p>You lost the game ! Your score is {{score}} </p>
    <button @click="restartGame" class="btn btn-outline-success" > Restart Game </button>
    </div>
</div>
</template>

<script>
import {  mapState } from 'vuex'
export default {
    computed : {
        ...mapState([
            "uiState",
            "score"
        ])
    },
    methods : {
        restartGame() {
        this.$store.commit("restartGame")
        }
    }
}
</script>

<style>

</style>