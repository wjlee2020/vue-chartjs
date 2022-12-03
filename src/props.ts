import { PropType } from 'vue'
import type { ChartType, ChartData, ChartOptions, Plugin } from 'chart.js'

export const CommonProps = {
  data: {
    type: Object as PropType<ChartData>,
    required: true
  },
  options: {
    type: Object as PropType<ChartOptions>,
    default: () => ({})
  },
  plugins: {
    type: Array as PropType<Plugin[]>,
    default: () => []
  },
  datasetIdKey: {
    type: String,
    default: 'label'
  }
} as const

export const Props = {
  type: {
    type: String as PropType<ChartType>,
    required: true
  },
  ...CommonProps
} as const
