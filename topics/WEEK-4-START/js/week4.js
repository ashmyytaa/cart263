window.onload = setup;
function setup() {
  console.log("in week 4 ;)")

  document.querySelector("#boxA").addEventListener("click", runTimeOut);


  //set interval
  window.setInterval(addTextRecur, 2000);
  function addTextRecur() {
    let parent = document.getElementById("parent");
    parent.innerHTML += " NEW TEXT TO APPEAR RECUR ";
  }



  function runTimeOut() {
    window.setTimeout(addTimeoutText, 2000);

  }

  //set timout
  window.setTimeout(addTimeoutText, 2000);
  function addTimeoutText() {
    let parent = document.getElementById("parent");
    parent.innerHTML += " NEW TEXT TO APPEAR ";


  }
}
