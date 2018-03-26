 var myChart6 = echarts.init(document.getElementById('cv3'), 'essos');
  

option3 = {
    title: {
        text: '2016年按居住情況划分的长者数目',
         left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['独居', '只与配偶同住','其他']
    },
    series : [
        {
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            stack:"独居",
            data:[
                {
                    value:293308,
                     selected:true,

                    name: '只与配偶同住'
                    
                },
                {value:152536, name: '独居', selected:true},
            
                {value:717309, name: '其他'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}; 
 
   myChart6.setOption(option3);