<template>
  <v-container>
    <v-row justify="center">
      <h2 class="mx-2 allUser" @click="allpost()">All Users Posts</h2>
    </v-row>
    <p align='center'>cleck to show all posts bellow..</p>
    <v-row>
      <v-col class="mt-8" md="1">
        <div class="left arrow" @click="scrollLeft()">
          <v-btn class="ma-2" color="purple" dark>
            <v-icon dark>mdi-arrow-left-bold</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col md="10">
        <div class="scrolling-wrapper" id="myId" ref="myId">
          <div class="card" @click="optimizePost(user.id)" v-for="user in users" :key="user.id">
            <v-avatar class="mt-1 mb-4" size="120">
              <img src="../../src/assets/musa.jpg" alt="" srcset="">
            </v-avatar>
            <p>{{user.name}}</p>
          </div>
        </div>
      </v-col>

      <v-col class="mt-8" md="1">
         <div class="right arrow" @click="scrollRight()">
            <v-btn class="ma-2" color="purple" dark>
              <v-icon dark>mdi-arrow-right-bold</v-icon>
            </v-btn>
        </div>
      </v-col>
    </v-row>
    <p align='center'>cleck to show there specifi posts bellow..</p>

    <v-row justify="center">
        <h2>See latest Post </h2>
    </v-row>
    <v-row justify="center">
      <v-col class="postCard" @click="postShow = !postShow" md="3" v-for="post in singleIdPosts" :key="post.id">
        <v-row >
          <v-col class="pl-2" md="3">
            <v-avatar size="50">
              {{post.id}} 
            </v-avatar>
          </v-col>
          <v-col class="postTxt" md="8">
            <h4>{{post.title}}</h4>
            <p>{{post.body}}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-if="postShow" @click="postShow = !postShow" class="userPost">

      <h2 class="white--text">this is a post details page</h2>

    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /sr


export default {
  name: "home",
  data:()=>({
    postShow: false,
    users: [],
    userPost:[],
    userId: '',
    userPosId:'',
    singleIdPosts:[]
  }),


  created() {
    var vm= this;
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>{
      vm.userPost= data;
      vm.userPost.forEach(function(element){
        var obj = {
          title:element.title,
          body:element.body,
          id:element.id,
        };
        vm.singleIdPosts.push(obj);
      })
    }),
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>{
        this.users= data;

    })
  },

  watch:{
    userId:{
      handler: function(val) {
            this.calculate(); // call it in the context of your component object
        },
        deep: true
    }
  },

  methods:{
    scrollLeft(){
      let content = document.querySelector(".scrolling-wrapper");
      content.scrollLeft -= 100;
    },
    scrollRight(){
      let content = document.querySelector(".scrolling-wrapper");
      content.scrollLeft += 100;
    },
    optimizePost(id){
      var vm = this
      vm.userId = id;
    },
    calculate(){
      let vm= this;
      vm.singleIdPosts=[];
      vm.userPost.forEach(function(element){
        var obj = {
          title:element.title,
          body:element.body,
          id:element.id,
          userId:element.userId
        }
          if(vm.userId==obj.userId){
            vm.singleIdPosts.push(obj);
          }
      });
    },
    allpost(){
      let vm= this;
      vm.singleIdPosts=[];
      vm.userPost.forEach(function(element){
        var obj = {
          title:element.title,
          body:element.body,
          id:element.id,
          userId:element.userId
        }
        vm.singleIdPosts.push(obj);
      });
    }
  }
  
}
</script>
<style>
  .scrolling-wrapper {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }
  .allUser{
    cursor: pointer;
  }
  .scrolling-wrapper::-webkit-scrollbar {
  display: none;
  }

  .card {
    display: inline-block;
    width: 17%;
    padding: 0 4.2%;
    cursor: pointer;
  }
  .card p{
    text-align: center;
  }
  .userImg{
    border: 2px solid rgb(39, 14, 14);
    cursor: pointer;
  }
  .userImg:hover{
    box-shadow: 6px 10px 10px #16050566;
    transform: translate(0px,-2px);
  }
  
  .Serch{
    border: 1px solid rgba(7, 31, 7, 0.767);
    border-radius: 1.25rem;
  }
  .Serch:focus{
    outline:unset;
  }

  .arrow, .left-button, .right-button{
    display: inline;
  }
  .postCard{
    border: 1px solid darkcyan;
    margin: 2px;
    max-width: 24% !important;
    cursor: pointer;
  }
  .userPost{
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.616);
    position: absolute;
    top: 0;
    left: 0;
  }
  .postTxt{
    height: 10rem;
    overflow: hidden;
  }

</style>
