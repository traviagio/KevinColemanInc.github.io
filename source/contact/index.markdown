---
layout: page
title: "Contact"
comments: true
sharing: true
footer: true
---

<div class="row">
  <div class="span6">
    <h2>Email</h2>
    <form id="contact" ajax="true" action="http://web-mailer-api.herokuapp.com/mail" method="POST">
      <input type="hidden" value="c.programer@gmail.com" name="to">
      <input type="hidden" value="BuHLOVESBUH" name="secret_key">

      <label for="exampleInputEmail1">Email address</label>
      <input id="contact-email" name="from" type="email" class="form-control" placeholder="Enter email">

      <label for="exampleInputEmail1">Body</label>
      <textarea id="contact-body" name="body" type="text" class="form-control" placeholder="Enter body" rows="3"></textarea>

      <div class="col-sm-offset-2 col-sm-10">

      <button type="submit" class="btn btn-info">Send 
      </button>
      
      <div id="result">
      </div>

      </div>
    </form>
  </div>
</div>

<script >

$(document).ready(function(e) {
    
    $("form[ajax=true]").submit(function(e) {
        e.preventDefault();
        var form_data = $(this).serialize();
        var form_url = $(this).attr("action");
        var form_method = $(this).attr("method").toUpperCase();
        $.ajax({
            url: form_url, 
            type: form_method,      
            data: form_data,   
            async: false,  
            cache: false,
            success: function(returnhtml){    
                   
            }           
        });
        $("#result").html("Message sent");
        $('#contact-email').val("");
        $('#contact-body').val("");

        return false;
    });
    
});
</script>
