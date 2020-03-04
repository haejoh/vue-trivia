<template>
  <div class="quizquestion text-center">
      <h4 v-html="question"></h4>
      <button v-on:click="answeredMade" value="True" class="btn btn-secondary">True</button>
      <button v-on:click="answeredMade" value="False" class="btn btn-secondary">False</button>
  </div>
</template>

<script>

export default {
  name: 'QuizQuestion',
  
  props: {
      question: {
          required: true,
          type: String
      }
  },

  created(){},

  data(){
    return {
        answer: String
    }
  },

  methods: {
      answeredMade(e){
          this.answer = e.target.value;
          this.$emit('answered', this.answer);
      }
  }
}

</script>

<!-- CSS style | Scoped -->
<style scoped>

</style>
