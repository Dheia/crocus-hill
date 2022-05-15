<?php namespace SSI\Files\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class Files extends Controller
{
    public $implement = [        'Backend\Behaviors\ListController',        'Backend\Behaviors\FormController',        'Backend\Behaviors\ReorderController'    ];
    
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';
    public $reorderConfig = 'config_reorder.yaml';

    public $requiredPermissions = [
        'files_ssi_plugin' 
    ];

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('SSI.Files', 'files');
    }
}
