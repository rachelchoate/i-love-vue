<template>
    <div id="settings">
        <h2>Settings</h2>
        <label html-for="canvas-height-input">
            Game Board Height (in pixels)
        </label>
        <input
            type="number"
            id="canvas-height-input"
            v-model.number="canvasHeight"
            v-on:change="updateCanvasHeight"
        />
        <br />
        <label html-for="canvas-width-input">
            Game Board Width (in pixels)
        </label>
        <input
            type="number"
            id="canvas-width-input"
            v-model.number="canvasWidth"
            v-on:change="updateCanvasWidth"
        />
        <br />
        <label html-for="pixel-height-input">
            Game Piece Height (in pixels)
        </label>
        <input
            type="number"
            id="pixel-height-input"
            v-model.number="pixelHeight"
            v-on:change="updatePixelHeight"
        />
        <br />
        <label html-for="pixel-width-input">
            Game Piece Width (in pixels)
        </label>
        <input
            type="number"
            id="pixel-width-input"
            v-model.number="pixelWidth"
            v-on:change="updatePixelWidth"
        />
    </div>
</template>

<script>
export default {
    name: 'Settings',
    computed: {
        canvasHeight() {
            return this.$store.state.canvasHeight;
        },
        canvasWidth() {
            return this.$store.state.canvasWidth;
        },
        pixelHeight() {
            return this.$store.state.pixelHeight;
        },
        pixelWidth() {
            return this.$store.state.pixelWidth;
        },
    },
    methods: {
        updateCanvasHeight(e) {
            this.$store.commit('updateCanvasHeight', e.target.value);
        },
        updateCanvasWidth(e) {
            this.$store.commit('updateCanvasWidth', e.target.value);
        },
        updatePixelHeight(e) {
            this.$store.commit('updatePixelHeight', e.target.value);
        },
        updatePixelWidth(e) {
            this.$store.commit('updatePixelWidth', e.target.value);
        },
    },
};
</script>

<style>
#settings {
    width: 25%;
    border: 2px solid white;
    border-radius: 15px;
    padding: 50px;
    text-align: right;
    margin: auto;
    margin-top: 25px;
}
#settings h2 {
    text-align: center;
}
#settings input {
    margin-bottom: 20px;
    width: 30%;
}
</style>
