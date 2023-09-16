$(function () {
    var _picture = [
      { url:'images/860770.jpg',name:''},
      { url:'images/S__119734283_0.jpg',name:''},
      { url:'images/S__119734289_0.jpg',name:''},
      { url:'images/860775.jpg',name:''},
      { url:'images/S__119734284_0.jpg',name:''},
      { url:'images/S__119734291_0.jpg',name:''},
      { url:'images/S__119734278_0.jpg',name:''},
      { url:'images/S__119734285_0.jpg',name:''},
      { url:'images/S__119734292_0.jpg',name:''},
      { url:'images/S__119734280_0.jpg',name:''},
      { url:'images/S__119734286_0.jpg',name:''},
      { url:'images/S__119734293_0.jpg',name:''},
      { url:'images/S__119734281_0.jpg',name:''},
      { url:'images/S__119734287_0.jpg',name:''},
      { url:'images/S__119734294_0.jpg',name:''},
      { url:'images/S__119734282_0.jpg',name:''},
      { url:'images/S__119734288_0.jpg',name:''},
      { url:'images/S__119734295_0.jpg',name:''},
      { url:'images/S__119734295_0.jpg',name:''},
      { url:'images/S__119734295_0.jpg',name:''},
      { url:'images/2023_9月卡片_鑒章.jpg',name:''},
      { url:'images/861502_0.jpg',name:''}
      ];
      var _oldPictureCount = 0;
      var _draw = [];
      var cardloading = function (fun, time) {
        
       
        $(".cake").show();
        $(".cards").hide();
        $(".card.is-loading .image ").height(400);
        $(".creater").hide();
        setTimeout(() => {
          $(".cards").show();
          $(".cake").hide();
          fun();
        }, time);
      };


    init();
    
    function init() {
       _oldPictureCount = _picture.length ;
        eventBind();
        $(".card_count").text("剩餘" + _picture.length +"/" + _oldPictureCount + "張卡");
    }

    function drawCard() {
        if (_picture.length < 1) {
          alert("沒卡囉^^");
          return;
        }
        $("img").attr("src", "");
        var  sec =  Math.floor(Math.random() * 2000);
        cardloading(cardPicker, sec);

      }
      
      function cardPicker() {
        var cardNum = Math.floor(Math.random() * _picture.length);
        var card = _picture[cardNum];

        $("img").attr("src", card.url);

        _draw.push(card);
        _picture.splice(cardNum, 1);
        $(".creater").html("<br/>作者：" + card.name);
        $(".creater").show();
        $(".card_count").text("剩餘" + _picture.length +"/" + _oldPictureCount + "張卡");
        $(".already_card").text("以抽" + _draw.length + "張卡");
      }
      
    
      
      buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
    
            let ripples = document.createElement('span');
            ripples.style.left = x +'px';
            ripples.style.top = y +'px';
            this.appendChild(ripples);
    
            setTimeout(() => {
                ripples.remove();
            }, 900);
        })
    })

   

    function eventBind(){
        $(" .pick").bind("click", function (e) {
            ;
            drawCard();
          });
          $(" .card_Reflash").bind("click", function (e) {
            
            // recovery();
            location.reload();
          });
    }
});
