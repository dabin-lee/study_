$(function(){

    // section--team
    var $_maNager = $('.manager--profile');
        $_maNager.on("mouseenter", function(){
            if($(this).hasClass('over') == true) {
                $_maNager.removeClass('over');
            }else{
                $(this).addClass('over');
            }
        });
        $_maNager.on("mouseleave", function(){
            $_maNager.removeClass('over');
        });

    // section--testimonials
        var $slideGroup = $('.article__group--testimonials'),
        $slides = $slideGroup.find('> .indicator--article'),
        $slideCount = $slides.length;

        var $inDicatorList = $('.slider__indicator--btn'),
        $inDicatorBtn = $inDicatorList.find('> li'),
        $currentIndex = 0,
        $duration = 500,
        $easing = 'easeInOutExpo',
        $interval = 3500;

        $slides.each(function(i){ // 각각 slide마다 할일
            var newLeft = i * 100 + '%'; //100%씩 옆으로
            $(this).css({left: newLeft});
        });

        function goToslide(index){ // 슬라이드 이동 함수
                $slideGroup.animate({left: - 100 * index + '%'}, $duration, $easing);
                $currentIndex = index;
            }
            console.log($slides);

        $inDicatorList.find('li').click(function(e){
            e.preventDefault();
            var idx = $(this).index(); //클릭한 li의 index를 알기위해
            goToslide(idx);
        });
    });
