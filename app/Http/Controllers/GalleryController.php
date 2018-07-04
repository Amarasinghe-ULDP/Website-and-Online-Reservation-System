<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GalleryController extends Controller
{
    public function getGalleryView()
    {
        $gallery = DB::table('gallery')->get();
        return view('navigation/gallery', ['gallery' => $gallery]);
    }
}
