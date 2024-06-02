const click=document.querySelector('.click');
const giftBox=document.querySelector('.gift-box');
const Shadow=document.querySelector('.shadow');
const giftContainer=document.querySelector('.gift-container');
const text=document.querySelector('.text');

click.addEventListener('click',()=>{
    if(click.className==="click"){
        click.classList.add('active')
        giftBox.classList.add('active')
        Shadow.classList.add('active')
        giftContainer.classList.add('active')
        text.classList.add('active')
        text.classList.remove('active2')
    }
    else{
        click.classList.remove('active')
        giftBox.classList.remove('active')
        Shadow.classList.remove('active')
        giftContainer.classList.remove('active')
        text.classList.remove('active')
        text.classList.add('active2')
    }
})