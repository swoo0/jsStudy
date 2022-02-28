var v_writer = v_params[1].split("=")[1];

/* escape,unescape   encodeURI:decodeURI   encodeURIComponent:decodeURIComponent */
var request = {};   // 네임스페이스 괜히 jsp랑 똑같이 하고픔

request.getParameter = function(p_name) {
    if (location.href.indexOf("?") == -1) return null;  // 일단 최소한의 안전장치.
    var v_queryString = location.href.split("?")[1];
    var v_params = v_queryString.split("&");
    for (var i = 0; i < v_params.length; i++) {
        var v_name = v_params[i].split("=")[0];
        var v_value = v_params[i].split("=")[1];
        if (v_name == p_name) {
            if (v_value.indexOf("+") > -1) {
                v_value = v_value.replace("+", " ");
            }
            return decodeURIComponent(v_value);
        }
    }
    return null;
}