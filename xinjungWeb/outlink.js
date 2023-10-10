
//選單開啟關閉
$(document).ready(function () {
    $(".menu_burger").click(function () {
        $(".nav_main_menu").slideToggle();
    });
});
//抓取視窗大小
function reportWindowSize() {
    if (window.innerWidth > 768) {
        var menustyle = document.querySelector(`.nav_main_menu`);
        menustyle.style = `display: flex;list-style: none;gap: 1px 40px;flex-wrap: wrap;`
    }
    else if (window.innerWidth <= 768) {
        var menustyle = document.querySelector(`.nav_main_menu`);
        menustyle.style = `padding: 0;text-align: center;width: 100%;display:none;`
    }
}
window.onresize = reportWindowSize;
