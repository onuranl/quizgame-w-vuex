import { createStore } from 'vuex'

export default createStore({
  state: {
    uiState : "ready",
    character : "",
    questionsIndex : 0,
    score : 0,
    characterChoices: ["baker", "mechanic", "artist"],
    questions: [{
        question: `What's your dog's name?`,
        baker: "Woofgang Puck",
        mechanic: "Alf",
        artist: "Salvador Dogi",
      },
      {
        question: `What's your favorite hobby?`,
        baker: "Extreme ironing",
        mechanic: "Bacon santa cosplay",
        artist: "Mimosas",
      },
      {
        question: `What's your favorite color?`,
        baker: "turquoise",
        mechanic: "yellow",
        artist: "transparent",
      },
      {
        question: `Is cereal soup?`,
        baker: "You can't be serieal",
        mechanic: "Yes, I am Jason Lengstorf",
        artist: "wut",
      },
      {
        question: `What’s the most imaginative insult you can come up with?`,
        baker: "You're a substitute teacher with no lesson plan",
        mechanic: "Yer face is a melted welly",
        artist: "You eat buttons off the remote",
      },
      {
        question: `If peanut butter wasn’t called peanut butter, what would it be called?`,
        baker: "legoome",
        mechanic: "brown paste",
        artist: "groundnut smoosh",
      },
    ],
  },
  mutations: {
    startGame(state, uiState) {
      state.uiState = uiState
    },
    uptadeCharacter(state, characterChoices) {
      state.character = characterChoices
    },
    pickQuestions(state, character) {
      character === state.character ? (state.score += 10) : (state.score -=10)

      if(state.questionsIndex < state.questions.length - 1) {
        state.questionsIndex++
      } else {
        state.score > 0 ? state.uiState = "win" : state.uiState = "lose"
      }
    },
    restartGame(state){
      state.uiState = "ready"
      state.score = 0
      state.questionsIndex = 0
    }
  },
})
