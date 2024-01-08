const box = document.querySelector('.js-box');

function advertising(box, titleTimer, counter) {
    setTimeout(() => {
  box.style.display = 'block';
  const id = setInterval(() => {
    // console.log(id)
    counter -= 1;
    titleTimer.textContent = counter;
    
    if (!counter) {
      clearInterval(id)
        titleTimer.textContent = 'X';
      //box.style.display = 'none';
      titleTimer.addEventListener('click', onClickTimer)
    };
  }, 1000)
  
    }, 3000);
};

function onClickTimer() {
    box.classList.add("animate__backOutUp");
   // box.style.display = 'none';   
}

export { advertising };