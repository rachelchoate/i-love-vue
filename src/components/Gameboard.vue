<template>
    <div
        id="gameboard"
        v-bind:style="{ height, width }"
    >
        <div
            class="row"
            v-for="(y) in rows"
            :key="y"
        >
            <Pixel
                v-for="(x) in cols"
                :key="x"
                :x="x"
                :y="y"
            />
        </div>
    </div>
</template>

<script>
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
            return this.$store.state.rows;
        },
        cols() {
            return this.$store.state.cols;
        },
    },
};
</script>

<style>
#gameboard {
    position: relative;
    margin: auto;
}
</style>
