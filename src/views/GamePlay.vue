<template>
  <div class="gameplay">
    <QuizQuestion 
        v-if="gameRunning" 
        v-on:answered="handleAnswer" 
        v-bind:question="fetchedQuestions[counter].question" >
    </QuizQuestion>

    <GameOver
        v-else
        v-bind:questions="questions"
        v-bind:score="score"
        v-on:newGame="newGame" >
    </GameOver>

  </div>
</template>

<script>
import axios from 'axios';
import QuizQuestion from '../components/QuizQuestion';
import GameOver from '../views/GameOver.vue';

export default {
  name: 'Gameplay',
  
  props: {

  },

  components:{
      QuizQuestion,
      GameOver
  },

  created(){
    axios.get('https://opentdb.com/api.php?amount=10&category=15&type=boolean')
            .then(resp => resp.data)
            .then(resp => {
                this.fetchedQuestions = resp.results || [];
            });
  },

  data(){
    return {
      fetchedQuestions: [],
      counter: 0,
      score: 0,
      gameRunning: true,
      questions: {
        question:[],
        correctA:[],
        userA:[]
      }
    }
  },

  methods: {
      handleAnswer(childAnswer){
          if(this.fetchedQuestions[this.counter].correct_answer == childAnswer){
              this.score+=10;
          }

          this.questions[this.counter] = {
            question: this.fetchedQuestions[this.counter].question,
            correctA: this.fetchedQuestions[this.counter].correct_answer,
            userA:    childAnswer
          };

          //console.log(this.questions);
          //console.log('Length: ' + this.questions.length);

          if(this.counter == this.fetchedQuestions.length-1){
            this.gameRunning = false;
          }

          this.counter++;

      },

      newGame(){
        this.fetchedQuestions = [];
        this.counter = 0;
        this.score = 0;
        this.gameRunning = true;
        this.questions = {
          question : [],
          correctA : [],
          userA : []
        }
        axios.get('https://opentdb.com/api.php?amount=10&category=15&type=boolean')
            .then(resp => resp.data)
            .then(resp => {
                this.fetchedQuestions = resp.results || [];
            });
      }
  }
}

</script>

<!-- CSS style | Scoped -->
<style scoped>

</style>
