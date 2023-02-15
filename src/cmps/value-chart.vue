<template>
  <div class="chart-container">
    <Line v-if='chartData.labels' id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { bitcoinService } from "../services/bitcoin.service.js";
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: "BarChart",
  components: { Line },
  data() {
    return {
      chartData: {
        labels: null,
        datasets: [
          {
            label: "Value (USD)",
            backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--md-sys-color-primary').trim(),
            borderColor: getComputedStyle(document.documentElement).getPropertyValue('--md-sys-color-primary-container').trim(),
            data: null,
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },

    };
  },
  async created() {
    this.prices = await bitcoinService.getMarketPriceHistory();
    this.chartData.labels = this.prices.values.map(value => {
      const date = new Date(value.x * 1000)
      return `${date.getDate() + 1}.${date.getMonth() + 1}`
    })
    this.chartData.datasets[0].data = this.prices.values.map(value => value.y)
  },
};
</script>