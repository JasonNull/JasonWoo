$(function () {
    var contentJson = {
        0: ".about-content-intro",
        1: ".about-content-skill",
        2: ".about-content-contact"
    }
    var contentNum = 0;
    $(".rtUp").click(function () {
        contentNum--;
        if (contentNum < 0) {
            contentNum = 0;
            $(contentJson[contentNum]).addClass("shake");
            setTimeout(function () {
                $(contentJson[contentNum]).removeClass("shake");
            }, 400);
            return;
        };
        $.each(contentJson, function (n, value) {
            $(value).fadeOut();
        });
        $(contentJson[contentNum]).fadeIn();
    });
    $(".rtDown").click(function () {
        contentNum++;
        console.log(contentNum);
        if (contentNum > 2) {
            contentNum = 2;
            $(contentJson[contentNum]).addClass("shake");
            setTimeout(function () {
                $(contentJson[contentNum]).removeClass("shake");
            }, 400);
            return;
        };
        $.each(contentJson, function (n, value) {
            $(value).fadeOut();
        });
        $(contentJson[contentNum]).fadeIn();
    });
    $(".rtEye").click(function(){
        window.location.href = "demo.html";
    });
    $(".rtHome").click(function () {
        window.location.href = "index.html";
    });
    $(".rtId").click(function(){
        
    });
    $(".rtTool").click(function(){
        contentNum = 1;
        $.each(contentJson,function(n,value){
            $(value).fadeOut();
        })
        $(contentJson[contentNum]).fadeIn();
    });
});