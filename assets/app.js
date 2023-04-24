/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

import { createApp } from 'vue';
import App from './js/App.vue';
// import Vue from 'vue';

createApp(App).mount('#vue-app');
// new Vue({
//     el: '#app', // where <div id="app"> in your DOM contains the Vue template
// });