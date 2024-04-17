import { createEffect, createEvent, createStore, sample } from "effector";
import { ChartType } from "../../../entities/chart";


export const $chartType = createStore<ChartType>(ChartType.chart2d)

export const changeChartViewType = createEvent<ChartType>()

$chartType
    .on(changeChartViewType, (state, newData:ChartType) => (state = newData))

// const $chartData = createStore<ChartType>(ChartType.chart2dXY)
 


export const getModel = () => {
    const options$ = createStore(null);
    const chartType$ = createStore(null);

    const someFx = createEffect((type:ChartType) => {
        return options$
    })


    sample({
        clock:  chartType$,
        fn: someFx,
        target: options$
    })

    return {
        options$
    }
}

