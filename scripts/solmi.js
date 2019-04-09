(function() {

  document.onkeydown = moveKeyDown;
  let movingObject = document.getElementById('movingObject');
  let alertText = document.getElementById('alertText');
  let backgroundObject = [];
  let house1 = document.getElementById('house1');
  let house2 = document.getElementById('house2');
  backgroundObject.push(house1);
  backgroundObject.push(house2);

  function moveKeyDown(e) {
    let event = window.event ? window.event : e;
    let keyCode = event.keyCode;
    const speed = 5;

    crashCheck();

    //up
    if (keyCode == 38) {
      movingObject.style.top = calcPx(movingObject.style.top, -speed);
    }

    //down
    if (keyCode == 40) {
      movingObject.style.top = calcPx(movingObject.style.top, speed);
    }

    //right
    if (keyCode == 39) {
      movingObject.style.left = calcPx(movingObject.style.left, speed);
    }

    //left
    if (keyCode == 37) {
      movingObject.style.left = calcPx(movingObject.style.left, -speed);
    }
  }

  function crashCheck() {
    backgroundObject.forEach(function(element) {
      if(movingObject.offsetTop > (element.offsetTop - movingObject.offsetHeight)
      && movingObject.offsetTop < (element.offsetTop + element.offsetHeight)
      && movingObject.offsetLeft > (element.offsetLeft - movingObject.offsetWidth)
      && movingObject.offsetLeft < (element.offsetLeft + element.offsetWidth)){
        alertText.innerHTML = '안녕? ' + element.getAttribute('name');
        //console.log(alert('hi!'));
      }
    });
  }

  function calcPx(styleString, moving) {
    let str = styleString;
    if(str !== ''){
      str =  parseInt(str.replace('px', '')) + moving;
    }

    return str + 'px';
  }
}());
