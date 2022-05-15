<?php

namespace AndreiShilov\SPMBreadcrumbs;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public $require = ['RainLab.Pages'];

    public function pluginDetails()
    {
        return [
            'name' => 'andreishilov.spmbreadcrumbs::lang.plugin.name',
            'description' => 'andreishilov.spmbreadcrumbs::lang.plugin.description',
            'author' => 'andreishilov.spmbreadcrumbs::lang.plugin.author',
            'icon' => 'icon-link'
        ];
    }

    public function registerComponents()
    {
        return [
            'AndreiShilov\SPMBreadcrumbs\Components\Breadcrumbs' => 'breadcrumbs',
        ];
    }
}
