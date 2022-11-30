<template>
    <div class="about">
      <h1 style="text-align: center;">This is product page</h1>
      <br/>

      <div class="card" style="max-width: 60rem;margin: auto;">
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <h5 class="card-title">Product list</h5>
            </div>
            <div class="col-4">
              <input v-on:keyup="searchData" type="text" class="form-control" />
            </div>
            <div class="col-2">
              <router-link :to="{ name: 'productadd'}"
              class="btn btn-block btn-primary" style="float:right">Add</router-link>
            </div>
          </div>
          <br/>
            <hr/>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Category</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in alldata" :key="index">
                  <th scope="row">{{item.id}}</th>
                  <td>{{item.title}}</td>
                  <td>
                    <router-link :to="{ name: 'productedit', params: { id: item.id } }" 
                    class="btn btn-primary">Edit</router-link>
                  </td>
                  <td>
                    <button @click="deleteData(item.id)" class="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>

        </div>
      </div>
      <br/><br/><br/>
    </div>
  </template>
  <script>
  export default {
      name:"productview",
      data(){
          return {
              alldata:[],
          }
      },
      created(){
           //console.log(this.$store.getters.getDataById(3));
           this.getResults();     
      },   
      mounted () {
        window.scrollTo(0, 0);
      },
      methods:{
        deleteData(e)
        {
           this.$store.dispatch('deleteData', e)
        },
        getResults()
        {
            this.$store.dispatch('searchData', '');
            this.alldata = this.$store.getters.getDatas;
        },
        searchData(e)
        {
          this.$store.dispatch('searchData', e.target.value);
          this.alldata = this.$store.getters.getSearchDatas;
        }
      }
  }
  </script>