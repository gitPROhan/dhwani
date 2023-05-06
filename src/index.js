
let nav = document.querySelectorAll('.navitem');

for(let i=0;i<nav.length;i++){
   if(nav[i].id == "active"){
        nav[i].style.borderBottom='2px solid rgba(233, 169, 97, 0.976)'; 
        nav[i].getElementsByTagName('a')[0].style.color='rgba(233, 169, 97, 0.976)';
        nav[i].style.marginBottom='18px';
        nav[i].style.borderRadius='2px';
        nav[i].style.filter= 'brightness(180%)';
        continue;
   }
   nav[i].addEventListener('mouseover',function(){
      nav[i].style.borderBottom='2px solid rgba(233, 169, 97, 0.976)'; 
      nav[i].getElementsByTagName('a')[0].style.color='rgba(233, 169, 97, 0.976)';
      nav[i].style.marginBottom='18px';
      nav[i].style.borderRadius='2px';
      nav[i].style.filter= 'brightness(180%)';
   })
   nav[i].addEventListener('mouseout',function(){
      nav[i].style.borderBottom='None'; 
      nav[i].getElementsByTagName('a')[0].style.color='rgb(79, 194, 171)';
      nav[i].style.marginBottom='20px';
      nav[i].style.borderRadius='0px';
      nav[i].style.filter= 'brightness(100%)';
   })
}

// .navitem #active{
//     filter:brightness(180%);
//     border-bottom:2px solid rgba(233, 169, 97, 0.976); ;
//     margin-bottom:18px;
//     border-radius: 2px;
// } 