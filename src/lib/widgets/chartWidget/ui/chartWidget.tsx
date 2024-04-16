
import { FC, useMemo  } from 'react';
import Chart from '../../../shared/ui/chart/chart';
import { ChartDotsCollectionType } from '../../../entities/chart';
import { getChartOptionsByType } from '../../../entities/chart/lib/getChartOptionsByType';
import ChartTypeSelector from '../../../features/chartTypeSelector/ui/chartTypeSelector';

export type ChartWidgetProps = {
    dots: ChartDotsCollectionType;
  };

export const ChartWidget: FC<ChartWidgetProps> = ({
    dots
}) => {
    const chartType = useStore($chartType);
    const optionsForChart = useMemo(() => {
        return getChartOptionsByType($chartType, dots);
      }, [chartType, dots]);
    return(
      <>
        <ChartTypeSelector />
        <Chart option={optionsForChart} />
      </>
    )
}