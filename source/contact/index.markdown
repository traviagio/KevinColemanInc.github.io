---
layout: page
title: "Contact"
comments: true
sharing: true
footer: true
---

<form id="contact">
  <label for="exampleInputEmail1">Email address</label>
  <input id="contact-email" name="email" type="email" class="form-control" placeholder="Enter email">

  <label for="exampleInputEmail1">Body</label>
  <textarea id="contact-body" name="body" type="text" class="form-control" placeholder="Enter body" rows="3"></textarea>

  <div class="col-sm-offset-2 col-sm-10">

  <button type="submit" class="btn btn-default">Send 
  </button>
  
  <div id="result">
  </div>

  </div>
</form>

<script  src="https://s3.amazonaws.com/fireform/fireform.min.js"></script>
<script >
  options={
    emailNotification:"c.programer@gmail.com",
    callback:function(err, val) { 
      $('#contact-email').val('');
      $('#contact-body').val(''); 
      $('#result').text('Thanks for contacting me!'); }
  }
  new Fireform('#contact', 'http://fireform.org/list/63/email', options);
</script>