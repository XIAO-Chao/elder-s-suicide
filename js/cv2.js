 var myChartx = echarts.init(document.getElementById('cv2'), 'essos');
    function initdata(i) {
      if (i==1) {
            myChartx.setOption(option1);
      }
      else
      {
            myChartx.setOption(option5);
      }
     
    };     

    var option1 = {
    title: {
        text: '政策介入前的人口贫困率'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['18岁以下','18至64岁','65岁及以上']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2015年','2016年']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
       
        {
            name:'18岁以下',
            type:'line',
            stack: '',
            areaStyle: {normal: {}},
            data:[23.2, 23]
        },
        {
            name:'18至64岁',
            type:'line',
            stack: '',
            areaStyle: {normal: {}},
            data:[13.6, 13.6]
        },
        {
            name:'65岁及以上',
            type:'line',
            stack: '',
            areaStyle: {normal: {}},
            data:[44.8, 44.8]
        } 
    ]
};



 var option5 = {
    title: {
        text: '政策介入后的人口贫困率'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['18岁以下','18至64岁','65岁及以上']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2015年','2016年']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
       
        {
            name:'18岁以下',
            type:'line',
            stack: '',
            areaStyle: {normal: {}},
            data:[18, 17.2]
        },
        {
            name:'18至64岁',
            type:'line',
            stack: '',
            areaStyle: {normal: {}},
            data:[10.1, 10.3]
        },
        {
            name:'65岁及以上',
            type:'line',
            stack: '',
            areaStyle: {normal: {}},
            data:[30.1, 31.6]
        } 
    ]
};
 myChartx.setOption(option1);