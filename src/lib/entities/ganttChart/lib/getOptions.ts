// @ts-nocheck
import * as echarts from 'echarts';
import dayjs from 'dayjs';

dayjs.locale('ru')

enum DataKeys {
  Category = 'category',
  StartDate = 'startDate',
  EndDate = 'endDate'
}

export type Data = {
  [DataKeys.Category]: string
  [DataKeys.StartDate]: number | string
  [DataKeys.EndDate]: number | string
}

export const getOptions = (data:Data[])=>{
  return {
    tooltip: {},
    animation: false,
    title: {
      text: 'Диаграмма Ганта',
      left: 'center'
    },
    dataZoom: [
      {
        type: 'slider',
        xAxisIndex: 0,
        filterMode: 'weakFilter',
        start: 0,
        end: 100,
        handleIcon:
          'path://M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        showDetail: false
      },
      {
        type: 'inside',
        id: 'insideX',
        xAxisIndex: 0,
        filterMode: 'weakFilter',
        start: 0,
        end: 26,
        zoomOnMouseWheel: 'ctrl',
        moveOnMouseMove: true
      },
      {
        type: 'slider',
        yAxisIndex: 0,
        zoomLock: true,
        width: 10,
        right: 80,
        top: 60,
        bottom: 20,
        start: 0,
        end: 80,
        handleSize: 0,
        showDetail: false
      },
      {
        type: 'inside',
        id: 'insideY',
        yAxisIndex: 0,
        start: 95,
        end: 100,
        zoomOnMouseWheel: false,
        moveOnMouseMove: true,
        moveOnMouseWheel: true
      }
    ],
    xAxis: {
      type: 'time',
      position: 'top',
      splitLine: {
        show: true,

      },
      axisLine: {
        show: false
      },
      axisLabel: {
        inside: false,
        align: 'center',
        formatter: val => `${dayjs(val).format('MMM DD')}`
      },
      // min: function (value) {
      //   return value.min - 2;
      // }
    },
    yAxis: {
      type: 'category',
      inverse: true,
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        show: true,
      },
      offset: 4,

      data: data.map(item=>item.category)
    },
    series: [
      {
        id: 'ganttSeries',
        type: 'custom',
        renderItem: renderGanttItem,
        dimensions: [DataKeys.Category, DataKeys.StartDate, DataKeys.EndDate],
        encode: {
          x: [DataKeys.StartDate, DataKeys.EndDate],
          y: DataKeys.Category,
        },
        data: data.map(item=>[item[DataKeys.Category],item[DataKeys.StartDate], item[DataKeys.EndDate]])
      },
    ]
  };
}
function renderGanttItem(params, api) {
  const categoryIndex = api.value(DataKeys.Category);

  const startTime = api.coord([api.value(DataKeys.StartDate), categoryIndex]);
  const endTime = api.coord([api.value(DataKeys.EndDate), categoryIndex]);

  const barLength = endTime[0] - startTime[0];
  const barHeight = api.size([0, 1])[1] * 0.8;
  const x = startTime[0];
  const y = startTime[1] - barHeight/2;
  const rectNormal = clipRectByRect(params, {
    x: x,
    y: y,
    width: barLength,
    height: barHeight
  });
  return {
    type: 'group',
    children: [
      {
        type: 'rect',
        ignore: !rectNormal,
        shape: rectNormal,
        style: api.style()
      },
    ]
  };
}
function clipRectByRect(params, rect) {
  return echarts.graphic.clipRectByRect(rect, {
    x: params.coordSys.x,
    y: params.coordSys.y,
    width: params.coordSys.width,
    height: params.coordSys.height
  });
}

