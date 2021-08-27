<template>
    <div id="game">
        <button
            id="generate-game-btn"
            v-on:click="start"
        >
            Start a New Game
        </button>
        <br />
        <div style="text-align:left;">
            <b>Moves: </b>
            {{ moves }}
            &nbsp;|&nbsp;
            <b v-if="gameCompleted">You Won!</b>
        </div>
        <hr />
        <Gameboard v-if="gameLoaded" />
    </div>
</template>

<script>
import Gameboard from '../components/Gameboard.vue';

export default {
    name: 'Game',
    components: {
        Gameboard,
    },
    computed: {
        gameLoaded() {
            return this.$store.state.currentPixels.length > 0;
        },
        gameCompleted() {
            return this.$store.state.gameCompleted;
        },
        moves() {
            return this.$store.state.moves;
        },
    },
    methods: {
        start() {
            this.$store.commit('initializeGame');
        },
    },
};
</script>

<style>
    #game {
        padding: 20px;
    }
</style>
