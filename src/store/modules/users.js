const state = {
    contacts: [],
    url: 'http://jsonplaceholder.typicode.com/users',
}

// get contacts from state to any component
const getters = {
    getContacts: (state) => state.contacts,
    getUpdateDetails: (state,id) => state.contact[id]
}

// actoin to fetch contacts api and comit mutation
const actions = {
    // load json placeholder 
    async fetchContacts({commit}) {
           fetch(state.url)
           .then((json) => json.json())
           .then((data) => {
                commit('setContacts', data)
           })
           .catch((err) => {
               console.log(err);
           })
       
    },

    // add contact
    addContact({commit}, data) {
        let id = state.contacts.length + 1,
            pkg = { id, name: data.name, phone: data.phone, email: data.email, toggleShow: false}
        commit('newContact', pkg)
    },

    // update contact
    updateContact({ commit }, pkg) {
        commit('updateContact', pkg)
    },

    // delete contact
    delContact({commit},id) {
        commit('deleteContact',id)
    }
}
 
const mutations = {
    setContacts: (state, data) => {
        if(state.contacts.length < 1) {
           data.forEach(details => {
            let obj = { id: details.id, name: details.name, email: details.email, phone: details.phone, toggleShow: false }
            //
            state.contacts.push(obj)
            }) 
        }
        
    },
    newContact: (state, data) =>  {
        state.contacts.unshift(data)

    },
    updateContact: (state, data) => {
        let index = state.contacts.findIndex((obj, index) => obj.id == data.id)
        state.contacts[index].name = data.name
        state.contacts[index].email = data.email
        state.contacts[index].phone = data.phone
    },
    deleteContact: (state, id) => state.contacts = state.contacts.filter(data => data.id !== id)

}

export default {
    state,
    getters,
    actions,
    mutations
}