import Vue from 'vue';
import Vuex from 'vuex';

import users from './users'
import conversations from './conversations'

import 'babel-polyfill';

import Firebase from 'firebase';
import 'firebase/firestore';
// import config from '../config';

var config = {
    apiKey: "AIzaSyDWeBL1ifri7Icf3YyS-0Stp6ROCJ_60dg",
    authDomain: "aberachat.firebaseapp.com",
    databaseURL: "https://aberachat.firebaseio.com",
    projectId: "aberachat",
    storageBucket: "",
    messagingSenderId: "294092861639"
};

Firebase.initializeApp(config);

Vue.use(Vuex)
const state = {
    db: Firebase.firestore()
}

export default new Vuex.Store({
    state: state,
    modules: {
        users: users,
        conversations: conversations
    }
})
    
