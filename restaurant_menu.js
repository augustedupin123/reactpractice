const menuitems = [
    {
        id:1,
        item:"Food item 1",
        oneliner: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, facilis!",
        img:"images_app/restaurant_1.jpg",
        hotel:"hotel name 1",
        desc:"One: Lorem ipsum dolor sit amet consectetur, adipiscing elit. Tempore doloribusenim earum et quibusdum soluta,"

    },
    {
        id:2,
        item:"Food item 2",
        oneliner: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, facilis!",
        img:"images_app/restaurant_2.jpg",
        hotel:"hotel name 1",
        desc:"One: Lorem ipsum dolor sit amet consectetur, adipiscing elit. Tempore doloribusenim earum et quibusdum soluta,"

    },
    {
        id:3,
        item:"Food item 3",
        oneliner: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, facilis!",
        img:"images_app/restaurant_3.jpg",
        hotel:"hotel name 1",
        desc:"One: Lorem ipsum dolor sit amet consectetur, adipiscing elit. Tempore doloribusenim earum et quibusdum soluta,"

    },
    {
        id:4,
        item:"Food item 4",
        oneliner: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, facilis!",
        img:"images_app/restaurant_4.jpg",
        hotel:"hotel name 1",
        desc:"One: Lorem ipsum dolor sit amet consectetur, adipiscing elit. Tempore doloribusenim earum et quibusdum soluta,"

    },
    {
        id:5,
        item:"Food item 5",
        oneliner: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, facilis!",
        img:"images_app/restaurant_5.jpg",
        hotel:"hotel name 1",
        desc:"One: Lorem ipsum dolor sit amet consectetur, adipiscing elit. Tempore doloribusenim earum et quibusdum soluta,"

    }
]



console.log(menuItems.length);
const item = document.getElementById('item');
const oneliner = document.getElementById('oneliner');
const img = document.getElementById('img');
const hotel = document.getElementById('hotel');
const desc = document.getElementById('desc');
const prev = document.getElementById('prev');
const random = document.getElementById('random');
const next = document.getElementById('next');

let currentmenu = 0;
window.addEventListener('DOMContentLoaded', function(){
    // let menu= menuitems[currentmenu];
    // item.textContent = menu.item;
    // oneliner.textContent=menu.oneliner;
    // img.src = menu.img;
    // hotel.textContent = menu.hotel;
    // desc.textContent = menu.desc;
    allmenu(currentmenu);
});

const allmenu=()=>{
    let menu= menuitems[currentmenu];
    item.textContent = menu.item;
    oneliner.textContent=menu.oneliner;
    img.src = menu.img;
    hotel.textContent = menu.hotel;
    desc.textContent = menu.desc;
};
random.addEventListener('click', ()=>{
    currentMenu = Math.floor(Math.random()*menuitems.length);
    console.log(currentMenu);
    allmenu(currentMenu);
});
prev.addEventListener('click', ()=>{
    currentMenu--;
    if(currentMenu<0){
        currentMenu=menuitems.length - 1;
    }
    allmenu(currentMenu);
});
next.addEventListener('click', ()=>{
    currentMenu++;
    if(currentMenu>menuitems.length - 1){
        
    }
    allmenu(currentMenu);
});









