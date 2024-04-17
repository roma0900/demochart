import { createEvent, createStore } from "effector";
import { ChartType } from "../../../entities/chart";


export const $chartType = createStore<ChartType>(ChartType.chart2d)

export const changeChartViewType = createEvent<ChartType>()

$chartType
    .on(changeChartViewType, (state, newData:ChartType) => (state = newData))

// const $chartData = createStore<ChartType>(ChartType.chart2dXY)