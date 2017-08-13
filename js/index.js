$(function () {

    var contentJson = {
        0: ".about-content-intro",
        1: ".about-content-skill",
        2: ".about-content-contact"
    }
    var contentNum = 0;
    $(".rtUp").on("click",prevPage);
    $(".rtDown").on("click",nextPage);
    $(".mini-prev-page").on("click",prevPage);
    $(".mini-next-page").on("click",nextPage);
    $(".rtTool").on("click",showSkillPage);
    $(".mini-show-skill").on("click",showSkillPage);
    function prevPage() {
        contentNum--;
        if (contentNum < 0) {
            contentNum = 0;
            $(contentJson[contentNum]).addClass("shake");
            setTimeout(function () {
                $(contentJson[contentNum]).removeClass("shake");
            }, 400);
            return;
        };
        $(".about-content-row").children().children().hide();
        $(contentJson[contentNum]).fadeIn();
    }

    function nextPage() {
        contentNum++;
        if (contentNum > 2) {
            contentNum = 2;
            $(contentJson[contentNum]).addClass("shake");
            setTimeout(function () {
                $(contentJson[contentNum]).removeClass("shake");
            }, 400);
            return;
        };
        $(".about-content-row").children().children().hide();
        $(contentJson[contentNum]).fadeIn();
    }
   
    function showSkillPage() {
        console.log("技能展示");
        contentNum = 1;
        $(".about-content-row").children().children().hide();
        $(contentJson[contentNum]).fadeIn();
    }

    $(".flip-bigball").on("ontouchstart", function () {
        console.log("1024");
    });
})