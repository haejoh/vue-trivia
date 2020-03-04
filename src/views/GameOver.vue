<template>
    <div class="gameover text-center list-group" >
        <h4>GAME OVER!</h4>
        <p>Score: {{score}}</p>
        <span>
            <router-link type="button" to='/' class="btn btn-secondary">Back to Home</router-link>
            <button type="button" class="btn btn-secondary" @click="newGame">Restart Quiz!</button>
        </span>
        <QuizResult 
            v-for="question in questions" 
            :key="question.question"    
            v-bind:question="question"
        ></QuizResult>
    </div>
</template>

<script>
import QuizResult from '../components/QuizResult';
export default {
    name: 'Gameover',

    props: {
        score: {
          required: true,
          type: Number
        },
        questions: {
            required: true,
            type: Object
        }
    },

    components: {
        QuizResult
    },

    created(){},

    // data(){},

    methods: {
        newGame(){
            this.$emit('newGame');
        }
    }

}
</script>

<style scoped>

</style>