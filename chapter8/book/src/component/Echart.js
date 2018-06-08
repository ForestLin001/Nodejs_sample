import React from 'react';
import Chart from 'rc-echarts';

const Echarts = function (props){
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
  const barOptions ={
    title: {
      show: true,
      text: '个人借阅量统计',
      textStyle: {
        color: '#1c95ea'
      }
    },
    tooltip: {},
    legend: {
      data: ['借阅量'],
    },
    xAxis: {
      data: props.data.name || '',
      name: '姓名',
      nameLocation: 'end',
      nameTextStyle: {
        color: '#1c95ea',
        fontWeight: 'bold'
      },
      nameGap: 30
    },
    yAxis: {
      name: '借阅量',
      nameLocation: 'end',
      nameTextStyle: {
        color: '#1c95ea',
        fontWeight: 'bold'
      },
      nameGap: 15
    }
  };
  const barSeries = {
    name:'借阅量',
    type: 'bar',
    data: props.data.count || '',
    itemStyle: {
      normal: {
        color: '#1c95ea',
        barBorderRadius: [5, 5, 0, 0]
      },
      emphasis: {
        color: '#045e9d',
      }
    },
    barGap: '50%'
  };
  if(props.type.type==='pie'){
    return(
      <Chart {...pieOptions}>
        <Chart.Pie {...pieSeries}/>
      </Chart>
    )
  } else {
    return(
      <Chart {...barOptions}>
        <Chart.Bar {...barSeries}/>
      </Chart>
    )
  }
};

export default Echarts;