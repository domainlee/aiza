;(function () {
    'use strict';

    var isMobile = function () {
        let isMobile = false;
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
            isMobile = true;
        }
        return isMobile;
    }

    var loading = function () {
        jQuery(window).load('body', function(){
            $('.loading').delay(666).fadeOut('slow');
            $('body').delay(666);
            animation();
            skill();
            typing();
        });
    }

    var loadingMobile = function () {
        $('.loading').css('display', 'none');
        animation();
        skill();
        typing();
    }

    var typing = function () {
        var elements = document.getElementsByClassName('header__type--js');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TextType(elements[i], JSON.parse(toRotate), period);
            }
        }
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".header__type--js > .wrap { border-right: 0.08em solid #6f809b}";
        document.body.appendChild(css);
    }

    var nav = function () {
        var button_nav = $('.toggle-menu');
        button_nav.click(function (e) {
            $('body').toggleClass('nav-open-js');
            $(this).toggleClass('active')
        });

        if(isMobile()) {
            var header__navigation = $('.header__navigation');
            header__navigation.each(function () {
                var button = $(this).find('a');
                button.click(function () {
                    setTimeout(function () {
                        $('body').removeClass('nav-open-js');
                    },600);
                });
            });
        }

        $(window).scroll(function() {
            var scrollTop = $('html').scrollTop();
            if(scrollTop >= 220) {
                $('body').addClass('head__js');
            } else {
                $('body').removeClass('head__js');
            }
        });
    }

    var lazy = function () {
        $('.lazy').Lazy({
            effect: "fadeIn",
            effectTime: 500
        });
    };

    var owlCarousel = function() {
        $('.my-client__js').owlCarousel({
            loop: true,
            margin: 20,
            dots: true,
            nav: true,
            lazyLoad: true,
            autoplay: true,
            items: 3,
            navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    nav: false,
                },
                480: {
                    nav: false,
                },
                768: {
                    nav: false,
                }
            }
        });
    };

    var skill = function () {
        let skill_item = $('.my-resume__skill--item');
        skill_item.each(function (k, v) {
            var t = $(this);
            if(isInViewport(t)) {
                let count = t.find('div');
                let span = count.find('span');
                let precent = count.attr('data-precent');
                active(span, 0, precent);
                function active(items, index, length) {
                    index = index % length;
                    items.eq(index).addClass('active');
                    setTimeout(function() {active(items, index + 1, length)}, 300);
                }
            }
        });
    }

    var animation = function () {
        let viewPorts = $('*[data-viewport]');
        viewPorts.each(function() {
            let that = $(this);
            if(that.attr('data-viewport') != '') {
                that.addClass(that.attr('data-viewport'));
                if(isInViewport(that)) {
                    setInterval(function(){
                        that.addClass('is-on');
                    }, that.attr('data-delay') ? that.attr('data-delay'):200);
                }
            }
        });
    }

    var isInViewport = function (e) {
        let elementTop = e.offset().top + 50;
        let elementBottom = elementTop + e.outerHeight();
        let viewportTop = $(window).scrollTop();
        let viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    var scrollTo = function () {
        if($('.home').length) {
            return new bootstrap.ScrollSpy(document.body,{
                target: ".header__menu",
                offset: 80
            });
        }
    }

    var popup = function() {
        $('.button-image').magnificPopup({
            type: 'image',
            gallery: {
                enabled:true
            }
        });
        $('.button-iframe').magnificPopup({
            type: 'iframe',
        });
    }

    var form = function () {
        $('.contact__form').validate({
            submitHandler: function (form) {
                $.ajax({
                    url: "assets/php/contact.php",
                    type: "POST",
                    data: $(form).serialize(),
                    cache: false,
                    processData: false,
                    success: function(data) {
                        const result = JSON.parse(data);
                        if(result.code == 1) {
                            alert('We have received your message, thank you for your message.');
                            location.reload();
                        } else if(result.code == 0) {
                            alert('Form submit data invalid')
                        }
                    }
                });
                return false;
            },
            rules: {
                name: "required",
                email: {required : true, email: true},
                message: "required",
            },
            messages: {
                name: "Please specify your name",
                email: "Please specify your email",
                message: "Please enter message",
            }
        });
    }

    var blog = function () {
        var blog_list = $('.my-blog__item'), content = $('.my-blog__popup--inner'), button_close = $('.my-blog__popup--close');
        blog_list.each(function () {
            var t = $(this);
            t.css('display', 'none');
            var button_view = t.find('.my-blog__detail');
            // open and load
            button_view.click(function () {
                var post_id = $(this).attr('data-id');
                var data = new FormData();
                data.append('id', post_id);
                $.ajax({
                    url: "assets/php/blog_view.php",
                    type: "POST",
                    data: data,
                    cache: false,
                    dataType: "json",
                    contentType: false,
                    processData: false,
                    success: function(result) {
                        if(result.code == 1) {
                            $('body').addClass('my-blog__popup--js');
                            content.empty().html(result.view)
                        } else if(result.code == 0) {
                            $('body').removeClass('my-blog__popup--js');
                        }
                    }
                });
            });
            // close popup
            button_close.click(function (e) {
                e.preventDefault();
                $('body').removeClass('my-blog__popup--js');
            });
        });

        // paginator
        var total_count = blog_list.length;
        var post_per_page = SETTING.POST_PER_PAGE;
        var button_load = $('.my-blog__button a');
        $('.my-blog__item:lt('+post_per_page+')').show();
        $('.my-blog__item:nth-child('+post_per_page+')').css('border-bottom', 'none');
        button_load.click(function () {
            post_per_page = ( post_per_page + SETTING.LOAD_POST <= total_count ) ? post_per_page + SETTING.LOAD_POST : total_count;
            $('.my-blog__item:lt('+post_per_page+')').fadeIn().addClass('is-on');
            $('.my-blog__item').css('border-bottom', '1px solid #DDD');
            $('.my-blog__item:nth-child('+post_per_page+')').css('border-bottom', 'none');
        });
    }

    var TextType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }

    TextType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1)
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
        var that = this;
        var delta = 200 - Math.random() * 100;
        if (this.isDeleting) { delta /= 2; }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function() {
            that.tick();
        }, delta);
    }


    $(document).ready(function() {
        window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
        if(!isMobile()) {
            loading();
        } else {
            loadingMobile();
        }
        scrollTo();
        nav();
        lazy();
        owlCarousel();
        blog();
        form();
        popup();
        $(document).on( 'scroll', function(){
            animation();
            skill();
        });
    });
}());