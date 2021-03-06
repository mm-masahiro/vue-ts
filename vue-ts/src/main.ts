import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import firebase from "firebase/app";
import "firebase/firestore";
import store from './store';

const app = createApp(App)

// firebase
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyChB7DsnzGBaAv_LkrMLKdCCs_0-UlONCo",
	authDomain: "vue-ts-dec8d.firebaseapp.com",
	databaseURL: "https://vue-ts-dec8d-default-rtdb.firebaseio.com",
	projectId: "vue-ts-dec8d",
	storageBucket: "vue-ts-dec8d.appspot.com",
	messagingSenderId: "1039481862762",
	appId: "1:1039481862762:web:fc1c65242ca45f7ea96813"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// app.use(store).mount('#app')
app.use(router)
app.use(store)
app.mount('#app')
