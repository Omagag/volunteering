$(document).ready(function($){
    $(".burguer").on('click', function(){
        $(this).toggleClass('active');
        $(".container-nav").toggleClass('active');
    });

	$(".option").on('click', function(e){
		var currentOption = $(e.currentTarget);
		var currentOptionDescription = $(e.currentTarget).parent();
		$(".icon-plus-q, .option-description").removeClass('active');
		currentOption.find('.icon-plus-q').addClass('active');
		$(currentOptionDescription[0]).find('.option-description').addClass('active');
	});

    $('#mentor-form').FlowupLabels({
        feature_onInitLoad: true, 
        class_focused:      'focused',
        class_populated:    'populated' 
    });

    $('[data-searchfield]').on('keyup', function(e){
        var wordToSearch = $(this).val();
        var list = $(this).attr("data-searchfield");
        var li = $('.'+list).children();
        if(wordToSearch != ''){
            for (i = 0; i < li.length; i++) {
                if($(li[i]).html().toLowerCase().indexOf(wordToSearch.toLowerCase()) > -1){
                    $(li[i]).css('display', 'block');
                } else {
                    $(li[i]).css('display', 'none');
                }
            }
        } else {
            //console.log(wordToSearch);
            for (j = 0; j < li.length; j++) {
                $(li[j]).css('display', 'none');
            }
        }
    });

    // $("#ListSeaarch li").on('click', function(){
    //     var valueList = $(this).attr('data-value');
    //     var valueText = $(this).text();
    //     //console.log(valueText, valueList);
    //     var classParent = ($(this).parent()[0].className);
    //     $('[data-searchfield='+classParent+']').val(valueText);
    //     $('[data-searchfield='+classParent+']').parent().addClass("populated");
    //     $("#ListSeaarch li").each(function() {
    //         $( this ).css('display', 'none');
    //     });
    // });

    $(".flavor-selected").on('change', function(){
        var $this = $(this);
        var $sliderToSHow = $('[data-tab="'+ $this.val() + '"]');
        var $sliderActive = $('.content-post-tab.active');
        $sliderActive.removeClass('active');
        $sliderToSHow.addClass('active');
    })

    $("[name=dirFactura]").on('click', function(){
        if($('#dirFacturaNo').is(":checked")){  
            $(".new-donor").slideDown();
        } else{
            $(".new-donor").slideUp();
        }
    });

    $(".action-icon-search").on('click', function(){
        $(".search-header").addClass('active');
        if ($(".search-header").hasClass('active') && $(".action-main-nav").is(':visible') && $(".search-header .search-inpunt .search").val() != '' && $(document).width() < 900) {
            //$(".search-header .search-inpunt .search").val('');
            $("#searchForm").submit();
        }
        setTimeout(function(){
            $(".list-search").slideDown();
            $(".action-main-nav").css('overflow', 'visible');
        }, 500);
    });

    $(".close-icon-search").on('click', function(){
        $(".list-search").slideUp();

        setTimeout(function(){
            $(".action-main-nav").css('overflow', 'hidden');
            $(".search-header").removeClass('active');
        }, 500);
    });

});


// function checkform(){
//     var errorCont = 0;
//     if ($("#name").val() !== '' && $("#name").val().length > 2 ) {
//         var validContent = $("#name").data("error");
//         $(validContent).fadeOut();
//         $(validContent).parent().removeClass("errorField").addClass("validField");
//         $("#name").removeClass("error");
//         var regexText = /^[^0-9()]+$/;
//         if(regexText.test($("#name").val())){
//             var validContent = $("#name").data("error");
//             $(validContent).fadeOut();
//             $(validContent).parent().removeClass("errorField").addClass("validField");
//             $("#name").removeClass("error");
//         } else {
//             //console.log('Email invalido');
//             var errorContent = $("#name").data("error");
//             $(errorContent).html("Formato de incorrecto").fadeIn();
//             $(errorContent).parent().addClass("errorField");
//             $("#name").addClass("error");
//             errorCont++;
//         }
//     } else {
//         //console.log('Campo requerido');
//         var errorContent = $("#name").data("error");
//         $(errorContent).html("Campo requerido").fadeIn();
//         $(errorContent).parent().addClass("errorField");
//         $("#name").addClass("error");
//         errorCont++;
//     }
//
//     if ($("#email").val() !== '') {
//         var validContent = $("#email").data("error");
//         $(validContent).fadeOut();
//         $(validContent).parent().removeClass("errorField").addClass("validField");
//         $("#email").removeClass("error");
//         var regexEmai = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//         if(regexEmai.test($("#email").val())){
//             var validContent = $("#email").data("error");
//             $(validContent).fadeOut();
//             $(validContent).parent().removeClass("errorField").addClass("validField");
//             $("#email").removeClass("error");
//         } else {
//             //console.log('Email invalido');
//             var errorContent = $("#email").data("error");
//             $(errorContent).html("Email invalido").fadeIn();
//             $(errorContent).parent().addClass("errorField");
//             $("#email").addClass("error");
//             errorCont++;
//         }
//     } else {
//         //console.log('Campo requerido');
//         var errorContent = $("#email").data("error");
//         $(errorContent).html("Campo requerido").fadeIn();
//         $(errorContent).parent().addClass("errorField");
//         $("#email").addClass("error");
//         errorCont++;
//     }
//
//     if ($("#area").val() !== '') {
//         var validContent = $("#area").data("error");
//         $(validContent).fadeOut();
//         $(validContent).parent().removeClass("errorField").addClass("validField");
//         $("#area").removeClass("error");
//     } else {
//         //console.log('Campo requerido');
//         var errorContent = $("#area").data("error");
//         $(errorContent).html("Campo requerido").fadeIn();
//         $(errorContent).parent().addClass("errorField");
//         $("#area").addClass("error");
//         errorCont++;
//     }
//
//     if ($("#message").val() !== '' && $("#message").val().length > 2) {
//         var validContent = $("#message").data("error");
//         $(validContent).fadeOut();
//         $(validContent).parent().removeClass("errorField").addClass("validField");
//         $("#message").removeClass("error");
//     } else {
//         //console.log('Campo requerido');
//         var errorContent = $("#message").data("error");
//         $(errorContent).html("Campo requerido").fadeIn();
//         $(errorContent).parent().addClass("errorField");
//         $("#message").addClass("error");
//         errorCont++;
//     }
//
//     /*var dataReCaptchaRsp;
//     $.ajax({
//         type: "POST",
//         url: baseTheme+"google_captcha.php",
//         data: $('#addMessages').serialize(),
//         async:false,
//         success: function(data) {
//             if(data.nocaptcha==="true") {
//                 dataReCaptchaRsp=1;
//             } else if(data.spam==="true") {
//                 dataReCaptchaRsp=1;
//             } else {
//                 dataReCaptchaRsp=0;
//             }
//         }
//     });
//     if(dataReCaptchaRsp!=0) {
//         if(dataReCaptchaRsp==1) {
//             $("#captchaMsj").html("Por favor verifica el captcha").addClass("errorField");
//             //console.log("Please check the captcha");
//             errorCont++;
//         } else {
//             $("#captchaMsj").html("No se permite spam").addClass("errorField");
//             //console.log("Please Don't spam");
//             errorCont++;
//         }
//     } else {
//         $("#captchaMsj").removeClass("errorField");
//     }*/
//
//
//     if (errorCont > 0) {
//         return false;
//     } else {
//         return true;
//     }
// }

// function sendFormWS(){
//         var contacts = new Array();
//         //$(".tomail").each(function( index ) {
//             var toArr ={
//                 "fullName": $("#InfoFrom").attr("data-fullname"),
//                 "email": $("#InfoFrom").val()
//             };
//             contacts.push(toArr);
//         //});
//         var body = 'Nombre: '+ $("#name").val()+'<br/>'+
//                 'Email: '+ $("#email").val()+'<br/>'+
//                 'Área: '+ $("#area").val()+'<br/>'+
//                 'Mensaje: '+ $("#message").val()+
//                 '<br/><img src="'+ $("#firma").val()+'" alt="firma" style="display: block; clear: both; margin-top: 20px;"/>';
//         var registerForm = {
//             "from" : {
//                 "fullName": $("#fromFullname").val()
//             },
//             "to": contacts,
//             "subject": $("#subject").val(),
//             "body": body,
//             "contentType": "text/html"
//         };
//         var action = $(".ContactoForm").data("action");
//         console.log(registerForm, action);
//
//
//         $.ajax({
//             type: "POST",
//             url: action,
//             contentType: "application/json; charset=utf-8",
//             data: JSON.stringify(registerForm),
//             success: function(response) {
//                 if(response.code == "0"){
//                     $("#name").val('');
//                     $("#email").val('');
//                     $("#area").val('');
//                     $("#message").val('');
//                     $(".fl_wrap").removeClass("errorField populated").addClass("validField");
//                     $(".mail-send").show();
//                 } else {
//                     $("#name").val('');
//                     $("#email").val('');
//                     $("#area").val('');
//                     $("#message").val('');
//                     $(".fl_wrap").removeClass("validField populated").addClass("errorField");
//                     $(".mail-error").show();
//                 }
//             },
//             error: function(xhr,status,error){
//                 $("#name").val('');
//                 $("#email").val('');
//                 $("#area").val('');
//                 $("#message").val('');
//                 $(".fl_wrap").removeClass("validField populated").addClass("errorField");
//                 $(".mail-error").show();
//             }
//         });
//
//         /*$.post(action, registerForm, function(response) {
//             console.log(response);
//             //var rsp = JSON.parse(response);
//             if(rsp.status == 1){
//                 $(".general-form-error").addClass('validForm').html(rsp.message);
//                 $("#name").val('');
//                 $("#email").val('');
//                 $("#area").val('');
//                 $("#message").val('');
//             } else {
//                 $(".general-form-error").addClass('errorForm').html(rsp.message);
//             }
//             //
//         });*/
//     }


// function valueChanged(){
//     if($('#visitaSi').is(":checked")){
//         $(".new-donor").slideDown();
//     } else{
//         $(".new-donor").slideUp();
//     }
//     if($('#visitaNo').is(":checked")){
//         $(".old-donor").slideDown();
//     } else{
//         $(".old-donor").slideUp();
//     }
// }

    

// function helpChanged(){
//     if($('#ayudaEjecutivo').is(":checked")){
//         $("#helperId").slideDown();
//     } else{
//         $("#helperId").slideUp();
//     }
// }

// function iframeLoaded() {
//
//     console.log("iframe");
//       var iFrameID = document.getElementById('idIframe');
//       if(iFrameID) {
//         //console.log(iFrameID.contentWindow.outerHeight);
//             // here you can make the height, I delete it first, then I make it again
//             //console.log(iFrameID.contentWindow.document);
//             //iFrameID.height = "";
//             //iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
//             //iFrameID.height = iFrameID.contentWindow.document.body.parentElement.scrollHeight+"px";
//       }
//
//   }
            