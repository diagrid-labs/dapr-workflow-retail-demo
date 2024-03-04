window.onload = function () {

    console.log("Protocol: " + location.protocol);
    var wsURL = location.protocol + "//" + document.location.host

    var log = document.getElementById("notifications");

    function appendLog(item) {
        var doScroll = log.scrollTop > log.scrollHeight - log.clientHeight - 1;
        log.appendChild(item);
        if (doScroll) {
            log.scrollTop = log.scrollHeight - log.clientHeight;
        }
    }

    if (log) {
        var sock = io.connect(wsURL);
        var connDiv = document.getElementById("connection-status");
        connDiv.innerText = "closed";

        sock.on('connect', function () {
            console.log("connected to " + wsURL);
            connDiv.innerText = "open";
        });

        sock.on('disconnect', function (e) {
            console.log("connection closed (" + e.code + ")");
            connDiv.innerText = "closed";
        });

        sock.on('message', function (evt) {
            console.log(evt)
            var item = document.createElement("div");
            item.className = "item";
            var message = "<b>" + evt.time + "</b> | <i>" + evt.data.orderId + "</i> | <i>" + evt.data.message + "</i>";
            var content = "<div class='item-text'>" + message + "</div>";
            item.innerHTML = content;
            appendLog(item);
        });

    } // if log
};
