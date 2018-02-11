$(document).ready(function(){

    var countDownDate = new Date("Mar 3, 2018 00:00:01").getTime();

    documentHeight('.countdown');

    rrefresh(x);
    var x = setInterval(rrefresh, 500, x);

    $('.countdown').fadeIn(3000);
    $('.moreInfo').delay(3000).fadeIn(3000);



    //functions definitions
    function documentHeight(_class){
        var height = $(document).height();
        $(_class).css({'margin-top':height/2.3});
    }

    function rrefresh(x){
        var currentDate = new Date().getTime();
        var timeDifference = countDownDate - currentDate;

        function addZero(value){
            if (value < 10){
                return '0' + value;
            } else {
                return value;
            }
        }

        // w3schools code sample
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        $('.countdown').text(`${addZero(days)}d:${addZero(hours)}h:${addZero(minutes)}m:${addZero(seconds)}s`);

        if (timeDifference <= 0) {
            clearInterval(x);
            $('.countdown').text('THE TIME HAS COME!');
            $('.moreInfo').fadeOut(1000);
        }
    }

});