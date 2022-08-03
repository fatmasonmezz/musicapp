let previous = document.querySelector("#pre");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let title = document.querySelector("#title");
let recent_volume = document.querySelector("#volume");
let volume_show = document.querySelector("#volume-show");
let slider = document.querySelector("#duration-slider");
let show_duration = document.querySelector("#show_duration");
let track = document.querySelector("#track");
let auto_play = document.querySelector("#auto");
let current = document.querySelector("#current");
let total = document.querySelector("#total");
let artist = document.querySelector("#artist");

let timer;
let autoplay=0;

let index_no=0;
let playing_song = false;

let trackk = document.createElement("audio");

let All_song= [{

    name : "first song",
    path : "musics/song1.mp3",
    img  : "imgs/img1.jpg",
    singer : "first singer"
},
{
    name : "second song",
    path : "musics/song2.mp3",
    img  : "imgs/img2.jpg",
    singer : "second singer"
},
{
    name : "third song",
    path : "musics/song3.mp3",
    img  : "imgs/img3.jpg",
    singer : "third singer"
},
{
    name : "fourth song",
    path : "musics/song4.mp3",
    img  : "imgs/img4.png",
    singer : "fourth singer"
},
{
    name : "fifth song",
    path : "musics/song5.mp3",
    img  : "imgs/img5.jpg",
    singer : "fifth singer"
}
];



function load_track(index_no){
    clearInterval(timer);
    reset_slider();
    trackk.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    trackk.load();

    total.innerHTML = All_song.length;
    current.innerHTML = index_no + 1 ;
    timer = setInterval(range_slider, 1000);
}
load_track(index_no);


function mutesound(){
    trackk.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
}

function reset_slider(){
    slider.value = 0;
}


function playnow(){
    if(playing_song==false){
        playsong();
    }else{
        pausesong();
    }
}

function playsong(){
    trackk.play();
    playing_song = true;
    play.innerHTML ='<i class="fa fa-pause"></i>';
}

function pausesong(){
    trackk.pause();
    playing_song = false;
    play.innerHTML ='<i class="fa fa-play"></i>';

}

function nextsong(){
    if(index_no < All_song.length - 1){
        index_no +=1;
        load_track(index_no);
        playsong();
    }else{
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}

function previoussong(){
    if(index_no > 0){
        index_no -= 1;
        load_track(index_no);
        playsong();
    
    }else{
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }

}

function volumechange(){
    volume_show.innerHTML = recent_volume.value;
    trackk.volume = recent_volume.value / 100 ;
}

function changeduration(){
    slider_position = trackk.duration *  (slider.value / 100);
    trackk.currentTime = slider_position;
}

function autoplaypoint(){
    if(autoplay==1){
        autoplay = 0;
        auto_play.style.background = "rgba(255,255,255,0.2)";
    }else{
        autoplay = 1;
        auto_play.style.background = "#FF6589";
    }
}

function range_slider(){
    let position = 0;

    if(!isNaN(trackk.duration)){
        position = trackk.currentTime * (100 / trackk.duration);
        slider.value = position;
    }

    if(trackk.ended){
       play.innerHTML = '<i class = "fa fa-play"></i>';
       if(autoplay==1){
        index_no += 1;
        load_track(index_no);
        playsong();
         }
    }
}






