<?php

namespace SSI\Popup;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return [
            'SSI\Popup\Components\Popup' => 'popup',
        ];
    }


    public function registerPageSnippets()
    {
        return [
            'SSI\Popup\Components\Popup' => 'popup',
        ];
    }
}
