<template>
  <div class="col-lg-7 col-xl-7 col-md-8 col-11 py-2 mx-auto">
      <div class="each-contact my-3 p-2 py-4 container-fluid mx-auto" v-for="contact in getContacts"  :key="contact.id">
         
            <div id="title"> 
                {{contact.name}}
                <span @click="toggleInnerText(contact)">
                    <i class="fa fa-angle-double-down fa-1x" id="toggle-ico"></i>
                </span>
                

                <div id="actions">
                    <span>
                        <router-link :to="{name: 'contactEdit', params: {id: contact.id}}">
                            <i class="fa fa-edit fa-1x" id="toggle-ico-edit"></i>
                        </router-link>
                        
                    </span>

                    <span @click="delContact(contact.id)">
                     <i class="fa fa-times fa-1x" id="toggle-ico-del"></i>
                    </span>
                    
                </div>
                
            </div>

            <div id="innerDetails" class="col-11 mx-auto mt-4 my-2 py-3"  v-show="contact.toggleShow">
                <b id="innerTxt">Email</b>: {{contact.email}}
                <hr>
                <b id="innerTxt">Phone</b>: {{contact.phone}}
            </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'ContactsShow',

    computed: mapGetters(['getContacts']),

    methods: {
        ...mapActions(['fetchContacts','delContact']),

        toggleInnerText(contact){
            contact.toggleShow = !contact.toggleShow
        },

    },

    created() {
        this.fetchContacts()
    },

}
</script>

<style scoped>
    .each-contact{
        border: 1px solid rgb(200, 201, 202);
        border-radius: 2px;
    }

    #toggle-ico {
        cursor: pointer;
        margin: .5px 5px;
        color: rgb(65, 184, 131) !important;
    }

    #title{
        font-weight: 450;
    }

    #actions{
        float: right;
        transition: .25s;
    }

    span {
        margin: 0 .5rem
    }

    #toggle-ico-edit{
        color: rgb(107, 98, 104) !important;
    }

    #toggle-ico-del {
        color: rgb(230, 36, 156) !important;
        cursor: pointer;
    }

    #innerDetails {
        border: 1px solid rgb(200, 201, 202);
        border-radius: 2px;
    }

    #innerDetails #innerTxt{
        margin-left: 1.2rem
    }

</style>