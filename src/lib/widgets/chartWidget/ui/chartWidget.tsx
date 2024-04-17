
import { FC, useEffect, useState  } from 'react';
import Chart from '../../../entities/chart/ui/chart';
import { ChartDotsCollectionType, ChartType } from '../../../entities/chart';
import { getChartOptionsByType } from '../lib/getChartOptionsByType';
import ChartTypeViewSelector from '../../../features/chartTypeSelector/ui/chartViewSelector';

import { useEvent, useStore, useUnit } from 'effector-react';
import { $chartType, changeChartViewType, getModel } from '../model';

import './chartWidget.css';

export type ChartWidgetProps = {
    dots: ChartDotsCollectionType;
  };

  export type ChartWidgetOptionsProps = {
    threeD?: {};
    XY?: {};
    XZ?: {};
  };

export const ChartWidget: FC<ChartWidgetProps> = ({
    dots
}) => {
    const chartType = useStore($chartType);
    const chartTypeChange = useEvent(changeChartViewType);
    const [options, setOptions] = useState<ChartWidgetOptionsProps>({
      threeD: {},
      XY: {},
      XZ: {},
    })
    const {options$} = getModel();
   useEffect(() => {
      chartType === ChartType.chart3d 
      ?
        setOptions(prev=>{
          return{ ...prev, threeD:getChartOptionsByType(chartType, dots.data.map((item)=> [item.x, item.y, item.z]))}})
      :
        setOptions(prev=>{
          return {
            ...prev,
            XY:getChartOptionsByType(chartType, dots.data.map((item)=> [item.x, item.y])),
            XZ:getChartOptionsByType(chartType, dots.data.map((item)=> [item.x, item.z])),
          }
        }
        );
      }, [chartType, dots]);
    return(
      <>
        <ChartTypeViewSelector  onChange={(type) => chartTypeChange(type)}/>
        {chartType === ChartType.chart3d ? (
          <Chart option={options?.threeD} />
        ) : (
          <div className='chartContainer'>
            <div>
              <div>Проекция XY</div>
              <Chart option={options?.XY} style={{width: "600px", height: "600px" }} />
            </div>
            <div>
              <div>Проекция XZ</div>
              <Chart option={options?.XZ} style={{width: "600px", height: "600px" }}/>
            </div>
          </div>
        )}
      </>
    )
}