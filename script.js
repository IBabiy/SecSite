$(document).ready(function () {

    $(".form").on("click", ".tab", function() {
        // Удаляем классы active
        $(".form").find(".active").removeClass('active');

        $(this).addClass('active');
        
        $(".tab-form").eq($(this).index()).addClass("active");
    });
});