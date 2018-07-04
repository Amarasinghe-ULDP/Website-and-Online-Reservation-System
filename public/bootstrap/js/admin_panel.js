  
$(window).load(function()  {
	
	
    $('#customer_table').DataTable();	
	$('#inventory_table').DataTable();
    $('#reservation_table').DataTable();
	$('#comment_table').DataTable();
	$('#room_table').DataTable();
	$('#gallery_table').DataTable();
	$('#reports_table_daily').DataTable();
	$('#amenities_table').DataTable();
	$('#admin_table').DataTable();

	
/* booking -img */	
$(".booking-img").find('h1').addClass("animated flipInX");	
	
	
/* login  */
	
	$("#login_btn").on('click',function(){
		
		
		
				$.ajax({  
                     url:"AdminPanel/functions/login.php",  
                     method:"post", 					
					 data: $("#login_form").serialize(),  
					  success:function(data)
                     {  					 
					
                          
						 if(data == 1 ){	
							 window.location = "http://localhost/finalProject/admin_panel.php" ; 
						 }else if( data == 0) {		
							
						
							$("#login_error").empty() ; 
 							$("#login_error").append("Incorrect Username or password ") ;
						 }	
					  }  
			   
                }); 
		return false ;
	});
	
/*	edit reservation  */
	
	$("#reservation_table").on('click','tr .edit-reservation',function(){
		
		var id = $(this).data("reservation");
		
		
		$.ajax({  
                     url:"AdminPanel/functions/reservation_ajax.php",  
                     method:"post", 					
					 data: ({id:id}),  
					  success:function(data)
                     {  
                      
						var info = JSON.parse(data);
						
						  $("#res-id").val(info[0]);
						  $("#res-arrival").val(info[1]);
						  $("#res-departure").val(info[2]);
						  $("#res-adults").val(info[3]);
						  $("#res-child").val(info[4]);
						 if(info[5] == 'Confirm'){
							 $("#res-status").val("Confirm");
						 }
						 else if(info[5] == 'Pending'){
							 $("#res-status").val("Pending");
						 }
						  else if(info[5] == 'Cleared'){
							 $("#res-status").val("Cleared");
						 }
						 else if(info[5] == 'Cancelled'){
							 $("#res-status").val("Cancelled");
						 }
						 
						  						 
						 $("#reservation-modal").modal("show") ;
						 
                     }  
			 
                }); 
			
		
	});
	
	
/*	update reservation  */
	
	$("#update-reservation").on('click',function(){
        $("#reservation-modal").modal("hide") ;
	    
		$.ajax({  
                     url:"AdminPanel/functions/reservation_ajax_update.php",  
                     method:"post", 					
					 data: $('#edit-reservation').serialize(),
						
					  success:function(data)
                     { 
					    
					 location.reload();
					 				
					 }
			 
                }); 
			
		
	});
	
	
/*	edit room_inventory  */
	
		$("#inventory_table").on('click','tr .edit-roomin',function(){
		
		var id = $(this).data("roomin");
		
		
		$.ajax({  
                     url:"AdminPanel/functions/room_inventory_ajax.php",  
                     method:"post", 					
					 data: ({id:id}),  
					  success:function(data)
                     {  
                      
						var info = JSON.parse(data);
						
						  $("#roomin-id").val(info[0]);
						  $("#room-arrival").val(info[1]);
						  $("#room-departure").val(info[2]);
						  $("#room-quantity").val(info[3]);
						  $("#room-rmid").val(info[4]);
						  $("#room-adult").val(info[6]);
						  $("#room-child").val(info[7]);
						 if(info[5] == 'Reserved'){
							 $("#room-status").val("Reserved");
						 }
						 else if(info[5] == 'Checked In'){
							 $("#room-status").val("Checked In");
						 }
						  else if(info[5] == 'Checked Out'){
							 $("#room-status").val("Checked Out");
						 }
						  else if(info[5] == 'Cancelled'){
							 $("#room-status").val("Cancelled");
						 }
						  						 
						 $("#roomin-modal").modal("show") ;
						 
                     }  
			 
                }); 
			
		
	});
	
	/*	update Room Inventory */
	
	$("#update-roomin").on('click',function(){
				
		 $("#roomin-modal").modal("hide") ;	 
	    
		$.ajax({  
                     url:"AdminPanel/functions/room_inventory_ajax_update.php",  
                     method:"post", 					
					 data: $('#edit-roomin').serialize(),  
					  success:function(data)
                     {  
						
					
					  location.reload();
						  
						 
					 }
			 
                }); 
			
			
	});

	
  /*	edit customer  */
	
	$("#customer_table").on('click','tr .edit-cus',function(){
		
		var id = $(this).data("customer");
		
		
		$.ajax({  
                     url:"AdminPanel/functions/customer_ajax.php",  
                     method:"post", 			         
					 data: ({id:id}),  
					  success:function(data)
                     {  
                      
						var info = JSON.parse(data);
						
						 $("#cus-id").val(info[0]);
						 $("#customer-nic").val(info[1]);
						 $("#customer-fname").val(info[2]);
						 $("#customer-lname").val(info[3]);
						 $("#customer-line1").val(info[4]);
						 $("#customer-line2").val(info[5]);
						 $("#customer-city").val(info[6]);
						 $("#customer-zip").val(info[7]);
						 $("#customer-country").val(info[8]);
						 $("#customer-contact").val(info[9]);
						 $("#customer-email").val(info[10]);

						  						 
						 $("#customer-modal").modal("show") ;
						 
                     }  
			 
                }); 
			
		
	});	

	
		/*	update Customer   */
	
	$("#update-cus").on('click',function(){
				
		 $("#customer-modal").modal("hide") ;	 
	    
		$.ajax({  
                     url:"AdminPanel/functions/customer_ajax_update.php",  
                     method:"post", 					
					 data: $('#edit-customer').serialize(),  
					  success:function(data)
                     {  
						
					
					 location.reload();
						  
						 
					 }
			 
                }); 
			
			
	});
	
	  /*	edit comment  */
	
	$("#comment_table").on('click','tr .edit-comment',function(){
		
		var id = $(this).data("comment");
			
		
		$.ajax({  
                     url:"AdminPanel/functions/comment_ajax.php",  
                     method:"GET",			         
					 data: ({id:id}),  
					 success:function(data)
                     {  
                      
						var info = JSON.parse(data);
						
						 $("#comment-id").val(info[0]);
						 $("#comment-name").val(info[1]);
						 $("#comment-email").val(info[2]);
						 $("#comment-subject").val(info[3]);
						 $("#comment-content").val(info[4]);
						 
						  if(info[5] == 'Pending'){
							 $("#comment-status").val("Pending");
						 }
						 else if(info[5] == 'On Process'){
							 $("#comment-status").val("On Process");
						 }
						  else if(info[5] == 'Done'){
							 $("#comment-status").val("Done");
						 }
						
						
						  						 
						 $("#comment-modal").modal("show") ;
						 
                     }  
			 
                }); 			
		
	});	
	

	
	/*	update comment  */
	
	$("#update-comment").on('click',function(){
        $("#comment-modal").modal("hide") ;
	    
		$.ajax({  
                     url:"AdminPanel/functions/comment_ajax_update.php",  
                     method:"GET", 					
					 data: $('#edit-comment').serialize(),  
					  success:function(data)
                     { 
					 
					 location.reload();
					 				
					 }
			 
                }); 
			
		
	});
	
	
		/*	room edit  */
	
		$("#room_table").on('click','tr .edit-room',function(){
			
		var id = $(this).data("room");
		$("#room-add").val("0");	
			
			 $("#room-modal").modal("show") ;
		
		$.ajax({  
                     url:"AdminPanel/functions/room_ajax.php",  
                     method:"post", 					
					 data: ({id:id}),  
					  success:function(data)
                     {  
                      
						var info = JSON.parse(data);
						
						 var src = 'data:image;base64,'+info[5] ;
					
						 
						 $("#room-id").val(info[0]);
						 $("#rm-type").val(info[1]);						 
						 $("#rm-rate").val(info[2]);
						 $("#rm-dec").val(info[3]);
						 $("#rm-dec-lg").val(info[4]);
						// $("#rm-image").val(info[5]);
						 $("#rm-qty").val(info[6]);
						 $("#rm-adult").val(info[7]);
						 $("#rm-child").val(info[8]);
						 $("#rm-bed").val(info[9]);
						 $("#rm-view").val(info[10]);
						 $("#rm-sqm").val(info[11]);
						 $("#rm-wifi").val(info[12]);
						 $("#rm-rs").val(info[13]);
						 $("#room-image").attr("src" , src);
						  						 
						 $("#room-modal").modal("show") ;
						 
                     }  
			 
                }); 			
		
	});		

		/*	update room  */
	
	$("#update-room").on('click',function(){
        $("#room-modal").modal("hide") ;
		
		 var formData = new FormData($("#edit-room")[0]);
			
	    
		$.ajax({  
                     url:"AdminPanel/functions/room_ajax_update.php",  
                     method:"post", 					
					 data: formData,  
					  success:function(data)
                     { 					 
					
					   location.reload();	
					 		
						 
					 },
					cache: false,
					contentType: false,
					processData: false

                }); 
			
		return false;
	});
	
	
//	add new room
	
	$("#add-room").on('click',function(){
		
		$("#room-image").attr("src" , "");
		$("#room-add").val("1");
		$("#room-modal").modal("show") ;
		$("#edit-room").trigger("reset");
		
		});
	
	//	delete room
	
	$("#room_table").on('click','tr .delete-room',function(){
		
		
		var id = $(this).data("delroom");
		
		$.ajax({  
                     url:"AdminPanel/functions/room_ajax_delete.php",  
                     method:"post", 					
					 data: ({id:id}),  
					  success:function(data)
                     {  
					 
                      location.reload();
						 
                     }  
			 
                }); 			
		
		});
	
		//	delete pic gallery
	
	$("#gallery_table").on('click','tr .delete-pic',function(){
		
		var pic = 0;
		var name = $(this).data("pic");
		
		
		$.ajax({  
                     url:"AdminPanel/functions/pic_ajax_delete.php",  
                     method:"post", 					
					 data: ({name:name,counts:pic}),  
					  success:function(data)
                     {  

                     location.reload();
						 
                     }  
			 
                }); 			
		
		});
	
		  /*	add new pic gallery  */
	
	$("#add-pic").on('click',function(){
			$("#pic_count").val("1");
		
		  $("#pic-modal").modal("show") ;	
		
	});	
	
	$("#add-pics").on('click',function(){
		
		 var Formdata = new FormData($("#pic-addForm")[0]);
		
	
		$.ajax({  
                     url:"AdminPanel/functions/pic_ajax_delete.php",  
                     method:"post", 					
					 data: Formdata,  
					 success:function(data)
                     {  
                     location.reload();
					 }, 
			
			        cache: false,
					contentType: false,
					processData: false

			 
                }); 			
		
		return false;
		});
	
	
	
	
			/*	Amenities edit  */
	
		$("#amenities_table").on('click','tr .edit-amenities' ,function(){
			
		var id = $(this).data("amenities");
			
		
		
		$.ajax({  
                     url:"AdminPanel/functions/amenities_ajax.php",  
                     method:"post", 					
					 data: ({id:id}),  
					  success:function(data)
                     {  
                     
						
						var info = JSON.parse(data);
						
						 var src = 'data:image;base64,'+info[2] ;
					
						 $("#am-id").val(info[0]);
						 $("#amenities-id").val(info[0]);
						 $("#amenities-name").val(info[1]);					 
						 $("#amenities-img").attr("src" , src);
						 $("#amenities-des").val(info[3]);
				
						 	$("#amenities-modal").modal("show") ;
					
						 
                     }  
			 
                }); 			
		
	});
	
	
	
	/*	update amenities  */
	
	$("#update-amenities").on('click',function(){
        $("#amenities-modal").modal("hide") ;			
		 var formData = new FormData($("#edit-amenities")[0]);
			
			
	    
		$.ajax({  
                     url:"AdminPanel/functions/amenities_ajax_update.php",  
                     method:"post", 					
					 data: formData,  
					  success:function(data)
                     { 						
					   location.reload();
					 },
					cache: false,
					contentType: false,
					processData: false

                }); 
			
		return false;
	});
	
	
		/*	Add amenities  */
	
	$("#add-amenities").on('click',function(){
     	
		$("#amenities-add").val("1");
		$("#amenities-image").attr("src" , "");			
		$("#amenities-modal").modal("show");
		$("#edit-amenities").trigger("reset");
		
		
	});
	
		//	delete amenities
	
	$("#amenities_table").on('click', 'tr .delete-amenities' ,function(){
		
		
		var id = $(this).data("amenitiesdel");
		
		$.ajax({  
                     url:"AdminPanel/functions/amenities_ajax_delete.php",  
                     method:"post", 					
					 data: ({id:id}),  
					  success:function(data)
                     {  
					 
                      location.reload();
						 
                     }  
			 
                }); 			
		
		});
	
	
//	edit admin
	
		
		$("#admin_table").on('click','tr .edit-admin' ,function(){
			
		var id = $(this).data("admin");
			
		
		
		$.ajax({  
                     url:"AdminPanel/functions/admin_ajax.php",  
                     method:"post", 					
					 data: ({id:id}),  
					  success:function(data)
                     {  
                     
						
						var info = JSON.parse(data);
						
						
					 	$("#adminid").val(info[0]);
						 $("#admin-id").val(info[0]);
						 $("#admin-username").val(info[1]);
						 $("#admin-password").val(info[2]);							
						
						 if(info[3] == 'Admin'){
							 $("#admin-position").val("Admin");
						 }
						 else if(info[3] == 'Frontdesk'){
							 $("#admin-position").val("Frontdesk");
						 }
						 
				
						$("#admin-modal").modal("show") ;
					
						 
                     }  
			 
                }); 			
		
	});
	
	/*	Add admin  */
	
	$("#add-admin").on('click',function(){
     	
		$("#admin-add").val("1");			
		$("#admin-modal").modal("show");
		$("#edit-admin").trigger("reset");
		
		
	});
	
	
		/*	update admin  */
	
	$("#update-admin").on('click',function(){
        $("#admin-modal").modal("hide") ;			
		 
		$.ajax({  
                     url:"AdminPanel/functions/admin_ajax_update.php",  
                     method:"post", 					
					 data: $("#edit-admin").serialize(),  
					  success:function(data)
                     { 		
						
					   location.reload();
					 }
					
                }); 
			
		
	});
	
//	delete admin 
	
		$("#admin_table").on('click', 'tr .delete-admin' ,function(){
		
		
		var id = $(this).data("deladmin");
		
		$.ajax({  
                     url:"AdminPanel/functions/admin_ajax_delete.php",  
                     method:"post", 					
					 data: ({id:id}),  
					  success:function(data)
                     {  
					 
                      location.reload();
						 
                     }  
			 
                }); 			
		
		});
	
//	Report ajax 

		$(".reports-date").on('change',function(){
			
		$("#report-monthly").submit();  
		$("#report-monthly1").submit();  
			
		
//		$.ajax({  
//                     url:"AdminPanel/functions/reports.php",  
//                     method:"post", 					
//					 data: $("#report-monthly").serialize(),  
//					  success:function(data)
//                     {         
//						 
//						
//						alert(data);	
//					datatable.clear().draw();
//					
//						
//						 
//													
//						 
//					 }
//                }); 			
//		
	});		


	
	
/*	image tool tip  */
	
	$('.room-image').imageTooltip({
			  xOffset: 0,
			  yOffset: 0
			});
	

	
	
	
/*	tab  */
	

	
	var url = document.location.toString();
		if (url.match('#')) {
			$('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
		} 

		// Change hash for page-reload
		$('.nav-tabs a').on('shown.bs.tab', function (e) {
			window.location.hash = e.target.hash;
		});
	
	
	
	
	

	
	/* img preview */
	
	  function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#room-image').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
	
	
    $("#rm-image").change(function(){
        readURL(this);
    });
	
	
		  function readURL2(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#gal-image').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    $("#file").change(function(){
        readURL2(this);
    });
	
	
		  function readURL3(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#amenities-img').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
	
	
    $("#amenities-image").change(function(){
        readURL3(this);
    });
	

	
////	saddsadasd
//	
	
	var datatable = $('#reports_table').DataTable();						

 
	
	
		
});