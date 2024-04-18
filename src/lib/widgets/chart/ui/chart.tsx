
import { CSSProperties, FC, useEffect, useMemo, useState  } from 'react';
import Chart from '../../../entities/chart/ui/chart';
import { ChartDotsCollectionType, ChartType } from '../../../entities/chart';
import { getChartOptionsByType } from '../../../entities/chart/lib/getChartOptionsByType';
import ViewSelector from '../../../features/viewSelector/ui/viewSelector';

import { useEvent, useStore, useUnit } from 'effector-react';
import { getModel } from '../model';

import './chart.css';

export type ChartWidgetProps = {
    dots: ChartDotsCollectionType;
    style?: CSSProperties;
  };

 

export const ChartWidget: FC<ChartWidgetProps> = ({
    dots,
    style
}) => {
    const {options$, chartType$, changedChartViewType, updateOptions} = useMemo(getModel, []);

    const chartType = useStore(chartType$);
    const options = useStore(options$);
    const chartTypeChange = useEvent(changedChartViewType);
    

    useEffect(() => {
      updateOptions({type:chartType,dots})
    }, [chartType, dots, updateOptions]);

    return(
      <div style={{...style}}>
        <ViewSelector onChange={(type) => chartTypeChange(type)}/>
        {chartType === ChartType.chart3d ? (
          <Chart option={options} />
        ) : (
          <div className='chartsContainer'>
            <div className='chartContainer'> 
              <div>Проекция XY</div>
              <Chart option={options} />
            </div>
            <div className='chartContainer'> 
              <div>Проекция XZ</div>
              <Chart option={options} />
            </div>
          </div>
        )}
      </div>
    )
}
