/**
 * Created by srini on 31-03-2016.
 */

$(document).ready(function() {
    $(".nav a").on('click', function() {
        $(".nav").find('.active').removeClass("active");
        $(this).parent().addClass("active");
    });

    $("#portfolio-container a").hover(function() {
        $(this).find('span#overlayIcon').addClass("fa fa-fire");
    }, function() {
        $(this).find('span#overlayIcon').removeClass("fa fa-fire");
    });

    /* $("#portfolio-first").hover(function() {
         $("#overlayIconOne").addClass("fa fa-fire");
     }, function() {
         $("#overlayIconOne").removeClass("fa fa-fire");
     });
     $("#portfolio-second").hover(function() {
         $("#overlayIconTwo").addClass("fa fa-fire");
     }, function() {
         $("#overlayIconTwo").removeClass("fa fa-fire");
     });
     $("#portfolio-third").hover(function() {
         $("#overlayIconThree").addClass("fa fa-fire");
     }, function() {
         $("#overlayIconThree").removeClass("fa fa-fire");
     });*/

    // Contact US
    $("#submitId").on('click', function() {
        var Name = $("#nameText").val();
        var subject = $("#subject").val();
        var msg = $("#msgBody").val() + "%0A%0A" + "-----" + "%0A" + Name;
        var to = "kksrini89@gmail.com";
        // window.location="mailTo:"+to+"?subject="+subject+"&body="+;
        window.location = 'mailto:' + to + '?subject=' + subject + '&body=' + msg;

        //Notification after sent the mail
        // toastr.options={
        //  "timeOut": "1000",
        //  "extendedTimeOut": "1000",
        // }
        // toastr.info('mail sent');
        $("#nameText").val("");
        $("#subject").val("");
        $("#msgBody").val("");
        $("#nameText").focus();
    });
});