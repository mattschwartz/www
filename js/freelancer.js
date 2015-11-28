/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
$(document).ready(function () {
    $('#portfolio ul li a').click(function () {
        var data = JSON.parse($(this).attr('data'));

        if (data === undefined) {
            return;
        }
        // Replace background image
        $('#portfolio').css('background-image', 'url("' + data.ImageUrl + '")');

        if (data.Private !== undefined) {
            $('#portfolio-project-url-button').addClass('disabled');
        } else {
            $('#portfolio-project-url-button').removeClass('disabled');
        }

        // Replace project url
        $('#portfolio-project-url-button').attr('href', data.ProjectUrl);

        // Replace project page url
        $('#portfolio-learn-more-button').attr('href', data.PageUrl);
        $('#portfolio-learn-more-button-xs').attr('href', data.PageUrl);
    });

    $('#rogre-modal').on('show.bs.modal', function () {
        $('#rogre-modal div.modal-body').html('<iframe class="youtube-modal" src="https://www.youtube.com/embed/pd1MyZFK1-8" frameborder="0" allowfullscreen></iframe>');
    });

    $('#rogre-modal').on('hide.bs.modal', function () {
        $('#rogre-modal div.modal-body').html('');
    });

    $('#after-modal').on('hide.bs.modal', function () {
        $('#after-modal div.modal-body').html('');
    });

    $('#after-modal').on('show.bs.modal', function () {
        $('#after-modal div.modal-body').html('<iframe class="vimeo-modal" src="https://player.vimeo.com/video/113364865" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    })

    $('#print-resume').click(function () {
        var html = $('#printer-friendly-resume').html();
        var w = window.open();
        w.document.write(html);
        w.window.print();
        w.window.close();
    });
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('body').on('click', '.page-scroll a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});
