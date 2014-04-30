var socketio = io.connect("ss-chat-p.herokuapp.com");

socketio.on("message_to_client", function(data) {
    
    if(data["isAdminOnline"] == true)
    {
        $("#js-chat").addClass("ca-online");
        $("#js-chat span").text("Online");
    }
    else
    {
        $("#js-chat").addClass("ca-offline");
        $("#js-chat span").text("Offline");
    }

});
