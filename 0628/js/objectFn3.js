// objectfundtion.js

// 객체 리터럴 함수 만들기 - 객체지향
;(function($){

    var txt=''; 
    var objFn = {
        a : 80,
        b : 90,
        c : ['restaurant-img25.jpg', 'restaurant-img26.jpg', 'restaurant-img27.jpg', 'restaurant-img28.jpg', 'restaurant-img29.jpg', 'restaurant-img30.jpg', 'restaurant-img31.jpg', 'restaurant-img32.jpg'],
        init : function(){  
            this.slide();
            this.txtFn();
        }, 
        slide : function(){
            console.log('메인슬라이드!', this.a);
        },
        txtFn : function(){
            for(i = 0; i <this.c.length; i++){
                // txt += '<span>' + this.c[i] + '</span>'; 
                txt += '<p><img src="./img/' +  this.c[i] + ' "alt="restaurant img"><span>didididi</span></p>';
                }
                
                $('.output').html(txt);
                }

            }
            
            var slideUp = objFn.c[i]
            $slideUp.on({
                mouseenter : function(){
                  this.css("height", "200px");
                }
            });    
    }

    objFn.init();// 객체를 만들고 전체실행
    
})(jQuery);