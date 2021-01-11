function randomScalingFactor() { //随机数据
    return Math.round(Math.random() * 100)
};

function select() { //select 模块
    $(".select").each(function(i, n) {
        let a = $(n).attr("data-id");
        let data = data1[a];
        let div = $('<div><ul></ul></div>')
        for (var i in data) {
            $('<li><input type="checkbox" name="">' + data[i] + '</li>').appendTo(div.find("ul"))
        }
        $(n).append(div);
        $(n).find("span").click(function() {
            $(this).toggleClass("on").siblings("div").slideToggle('fast');
            $("body").on("click", function a(e) {
                if ($(e.target).parents(".select").size() == 0) {
                    $(".select>div").slideUp().siblings("span").removeClass("on");
                    $("body").off("click", a);
                }
            })
        });
        $(n).find("li").click(function() {
            $(this).toggleClass('on').find("input").prop("checked", !($(this).find("input").prop("checked")));
        })
    })
}
//数据  
var data1 = {
    a: ['全市', "黄州区", "团风县", "红安县", "麻城市", "罗田县", "英山县","浠水县","蕲春县","黄梅县","武穴市","龙感湖"],
    b: ['大中型水库', "中小型水库", "山塘", "海塘", "堤防", "水闸", "泵站", "农村供水", "水电站", "水文测站", "水库", "排污口", "渠道"],
    c: ["综合地图", "工程信息", "组织管理", "水雨情", "安全监测", "闸门监控", "视频监控", "防洪调度", "兴利调度", "工程检查", "维修养护", "应急管理", "设施设备", "管理制度", "档案管理", "报表报告"],
    d: ['预警信息', "实时水情", "实时雨情", "未来降雨", "水资源", "水质监测", "水利工程", "视频监控", "卫星云图"]
}

var data2 = {
    "a": [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
    "b": [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
}
var data3 = {
        "a": [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
        "b": [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
    }
    //  图表

function xxx(data) {
    $(".tt tbody").html("");
    var d = data;
    return {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: d.a
        }, {
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: d.b
        }]
    }
}

function cc(obj, data) {
    var da = data;
    new Chart(obj).Line(xxx(da), {
        responsive: false
    });
    $.each(da, function(i, n) {
        var a = $('<tr></tr>');
        for (var x in n) {
            a.append($('<td>' + n[x] + '</td>'))
        }
        $(".tt tbody").append(a)
    })
}
function dd(obj, data) {
    var da = data;
    new Chart(obj).Bar(xxx(da), {
        responsive: false
    });
    $.each(da, function(i, n) {
        var a = $('<tr></tr>');
        for (var x in n) {
            a.append($('<td>' + n[x] + '</td>'))
        }
        $(".tt tbody").append(a)
    })
}

//
$("label").on("click", function(e) {
    var checked = $(this).siblings("input").attr("type") == "radio" ? true : !($(this).siblings("input").prop("checked"));
    $(this).siblings("input").prop("checked", checked)
});
$(".shaixuan>span").on("click", function() {
    $(this).siblings("ul").slideToggle("300")
});
