function changeOuterLinks() {
  const aElementList = document.querySelectorAll(`nav#link-list a`);

  for (let i = 0; i < aElementList.length; i++) {
    aElementList[i].setAttribute('title', aElementList[i].innerHTML);
      
    aElementList[2].setAttribute('target', '_blank');
    aElementList[4].setAttribute('target', '_blank');


   
   //aElementList[2].inneText('<strong>'+ innerText + '</strong>');
   //aElementList[4].innerText('<strong>'+ innerText + '</strong>');
  }

  const navElement =  document.querySelector(`nav#link-list`);
  navElement.style.display='flex';
  navElement.style.flexDirection='column';
  navElement.style.margin='0px auto';
  navElement.style.width='30%';
  navElement.style.border='1px solid blue';
  navElement.style.padding='16px';


}

export { changeOuterLinks };