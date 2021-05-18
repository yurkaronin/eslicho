$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top - 75;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 48) {
      $('.page-header').addClass('fixed');
    } else if ($(this).scrollTop() < 48) {
      $('.page-header').removeClass('fixed');
    }
  });

  $(".my-modal__file--one").change(function () {
    var filename = $(this).val().replace(/.*\\/, "");
    $("#filename-one").val(filename);
  });

  $(".my-modal__file--two").change(function () {
    var filename = $(this).val().replace(/.*\\/, "");
    $("#filename-two").val(filename);
  });

  $(".my-modal__file--three").change(function () {
    var filename = $(this).val().replace(/.*\\/, "");
    $("#filename-three").val(filename);
  });

  $('.burger').click(function () {
    $('.page-header').addClass("page-header--open");
  });
  $('.close').click(function () {
    $('.page-header').removeClass("page-header--open");
  });


  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 30,
    //    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
    // when window width is <= 320px
    560: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is <= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is <= 640px
    991: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
  });
});

// mailer
$(document).ready(function () {
  let sending = false;

  $('[data-ajax-form]').on('submit', function (e) {
  	e.preventDefault();

  	if (!sending)
  	{
  		sending = true;

  		const $form = $(this);
  		const $fields = $form.find('[data-ajax-form-field]');
      const $files = $form.find('[data-ajax-form-file]');
  		const $button = $form.find('[data-ajax-form-submit]');
  		const buttonHtml = $button.html();

  		const data = new FormData();

  		// collect field values
  		$fields.each(function () {
      	const $field = $(this);
        data.append($field.attr('data-ajax-form-field'), $field.val());
  		});

      // collect files
      $files.each(function(i, file) {
        const $file = $(this);
        data.append('file', $file[0].files[0]);
      });

  		// send data
  		$button.html('Отправка...');

      $.ajax({
        url: '/ajax/mail.php',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',

        success: function(response) {
    			if (response === 'OK')
    			{
    				$button.hide();
    				$form.find('[data-ajax-form-success]').show();
    			}
    		},

        complete: function() {
    			sending = false;
    			$button.html(buttonHtml);
    		}
      });
  	}
  });
});
