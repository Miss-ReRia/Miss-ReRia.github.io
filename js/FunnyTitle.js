// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // $('[rel="icon"]').attr('href', "/funny.ico");
        document.title = '(´ฅωฅ‘) 藏起来啦~';
        clearTimeout(titleTime);
    }
    else {
        // $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = 'Σ(っ °Д °;)っ 被发现了';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});