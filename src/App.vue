<template>

<nav class="navbar navbar-expand-md navbar-dark bg-dark ">
  
  <div class="container">
    <router-link :to="{name: 'Home'}" class="navbar-brand"> Contact Manager</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav ">

        <li class="nav-item mx-3">
          <i class="fa fa-home fa-1x" id="nav-ico"></i>
          <router-link :to="{name: 'Home'}" class="hover-nav text-lead">Home</router-link>
        </li>

        <li class="nav-item mx-3">
          <i class="fa fa-plus fa-1x" id="nav-ico"></i>
          <router-link :to="{name: 'contactAdd'}" class="hover-nav text-lead"> Add</router-link>
        </li>

        <li class="nav-item mx-3">
          <i class="fa fa-user fa-1x" id="nav-ico"></i>
          <router-link :to="{name: 'About'}" class="hover-nav text-lead">About</router-link>
        </li>

      </ul>
    </div>
  </div>
</nav>
  
  <div class="container mx-auto">
   <router-view/> 
  </div>

  <div class="footer py-3 bg-dark text-light text-lead text-center"> 
      <p> &copy; {{copyrightDate}} Daniel Solarin</p>
    </div>
  
</template>

<script>
export default {
  data() {
    return{
      url: 'http://jsonplaceholder.typicode.com/users',
      copyrightDate: ''
    }
  },

  methods: {
  },

  mounted() {
      let x = new Date()
      this.copyrightDate = x.getFullYear()
  }


}
</script>

<style>
.nav-item{
  padding: .25rem .25rem;
}
.nav-item a {
  text-decoration: none;
  list-style: none;
  color: rgb(153, 149, 149);
  font-size: 1.075rem;
  transition: .25s;
}

.nav-item a:hover{
  letter-spacing: 5px;
  cursor: pointer;
}

.nav-item a.router-link-exact-active {
  color: rgb(65, 184, 131);
}

#nav-ico {
  color: rgb(65, 184, 131);
  margin-right: 1rem
}

</style>
