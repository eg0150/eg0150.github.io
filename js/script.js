// 메뉴 슬라이드
$(document).ready(function(){
  $('.toggle-btn').click(function(){
    $(this).toggleClass('active');
    $('.left-menu').toggleClass('active');
  });
}); 


$(document).ready(function(){

  $('#shop').click(function(){
    $(this).toggleClass('active');
    $('.shop').toggleClass('active');  
  });
});



$(document).ready(function(){

  $('#board').click(function(){
    $('.board').toggleClass('active');
  });

});

$(document).ready(function(){

  $('.board-text').click(function(){
    $('.board').toggleClass('active');
  });

});


$(document).ready(function(){

  $('.top-bnr-close').click(function(){
    $('.top-bnr').toggleClass('active');
    $('.logo').css('top','1rem');
    $('.top-nav').css('top','1rem');
    $('.left-menu-d').css('top','3.95rem');
  });

});

$(document).ready(function(){

  $('.cart-click').click(function(){
    $('.cart-d').toggleClass('active');
  });
});

$(document).ready(function(){

  $('.cart-close-d').click(function(){
    $('.cart-d').toggleClass('active');
  });
});

$(document).ready(function(){
$('#account').click(function(){
  $('.account-d').toggleClass('active');
})
});

$(document).ready(function(){
  $('.account-close-d').click(function(){
    $('.account-d').toggleClass('active');
  })
  });

  $(document).ready(function(){
    $('#search').click(function(){
      $('.search-d').toggleClass('active');
    });
  });

  $(document).ready(function(){
    $('.search-close').click(function(){
      $('.search-d').toggleClass('active');
    });
  });

  $(document).ready(function(){
    $('#login').click(function(){
      $('.login-d').toggleClass('active');
    });
  });

  $(document).ready(function(){
    $('.login-close-d').click(function(){
      $('.login-d').toggleClass('active');
    });
  });


  // 아코디언 메뉴

  $(document).ready(function(){
    $('.menu').click(function(){
      if ($(this).hasClass('active')){
        slideUp(300);
      } else {
        slideUp(300);
        $(this).addClass('active').next().slideDown();
      }
      function slideUp() {
        $('.menu').removeClass('active').next().slideUp();
      }
    });
    
    });

    // 검색 기능

    const searchInput = document.getElementById('search-d');
    
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' ) {
        e.preventDefault();
        const val = searchInput.value;
        console.log(val);
      }
    });

    // 로그인 기능

    let id = $('#id');
    let pw = $('#pw');
    let btn = $('.btn');

    $(btn).on('click', function(){
      if($(id).val() === "") {
        alert("아이디 항목은 필수 입력값입니다.")
      }
      else if($(pw).val() === "") {
        alert("패스워드 항목은 필수 입력값입니다.")
      }
    });



