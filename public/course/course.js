$(document).ready(function () {
    $('#myTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    $("a[role='menuitem']").on('click', function () {
        var id = $(this).attr('data-id');
        $("html, body").delay(100).animate({
            scrollTop: $('#lecture' + id).offset().top
        }, 600);
    });
});