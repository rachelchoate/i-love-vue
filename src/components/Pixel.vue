<template>
    <div
        :class="activeClass"
        :style="{ background, height, width, top, left }"
        v-on:click="select"
    >
        <div class="locked-icon" v-if="locked" :style="{ height, width }">
            <div class="icon" />
        </div>
    </div>
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
            const pos = this.x * this.$store.state.pixelHeight;
            return `${pos}px`;
        },
        left() {
            const pos = this.y * this.$store.state.pixelWidth;
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
            return this.$store.state.currentPixels[this.x][this.y].locked;
        },
        completed() {
            return this.$store.state.gameCompleted;
        },
        activeClass() {
            let className = 'pixel';
            if (this.active) className += ' active';
            else if (this.completed) className += ' complete';
            else if (this.locked) className += ' locked';
            return className;
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
    z-index: 1000;
}
.active,
.pixel:hover {
    transform: scale(1.2);
    cursor: pointer;
    box-shadow: 0 0 10px black;
    z-index: 2000;
}
.complete {
    z-index: -1;
}
.complete:hover,
.locked:hover {
    transform: none;
    cursor: default;
    box-shadow: none;
    z-index: inherit;
}
.locked-icon {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
.locked-icon .icon {
    background: black;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: inline-block;
}
</style>
