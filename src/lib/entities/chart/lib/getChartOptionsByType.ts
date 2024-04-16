import { EChartsOption } from "echarts";
import { ChartType } from "../enums/chartType";
import { ChartDataType, ChartDotsCollectionType } from "../types";

export const getChartOptionsByType = (type:ChartType, dots:ChartDotsCollectionType) =>{
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
                    projection: 'orthogonal'
                  },
                  axisPointer: {
                    show: false
                  }
                },
                series: [
                  {
                    type: 'line3D',
                    data: dots.data.map((item:ChartDataType)=> [item.x, item.y, item.z]),
                    symbolSize: 2.5,
                    lineStyle: {
                      width: 2,
                      color: 'black'
                    }
                  }
                ]
              };
        case ChartType.chart2dXY:  
        return {
            xAxis: {
              type: 'value',
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: dots.data.map((item:ChartDataType)=> [item.x, item.y]),
                type: 'line'
              }
            ]
          }  
        case ChartType.chart2dXZ:  
        return {
            xAxis: {
            type: 'value',
            },
            yAxis: {
            type: 'value'
            },
            series: [
            {
                data: dots.data.map((item:ChartDataType)=> [item.x, item.z]),
                type: 'line'
            }
            ]
        } 
    }
}