import { ChartType } from "../enums/chartType";

// export const getChartOptions = (type:ChartType) =>{
//     switch (type) {
//         case ChartType.chart3d:
//             return {
//                 tooltip: {},
//                 backgroundColor: '#fff',
//                 xAxis3D: {
//                   type: 'value'
//                 },
//                 yAxis3D: {
//                   type: 'value'
//                 },
//                 zAxis3D: {
//                   type: 'value'
//                 },
//                 grid3D: {
//                   viewControl: {
//                     projection: 'perspective'
//                   },
//                   axisPointer: {
//                     show: false
//                   }
//                 },
//                 series: [
//                   {
//                     type: 'line3D',
//                     data: [],
//                     symbolSize: 2.5,
//                     lineStyle: {
//                       width: 2,
//                       color: 'black'
//                     }
//                   }
//                 ],
//                 setData(d) {
//                     this.series.forEach(seriesItem => {
//                         if (seriesItem.type === 'line3D') {
//                             seriesItem.data = d;
//                         }
//                     });
//                 }
//               };
//         case ChartType.chart2d:  
//         return {
//             xAxis: {
//             type: 'value',
//             },
//             yAxis: {
//             type: 'value'
//             },
//             dataZoom: [
//               {
//                 type: 'inside',
//                 start: 0,
//                 end: 10
//               },
//               {
//                 start: 0,
//                 end: 10
//               }
//             ],
//             series: [
//             {
//                 type: 'line'
//             }
//             ]
//         } 
//     }
// }