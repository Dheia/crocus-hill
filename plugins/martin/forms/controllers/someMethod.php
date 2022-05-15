<?php
   namespace Martin\Forms\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

use Martin\Forms\Models\Record;

class someMethod extends Controller {
    public function someMethod()
        {
            $tariffs = Record::all();

            return response()->json($tariffs);
            
        }
    }
?>