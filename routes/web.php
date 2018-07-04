<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/gallery', 'GalleryController@getGalleryView')->name('getGalleryView');

Route::get('/amenities', 'AmenitiesController@getAmenityView')->name('getAmenityView');

Route::get('/rooms', 'RoomController@getRoomView')->name('getRoomView');

Route::get('/contact_us', 'ContactController@getContactView')->name('getContactView');

Route::get('/about_us', 'AboutController@getAboutView')->name('getAboutView');

Route::get('/rooms/availability', 'ReservationController@getRoomsAvailability')->name('getRoomsAvailability');

Route::get('/registration/{id}/{start}/{end}', 'RegistrationController@getRegistrationView')->name('getRegistrationView');

Route::post('/registration', 'RegistrationController@registration')->name('registration');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
