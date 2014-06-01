---
layout: page
title: "Chat with me"
comments: true
sharing: true
footer: true
---

<div id="js-cs">
  <form action="javascript:void(0);">
  <input type="text" placeholder="Name" id="name">

  <ul id="discussion"></ul>
    <fieldset>
      <input type="text" placeholder="Send a message..." id="message_input">
      <button type="submit" class="btn btn-info" onclick="sendMessage()">Send</button>
    </fieldset>
    </form>
</div>
I hosted a node.js application on [Heroku](http://heroku.com) that messages me on Google Talk whenever someone contact's me.  Unfortunately, just because I might be signed in doesn't mean I am always sitting a computer.  You can read about how I built this in my [NodeJS Chat Guide](/blog/2014/04/30/nodejs-chat-guide/).

<script type="text/javascript">
    //var sound = new Howl({  urls: ['http://www.soundjay.com/button/button-37.mp3']}).play();
    var socketio = io.connect("ss-chat-p.herokuapp.com");
    socketio.on("message_to_client", function(data) {

        var msgHTML = "<div class='avatar'><b><span>" +
        data["name"] + "</span></b>" + "</div><div class='messages'>"+ data['message'] + "</div>";

        if (data["name"] == document.getElementById("name").value)
        {
          msgHTML = "<li class='self'>" +  msgHTML + "</li>";
        }
        else
        {
          msgHTML = "<li class='other'>" +  msgHTML + "</li>";
        }

        document.getElementById("discussion").innerHTML = document.getElementById("discussion").innerHTML + msgHTML;

        $("#discussion").prop({ scrollTop: $("#discussion").prop("scrollHeight") });
    });
    
    function sendMessage() {
        var msg = document.getElementById("message_input").value
        var name = document.getElementById("name").value;
        socketio.emit("message_to_server", { message : msg, name : name });
        document.getElementById("message_input").value = "";
    }

</script>