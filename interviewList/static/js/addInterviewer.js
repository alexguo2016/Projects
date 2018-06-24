var bindBtn = () => {
    var body = document.body
    body.addEventListener('click', (event) => {
        var self = event.target
        if (self.classList.contains('finalCheck')) {
            clearModal()
            var infos = getAllInfo()
            insertModal(infos)
        }
        if (self.classList.contains('finalSumit')) {
            //获取所有数据
            var infos = getAllInfo()
            //通过ajax发送到服务器
            sendInfos(infos)

        }
    })
}
//返回所有数据的集合, 是一个对象
var getAllInfo = () => {
    var o = {
        normalInfos: getNormalInfos(),
        eduExps: getEduExps(),
        workExps: getWorkExps(),
        famiStatus: getFamiStatus(),
        jobObjected: getJobObjected(),
        declaration: getDeclaration(),
        arrivalTime: getArrivalTime(),
    }
    // log(o.declaration)
    return o
}
//sendInfos
var sendInfos = (infos) => {
    var method = 'post'
    var path = 'http://localhost:7000/api/form/add'
    var callback = () => {
        // log('发送成功')
    }
    var data = infos
    ajax(method, path, callback, data)
}

var clearModal = () => {
    var m = e('.modal-body')
    m.innerHTML = ''
}

var insertModal = (infos) => {
    var {normalInfos, eduExps, workExps, famiStatus, jobObjected, declaration} = infos
    var t = `
        <div>
            <div class="row">
                <div class="col-sm-3">
                    <span>中文名:</span>
                    <input readonly="readonly" value=${normalInfos.name} >
                </div>
                <div class="col-sm-3">
                    <span>性别:</span>
                    <input readonly="readonly" value=${normalInfos.gender} >
                </div>
                <div class="col-sm-3">
                    <span>民族:</span>
                    <input readonly="readonly" value=${normalInfos.nation} >
                </div>
                <div class="col-sm-3">
                    <span>籍贯:</span>
                    <input readonly="readonly" value=${normalInfos.native} >
                </div>
                <div class="col-sm-3">
                    <span>生日:</span>
                    <input readonly="readonly" value=${normalInfos.birthday}>
                </div>
                <div class="col-sm-3">
                    <span>电话号码:</span>
                    <input readonly="readonly" value=${normalInfos.tel}>
                </div>
                <div class="col-sm-3">
                    <span>详细地址:</span>
                    <input readonly="readonly" value=${normalInfos.address}>
                </div>
                <div class="col-sm-3">
                    <span>工作年限:</span>
                    <input readonly="readonly" value=${normalInfos.workYears}>
                </div>
                <div class="col-sm-3">
                    <span>婚姻状况:</span>
                    <input readonly="readonly" value=${normalInfos.marry}>
                </div>
                <div class="col-sm-3">
                    <span>生育状况:</span>
                    <input readonly="readonly" value=${normalInfos.birth}>
                </div>
                <div class="col-sm-3">
                    <span>生育计划:</span>
                    <input readonly="readonly" value=${normalInfos.birthPlan}>
                </div>
            </div>
            <br>
            <div class="row">
                <span class="col-sm-12">教育经历1:</span>
                <hr>
                <div class="col-sm-3">
                    <span>开始时间</span>
                    <input readonly="readonly" value=${eduExps[0].studyBegin}>
                </div>
                <div class="col-sm-3">
                    <span>结束时间</span>
                    <input readonly="readonly" value=${eduExps[0].studyEnd}>
                </div>
                <div class="col-sm-3">
                    <span>性质</span>
                    <input readonly="readonly" value=${eduExps[0].nature}>
                </div>
                <div class="col-sm-3">
                    <span>学历</span>
                    <input readonly="readonly" value=${eduExps[0].degree}>
                </div>
                <div class="col-sm-3">
                    <span>学校名称</span>
                    <input readonly="readonly" value=${eduExps[0].school}>
                </div>
                <div class="col-sm-3">
                    <span>专业</span>
                    <input readonly="readonly" value=${eduExps[0].major} >
                </div>
            </div>
            <div class="row">
                <span class="col-sm-12">教育经历2:</span>
                <hr>
                <div class="col-sm-3">
                    <span>开始时间</span>
                    <input readonly="readonly" value=${eduExps[1].studyBegin}>
                </div>
                <div class="col-sm-3">
                    <span>结束时间</span>
                    <input readonly="readonly" value=${eduExps[1].studyEnd}>
                </div>
                <div class="col-sm-3">
                    <span>性质</span>
                    <input readonly="readonly" value=${eduExps[1].nature}>
                </div>
                <div class="col-sm-3">
                    <span>学历</span>
                    <input readonly="readonly" value=${eduExps[1].degree}>
                </div>
                <div class="col-sm-3">
                    <span>学校名称</span>
                    <input readonly="readonly" value=${eduExps[1].school}>
                </div>
                <div class="col-sm-3">
                    <span>专业</span>
                    <input readonly="readonly" value=${eduExps[1].major} >
                </div>
            </div>
            <div class="row">
                <span class="col-sm-12">教育经历3:</span>
                <hr>
                <div class="col-sm-3">
                    <span>开始时间</span>
                    <input readonly="readonly" value=${eduExps[2].studyBegin}>
                </div>
                <div class="col-sm-3">
                    <span>结束时间</span>
                    <input readonly="readonly" value=${eduExps[2].studyEnd}>
                </div>
                <div class="col-sm-3">
                    <span>性质</span>
                    <input readonly="readonly" value=${eduExps[2].nature}>
                </div>
                <div class="col-sm-3">
                    <span>学历</span>
                    <input readonly="readonly" value=${eduExps[2].degree}>
                </div>
                <div class="col-sm-3">
                    <span>学校名称</span>
                    <input readonly="readonly" value=${eduExps[2].school}>
                </div>
                <div class="col-sm-3">
                    <span>专业</span>
                    <input readonly="readonly" value=${eduExps[2].major} >
                </div>
            </div>
            <br>
            <div class="row">
                <span class="col-sm-12">工作经历1:</span>
                <div class="col-sm-3">
                    <span>开始时间</span>
                    <input readonly="readonly" value=${workExps[0].studyBegin}>
                </div>
                <div class="col-sm-3">
                    <span>结束时间</span>
                    <input readonly="readonly" value=${workExps[0].studyEnd}>
                </div>
                <div class="col-sm-3">
                    <span>性质</span>
                    <input readonly="readonly" value=${workExps[0].nature}>
                </div>
                <div class="col-sm-3">
                    <span>单位名称</span>
                    <input readonly="readonly" value=${workExps[0].workPlace}>
                </div>
                <div class="col-sm-3">
                    <span>部门/职位</span>
                    <input readonly="readonly" value=${workExps[0].department}>
                </div>
                <div class="col-sm-3">
                    <span>状态</span>
                    <input readonly="readonly" value=${workExps[0].workStatus}>
                </div>
                <div class="col-sm-3">
                    <span>薪资范围</span>
                    <input readonly="readonly" value=${workExps[0].salary}>
                </div>
                <div class="col-sm-3">
                    <span>联系人</span>
                    <input readonly="readonly" value=${workExps[0].linkman}>
                </div>
            </div>
            <div class="row">
                <span class="col-sm-12">工作经历2:</span>
                <div class="col-sm-3">
                    <span>开始时间</span>
                    <input readonly="readonly" value=${workExps[1].studyBegin}>
                </div>
                <div class="col-sm-3">
                    <span>结束时间</span>
                    <input readonly="readonly" value=${workExps[1].studyEnd}>
                </div>
                <div class="col-sm-3">
                    <span>性质</span>
                    <input readonly="readonly" value=${workExps[1].nature}>
                </div>
                <div class="col-sm-3">
                    <span>单位名称</span>
                    <input readonly="readonly" value=${workExps[1].workPlace}>
                </div>
                <div class="col-sm-3">
                    <span>部门/职位</span>
                    <input readonly="readonly" value=${workExps[1].department}>
                </div>
                <div class="col-sm-3">
                    <span>状态</span>
                    <input readonly="readonly" value=${workExps[1].workStatus}>
                </div>
                <div class="col-sm-3">
                    <span>薪资范围</span>
                    <input readonly="readonly" value=${workExps[1].salary}>
                </div>
                <div class="col-sm-3">
                    <span>联系人</span>
                    <input readonly="readonly" value=${workExps[1].linkman}>
                </div>
            </div>
            <div class="row">
                <span class="col-sm-12">工作经历3:</span>
                <div class="col-sm-3">
                    <span>开始时间</span>
                    <input readonly="readonly" value=${workExps[2].studyBegin}>
                </div>
                <div class="col-sm-3">
                    <span>结束时间</span>
                    <input readonly="readonly" value=${workExps[2].studyEnd}>
                </div>
                <div class="col-sm-3">
                    <span>性质</span>
                    <input readonly="readonly" value=${workExps[2].nature}>
                </div>
                <div class="col-sm-3">
                    <span>单位名称</span>
                    <input readonly="readonly" value=${workExps[2].workPlace}>
                </div>
                <div class="col-sm-3">
                    <span>部门/职位</span>
                    <input readonly="readonly" value=${workExps[2].department}>
                </div>
                <div class="col-sm-3">
                    <span>状态</span>
                    <input readonly="readonly" value=${workExps[2].workStatus}>
                </div>
                <div class="col-sm-3">
                    <span>薪资范围</span>
                    <input readonly="readonly" value=${workExps[2].salary}>
                </div>
                <div class="col-sm-3">
                    <span>联系人</span>
                    <input readonly="readonly" value=${workExps[2].linkman}>
                </div>
            </div>
            <div class="row">
                <span class="col-sm-12">工作经历4:</span>
                <div class="col-sm-3">
                    <span>开始时间</span>
                    <input readonly="readonly" value=${workExps[3].studyBegin}>
                </div>
                <div class="col-sm-3">
                    <span>结束时间</span>
                    <input readonly="readonly" value=${workExps[3].studyEnd}>
                </div>
                <div class="col-sm-3">
                    <span>性质</span>
                    <input readonly="readonly" value=${workExps[3].nature}>
                </div>
                <div class="col-sm-3">
                    <span>单位名称</span>
                    <input readonly="readonly" value=${workExps[3].workPlace}>
                </div>
                <div class="col-sm-3">
                    <span>部门/职位</span>
                    <input readonly="readonly" value=${workExps[3].department}>
                </div>
                <div class="col-sm-3">
                    <span>状态</span>
                    <input readonly="readonly" value=${workExps[3].workStatus}>
                </div>
                <div class="col-sm-3">
                    <span>薪资范围</span>
                    <input readonly="readonly" value=${workExps[3].salary}>
                </div>
                <div class="col-sm-3">
                    <span>联系人</span>
                    <input readonly="readonly" value=${workExps[3].linkman}>
                </div>
            </div>

            <div class="row">
                <span class="col-sm-12">家人1</span>
                <div class="col-sm-3">
                    <span>关系</span>
                    <input readonly="readonly" value=${famiStatus[0].relationship}>
                </div>
                <div class="col-sm-3">
                    <span>名字</span>
                    <input readonly="readonly" value=${famiStatus[0].name}>
                </div>
                <div class="col-sm-3">
                    <span>单位及职业</span>
                    <input readonly="readonly" value=${famiStatus[0].career}>
                </div>
                <div class="col-sm-3">
                    <span>联系电话</span>
                    <input readonly="readonly" value=${famiStatus[0].tel}>
                </div>
            </div>
            <div class="row">
                <span class="col-sm-12">家人2</span>
                <br>
                <div class="col-sm-3">
                    <span>关系</span>
                    <input readonly="readonly" value=${famiStatus[1].relationship}>
                </div>
                <div class="col-sm-3">
                    <span>名字</span>
                    <input readonly="readonly" value=${famiStatus[1].name}>
                </div>
                <div class="col-sm-3">
                    <span>单位及职业</span>
                    <input readonly="readonly" value=${famiStatus[1].career}>
                </div>
                <div class="col-sm-3">
                    <span>联系电话</span>
                    <input readonly="readonly" value=${famiStatus[1].tel}>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">应聘情况</div>
                <br>
                <div class="col-sm-3">
                    <span>应聘职能</span>
                    <input readonly="readonly" value=${jobObjected.position}>
                </div>
                <div class="col-sm-3">
                    <span>应聘性质</span>
                    <input readonly="readonly" value=${jobObjected.nature}>
                </div>
                <div class="col-sm-3">
                    <span>自我定位</span>
                    <input readonly="readonly" value=${jobObjected.selfPosition}>
                </div>
                <div class="col-sm-3">
                    <span>薪资要求</span>
                    <input readonly="readonly" value=${jobObjected.salary}>
                </div>
                <div class="col-sm-3">
                    <span>可到岗时间</span>
                    <input readonly="readonly" value=${jobObjected.arrivalTime}>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <span>声明确认</span>
                    <input readonly="readonly" value=${declaration}>
                </div>
            </div>
        </div>
    `
    var m = e('.modal-body')
    m.insertAdjacentHTML('beforeend', t)
}

var setArrivalTime = () => {
    var date = new Date()
    var d = date.toLocaleDateString()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var time = `${d}--${h}:${m}:${s}`
    var formHead = e('.formHead')
    var timeBox = myFind('.arrivalTime', formHead)
    timeBox.innerHTML = time
}

var getArrivalTime = () => {
    var formHead = e('.formHead')
    var timeBox = myFind('.arrivalTime', formHead)
    var time = timeBox.innerHTML
    return time
}

var __main = () => {
    setArrivalTime()
    bindBtn()
}

__main()
