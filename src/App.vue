<template>
    <div id="app">
        <h1>i love vue</h1>
        <div class="navbar">
            <router-link
                v-for="(view) in views"
                :key="view.path"
                :to="view.path"
            >
                {{ view.name }}
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Views from './views/index.js';
export default {
    name: 'App',
    computed: {
        views() {
            return Views;
        },
    },
};
</script>

<style>
    @import './assets/themify-icons/themify-icons.css';
    body {
        margin: 0;
        padding: 0;
        background: black;
        color: white;
        text-align: center;
    }
    #app {
        padding: 20px;
    }
    .navbar {
        width: 100%;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
    }
    .navbar a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        padding: 10px;
    }
    .navbar .router-link-exact-active {
        border-bottom: 2px solid lime;
    }
</style>
