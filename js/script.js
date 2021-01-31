'use strict';
let mainField = document.querySelector('.main-field');
let allSquares = document.querySelectorAll('.squares');
let allWraps = document.querySelectorAll('.square-wrap');
let puzzleButton = document.querySelector('.make-puzzle');
let puzzleCheck = document.querySelector('.check-puzzle');
let shuffle = Math.floor((Math.random() * 3) + 1);
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let ten = document.querySelector('.ten');
let eleven = document.querySelector('.eleven');
let twelve = document.querySelector('.twelve');
let thirteen = document.querySelector('.thirteen');
let fourteen = document.querySelector('.fourteen');
let fifteen = document.querySelector('.fifteen');
let sixteen = document.querySelector('.sixteen');
let seventeen = document.querySelector('.seventeen');
let eighteen = document.querySelector('.eighteen');
let nineteen = document.querySelector('.nineteen');
let twenty = document.querySelector('.twenty');
let twentyone = document.querySelector('.twentyone');
let twentytwo = document.querySelector('.twentytwo');
let twentythree = document.querySelector('.twentythree');
let twentyfour = document.querySelector('.twentyfour');
let twentyfive = document.querySelector('.twentyfive');
let wall = document.querySelector('.wall-inside');
let beginnerImage = function() {
  for(let s of allSquares) {
    s.style.backgroundImage = 'url(img/zamok3.jpg)';
  }
}
beginnerImage();
let winAudio = new Audio();
let mainAudio = new Audio();
let playWinMusic = function() {
  winAudio.src = 'sound/tommy-tallarico-1-up.ogg';
  winAudio.autoplay = true;
  winAudio.volume = 0.3;
  winAudio.loop = false;
}
let playMusic = function() {
  mainAudio.src = `${sounds[g]}`;
  mainAudio.autoplay = true;
  mainAudio.loop = true;
  mainAudio.volume = 0.3;
}
let stopMusic = function() {
  mainAudio.pause();
}
let makeSquares = function() {
  mainField.style.backgroundImage = 'none';
  wall.style.display = 'flex';
  for(let s of allSquares) {
    s.classList.add('appear-square');
    s.style.backgroundRepeat = 'no-repeat';
    s.style.boxShadow = 'inset -5px -5px 5px 0 rgba(0,0,0,.5), inset 5px 5px 5px 0 rgba(255,255,255,0.5)';
    $(function() {
      $(s).draggable({
        containment: '.puzzle-wrap',
        stack: '.squares',
        snap: '.square-wrap',
        snapTolerance: 70,
        start: function(event, ui) {
          s.style.boxShadow = '0px 0px 10px 2px #FDE910';
        },
        stop: function(event, ui) {
          s.style.boxShadow = 'none';
        },
      });
    });
  }
  for(let w of allWraps) {
    $(w).droppable({
      accept: '.squares',
      drop: function(event, ui) {
        if($(one).css('top') == '0px' && $(one).css('left') == '0px' && $(two).css('top') == '0px' && $(two).css('left') == '136px' && $(three).css('top') == '0px' && $(three).css('left') == '272px' && $(four).css('top') == '0px' && $(four).css('left') == '408px' && $(five).css('top') == '0px' && $(five).css('left') == '544px' && $(six).css('top') == '85px' && $(six).css('left') == '0px' && $(seven).css('top') == '85px' && $(seven).css('left') == '136px' && $(eight).css('top') == '85px' && $(eight).css('left') == '272px' && $(nine).css('top') == '85px' && $(nine).css('left') == '408px' && $(ten).css('top') == '85px' && $(ten).css('left') == '544px' && $(eleven).css('top') == '171px' && $(eleven).css('left') == '0px' && $(twelve).css('top') == '171px' && $(twelve).css('left') == '136px' && $(thirteen).css('top') == '171px' && $(thirteen).css('left') == '272px' && $(fourteen).css('top') == '171px' && $(fourteen).css('left') == '408px' && $(fifteen).css('top') == '171px' && $(fifteen).css('left') == '544px' && $(sixteen).css('top') == '255px' && $(sixteen).css('left') == '0px' && $(seventeen).css('top') == '255px' && $(seventeen).css('left') == '136px' && $(eighteen).css('top') == '255px' && $(eighteen).css('left') == '272px' && $(nineteen).css('top') == '255px' && $(nineteen).css('left') == '408px' && $(twenty).css('top') == '255px' && $(twenty).css('left') == '544px' && $(twentyone).css('top') == '340px' && $(twentyone).css('left') == '0px' && $(twentytwo).css('top') == '340px' && $(twentytwo).css('left') == '136px' && $(twentythree).css('top') == '340px' && $(twentythree).css('left') == '272px' && $(twentyfour).css('top') == '340px' && $(twentyfour).css('left') == '408px' && $(twentyfive).css('top') == '340px' && $(twentyfive).css('left') == '544px') {
          for(let s of allSquares) {
            s.style.boxShadow = 'none';
            s.style.pointerEvents = 'none';
          }
          changeButton.disabled = false;
          makeAnim();
          changeButton.classList.add('change-anim');
          tray.classList.remove('make-room');
          light.classList.remove('make-light');
          seclLight.classList.remove('make-light');
          changeButton.style.color = 'rgba(0,0,0,1)';
          playWinMusic();
          stopMusic();
        }
      }
    });
    w.classList.add('square-active');
  }
}
let makeShuffle = function() {
  if(shuffle == 1) {
    $('.one').css({
      top: 460,
      left: 272
    }); //eight
    $('.two').css({
      top: 475,
      left: 408
    }); //nineteen
    $('.three').css({
      top: 472,
      left: 20
    }); //eleven
    $('.four').css({
      top: 465,
      left: 136
    }); //twentytwo
    $('.five').css({
      top: 476,
      left: 408
    }); //fourteen
    $('.six').css({
      top: 476,
      left: 136
    }); //twelve
    $('.seven').css({
      top: 470,
      left: 272
    }); //eighteen
    $('.eight').css({
      top: 465,
      left: 25
    }); //one
    $('.nine').css({
      top: 470,
      left: 524
    }); //twentyfive
    $('.ten').css({
      top: 468,
      left: 524
    }); //fifteen
    $('.eleven').css({
      top: 477,
      left: 272
    }); //three
    $('.twelve').css({
      top: 478,
      left: 24
    }); //six
    $('.thirteen').css({
      top: 465,
      left: 23
    }); //sixteen
    $('.fourteen').css({
      top: 470,
      left: 524
    }); //five
    $('.fifteen').css({
      top: 465,
      left: 524
    }); //ten
    $('.sixteen').css({
      top: 472,
      left: 272
    }); //thirteen
    $('.seventeen').css({
      top: 474,
      left: 408
    }); //twentyfour
    $('.eighteen').css({
      top: 465,
      left: 136
    }); //seven
    $('.nineteen').css({
      top: 475,
      left: 136
    }); //two
    $('.twenty').css({
      top: 460,
      left: 272
    }); //twentythree
    $('.twentyone').css({
      top: 470,
      left: 28
    });
    $('.twentytwo').css({
      top: 474,
      left: 408
    }); //four
    $('.twentythree').css({
      top: 465,
      left: 524
    });
    $('.twentyfour').css({
      top: 474,
      left: 136
    });
    $('.twentyfive').css({
      top: 465,
      left: 408
    });
  } else if(shuffle == 2) {
    $('.fifteen').css({
      top: 475,
      left: 272
    });
    $('.eleven').css({
      top: 465,
      left: 408
    });
    $('.eight').css({
      top: 460,
      left: 28
    });
    $('.four').css({
      top: 470,
      left: 136
    });
    $('.seventeen').css({
      top: 478,
      left: 408
    });
    $('.six').css({
      top: 470,
      left: 136
    });
    $('.seven').css({
      top: 465,
      left: 272
    });
    $('.three').css({
      top: 470,
      left: 24
    });
    $('.eighteen').css({
      top: 460,
      left: 524
    });
    $('.ten').css({
      top: 462,
      left: 524
    });
    $('.two').css({
      top: 473,
      left: 272
    });
    $('.twentyone').css({
      top: 475,
      left: 20
    });
    $('.thirteen').css({
      top: 465,
      left: 26
    });
    $('.fourteen').css({
      top: 474,
      left: 524
    });
    $('.one').css({
      top: 475,
      left: 524
    });
    $('.twentythree').css({
      top: 462,
      left: 272
    });
    $('.five').css({
      top: 476,
      left: 408
    });
    $('.nine').css({
      top: 468,
      left: 136
    });
    $('.nineteen').css({
      top: 460,
      left: 136
    });
    $('.twentyfour').css({
      top: 466,
      left: 272
    });
    $('.twelve').css({
      top: 474,
      left: 25
    });
    $('.twentytwo').css({
      top: 462,
      left: 408
    });
    $('.sixteen').css({
      top: 470,
      left: 524
    });
    $('.twenty').css({
      top: 462,
      left: 136
    });
    $('.twentyfive').css({
      top: 476,
      left: 408
    });
  } else if(shuffle == 3) {
    $('.one').css({
      top: 460,
      left: 272
    });
    $('.two').css({
      top: 465,
      left: 408
    });
    $('.three').css({
      top: 470,
      left: 28
    });
    $('.twentytwo').css({
      top: 463,
      left: 136
    });
    $('.five').css({
      top: 478,
      left: 408
    });
    $('.twentyfour').css({
      top: 478,
      left: 136
    });
    $('.seven').css({
      top: 472,
      left: 272
    });
    $('.twentyfive').css({
      top: 476,
      left: 24
    });
    $('.nine').css({
      top: 462,
      left: 524
    });
    $('.ten').css({
      top: 472,
      left: 524
    });
    $('.eleven').css({
      top: 470,
      left: 272
    });
    $('.twentyone').css({
      top: 465,
      left: 20
    });
    $('.thirteen').css({
      top: 466,
      left: 25
    });
    $('.fourteen').css({
      top: 470,
      left: 524
    });
    $('.fifteen').css({
      top: 465,
      left: 524
    });
    $('.twelve').css({
      top: 473,
      left: 272
    });
    $('.seventeen').css({
      top: 475,
      left: 408
    });
    $('.eighteen').css({
      top: 465,
      left: 136
    });
    $('.nineteen').css({
      top: 461,
      left: 136
    });
    $('.twenty').css({
      top: 476,
      left: 272
    });
    $('.sixteen').css({
      top: 460,
      left: 20
    });
    $('.four').css({
      top: 478,
      left: 408
    });
    $('.twentythree').css({
      top: 465,
      left: 524
    });
    $('.six').css({
      top: 465,
      left: 136
    });
    $('.eight').css({
      top: 476,
      left: 408
    });
  }
}
let tray = document.querySelector('.tray');
let light = document.querySelector('.light');
let seclLight = document.querySelector('.second-light');
puzzleButton.addEventListener('click', function() {
  makeSquares();
  makeShuffle();
  changeButton.disabled = true;
  tray.classList.add('make-room');
  light.classList.add('make-light');
  seclLight.classList.add('make-light');
  changeButton.classList.remove('change-anim');
  changeButton.style.color = 'rgba(0,0,0,0.5)';
  playMusic();
  for(let s of allSquares) {
    s.style.pointerEvents = 'auto';
  }
});
let changeButton = document.querySelector('.change-img');
let images = ['img/beach.jpg', 'img/hill.jpg', 'img/leopard.jpg', 'img/nightcity.jpg', 'img/zamok3.jpg'];
let sounds = ['sound/tommy-tallarico-beach-music.ogg', 'sound/tommy-tallarico-jazzy-tune.ogg', 'sound/tommy-tallarico-play-da-blues.ogg', 'sound/tommy-tallarico-wall-tune.ogg', 'sound/tommy-tallarico-western-tune.ogg'];
let i = 0;
let g = 0;

function changeBackgroundImage() {
  if(i === images.length) {
    i = 0;
  }
  mainField.style.backgroundImage = `url(${images[i]})`;
  for(let s of allSquares) {
    s.style.backgroundImage = `url(${images[i]})`;
  }
  i++;
};

function changeBackgroundMusic() {
  if(g === sounds.length) {
    g = 0;
  }
  mainAudio.src = `${sounds[g]}`;
  g++;
};
changeButton.addEventListener('click', function() {
  changeBackgroundImage();
  changeBackgroundMusic();
  stopMusic();
  wall.style.display = 'none';
});
let makeAnim = function() {
  let completed = document.querySelector('.completed-alert');
  completed.classList.add('make-animation');
  let restartAnim = function() {
    completed.classList.remove('make-animation');
  }
  setTimeout(restartAnim, 3000);
};
