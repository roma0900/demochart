import { createStore } from "effector";
import { ChartType } from "src/lib/entities/chart";


export const $chartType = createStore<ChartType>(ChartType.chart2dXY)

// const $chartData = createStore<ChartType>(ChartType.chart2dXY)