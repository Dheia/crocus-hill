<?php namespace SSI\Sekcje;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerSettings()
    {
    }

    public function registerComponents()
    {
        return [
            'SSI\Sekcje\Components\Ikony' => 'IkonySSI',
            'SSI\Sekcje\Components\TextAndImage' => 'TextAndImage',
            'SSI\Sekcje\Components\Video' => 'VideoSSI',
        ];
    }

    public function registerPageSnippets()
    {
        return [
            'SSI\Sekcje\Components\Ikony' => 'IkonySSI',
            'SSI\Sekcje\Components\TextAndImage' => 'TextAndImage',
            'SSI\Sekcje\Components\Video' => 'VideoSSI',
        ];
    }
}
