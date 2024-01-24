 /* Open when someone clicks on the span element */
 function openNav() {
    document.getElementById("overlay").style.width = "100vw";
    document.getElementById("overlay").style.height = "100vh";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("overlay").style.width = "0vw";
    document.getElementById("overlay").style.height = "0vh";
  }