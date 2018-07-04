<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="shortcut icon" href="images/logo.png">
    <title>Saladura Tavels</title>

    <!-- CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link href="css/animate.css" rel="stylesheet">
    <link href="css/bootstrap-datetimepicker.min.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet">
	<link href="css/admin_panel.css" rel="stylesheet">
    <link href="css/bootstrap.vertical-tabs.css" rel="stylesheet">
    <link href="//cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css" rel="stylesheet">
	<link href="css/jquery-ui.min.css" rel="stylesheet">
	<link rel="stylesheet" href="resources/UberGallery.css" />
    <link rel="stylesheet" href="resources/colorbox/1/colorbox.css" />
 
    <!-- Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Pacifico|Amatic+SC:400,600|Open+Sans:400,500,600,700|Montserrat:400,700|Raleway:400,600|Alegreya+Sans:400,700' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Baloo+Tamma" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <?php session_start(); ?>
</head>

<body>
<div class="wrapper">

<?php
	
if( isset($_SESSION['username']) &&  isset($_SESSION['position'])  ){
	
	header('Location: http://localhost/finalProject/admin_panel.php');
}

?>

<div class="layer admin_body">
	<div class="layer panel">
		<div class=" col-md-4">
			
		<form id="login_form" class="form-horizontal col-md-12" method="POST">
   
				<!-- Text input-->
			    <div class=" center">				  
				  <div class="col-md-12">
				  <input id="username" name="username" type="text" placeholder="Username" class="form-control input-md" required="">

				  </div>
				</div>

				<!-- Text input-->
				<div class=" center">				  
				  <div class="col-md-12">
				  <input id="password" name="password" type="password" placeholder="password" class="form-control input-md" required="">

				  </div>
				</div>

				<!-- Button -->
				<div style="inline-block">
				  <div class="col-md-8" id="login_error" style="padding : 10px 24px; font-size:18px;"></div>
				  <div class="col-md-4">
					<button id="login_btn" class="btn btn-primary pull-right">LogIn</button>
				  </div>
				</div>

			
				</form>

		</div>
	</div>
</div>

<script  src="js/jquery-2.0.0.min.js"></script>
<script src="js/image-tooltip.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/admin_panel.js"></script>
<script src="js/data_table.js"></script>

