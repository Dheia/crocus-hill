<?php namespace SSI\Files;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return [
            'SSI\Files\Components\Files' => 'files',
        ];
    }

    public function registerSettings()
    {
    }

    public function registerPageSnippets()
    {
        return [
            'SSI\Files\Components\Files' => 'files'
        ];
    }
}
