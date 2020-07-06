//objectFn.js
;(function($){
	var txt='';
	var objFn = {
			a:80,
			b:90,
			c:['restaurant-img25.jpg','restaurant-img26.jpg','restaurant-img27.jpg','restaurant-img28.jpg','restaurant-img29.jpg','restaurant-img30.jpg','restaurant-img31.jpg','restaurant-img32.jpg'],
			init:	function(){  //최초 로딩시 실행할 함수
				this.slide();
				this.txtFn();
			},
			slide:	function(){
				console.log('메인슬라이드!!!', this.a);
				console.log('메인슬라이드!!!', this.b);
			},
			txtFn:	function(){
				// console.log( this.c[0], this.c[1], this.c[2], this.c[3]);
				//반복문 for(변수=시작값; 변수<=종료값; 변수++) 0 ~ 3
				for(i=0; i<this.c.length; i++){ //4미만 <=3
					// txt += '<p>' + this.c[i] + '</p>';
					// txt += '<p><img src="./img/' + this.c[i] +  '" alt=""></p>';
					txt += "<p><img src='./img/" + this.c[i] +  "' alt=''></p>";
				}
				
				$('.output').html( txt );
				//console.log( this.c.length ); //4 배열의 길이
			}
		}
		
		objFn.init();
		
		
		
})(jQuery);