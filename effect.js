function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function(){
  setInterval(function(){
    var screenHeight = $(document).height();
    var screenWidth = $(document).width();

    var startLeft = getRandomArbitrary(0,screenWidth);

    var timeRun = getRandomArbitrary(2500,3000);
    var opacityR = Math.random() * (1 - 0.2) + 0.5;
    var sizeR = getRandomArbitrary(30,60);

    var endLeft = getRandomArbitrary(startLeft-100,startLeft+100);

    var snow = document.createElement('span');

    $(snow).addClass('snow-item fa fa-heart').css({
      'position'  : 'absolute',
      'z-index'   : 'auto',
      'color'     : '#ff0000',
      'display'   : 'block',
      'top'       : 0,
      'left'      : startLeft,
      'opacity'   : opacityR,
      'font-size' : sizeR+'px'
    })
      .appendTo('body')
      .animate({
      'top'       : screenHeight-sizeR,
      'left'      : endLeft
    },{
      duration : timeRun,
      easing : 'linear',
      complete:function(){
        $(this).fadeOut('fast',function(){
          $(this).remove();
        });
      }
    });

  },100);
});

