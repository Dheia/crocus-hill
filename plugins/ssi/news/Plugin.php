<?php namespace SSI\News;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return [
            'SSI\News\Components\News' => 'newsList',
            'SSI\News\Components\SingleNews' => 'singleNews',
        ];
    }

    public function registerSettings()
    {
    }
}
