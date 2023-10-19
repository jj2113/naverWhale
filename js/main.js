const buttons = document.querySelectorAll('.safe__tab li');

buttons.forEach(function(button, i) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.add('on');
    
    buttons.forEach(function(button2, i2) {
      if ( i !== i2 ) {
        button2.classList.remove('on');
      }
    });
  });
});