<div class="container-fluid reservation">
	
    
    
    <div class="container">
    <style>

    </style>
    
    <form mmethod="get"  action="{{ route('getRoomsAvailability') }}">
          @csrf
    <div class="col-md-3">        
        Check In
        <div class="input-group date form_date animated flipInX" data-date="" data-date-format="dd MM yyyy" data-link-field="check_in" data-link-format="yyyy-mm-dd">
                    <input class="form-control"  name="start" size="16" type="text" value="" required="" id="date1">                    
                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
         </div>
    </div>
    
    <div class="col-md-3">
        Check Out
        <div class="input-group date form_date animated flipInX" data-date="" data-date-format="dd MM yyyy" data-link-field="check_out" data-link-format="yyyy-mm-dd">
                    <input class="form-control"  name="end" size="16" type="text" value="" required="" id="date2">                    
					<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
       </div>    
    </div>
    
    <div class="col-md-2">
        Adults<br>
        <select name="adult" required="" class="animated flipInX">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>                
                </select>    
    </div>
    
    <div class="col-md-2" >
        Children<br>
            <select name="child" class="animated flipInX">
					<option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>                
                </select>
    </div>
    
    <div class="col-md-2" >
        <br>
            <button class="btn roomchk-btn center animated flipInX" type="submit"> Check Availability </button>
        
    </div>
   </form>
    </div>

</div>
        
