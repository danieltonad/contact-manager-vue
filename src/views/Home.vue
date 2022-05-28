<template>
  <div class="home">
    
    <Info />
    <Contacts />
  </div>
</template>

<script>
// @ is an alias to /src
import Info from '../components/Info'
import Contacts from '../components/ContactsShow.vue'

export default {
  name: 'Home',
  components: {
    Info,
    Contacts
  },
  methods: {
    dan() {

    }
  }
}
</script>
