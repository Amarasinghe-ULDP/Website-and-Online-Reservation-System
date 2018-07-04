@include('includes/header')

@include('includes/loading')

@include('includes/navigation')

<div class="booking-img">
    <img src="{{asset('/bootstrap/images/covers/gh.jpg')}}" style="margin-top:-8%">
    <h1 class="center">Gallery</h1>

</div>
<div class="gallery">
    @foreach($gallery as $g)
        <figure>
            <img src="{{$g->image}}" alt=""/>
            {{--<figcaption>Daytona Beach <small>United States</small></figcaption>--}}
        </figure>
    @endforeach
</div>


@include('includes/footer')

