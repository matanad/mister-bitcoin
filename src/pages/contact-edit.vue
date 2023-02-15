<template>
  <form @submit.prevent="onSave" v-if="contact"
    class="contact-edit contact-details main-layout secondary-container on-secondary-container-text">
    <h1>{{ getTitle }}</h1>
    <img :src="'https://robohash.org/' + contact.name + '?set=set5'" alt="" />
    <input type="text" v-model="contact.name" placeholder="Enter contact name..." />
    <input type="text" v-model="contact.email" placeholder="Enter contact email..." />
    <input type="text" v-model.number="contact.phone" placeholder="Enter contact phone..." />
    <button class="secondary">Save</button>
  </form>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
import { eventBus } from '../services/eventBus.service'
export default {
  data() {
    return {
      contact: null,
    }
  },
  async created() {
    const contactId = this.$route.params._id
    if (contactId) {
      this.contact = await contactService.getById(contactId)
    } else {
      this.contact = contactService.getEmptyContact()
    }
  },
  methods: {
    async onSave() {
      const msg = {
        txt: `Contact ${this.contact.name} has been saved!`,
        type: 'success',
        timeout: 2500,
      }
      await contactService.save(this.contact)
      eventBus.emit('user-msg', { msg, type: 'saved' })
      this.$router.push('/contact')
    },
  },
  computed: {
    getTitle() {
      return (this.contact._id ? 'Edit' : 'Add') + ' Contact'
    }
  }
}
</script>

<style lang="scss">

</style>
