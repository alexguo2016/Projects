var drawGraph = function(array, city) {
    var dom = document.getElementById("container");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    var one = array[0]
    var two = array[1]
    var three = array[2]
    option = {
        title : {
            text: `${city}未来3天温度`,
            subtext: '数据来源：和风天气'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['最高温','最低温']
        },
        toolbox: {
            show : true,
            feature : {
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : [one.date, two.date, three.date]
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'最高温',
                type:'bar',
                data:[one.tmp_max, two.tmp_max, three.tmp_max],
            },
            {
                name:'最低温',
                type:'bar',
                data:[one.tmp_min, two.tmp_min, three.tmp_min],
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}
var e = function(str) {
    return document.querySelector(str)
}
var log = console.log.bind(console)
var ajax = function(method, path, data, callback) {
    var r = new XMLHttpRequest()
    r.open(method, path, true)
    // r.setRequestHeader('Content-Type', 'application/json')
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            callback(r.response)
        }
    }
    data = JSON.stringify(data, null, 2)
    r.send(data)
}

var getData = (callback, city) => {
    var method = 'GET'
    var path = `https://free-api.heweather.com/s6/weather/forecast?location=${city}&key=d992749ba5114e3a83cf7aeb91c0a74c`
    var data = {}
    ajax(method, path, data, callback)
}

var getTemps = function(obj) {
    //获取三天的最高温度和最低温度，存入数组,格式为[{"date":"2018-04-29","tmp_max":"27","tmp_min":"23"},{"date":"2018-04-30","tmp_max":"28","tmp_min":"24"},{"date":"2018-05-01","tmp_max":"30","tmp_min":"24"}]
    var o = []
    for (var i = 0; i < 3; i++) {
        var day_data = obj["HeWeather6"][0]["daily_forecast"][i]
        var date = day_data["date"]
        var tmp_max = day_data["tmp_max"]
        var tmp_min = day_data["tmp_min"]
        var day_one = {
            date: date,
            tmp_max: tmp_max,
            tmp_min: tmp_min,
        }
        o.push(day_one)
    }
    return o
}
