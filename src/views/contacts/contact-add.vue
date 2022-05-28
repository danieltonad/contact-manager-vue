<template>
  <div class="col-xl-6 col-lg-6 col-md-9 col-11 mx-auto my-4" id="form">
    <div class="form-head">
      Add Contact
    </div>
    <form class="form-panel p-2 py-4 px-3 mx-auto">

        <div class="form-label">
          Name
        </div>
        <div class="form-input">
          <input type="text" placeholder="Enter your name" v-model="name">
        </div>

        <div class="form-label">
          Email
        </div>
        <div class="form-input">
          <input type="email" placeholder="Enter your email" v-model="email">
        </div>

        <div class="form-label">
          Phone
        </div>
        <div class="form-input">
          <input type="tel" placeholder="Enter your phone" v-model="phone">
        </div>

        <button type="submit" class="text-light bg-dark m-2 my-3 text-center" @click.prevent="add"> Submit </button>


    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  
  data() {
    return{
    name: '',
    email: '',
    phone: '',
    }
  },

  methods: {
        ...mapActions(['addContact']),
        add() {
          let data = {name: this.name, phone: this.phone, email: this.email}
          this.addContact(data)
          this.$router.replace("/")
        }
    },
}
</script>

<style scoped>
#form {
  border: 1px solid rgb(217, 218, 219);
  border-radius: 4px;
}

  .form-head{
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1.2px;
    background: rgb(240, 241, 242);
    padding: .7rem 2rem;
    border-radius: 4px;
  }

  .form-panel{
    border: 0px solid ;
    border-radius: 0 0 4px 4px;
    background: rgb(248, 249, 250);
  }

  .form-label{
    font-size: 1rem;
    padding: .2rem .5rem;

  }
  .form-input {
    padding: 0rem .5rem;
  }
  .form-input input {
    width: 100%;
    padding: .5rem .75rem;
    border: 1px solid rgb(217, 218, 219);
    border-radius: 4px;
    font-size: 1.05rem;
  }
  .form-input input:focus {
    outline-color: rgb(16, 86, 214);
  }
  
    button {
    padding: .5rem;
    text-align: center;
    border-radius: 4px;
    width: 96%;
    cursor: pointer;
    transition: .2s
  }

  button:hover{
    background: rgb(42, 43, 43);
  }

</style>