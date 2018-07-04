@include('includes/header')

@include('includes/loading')

@include('includes/navigation')


<div class="booking-img">
    <img src="{{asset('/bootstrap/images/DeLuxe.jpg')}}" style="margin-top:-8%">
    <h1 class="center">Rooms</h1>

</div>

<main>

    <!--MDB Cards-->
    <div class="container mt-4">
        <div class="row">
        @foreach($rooms as $room)
            <!-- Grid column -->
                <div class="col-lg-4 col-md-12 mb-4">

                    <!--Card-->
                    <div class="card">

                        <!--Card image-->
                        <div class="view overlay hm-white-slight">
                            <img src="{{$room->image}}"
                                 class="img-fluid" alt="photo">
                            <a href="#!">
                                <div class="mask"></div>
                            </a>
                        </div>

                        <!--Card content-->
                        <div class="card-body" style="padding: 3%;">
                            <!--Title-->
                            <h4 class="card-title">{{$room->type}}</h4>
                            <!--Text-->
                            <p class="card-text">{{$room->description}}</p>
                            <small>
                                <b>Max Adults -</b> {{$room->max_adult}},
                                <b>Max Children -</b> {{$room->max_child}}<br/>
                                <b>Number of Rooms -</b> {{$room->qty}},
                                <b>View -</b> {{$room->view}}<br/>
                                <b>Bed -</b> {{$room->bed}} <br/>
                                <h3><i class="fa fa-dollar"></i>{{$room->rate}}/per day</h3>
                            </small>
                        </div>

                    </div>
                    <!--/.Card-->

                </div>
                <!-- Grid column -->
            @endforeach
        </div>
        <!-- Room details load from db -->
    </div>
</main>
@include('includes/footer')