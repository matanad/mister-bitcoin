<template>
    <div class="mdc-circular-progress" style="width:26px;height:26px;" role="progressbar"
        aria-label="Example Progress Bar" aria-valuemin="0" aria-valuemax="1">
        <div class="mdc-circular-progress__determinate-container">
            <svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg">
                <circle class="mdc-circular-progress__determinate-track" cx="16" cy="16" r="12.5" stroke-width="3" />
                <circle class="mdc-circular-progress__determinate-circle" cx="16" cy="16" r="12.5"
                    stroke-dasharray="78.54" stroke-dashoffset="78.54" stroke-width="3" />
            </svg>
        </div>
        <div class="mdc-circular-progress__indeterminate-container">
            <div class="mdc-circular-progress__spinner-layer">
                <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
                    <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="12.5" stroke-dasharray="78.54" stroke-dashoffset="39.27"
                            stroke-width="3" />
                    </svg>
                </div>
                <div class="mdc-circular-progress__gap-patch">
                    <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="12.5" stroke-dasharray="78.54" stroke-dashoffset="39.27"
                            stroke-width="2.4" />
                    </svg>
                </div>
                <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
                    <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="12.5" stroke-dasharray="78.54" stroke-dashoffset="39.27"
                            stroke-width="3" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { MDCCircularProgress } from '@material/circular-progress';
export default {
    mounted() {
        const circularProgress = new MDCCircularProgress(document.querySelector('.mdc-circular-progress'));
        this.$emit('circular', circularProgress)
    },
    components: { MDCCircularProgress },
}
</script>