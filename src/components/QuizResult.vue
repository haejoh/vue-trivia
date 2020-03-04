<template>
  <div class="quizresult text-center list-group-item" ref="resultDiv">
      <p v-html="question.question"></p>
      <button type="button" ref="btnTrue"  class="btn btn-secondary" disabled>True</button>
      <button type="button" ref="btnFalse" class="btn btn-secondary" disabled>False</button>
  </div>
</template>

<script>

export default {
  name: 'QuizResult',
  
  props: {
      question: {
          required: true,
          type: Object
      },
  },

  mounted(){
      if(this.question.correctA == this.question.userA){
          if(this.question.correctA == "True"){
              this.$refs.btnTrue.className += ' btn-success';
          } else{
              this.$refs.btnFalse.className += ' btn-success';
          }  
      }
      else {

          if(this.question.userA == "True"){
              this.$refs.btnFalse.className += ' btn-danger';
              this.$refs.btnTrue.className += ' btn-success';
          } else {
              this.$refs.btnFalse.className += ' btn-success';
              this.$refs.btnTrue.className += ' btn-danger';
          }       
      }

      //There is extra stuff at the end of the array like _obs_ that creates extra Quizresult components
      //This checks if the question is undefined or not and removes the extra buttons that gets created
      if(!this.question.question){
          this.$refs.resultDiv.remove();
      }
      
      
  },

  // data(){},

  methods: {}
}

</script>

<!-- CSS style | Scoped -->
<style scoped>

</style>
