/**
 * Created by 嬌嬌 on 2016/10/20.
 */
$(function () {
    $("#fullpage").fullpage({
        anchors:["page1","page2","page3","page4"],
        navigation:true,
        navigationTooltips:["登录百度舆情","领先：数据收集与处理","全面;舆情分析逻辑与架构","专业：专业数据可视化"],
        fixedElements:"#menu",
        menu:"#menu",
        afterLoad:function (a,index) {
            if (index==1){
                $(".ship").transition({x:"30",opacity:"1"});
            }
            if (index==2){
                $(".p2_t").transition({x:"30",opacity:"1"});
                $(".p2_r").transition({x:"-10",opacity:"1"});
            }
            if (index==3){
                $(".p3_t").transition({x:"30",opacity:"1"});
                $(".p3 .top").transition({x:"30",opacity:"1"});
                $(".p3_r").transition({x:"-10",opacity:"1"});
            }
            if (index==4){
                $(".p4_t").transition({x:"30",opacity:"1"});
                $(".p4_bubble").transition({x:"30",opacity:"1"});
                $(".p4_r").transition({x:"-10",opacity:"1"});
            }
        },
        onLeave:function (index) {
            if (index==1){
                $(".ship").delay(700).queue(function () {
                    $(this).css({x:"0",opacity:"0"});
                    $(this).dequeue();
                });
            }
            if (index==2){
                $(".p2_t").delay(700).queue(function () {
                    $(this).css({x:"0",opacity:"0"});
                    $(this).dequeue();
                });
                $(".p2_r").delay(700).queue(function () {
                    $(this).css({x:"30",opacity:"0"});
                    $(this).dequeue();
                })
            }
            if (index==3){
                $(".p3_t").delay(700).queue(function () {
                    $(this).css({x:"0",opacity:"0"});
                    $(".p3 .top").css({x:"0",opacity:"0"});
                    $(this).dequeue();
                });
                $(".p3_r").delay(700).queue(function () {
                    $(this).css({x:"30",opacity:"0"});
                    $(this).dequeue();
                })
            }
            if (index==4){
                $(".p4_t").delay(700).queue(function () {
                    $(this).css({x:"0",opacity:"0"});
                    $(".p4_bubble").css({x:"0",opacity:"0"});
                    $(this).dequeue();
                })
                $(".p4_r").delay(700).queue(function () {
                    $(this).css({x:"30",opacity:"0"});
                    $(this).dequeue();
                })
            }
        }
    });
    $(".next").click(function () {
        $.fn.fullpage.moveSectionDown();
    });
    $(".napp").hover(function () {
        $(".smxz").css("opacity","1")
    },function () {
        $(".smxz").css("opacity","0")
    })
})