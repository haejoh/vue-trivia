<template>
  <div id="app">

    <!-- NAVIGATION -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <!-- BURGER BUTTON -->
      <button class="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span>🍔</span> <!-- Best button btw -->
      </button>

      <!-- COLLAPSABLE NAV LINKS -->
      <div class="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
      
        <ul class="navbar-nav mr-auto mx-auto">
          <li class="nav-item nav-center">
            <router-link to='/' class="nav-link">Home</router-link>
          </li>
          <li class="nav-item nav-center">
            <router-link to='highscores' class="nav-link">Highscores</router-link>
          </li>
          <li class="nav-item nav-center">
            <router-link to='about' class="nav-link">About</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- MAIN -->
    <div class="row content">

      <!-- LEFT DIV -->
      <div class="col-sm-2">
      </div>

      <!-- CENTER DIV -->
      <div class="col-sm-8">
        <router-view></router-view> <!-- Router view for the router-links -->
      </div>

      <!-- RIGHT DIV -->
      <div class="col-sm-2">
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>

</style>
