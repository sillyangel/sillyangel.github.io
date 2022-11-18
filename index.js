// Code 4 moblie people for the top-nav bar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


const toast = document.getElementById('toast');

function a() {
  toast.querySelector('.toast-body').innerHTML = "Toast notification is working ...";
  toast.classList.add('visible');
}
function b() {
  toast.classList
}
document.getElementById('hideBtn').addEventListener('click', function() {
    toast.classList.remove('visible');
});
