document.querySelector('.burger').onclick = function(){
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
}