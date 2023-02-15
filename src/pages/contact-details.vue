<template>
    <article v-if="contact" class="contact-details primary on-primary-text">
        <img :src="'https://robohash.org/' + contact.name + '?set=set5'" alt="" />
        <h2>Name: {{ contact.name }}</h2>
        <h3>Email: {{ contact.email }}</h3>
        <h3>Phone: {{ contact.phone }}</h3>
        <RouterLink to="/contact"> Back </RouterLink>
    </article>
</template>

<script>
import { contactService } from "@/services/contact.service.js";
export default {
    data() {
        return {
            contact: null,
        };
    },
    async created() {
        const contactId = this.$route.params._id
        this.contact = await contactService.getById(contactId)
    },
};
</script>