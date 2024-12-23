import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// This took a while to figure out, but the following line is necessary to import the Swarmakit Vue components
import '@swarmakit/vue/dist/style.css';

createApp(App).mount('#app')
