<template>
  <div id="nav">
    <game-state-start v-if="uiState === 'ready'" >
      <h1>Which hooman do you want to be?</h1>

      <p v-for="options in characterChoices" :key="options" >
      <input v-model="characterInput" :id="options" :value="options" type="radio" />
      <label :v-for="options"> {{options}} </label>
      </p>

      <button @click="startGame" class="btn btn-outline-success">> Start </button>
    </game-state-start>

    <section v-if="uiState === 'start'" >
       <p>{{questions[questionsIndex].question}}</p>
       <p v-for="character in characterChoices" :key="character">
          <button @click="pickQuestions(character)" class="btn btn-outline-success">>
            {{ questions[questionsIndex][character] }}
          </button>
        </p>

        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :aria-valuenow="score" aria-valuemin="-60" aria-valuemax="60" :style="progress"></div>
        </div>
    </section>

    <game-state-finish />
  </div>
</template>
<script>
import { mapState } from "vuex"

import gameStateStart from "./components/gameStateStart.vue"
import gameStateFinish from "./components/gameStateFinish.vue"


export default {
  components : { gameStateStart, gameStateFinish },
  data() {
    return {
      characterInput: ""
    }
  },
  computed: {
    ...mapState([
      "uiState",
      "questions",
      "characterChoices",
      "questionsIndex",
      "score",
      "character"
    ]),
    progress() {
      return `width: ${this.score + 50}%`
    }
  },
  methods : {
    startGame() {
      this.$store.commit("startGame", 'start')
      this.$store.commit("uptadeCharacter", this.characterInput)
    },
    pickQuestions(character) {
      this.$store.commit("pickQuestions", character)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
