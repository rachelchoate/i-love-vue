<template>
    <div id="settings">
        <h2>Settings</h2>
        <label html-for="cols-input">
            Number of Columns to Generate
        </label>
        <input
            type="number"
            id="cols-input"
            :value="cols"
            v-on:change="updateGameWidth"
            min="3"
            max="25"
        />
        <br />
        <label html-for="rows-input">
            Number of Rows to Generate
        </label>
        <input
            type="number"
            id="rows-input"
            :value="rows"
            v-on:change="updateGameHeight"
            min="3"
            max="25"
        />
    </div>
</template>

<script>
export default {
    name: 'Settings',
    computed: {
        rows() {
            return this.$store.state.rows;
        },
        cols() {
            return this.$store.state.cols;
        },
    },
    methods: {
        updateGameHeight(e) {
            this.$store.commit('updateGameHeight', e.target.value);
        },
        updateGameWidth(e) {
            this.$store.commit('updateGameWidth', e.target.value);
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
