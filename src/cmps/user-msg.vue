<template>
    <Transition>
        <div v-if="msg" :class="`user-msg ${type}`">
            <div class="icon">
                <span class="material-symbols-outlined">
                    {{ getType }}
                </span>
            </div>
            <span>{{ msg.txt }}</span>
        </div>
    </Transition>
</template>

<script>
import { eventBus } from '@/services/eventBus.service.js'
export default {
    data() {
        return {
            type: null,
            msg: null,
        }
    },
    created() {
        this.unListen = eventBus.on('user-msg', this.showMsg)
    },
    unmounted() {
        this.unListen()
    },
    methods: {
        showMsg({ msg, type }) {
            this.type = type
            this.msg = msg
            setTimeout(() => (this.msg = null), msg.timeout || 1500)
        },
    },
    computed: {
        getType() {
            let type = this.type
            switch (type) {
                case 'saved':
                    type = 'sync_saved_locally'
                    break;
                default:
                    break;
            }
            return type
        }
    }
}
</script>