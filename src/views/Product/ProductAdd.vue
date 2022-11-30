<template>
    <div class="about">
      <h1 style="text-align: center;">This is product add page</h1>
      <br/>

      <div class="card" style="max-width: 60rem;margin: auto;">
        <div class="card-body">
          <h5 class="card-title">Enter data to add product</h5>
          <router-link :to="{ name: 'product'}"
           class="btn btn-primary" style="float:right">Back</router-link>
          <br/>
            <hr/>
            
            <form @submit.prevent="onSubmit" >
              <div class="form-group">
                <label for="exampleInputEmail1">Product name</label>
                <input type="text" v-model="product.title" class="form-control" placeholder="Enter product name" required>
              </div>
              <br/>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>

    </div>
  </template>
   <script>
   export default {
       name:"productadd",
       data(){
           return {
              product: {
                title: "",
                id:"",
              },
           }
       },
       created(){ 
         this.getData();
         //console.log(this.$store.getters.getLastData);
       },   
       mounted () {
         window.scrollTo(0, 0);
       },
       methods:{
            onSubmit() {
              this.$store.dispatch("addData", this.product).then(() => {
                this.$router.push("/product");
              });
            },
            getData(){
              this.product.id = parseInt(this.$store.getters.getLastData) + 1;
            },
       }
   }
   </script>