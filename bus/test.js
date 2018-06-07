// var url = 'http://api.avatardata.cn/GongJiao/BusLine?key=d76c8321e5e94c0a909d0651d174b74b&city=%E8%8B%8F%E5%B7%9E&bus=156'
// var url = 'http://v.juhe.cn/weather/index?cityname=%E5%B9%BF%E5%B7%9E&dtype=&format=&key=69d2220904dcb7de100381757169835a'
// var log = console.log.bind(console)
//
// var xhr = new XMLHttpRequest()
// xhr.onreadystatechage = function() {
//     var statusOK = (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304)
//     if (xhr.status == 4) {
//         if (statusOK) {
//             log('ok')
//         } else {
//             log(xhr.status)
//         }
//     }
// }
// xhr.open('get', url, false)
// xhr.setRequestHeader('Origin', 'http://api.avatardata.cn')
// xhr.send(null)
// $.ajax({
//         url:'http://api.avatardata.cn/GongJiao/BusLine',
//         type:'get',
//         data:{
//             city:'广州',
//             bus:'191',
//             dtype:'json',
//             key:'d76c8321e5e94c0a909d0651d174b74b',
//         },
//         dataType:'jsonp',
//         success:function(info){
//            console.log(info)
//         },
//         error:function(error,Msgerror){
//            console.log(Msgerror)
//         }
//     })
