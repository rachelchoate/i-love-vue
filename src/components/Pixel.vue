<template>
    <div
        :class="activeClass"
        v-bind:style="{ background, height, width, top, left }"
        v-on:click="select"
    />
</template>

<script>
export default {
    name: 'Pixel',
    props: ['x', 'y'],
    computed: {
        height() {
            return `${this.$store.state.pixelHeight}px`;
        },
        width() {
            return `${this.$store.state.pixelWidth}px`;
        },
        top() {
            const pos = this.y * this.$store.state.pixelHeight;
            return `${pos}px`;
        },
        left() {
            const pos = this.x * this.$store.state.pixelWidth;
            return `${pos}px`;
        },
        background() {
            const { r, g, b } = this.$store.state.currentPixels[this.x][this.y];
            return `rgb(${r}, ${g}, ${b})`;
        },
        active() {
            if (this.$store.state.selectedPixel === null) return false;
            return this.$store.state.selectedPixel[0] === this.x && this.$store.state.selectedPixel[1] === this.y;
        },
        locked() {
            if (this.$store.state.currentPixels[this.x][this.y].locked) return true;
            if (this.$store.state.gameCompleted) return true;
            return false;
        },
        activeClass() {
            return `pixel ${this.locked ? 'locked' : ''} ${this.active ? 'active' : ''}`;
        },
    },
    methods: {
        select() {
            if (!this.locked) this.$store.commit('selectPixel', [this.x, this.y]);
        },
    },
};
</script>

<style>
.pixel {
    position: absolute;
}
.active,
.pixel:hover {
    transform: scale(1.2);
    cursor: pointer;
    box-shadow: 0 0 10px black;
    z-index: 2000;
}
.locked:hover {
    transform: none;
    cursor: default;
    box-shadow: none;
    z-index: inherit;
}
.locked::before {
    //border-radius: 50%;
    content: '';
    position: absolute;
    height: 50%;
    width: 50%;
    border-radius: 50%;
    background: black;
    top: 25%;
    left: 25%;
}
</style>
