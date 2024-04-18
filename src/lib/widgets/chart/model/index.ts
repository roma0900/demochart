import { createEffect, createEvent, createStore, sample } from "effector";
import { ChartDotsCollectionType, ChartType } from "../../../entities/chart";
import { getChartOptionsByType } from "../../../entities/chart/lib/getChartOptionsByType";

export type ChartWidgetOptionsProps = {
    threeD?: {};
    XY?: {};
    XZ?: {};
  };

export const getModel = () => {
    const options$ = createStore({});
    const updateOptions = createEvent<{type:ChartType, dots:ChartDotsCollectionType}>()
    const chartType$ = createStore<ChartType>(ChartType.chart2d)

    const changedChartViewType = createEvent<ChartType>()

    sample({
        clock: changedChartViewType,
        target: chartType$
    })

    const updateOptionsHandler = ({type, dots}:{type:ChartType, dots:ChartDotsCollectionType})=>{
        return type===ChartType.chart3d
          ? 
              getChartOptionsByType(type, dots.data.map((item)=> [item.x, item.y, item.z]))
          :
              getChartOptionsByType(type, dots.data.map((item)=> [item.x, item.z]))
    }

    // sample({
    //     clock: chartType$,
    //     target:  options$,
    // })
    sample({
        clock: updateOptions,
        fn: (newData)=>updateOptionsHandler({...newData}),
        target: options$,
      });

    return {
        options$,
        chartType$,
        changedChartViewType,
        updateOptions
    }
}

