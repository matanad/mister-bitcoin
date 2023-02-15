<template>
    <ul class="contact-list">
        <li class="contact-preview  primary-text" v-for="contact in contacts" @click="onChangeRoute(contact._id)"
            :key="contact._id">
            <div class="btn-container">
                <button class="btn-edit material-symbols-outlined"
                    @click.stop="onChangeRoute('edit/' + contact._id)">Edit</button>
                <button class="btn-delete material-symbols-outlined"
                    @click.stop="onRemoveContact(contact._id)">Delete</button>
            </div>
            <contactPreview :contact="contact" />
        </li>
    </ul>

</template>

<script>

import contactPreview from './contact-preview.vue';
export default {
    props: {
        contacts: {
            type: Array,
            required: true,
        },
    },
    methods: {
        onChangeRoute(route) {
            this.$router.push(`/contact/${route}`)
        },
        onRemoveContact(contactId) {
            this.$emit("remove", contactId);
        },
    },
    components: { contactPreview },
}
</script>