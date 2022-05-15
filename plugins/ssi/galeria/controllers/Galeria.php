<?php namespace SSI\Galeria\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class Galeria extends Controller
{
    public $implement = [        'Backend\Behaviors\ListController',        'Backend\Behaviors\FormController',    'Backend\Behaviors\ReorderController'    ];
    
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';
    public $reorderConfig = 'config_reorder.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('SSI.Galeria', 'galeria', 'side-menu-item');

        $this->addCss("/plugins/ssi/galeria/assets/backend.css");
    }
}
