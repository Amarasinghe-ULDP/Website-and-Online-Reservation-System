@include('includes/header')

@include('includes/loading')

@include('includes/navigation')

<div class="booking-img">
    <img src="{{asset('/bootstrap/images/covers/gh.jpg')}}" style="margin-top:-8%">
    <h1 class="center">Available Rooms</h1>

</div>
<div class="container" style="    margin-top: 5%;">
    <div class="row">
        @foreach($availableRooms as $availableRoom)
            <div class="row rooms-list">
                <div class="col-xs-12 col-sm-3 col-md-3">
                    <a href="#">
                        <img src="{{$availableRoom->image}}"
                             class="img-responsive img-box img-thumbnail">
                    </a>
                </div>
                <div class="col-xs-12 col-sm-9 col-md-9">
                    <h4><a href="#">{{$availableRoom->type}}</a></h4>
                    <p>{{$availableRoom->description}}</p>
                    <div class="list-group">
                        <div class="list-group-item">
                            <div class="row-content">
                                <small>
                                    <b>Max Adults -</b> {{$availableRoom->max_adult}},
                                    <b>Max Children -</b> {{$availableRoom->max_child}}<br/>
                                    <b>Number of Rooms -</b> {{$availableRoom->qty}},
                                    <b>View -</b> {{$availableRoom->view}}<br/>
                                    <b>Bed -</b> {{$availableRoom->bed}} <br/>
                                    <span class="explore"><a><i class="fa fa-dollar"></i>{{$availableRoom->rate}}/per day</a></span>
                                </small>
                            </div>
                            <div class="row-picture">
                                <a href="{{url('/registration')."/".$availableRoom->id."/".$start."/".$end}}" title="sintret">
                                    <button class="btn btn-info">Book</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
        @endforeach
    </div>
</div>

@include('includes/footer')
