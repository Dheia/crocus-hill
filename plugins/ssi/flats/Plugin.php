<?php namespace SSI\Flats;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return [
            'SSI\Flats\Components\Flat' => 'singleFlat',
            'SSI\Flats\Components\FlatsList' => 'flatsList',
        ];
    }

    public function registerSettings()
    {
    }
}
