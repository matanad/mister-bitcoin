<template>
    <div class="contact-filter">
        <label class="search-icon material-symbols-outlined">
            search
        </label>
        <input @input="onFilter" placeholder="Search" v-model="filterBy.text" type="text">
    </div>
</template>


<script>
export default {
    data() {
        return {
            filterBy: {
                text: '',
            }
        }
    },
    methods: {
        onFilter() {
            this.$store.dispatch({ type: "loadContacts", filterBy: this.filterBy })
        },
    }
}
</script>

<style lang="scss">

</style>
