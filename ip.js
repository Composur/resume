const getIpType = {
    init: function (param) {
        console.log('in')
        // 获取当前页面url
        var curPageUrl = window.location.href;
        console.log('curPageUrl-0  ' + curPageUrl);

        var reg1 = /(http|ftp|https|www):\/\//g; //去掉前缀
        curPageUrl = curPageUrl.replace(reg1, '');
        console.log('curPageUrl-1  ' + curPageUrl);

        var reg2 = /\:+/g; //替换冒号为一点
        curPageUrl = curPageUrl.replace(reg2, '.');
        console.log('curPageUrl-2  ' + curPageUrl);

        curPageUrl = curPageUrl.split('.'); //通过一点来划分数组
        console.log(curPageUrl); //现在是数组了

        var ipAddress = curPageUrl[0] + '.' + curPageUrl[1] + '.' + curPageUrl[2] + '.' + curPageUrl[3];

        var isInnerIp = false; //默认给定IP不是内网IP      
        var ipNum = this.getIpNum(ipAddress);
        /** 
         * 私有IP：A类  10.0.0.0    -10.255.255.255 
         *       B类  172.16.0.0  -172.31.255.255    
         *       C类  192.168.0.0 -192.168.255.255   
         *       D类   127.0.0.0   -127.255.255.255(环回地址)  
         **/
        var aBegin = this.getIpNum("10.0.0.0");
        var aEnd = this.getIpNum("10.255.255.255");
        var bBegin = this.getIpNum("172.16.0.0");
        var bEnd = this.getIpNum("172.31.255.255");
        var cBegin = this.getIpNum("192.168.0.0");
        var cEnd = this.getIpNum("192.168.255.255");
        var dBegin = this.getIpNum("127.0.0.0");
        var dEnd = this.getIpNum("127.255.255.255");
        isInnerIp = this.isInner(ipNum, aBegin, aEnd) || this.isInner(ipNum, bBegin, bEnd) || this.isInner(
            ipNum, cBegin, cEnd) || this.isInner(ipNum, dBegin, dEnd);
        console.log('是否是内网:' + isInnerIp);
        return isInnerIp;

    },
    // /*获取IP数*/
    getIpNum(ipAddress) {
        var ip = ipAddress.split(".");
        var a = parseInt(ip[0]);
        var b = parseInt(ip[1]);
        var c = parseInt(ip[2]);
        var d = parseInt(ip[3]);
        var ipNum = a * 256 * 256 * 256 + b * 256 * 256 + c * 256 + d;
        return ipNum;
    },
    // 判断
    isInner(userIp, begin, end) {
        return (userIp >= begin) && (userIp <= end);
    }

}
getIpType.init()



// 方法二
function getUserIP(onNewIP) {
    //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
            iceServers: []
        }),
        noop = function () {},
        localIPs = {},
        ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
        key;

    function iterateIP(ip) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    }

    //create a bogus data channel
    pc.createDataChannel("");

    // create offer and set local description
    pc.createOffer().then(function (sdp) {
        sdp.sdp.split('\n').forEach(function (line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });

        pc.setLocalDescription(sdp, noop, noop);
    }).catch(function (reason) {
        // An error occurred, so handle the failure to connect
    });

    //listen for candidate events
    pc.onicecandidate = function (ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex))
            return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
}

// Usage

getUserIP(function (ip) {
    console.log("Got IP! :" + ip);
});

