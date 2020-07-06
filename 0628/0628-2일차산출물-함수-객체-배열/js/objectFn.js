//objectFn.js
;(function($){
	
	//객체(Object) 생성(Create)
	//var sungjuk = []; //배열객체
	//var txt='';  //값이 빈값 들어간다.
	var txt;     //undefined
	var sungjuk = {  //리터럴객체 방식
			irum:'문선종',
			kor:	99,
			eng:	91,
			mat:	99,
			edps:	100,
			sum:	function(){ //함수()
				return this.kor+this.eng+this.mat+this.edps;
			},
			avg:	function(){
				//return Math.round(this.sum()/4);  
				//return Math.ceil(this.sum()/4);  
				return Math.floor(this.sum()/4);  
				//수학객체 Math.round(반올림) Math.ceil(자리올림) Math.floor(자리내림)           
			}
	    }; //내장객체
		
		console.log( sungjuk.sum(), sungjuk.avg()  );
		
	
	/*
		console.log( sungjuk.irum, sungjuk.kor, sungjuk.eng, sungjuk.mat, sungjuk.edps );
	
		//태그요소 중 선택자(selector) .output 클래스요소에 출력
		$(선택자).text( ' ~ 출력값...' );  + 문자열 연결 연산자 
		//$('.output').text( sungjuk.irum, sungjuk.kor, sungjuk.eng, sungjuk.mat, sungjuk.edps );  //출력이 맨앞 1개만 출력
		$('.output').text( sungjuk.irum + ' ' + sungjuk.kor + ' ' + sungjuk.eng + ' ' + sungjuk.mat + ' ' + sungjuk.edps );
	

		cnt++;    //1씩증가 누적증가  오로지 1씩만 증가
		cnt--     //1씩감소 누적증가  오로지 1씩만 감소
		
		
		cnt=cnt+1 //1씩증가 누적증가
		cnt=cnt+2 //2씩증가 누적증가
		:
		cnt=cnt+5 //5씩증가 누적증가
		
		
		cnt+=1;   //1씩증가 누적증가 	
		cnt+=2;   //2씩증가 누적증가 	
		:
		cnt+=5;   //5씩증가 누적증가

		
		//sungjuk.irum
		//생성된객체(Object).속성
		
		//txt 변수에 저장해 두고 출력 요소에 간접 출력 [속성값]이 출력
		txt =  sungjuk.irum + ', ';
		txt += sungjuk.kor  + ', ';
		txt += sungjuk.eng  + ', ';
		txt += sungjuk.mat  + ', ';
		txt += sungjuk.edps;
		
		$('.output').text( txt );
		
		txt =  sungjuk.irum + '<br>';
		txt += sungjuk.kor  + '<br>';
		txt += sungjuk.eng  + '<br>';
		txt += sungjuk.mat  + '<br>';
		txt += sungjuk.edps;
		
		$('.output').html( txt );
		*/		
		
		txt =  '<p>' + sungjuk.irum  + '</p>';
		txt += '<p>' + sungjuk.kor   + '</p>';
		txt += '<p>' + sungjuk.eng   + '</p>';
		txt += '<p>' + sungjuk.mat   + '</p>';
		txt += '<p>' + sungjuk.edps  + '</p>';
		txt += '<p>' + sungjuk.sum() + '</p>';  //콜백함수()
		txt += '<p>' + sungjuk.avg() + '</p>';  //콜백함수()
		
		$('.output').html( txt );
		
		
		
	
})(jQuery);
















