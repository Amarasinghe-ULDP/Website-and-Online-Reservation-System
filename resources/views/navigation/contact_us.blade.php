@include('includes/header')

@include('includes/loading')

@include('includes/navigation')



<div class="booking-img">
<img src="{{asset('/bootstrap/images/covers/room-details1.jpg')}}" style="margin-top:-2%">
<h1 class="center">Contact Us</h1>	
</div>

<div class="col-md-8 col-md-offset-2 contact">
<div class="bootstrap-iso col-md-7">
 <div class="container-fluid">
	 <h3>Please fill the form below.</h3> 
  <div class="row">
   <div class="col-md-12 col-sm-12 col-xs-12">
    <form method="post" action="functions/contact_details.php" id="contact_form">
     <div class="form-group" >
      <label class="control-label requiredField" for="name">
       Name       
      </label>
      <input class="form-control" id="name" name="name" type="text" required/>
     </div>
     <div class="form-group ">
      <label class="control-label requiredField" for="email">
       Email      
      </label>
      <input class="form-control" id="email" name="email" type="email" required/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="subject">
       Subject
      </label>
      <input class="form-control" id="subject" name="subject" type="text" />
     </div>
     <div class="form-group ">
      <label class="control-label " for="message">
       Message
      </label>
      <textarea class="form-control" cols="40" id="message" name="message" rows="10"></textarea>
     </div>    
       <button class="contact-btn" name="submit" type="submit">
        Submit
       </button>    
    </form>
   </div>
  </div>
 </div>
</div>
	
<!-- Before contact us -->
	
	<div class="col-md-4 before-contact">
		<h3>Suggestions & Complaints</h3>
		<p>Feel free to send us any suggestion or complain. We whould like to help you any time  </p>
	
		<h3>Contact information</h3>
		
		<ul class="list list-unstyled contact-info">
			<li><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;Aminva Boutique Villa, Sarath Goonawardana Mawatha, Hikkaduwa, 80240, Sri Lanka.</li>
			<li><i class="fa fa-mobile" aria-hidden="true"></i>&nbsp;&nbsp; 077 *** ****</li>
			<li><i class="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp;011 2 *** ***</li>
			<li><i class="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;&nbsp;contact@aminvavilla.com</li>
			<li><i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;&nbsp;Everyday 9:00-17:00</li>
		
		</ul>
		
		<h3>Social Media</h3>
		<ul class="list list-inline social-contact">
			<li><a href=""><span class="fa fa-facebook fa-2x"></span></a></li>
            <li><a href=""><span class="fa fa-twitter fa-2x"></span></a></li>
            <li><a href=""><span class="fa fa-google-plus fa-2x"></span></a></li>
            <li><a href=""><span class="fa fa-instagram fa-2x"></span></a></li>
		</ul>	
	</div>
</div>



<div class="map">
	<iframe src="https://maps.google.com/maps?q=Aminva Villa Hikkaduwa&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>

@include('includes/footer')

