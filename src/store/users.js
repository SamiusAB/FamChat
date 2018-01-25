const state = {
    all: {},
    currentUser: 'mr_b'
}

const mutations ={
    SET_USER (state, { user }) {
        state.all = {...state.all, [user.id]: user.data()}
    }
}

const actions = {
    seed ({rootState}){
        let userRef = rootState.db.collection('users')

        userRef.doc('mr_a').set({
            firstName: 'Mikeus',
            lastName: 'A'
        })
        
        userRef.doc('mr_b').set({
            firstName: 'Avi',
            lastName: 'G'
        })

        userRef.doc('mr_c').set({
            firstName: 'Fabien',
            lastName: 'A'
        })
    },
    async get ({ commit, rootState }) {
        let userRef = rootState.db.collection('users')
        let users = await userRef.get()

        users.forEach(user => commit('SET_USER', { user }))
    }
}
export default {
    namespaced: true, state, mutations, actions
}