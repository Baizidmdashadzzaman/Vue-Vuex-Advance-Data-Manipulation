import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    searchdata: [],
    developer: "Asadzaman",
  },
  getters: {
    getDatas(state) {
      return state.products;
    },
    getSearchDatas(state) {
      return state.searchdata;
    },
    getDeveloper(state) {
      return state.developer;
    },
    getDataById: (state) => (dataID) => {
      let productData = state.products.find((c) => c.id == dataID);
      // console.log(index);
      return productData
    },
    getLastData(state) {
      if(state.products.length != 0)
      {
        const lastdata = state.products.slice(-1)[0]
        const productid = lastdata.id;
        return productid;
      }
      else
      {
        const productid = 0;
        return productid;
      }
    }
  },
  mutations: {
    initDatas(state, datas) {
      //state.products = datas;
      //console.log(datas);
      //localStorage.setItem('storedata', JSON.stringify(state));
      if(localStorage.getItem('storedata')) {
        this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('storedata')))
				);
			}
    },
    deleteDatasMut(state, dataID) {
      let index = state.products.findIndex((c) => c.id == dataID);
      if (index > -1) {
        state.products.splice(index, 1);
      }
      localStorage.setItem('storedata', JSON.stringify(state));
    },
    addDataMut(state, dataInfo) {
      state.products.push(dataInfo);
      localStorage.setItem('storedata', JSON.stringify(state));
    },
    updateDataMut(state, dataInfo){
      let index = state.products.findIndex((c) => c.id == dataInfo.id);
      if (index > -1) {
        state.products[index] = dataInfo;
      }
      localStorage.setItem('storedata', JSON.stringify(state));
    },
    searchDataMut(state, dataInfo){
      //console.log(dataInfo);
      if(dataInfo == ''){
        if(localStorage.getItem('storedata')) {
          this.replaceState(
            Object.assign(state, JSON.parse(localStorage.getItem('storedata')))
          );
          return state.searchdata = state.products;
        }
      }
      else{
        return state.searchdata = state.products.filter((product) => {
          return product.title.toLowerCase().includes(dataInfo.toLowerCase())
        });
      }
      
    },
  },
  actions: {
    initApp(context) {
      // axios.get("api/get_all_data").then((response) => {
      //   context.commit("initCategories", response.data);
      // });

      //Demo data
      const jsonData = [
        // {
        //   id: "1",
        //   title: "Flowers"
        // },
        // {
        //   id: "2",
        //   title: "Weeks"
        // },
        // {
        //   id: "3",
        //   title: "Sandy"
        // },
        // {
        //   id: "4",
        //   title: "Aguirre"
        // },
        // {
        //   id: "5",
        //   title: "Stacy"
        // }
      ];
      context.commit("initDatas", jsonData);
    },
    deleteData(context, dataID) {
      // return axios
      //   .post("api/delete", JSON.stringify({ id: categoryID }))
      //   .then((response) => {
      //     context.commit("deleteCategory", categoryID);
      //   });
      //console.log(dataID);
      context.commit("deleteDatasMut", dataID);
    },
    addData(context, dataInfo) {
      context.commit("addDataMut", {
        id: 6,
        ...dataInfo
      });
    },
    updateData(context, dataInfo) {
      context.commit("updateDataMut", dataInfo);
    },
    searchData(context, dataInfo){
      context.commit("searchDataMut", dataInfo);
    }
  },
  modules: {
  }
})
