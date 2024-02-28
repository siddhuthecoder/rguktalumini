const navBar=document.querySelector('#l-items'); // initial nav-bar
// navBar.classList.toggle('d-none')
const inbtn=document.querySelector('#buttn') // initial nav-bar toggler button.
const lc=document.querySelector('.line-container');
inbtn.addEventListener('click',()=>{
    vntop.classList.remove('d-none');
    links.classList.remove('n-links');
    navBar.classList.toggle('d-none');
    lc.classList.toggle('d-none');
})
const links=document.querySelector('#n-menu'); // pop up nav bar
const vntop=document.querySelector('#n-topp');  // it is virtual window top bar 
vntop.classList.add('d-none');
const vbtn=document.querySelector('.vbtnn')  //Related to button of virtual tab.
vbtn.addEventListener('click',()=>{
    vntop.classList.toggle('d-none');
    links.classList.toggle('n-links');
    navBar.classList.toggle('d-none');
    lc.classList.toggle('d-none');
})