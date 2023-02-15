<template>
  <main class="home">
    <div class="home-hero">
      <h1 class="greeting display-large on-background-text">{{ greeting }}</h1>
      <h3 class="subtitle display-small on-background-text">
        Your balance: {{ user.balance }}
      </h3>
      <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 100" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop>
            <stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)"
          d="M0,50L120,56.7C240,63,480,77,720,71.7C960,67,1200,43,1440,40C1680,37,1920,53,2160,55C2400,57,2640,43,2880,43.3C3120,43,3360,57,3600,55C3840,53,4080,37,4320,40C4560,43,4800,67,5040,76.7C5280,87,5520,83,5760,71.7C6000,60,6240,40,6480,28.3C6720,17,6960,13,7200,18.3C7440,23,7680,37,7920,36.7C8160,37,8400,23,8640,25C8880,27,9120,43,9360,48.3C9600,53,9840,47,10080,50C10320,53,10560,67,10800,63.3C11040,60,11280,40,11520,36.7C11760,33,12000,47,12240,48.3C12480,50,12720,40,12960,41.7C13200,43,13440,57,13680,55C13920,53,14160,37,14400,26.7C14640,17,14880,13,15120,25C15360,37,15600,63,15840,65C16080,67,16320,43,16560,28.3C16800,13,17040,7,17160,3.3L17280,0L17280,100L17160,100C17040,100,16800,100,16560,100C16320,100,16080,100,15840,100C15600,100,15360,100,15120,100C14880,100,14640,100,14400,100C14160,100,13920,100,13680,100C13440,100,13200,100,12960,100C12720,100,12480,100,12240,100C12000,100,11760,100,11520,100C11280,100,11040,100,10800,100C10560,100,10320,100,10080,100C9840,100,9600,100,9360,100C9120,100,8880,100,8640,100C8400,100,8160,100,7920,100C7680,100,7440,100,7200,100C6960,100,6720,100,6480,100C6240,100,6000,100,5760,100C5520,100,5280,100,5040,100C4800,100,4560,100,4320,100C4080,100,3840,100,3600,100C3360,100,3120,100,2880,100C2640,100,2400,100,2160,100C1920,100,1680,100,1440,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z">
        </path>
      </svg>
      <div class="home-hero-img">
      </div>
    </div>
  </main>
</template>

<script>
import { userService } from '../services/user.service';

export default {
  data() {
    return {
      user: userService.getUser()
    }
  },
  computed: {
    greeting() {
      const today = new Date()
      const curHr = today.getHours()

      if (curHr < 5) return 'Good night ' + this.user.name
      if (curHr < 12) return 'Good morning ' + this.user.name
      if (curHr < 18) return 'Good afternoon ' + this.user.name
      if (curHr < 24) return 'Good evening ' + this.user.name

    }
  }
}
</script>
