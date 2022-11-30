<template>
  <div class="hello">
    <h1>Vue Vuex Crud</h1>
    <p>
      This is vue app. Using vue , vuex , vue router spa , pwa to build crud (create,read,update,delete) application.
    </p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
