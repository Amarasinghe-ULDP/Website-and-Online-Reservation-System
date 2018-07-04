@include('includes/header')

@include('includes/loading')

@include('includes/navigation')

<div class="booking-img">
<img src="{{asset('/bootstrap/images/covers/sda.jpg')}}" style="margin-top:-8%">
<h1 class="center">Amenities</h1>	

</div>
 <div class="col-md-10 col-md-offset-1">
     <div class="gallery">
         @foreach($amenities as $amenity)
             <figure>
                 <img src="{{$amenity->pic}}" alt=""/>
                 <figcaption>{{$amenity->name}} <small>{{$amenity->des}}</small></figcaption>
             </figure>
         @endforeach
     </div>
 </div>
@include('includes/footer')

