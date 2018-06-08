import React from 'react';
import Chart from 'rc-echarts';

const PieEcharts = function (props){
  const pieOptions = {
    color:['#1c95ea','#8fc31f','#f35833','#00ccff','#ffcc00','#3423d2','#145988'],
    title:{
      text:'个人借阅量统计',
      textStyle: {
        color: '#1c95ea'
      }
    }
  };
  const pieSeries = {
    name:'借阅量',
    type:'pie',
    data:props.data,
    itemStyle:{
      normal:{
        label:{
          show: true,
          formatter: '{b} : {c} ({d}%)'
        }
      }
    }
  };
    return(
      <Chart {...pieOptions}>
        <Chart.Pie {...pieSeries}/>
      </Chart>
    )
};

export default PieEcharts;