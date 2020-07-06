;(function($){

	//학생성적표 객체생성
	var txt;
	var student = {
		name	:'교사문선종',
		html 	:100,
		css  	: 99,
		js   	:100,
		tot  	: function(){
			return (this.html+this.css+this.js); //객체이름 == this 키워드 사용가능
		},
		avg		: function(){
			return Math.round(this.tot()/3);     //반올림
		}
	}
	
		// txt  = '<p> 이름 : ' 	+  student.name  + '</p>';
		// txt += '<p> HTML : '+  student.html	 + '</p>';
		// txt += '<p> CSS : ' +  student.css 	 + '</p>';
		// txt += '<p> JS : ' 	+  student.js 	 + '</p>';
		// txt += '<p> 총점 : ' 	+  student.tot() + '</p>';
		// txt += '<p> 평균 : ' 	+  student.avg() + '</p>';
		
		// $('.output').html( txt );
	
		txt  = '<p> 이름 : ' 	+  student['name']  + '</p>';
		txt += '<p> HTML : '+  student['html']	 + '</p>';
		txt += '<p> CSS : ' +  student['css'] 	 + '</p>';
		txt += '<p> JS : ' 	+  student['js'] 	 + '</p>';
		txt += '<p> 총점 : ' 	+  student['tot']() + '</p>';
		txt += '<p> 평균 : ' 	+  student['avg']() + '</p>';
		
		$('.output').html( txt );
	


})(jQuery);
//student.js