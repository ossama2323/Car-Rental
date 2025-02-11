window.onscroll = function navbar_scroll(){
    if(window.scrollY > 39){
        document.getElementById('navbar',).classList.add('navbar_scroll');
    }else{
        document.getElementById('navbar').classList.remove('navbar_scroll');
    }
}


$('.datepicker').datepicker(); //for input date
