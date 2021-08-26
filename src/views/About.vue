<template>
    <div id="about">
        An example web application built to familiarize myself with:
        <ul>
            <li>the Vue.js framework,</li>
            <li>the Vuex state management framework,</li>
            <li>and Vue unit test syntax.</li>
        </ul>
        Inspired by the mobile app 'I Love Hue',
        <b>i love vue</b> is a small application that
        dynamically generates a matrix of gradient colors,
        and then shuffles that gradient on a game board for the
        player to arrange correctly.
    </div>
</template>

<script>
export default {
    name: 'About',
};
</script>

<style>
    #about {
        width: 25%;
        border: 2px solid white;
        border-radius: 15px;
        padding: 50px;
        text-align: left;
        margin: auto;
        margin-top: 25px;
    }
</style>
