function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function scrollDown() {
    var currentPosition = window.pageYOffset;
    var targetPosition = currentPosition + 600; // Change 100 to the amount you want to scroll down
  
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }