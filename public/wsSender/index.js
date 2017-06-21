$(function () {
    $("#send").on('click', function () {
        let info = {
            from: {
                'lat': $('#flat').val(),
                'lng': $('#flng').val()
            },
            to: {
                'lat': $('#tlat').val(),
                'lng': $('#tlng').val()
            }
        };

        $.ajax({
            type: 'post',
            url: 'http://localhost:4000/wsSender/receiver',
            data: { 'info': JSON.stringify(info) },
            success: function (data) {
                console.log(data);
            },
            error: function (error) {
                console.error(error);
            }
        });
    })
})