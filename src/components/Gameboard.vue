<template>
    <div
        id="gameboard"
        :style="{ height, width }"
    >
        <div
            class="row"
            v-for="(x) in rows"
            :key="x"
        >
            <Pixel
                v-for="(y) in cols"
                :key="y"
                :x="x"
                :y="y"
            />
        </div>
        <div
            id="completed-heart"
            v-if="gameWon"
            :style="{ height, width }"
        >
            <i
                class="ti-heart"
                :style="{ fontSize: height }"
            />
        </div>
    </div>
</template>

<script>
import { arrayFromNumber } from '../utils/arrayUtils.js';
import Pixel from './Pixel.vue';

export default {
    name: 'Gameboard',
    components: { Pixel },
    computed: {
        height() {
            return `${this.$store.state.canvasHeight}px`;
        },
        width() {
            return `${this.$store.state.canvasWidth}px`;
        },
        rows() {
            return arrayFromNumber(this.$store.state.rows);
        },
        cols() {
            return arrayFromNumber(this.$store.state.cols);
        },
        gameWon() {
            return this.$store.state.gameCompleted;
        },
    },
};
</script>

<style>
#gameboard {
    position: relative;
    margin: auto;
}
#completed-heart {
    color: white;
    z-index: 3000 !important;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
#completed-heart i {
    text-shadow: 0 0 20px white;
    opacity: 0.7;
}
</style>
