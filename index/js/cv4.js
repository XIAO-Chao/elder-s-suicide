 var myChart7 = echarts.init(document.getElementById('cv4'), 'essos');
 // app.title = '每年的宫颈癌新病例数';

  

 
option = {
    title: {
        text: '香港人口推算 ',
        subtext: '人口百分比%'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['0到14岁',"15到64岁","65岁及以上"]
    },
    toolbox: {
        show: true,
        feature: {
            magicType: {show: true, type: ['stack', 'tiled']},
            saveAsImage: {show: true}
        }
    },
     xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2016年 年中','2021年 年中','2026年 年中','2031年 年中',
        '2036年 年中','2046年 年中','2056年 年中','2066年 年中']
    },
    yAxis: {
        type: 'value',
       axisLabel: {
            formatter: '{value} %'
        }
    },
    series: [ {
            name:'0到14岁',
            type:'line',
            smooth: true,
            data:[11, 12, 11, 10, 9, 9, 9,8]
        }
        ,
         {
            name:'15到64岁',
            type:'line',
            smooth: true,
            data:[73, 69, 65, 63, 61, 60, 58,58]
        },
         {
            name:'65岁及以上',
            type:'line',
            smooth: true,
            data:[16, 19, 23, 27, 29, 32, 33,34]
        }
        ]
};
 myChart7.setOption(option);
 