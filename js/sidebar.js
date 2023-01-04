//변수명은 낙타표기법으로 작성한다

const sidebarMenuButton = document.querySelector('.gnb-icon-button');
console.log(sidebarMenuButton);


const sidebar = document.querySelector('.sidebar')
console.log(sidebar);

const sidebaroveray = document.querySelector('.overlay')
console.log(sidebaroveray);

console.log(sidebar , sidebaroveray , sidebarMenuButton);


function openSidebar(){
  //하고 싶은 일을 코드로 작성하면됨
  //사이드바 , 오버레이가 보이게 하고싶음
  //is-active라는 클래스가 추가되면 보이고 제거되면 사라진다
  sidebar.classList.add('is-active');
  sidebaroveray.classList.add('is-active');



}

sidebarMenuButton.addEventListener('click', openSidebar);

// dom메소드

function closeSidebar(){
  //overlay를 클릭했을때 is-active라는 클래스를 제거
  sidebar.classList.remove('is-active');
  sidebaroveray.classList.remove('is-active');

}

sidebaroveray.addEventListener('click', closeSidebar);
