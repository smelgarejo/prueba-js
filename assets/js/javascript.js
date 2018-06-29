$(document).ready(function () {
    console.clear(); // Esto limpia la consola

    $("#file").change(function(evt){
        // Create a reader
        var reader = new FileReader();

        // Get the image
        var file = $(evt.target).get(0).files[0];

        reader.readAsDataURL(file);

        reader.onload = function (e) {
            console.log('The image was load');
            $('#image').attr('src', e.target.result);
        };  
    });

    
    //agregar foto perfil tweet 
    $('#uploader').submit(function (evt) {
        evt.preventDefault();

        //variables tweet
        var srcImg = $("#image").attr("src");
        console.log(srcImg)
        var nick = $("#formnick").val();
        var content = $("#exampleFormControlTextarea1").val();
        
        // agregar tweet
        var tweet = "<div class='row'>\
                        <div class='col-lg-12'>\
                            <div class='row'>\
                                <div class='col-lg-3'>\
                                    <h2>" + nick + "</h2>\
                                    <img class='bloque__tweet--imgprofile' src='" + srcImg + "' />\
                                </div>\
                                <div class='col-lg-9'>\
                                    <p>" + content + "</p>\
                                </div>\
                            </div>\
                            <div class='row'>\
                                <ul class='nav nav-tabs'>\
                                    <li ><i class='fa fa-heart'></i></li>\
                                    <li>Likes: <span class='counter'>0</span></li>\
                                    <li ><i class='fa fa-trash'></i></li>\
                                </ul>\
                            </div>\
                        </div>\
                    </div>";
        console.log(tweet)

        $(".col-sm-7.bloque").prepend(tweet);

    });
    
    //like - cambio color corazón
    $(document).on("click", ".fa.fa-heart", function (evt) {
        console.log("like")
        //evt.preventDefault();
        $(this).addClass("red");
        
        // aumento contador
        console.log($(this).parent().find("li .counter"))
        var count = $(this).offsetParent().find("li .counter").text();
        count = parseInt(count);

        $(this).offsetParent().find("li .counter").text(count += 1);

    });
    
    //eliminar tweet
    $(document).on("click", ".fa.fa-trash", function (evt) {
        $(this).offsetParent().parent().remove();

    });
    
});