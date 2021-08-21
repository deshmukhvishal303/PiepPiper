var stompClient = null;
window.onload = function (){
    var socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/music/play', function (musicFile) {
            document.getElementById(JSON.parse(musicFile.body).musicDetail).play();
        });
    });
}

function sendMusicDetail() {
    stompClient.send("/app/play", {}, JSON.stringify({'musicDetail': "audio1"}));
}

$(function () {
    $( "#button1" ).click(function() { sendMusicDetail(); });
});