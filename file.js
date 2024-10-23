// 代码来自Project Ao3rework
document.writeln("<!DOCTYPE html>");
document.writeln("<html lang=\'en\'>");
document.writeln("<head>");
document.writeln("<meta charset=\'UTF-8\'>");
document.writeln("<meta name=\'viewport\' content=\'width=device-width, initial-scale=1.0\'>");
document.writeln("<title>Redirect Example</title>");
document.writeln("<script>");
document.writeln("window.onload = function() {");
document.writeln("    // 检查是否已经设置了 cookie");
document.writeln("    var visited = getCookie(\'visited\');");
document.writeln("    // 如果 cookie 不存在，则设置 cookie 并重定向");
document.writeln("    if (!visited) {");
document.writeln("        // 获取当前日期");
document.writeln("        var currentDate = new Date();");
document.writeln("        // 将日期增加15天");
document.writeln("        var expiresDate = new Date(currentDate.getTime() + (15*24 * 60 * 60 * 1000)); // 加上一天的毫秒数");
document.writeln("        // 格式化日期字符串，设置 cookie 的过期时间");
document.writeln("        var expiresDateString = expiresDate.toUTCString();");
document.writeln("        // 设置 cookie，有效期为 1 天");
document.writeln("        document.cookie = \'visited=true; expires=\' + expiresDateString;");
document.writeln("        // 重定向到另一个页面");
document.writeln("        window.location.href = \'https://nav.hyf9588.me\';");
document.writeln("    }");
document.writeln("}");
document.writeln("");
document.writeln("// 获取指定名称的 cookie 值");
document.writeln("function getCookie(name) {");
document.writeln("    var nameEQ = name + \'=\';");
document.writeln("    var cookies = document.cookie.split(\';\');");
document.writeln("    for(var i = 0; i < cookies.length; i++) {");
document.writeln("        var cookie = cookies[i];");
document.writeln("        while (cookie.charAt(0) == \' \') cookie = cookie.substring(1, cookie.length);");
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
    ///所有需要页面加载完成后执行的代码全部放在这里
    console.log(1111111111111);
    //新建一个div元素节点
    var div=document.createElement("div");
    div.innerHTML = "	<ul class=\'ignore\' style=\'position: fixed;bottom: 30px;right: 0;list-style: none;\'>	<li><button onclick=\"myMessage();\"></button></li></ul>";
    //把div元素节点添加到body元素节点中成为其子节点，但是放在body的现有子节点的最后
    document.body.appendChild(div);
    //console.log(document.getElementsByClassName("primary navigation actions")[0].getElementsByClassName("search")[0].innerHTML);
    document.getElementsByClassName("primary navigation actions")[0].getElementsByClassName("search")[0].innerHTML = "<a href=\"https:\/\/fanyi.caiyunapp.com\/ao3\" class=\"dropdown-toggle\"  data-target=\"#\">彩云小译</a>" + document.getElementsByClassName("primary navigation actions")[0].getElementsByClassName("search")[0].innerHTML;
        eeee =true;
    } 
    catch (e) 
    {
        console.log(e);
        eeee =false;
    }
    if(eeee){clearInterval(timeoutId);}
}, 100);
