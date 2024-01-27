let img = document.querySelector('.img')
let bg = document.getElementById('cont')



function phones(phone){

    switch(phone)
{
    case 'golden':
        img.src = "img/0.png";
        bg.style.backgroundColor = '#176B87'
        break
    case 'blue' :
        img.src = "img/1.png";
        bg.style.backgroundColor = '#A1ed'
        break
    case 'grey' :
        img.src = "img/2.png";
        bg.style.backgroundColor = '#748E63'
        break
    case 'ofwhet' :
        img.src = "img/3.png";
        bg.style.backgroundColor =  '#1D5D9B'
        break
    case 'red' :
        img.src = "img/4.png";
        bg.style.backgroundColor ='#E2C799'
        break


}
    
}



