document.getElementById('feedback-form').addEventListener('click', function(event) {
    if (event.target.type === 'radio') {
       var stars = document.getElementsByName(event.target.name);
       for (var i = 0; i < stars.length; i++) {
         stars[i].checked = false;
       }
       event.target.checked = true;
    }
   });