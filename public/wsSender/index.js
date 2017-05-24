$(function () {
    $("#send").on('click', function () {
        let lat = $("#lat").val();
        let lng = $("#lng").val();

        $.ajax({
            type: 'post',
            url: 'http://localhost:4000/wsSender/receiver',
            data: {
                'lat': lat,
                'lng': lng
            },
            // dataType: 'json',
            success: function (data) {
                console.log(data);
            },
            error: function (error) {
                console.error(error);
            }
        });
    })
})