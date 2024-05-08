import React, { useRef, useEffect } from 'react';
import { init, getInstanceByDom } from 'echarts';
import type { ECharts } from 'echarts';
import 'echarts-gl';
import { Data, getOptions } from '../lib/getOptions';

export interface Props {
  data: Data[]
  loading?: boolean;
}

function setCanvasSize(canvas:any) {
  const rect = canvas.parentNode.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}

export default function Chart(props:Props): JSX.Element {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      setCanvasSize(chartRef.current);
      chart = init(chartRef.current);
    }
    // Add chart resize listener
    // ResizeObserver is leading to a bit janky UX
    function resizeChart() {
      // setCanvasSize(chartRef.current)

      chart?.resize();
    }
    window.addEventListener('resize', resizeChart);

    // Return cleanup function
    return () => {
      chart?.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, []);

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart.setOption(getOptions(props.data));
    }
  }, [props.data]); // Whenever theme changes we need to add option and setting due to it being deleted in cleanup function

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      props.loading === true ? chart.showLoading() : chart.hideLoading();
    }
  }, [props.loading]);

  return <div ref={chartRef} style={{ minWidth: '100%', minHeight: '100%' }} />;
}
