<template>
    <article>
        <img :src="'https://robohash.org/' + contact.name + '?set=set5'" :alt="contact.name" />
        <h1 class="contact-name title-large">{{ contact.name }}</h1>
    </article>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true,
        },
    }
}
</script>

<style>

</style>