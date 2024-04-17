import { ChartType } from '../../../entities/chart';

export const getChartOptionsByType = (type:ChartType, data:number[][]) =>{
    switch (type) {
        case ChartType.chart3d:
            return {
                tooltip: {},
                backgroundColor: '#fff',
                xAxis3D: {
                  type: 'value'
                },
                yAxis3D: {
                  type: 'value'
                },
                zAxis3D: {
                  type: 'value'
                },
                grid3D: {
                  viewControl: {
                    projection: 'perspective'
                  },
                  axisPointer: {
                    show: false
                  }
                },
                series: [
                  {
                    type: 'line3D',
                    data: data,
                    symbolSize: 2.5,
                    lineStyle: {
                      width: 2,
                      color: 'black'
                    }
                  }
                ]
              };
        case ChartType.chart2d:  
        return {
            tooltip: {},
            xAxis: {
              type: 'value',
            },
            yAxis: {
              type: 'value'
            },
            dataZoom: [
              {
                type: 'inside',
                start: 0,
                end: 100,
                orient: "vertical",
              },
              {
                start: 0,
                end: 100,
              },
              {
                start: 0,
                end: 100,
                orient: "vertical",
              },
              {
                type: 'inside',
                start: 0,
                end: 100,
              },
            ],
            series: [
              {
                data: data,
                type: 'line'
              }
            ]
          }  
    }
}