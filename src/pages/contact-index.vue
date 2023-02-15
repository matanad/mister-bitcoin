<template>
    <main class="contact-index main-layout full">
        <!-- <ContactsFilter @filter="onSetFilterBy" /> -->
        <ContactList v-if="contacts" :contacts="contacts" @remove="removeContacts" />
    </main>
</template>

<script>
import ContactList from '@/cmps/contact-list.vue'
import ContactsFilter from '@/cmps/contact-filter.vue'

import { contactService } from '@/services/contact.service.js'
import { eventBus } from '@/services/eventBus.service.js'

export default {
    computed: {
        contacts() {
            return this.$store.getters.contacts;
        },
    },
    async created() {
        this.$store.dispatch({ type: "loadContacts" })
    },
    methods: {
        async loadContacts() {
            this.contacts = await contactService.query(this.filterBy)
        },
        
        async removeContacts(contactId) {
            const msg = {
                txt: `Contact ${contactId} deleted.`,
                type: 'success',
                timeout: 2500,
            }
            this.$store.dispatch({ type: "removeContact", contactId })
            eventBus.emit('user-msg', { msg, type: 'delete' })
        },
    },
    components: {
        ContactList,
        ContactsFilter
    }
}
</script>