$(window).load(function() {

    window.select_num   ;
    window.count = 1 ;
   
	
var date = new Date();
date.setDate(date.getDate());

$('.form_date').datetimepicker({
        language:  'en',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0,
	    startDate: date,
        pickerPosition : "top-left",
		format: "dd MM yyyy" 
	
    });
	
	$('.form_date2').datetimepicker({
        language:  'en',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0,	    
        pickerPosition : "top-left",
		format: "dd MM yyyy" 
	
    });
	


	
$(".rooms-count").change(function(){
	
	var val = $(".rooms-count").val();
	$(".aa").remove();
	

	
	for( var num = 1 ; num < val ; num ++ ){	
		
		var redda =  '<div class="aa"><div class="col-md-4 "><br><div class="center">Room '+(num+1)+'<br></div></div>' ;
		redda +=	'<div class="col-md-4 col-xm-12">Adults';
		redda +=  '<select id="3" name="adult'+(num+1)+'"  class="soflow adult-class search-room" value="<?php echo $_SESSION["adult"] ?>">';	
	//	redda +=	'<option value="" selected><?php echo $_SESSION["'+adult+'"] ?></option>';
         redda +=           '<option value="1">1</option>';
         redda +=           '<option value="2">2</option>';
         redda +=          '<option value="3">3</option></select></div>';
				
		redda +=     '<div class="col-md-4 col-xm-12" >Children<select id="4" name="child'+(num+1)+'" class="soflow child-class search-room">';
	//	redda +=			'<option value="<?php echo $_SESSION["'+child+'"] ?>" selected><?php echo $_SESSION["'+child+'"] ?></option>' ;
		redda +=			'<option value="0">0</option>' ;
         redda +=           '<option value="1">1</option>' ;
        redda +=            '<option value="2">2</option>' ;
        redda +=            '<option value="3">3</option></select></div></div>' ;
		
		$(".room-count-list").append(redda);
			
				
	} 
	
});	
	

	/* rm search ajax */
	
	 $(".search-room").on("change" ,function(){  
		 var arrival = $("#1").val();
		var departure = $("#2").val();
		 var adult = $("#3").val();
		 var child = $("#4").val();
		 
		 
		 var did = $(this).data("id");
		 var value = $(this).val();
		if( did == 1){			
			arrival = value;
		}
	 	 
		 else if( did == 2){			
			departure = value;
		}
		 
		 else if( did == 3){			
			adult = value;
		}
		 
		 else if( did == 4){			
			child = value;
		}
		 

		 	$(".room_details").hide();
           if(value != '')  
           {  
                $.ajax({  
                     url:"functions/selectroom_ajax.php",  
                     method:"post", 
					 data:({arrival:arrival,departure:departure,adult:adult,child:child}),  
                     dataType:"text",  
                     success:function(data) 
                     {  
                          $('#rm-search-detail').html(data).hide().fadeIn(1000);;  
                     }  
                });  
           }  
           else  
           {  
                $('#rm-search-detail').html('');                 
           }  
      });  
	
    
    
    $(document).on("click",".sr-button",function(){
        
        window.select_num = $(".rooms-count").val(); 
 
         var name = $(this).closest(".bb").find(".rm_name").val() ;
        var bed = $(this).closest(".bb").find(".rm_bed").val() ;
		var id =  $(this).closest(".bb").find(".rm_id").val() ;
        var view =  $(this).closest(".bb").find(".view").val() ;
		var rate =  $(this).closest(".bb").find(".rate").val();
        	
       
        if(name != '' && bed != '')  
           {  
                $.ajax({  
                     url:"functions/selected-rooms_ajax.php",  
                     method:"post", 
					 data:({name:name,bed:bed,count:window.count,rmid:id,view:view,number:window.select_num,rate:rate}),  
                     dataType:"text",  
                     success:function(data)
                     {  
                          if(window.select_num <= 1){
                            $("#selected-room").empty();
                                }
						  
						 
                         $(".select_room_header").removeClass("hidden");
                          $('#selected-room').append(data); 
						 
						 
                         
                         
                     }  
                }); 
              
			  
			   	if( window.count == window.select_num){	
				//	window.location = "payment.php" ;
					setTimeout( function () { 
						$('#sr_form').submit();
						}, 300);
					
					}
				
                window.count++
	
           }  
           else  
           {  
                $('#selected-room').html(''); 
               
           } 

      });

	
	/* payment */
	
//	
	$('#nic').change(function(){
		
	
		var val = $(this).val();

		$.ajax({  
                     url:"functions/nic_ajax.php",  
                     method:"post", 					
					 data: ({nic:val }) ,  
					  success:function(data)
                     {  
                        var info = JSON.parse(data);						 	
						
						$("#f_name").val(info[2]);
						 $("#l_name").val(info[3]);
						 $("#addr_line1").val(info[4]);
						 $("#addr_line2").val(info[5]);
						 $("#city").val(info[6]);
						 $("#zip_code").val(info[7]);
						 $("#country").val(info[8]);
						 $("#contact").val(info[9]);
						 $("#email").val(info[10]);
						 
					
                     }  
			 
                }); 
			
	});
	
	
	$('#terms').change(function(){
    $('#payment_btn').prop('disabled', !this.checked);
			});
	
	

	
	
	/* Loading gif */
	
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
	
	/* Contact us */
	
	$("#contact_form").submit(function(){
		
		 $.ajax({  
                     url:$(this).attr('action'),  
                     method:"post", 
					 data:$('#contact_form').serialize(),                      
                     success:function(data)
                     {  
                         $("#contact-modal").modal("show");
						 $("#contact_form").trigger("reset");
						 
                     }  
			 
                }); 
		
		return false;
	});

	
	/* amenities */

	
	$('.amenities').hover(function(){        
		$(this).addClass('amenities-shadow');
		$(this).animate({ height:'+310px', width:'+310px' });	
	}, function(){
    	$(this).removeClass('amenities-shadow');
   		$(this).animate({ height:'+300px', width:'+300px' });
	});
	
	
	
	$(".amenities").on('click', function(){ 	
		
		
		var id = $(this).find(".amenities_id").val();
		
   		
		 $.ajax({  
                     url:"functions/amenities_ajax.php",  
                     method:"post", 
					 data:({id:id}),   
			 	     dataType:"text",	
                     success:function(data)
                     {  
			 			$('#amanities-modal').append(data); 
                        $('#amenities'+id+'').modal("show");
						 
                     }  
			 
                }); 
		
		
		
	});
	
	
 /* page load */
	

	


	
	

});


	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});


popup = {
    init: function(){
        $('figure').click(function(){
            popup.open($(this));
        });

        $(document).on('click', '.popup img', function(){
            return false;
        }).on('click', '.popup', function(){
            popup.close();
        })
    },
    open: function($figure) {
        $('.gallery').addClass('pop');
        $popup = $('<div class="popup" />').appendTo($('body'));
        $fig = $figure.clone().appendTo($('.popup'));
        $bg = $('<div class="bg" />').appendTo($('.popup'));
        $close = $('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo($fig);
        $shadow = $('<div class="shadow" />').appendTo($fig);
        src = $('img', $fig).attr('src');
        $shadow.css({backgroundImage: 'url(' + src + ')'});
        $bg.css({backgroundImage: 'url(' + src + ')'});
        setTimeout(function(){
            $('.popup').addClass('pop');
        }, 10);
    },
    close: function(){
        $('.gallery, .popup').removeClass('pop');
        setTimeout(function(){
            $('.popup').remove()
        }, 100);
    }
}

popup.init()



//# sourceURL=pen.js

    function floatLabel(inputType){
        $(inputType).each(function(){
            var $this = $(this);
            // on focus add cladd active to label
            $this.focus(function(){
                $this.next().addClass("active");
            });
            //on blur check field and remove class if needed
            $this.blur(function(){
                if($this.val() === '' || $this.val() === 'blank'){
                    $this.next().removeClass();
                }
            });
        });
    }
    // just add a class of "floatLabel to the input field!"
    floatLabel(".floatLabel");


var $form = $('#payment-form');
$form.find('.subscribe').on('click', payWithStripe);

/* If you're using Stripe for payments */
function payWithStripe(e) {
    e.preventDefault();

    /* Abort if invalid form data */
    if (!validator.form()) {
        return;
    }

    /* Visual feedback */
    $form.find('.subscribe').html('Validating <i class="fa fa-spinner fa-pulse"></i>').prop('disabled', true);

    var PublishableKey = 'pk_test_6pRNASCoBOKtIshFeQd4XMUh'; // Replace with your API publishable key
    Stripe.setPublishableKey(PublishableKey);

    /* Create token */
    var expiry = $form.find('[name=cardExpiry]').payment('cardExpiryVal');
    var ccData = {
        number: $form.find('[name=cardNumber]').val().replace(/\s/g,''),
        cvc: $form.find('[name=cardCVC]').val(),
        exp_month: expiry.month,
        exp_year: expiry.year
    };

    Stripe.card.createToken(ccData, function stripeResponseHandler(status, response) {
        if (response.error) {
            /* Visual feedback */
            $form.find('.subscribe').html('Try again').prop('disabled', false);
            /* Show Stripe errors on the form */
            $form.find('.payment-errors').text(response.error.message);
            $form.find('.payment-errors').closest('.row').show();
        } else {
            /* Visual feedback */
            $form.find('.subscribe').html('Processing <i class="fa fa-spinner fa-pulse"></i>');
            /* Hide Stripe errors on the form */
            $form.find('.payment-errors').closest('.row').hide();
            $form.find('.payment-errors').text("");
            // response contains id and card, which contains additional card details
            console.log(response.id);
            console.log(response.card);
            var token = response.id;
            // AJAX - you would send 'token' to your server here.
            $.post('/account/stripe_card_token', {
                token: token
            })
            // Assign handlers immediately after making the request,
                .done(function(data, textStatus, jqXHR) {
                    $form.find('.subscribe').html('Payment successful <i class="fa fa-check"></i>');
                })
                .fail(function(jqXHR, textStatus, errorThrown) {
                    $form.find('.subscribe').html('There was a problem').removeClass('success').addClass('error');
                    /* Show Stripe errors on the form */
                    $form.find('.payment-errors').text('Try refreshing the page and trying again.');
                    $form.find('.payment-errors').closest('.row').show();
                });
        }
    });
}
/* Fancy restrictive input formatting via jQuery.payment library*/
$('input[name=cardNumber]').payment('formatCardNumber');
$('input[name=cardCVC]').payment('formatCardCVC');
$('input[name=cardExpiry').payment('formatCardExpiry');

/* Form validation using Stripe client-side validation helpers */
jQuery.validator.addMethod("cardNumber", function(value, element) {
    return this.optional(element) || Stripe.card.validateCardNumber(value);
}, "Please specify a valid credit card number.");

jQuery.validator.addMethod("cardExpiry", function(value, element) {
    /* Parsing month/year uses jQuery.payment library */
    value = $.payment.cardExpiryVal(value);
    return this.optional(element) || Stripe.card.validateExpiry(value.month, value.year);
}, "Invalid expiration date.");

jQuery.validator.addMethod("cardCVC", function(value, element) {
    return this.optional(element) || Stripe.card.validateCVC(value);
}, "Invalid CVC.");

validator = $form.validate({
    rules: {
        cardNumber: {
            required: true,
            cardNumber: true
        },
        cardExpiry: {
            required: true,
            cardExpiry: true
        },
        cardCVC: {
            required: true,
            cardCVC: true
        }
    },
    highlight: function(element) {
        $(element).closest('.form-control').removeClass('success').addClass('error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-control').removeClass('error').addClass('success');
    },
    errorPlacement: function(error, element) {
        $(element).closest('.form-group').append(error);
    }
});

paymentFormReady = function() {
    if ($form.find('[name=cardNumber]').hasClass("success") &&
        $form.find('[name=cardExpiry]').hasClass("success") &&
        $form.find('[name=cardCVC]').val().length > 1) {
        return true;
    } else {
        return false;
    }
}

$form.find('.subscribe').prop('disabled', true);
var readyInterval = setInterval(function() {
    if (paymentFormReady()) {
        $form.find('.subscribe').prop('disabled', false);
        clearInterval(readyInterval);
    }
}, 250);
