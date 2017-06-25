$(function () {
    const COUNTRIES = ['American', 'China', 'United Kingdom', 'Japan', 'France'];
    const SERVICE_TYPE = ['smtp', 'telnet', 'rfb', 'http-alt', 'ms-sql-s'];
    const COMPANY = ['GOOGLE', 'MICROSOFT', 'HUAWEI', 'BAIDU', 'CHINANET'];

    $("#send").on('click', function () {
        let info = {
            'from': {
                // 'lat': $('#flat').val(),
                // 'lng': $('#flng').val()
                'lat': Math.random() * 160 - 80,
                'lng': Math.random() * 360 - 180,
            },
            'to': {
                // 'lat': $('#tlat').val(),
                // 'lng': $('#tlng').val()
                'lat': Math.random() * 160 - 80,
                'lng': Math.random() * 360 - 180
            },
            'origin': {
                'N': Math.floor(Math.random() * 60),
                'COUNTRY': COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)]
            },
            'target': {
                'N': Math.floor(Math.random() * 60),
                'COUNTRY': COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)]
            },
            'type': {
                'N': Math.floor(Math.random() * 60),
                'PORT': Math.floor(Math.random() * 0xffff),
                'SERVICE TYPE': SERVICE_TYPE[Math.floor(Math.random() * SERVICE_TYPE.length)]
            },
            'live': {
                'TIMESTAMP': new Date().toString(),
                'ATTACKER': COMPANY[Math.floor(Math.random() * COMPANY.length)]
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
    });

    let t = 500;

    setInterval(function () {
        $("#send").click();
        t = Math.random() * 200 + 300;
        console.log(t);
    }, t);
})