let data = 0
        
function plus() {
    data++
    let text = document.getElementById("h1").innerText = data
    console.log(text);
}

function minus() {
    var text1
    data--
  if (data < 0) {
        data = 0
  }else{
    
    text1 = document.getElementById("h1").innerText = data
    // console.log(text);
  }
    
}
function reset() {
        data = 0
        let text = document.getElementById("h1").innerText = data
        console.log(text);
    }