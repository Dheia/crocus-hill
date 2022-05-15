<?php return [
    'plugin' => [
        'name' => 'Breadcrumbs from Static Pages menu',
        'description' => 'Plugin provides a component of generating breadcrumbs using Static Pages Menu',
        'author' => 'Andrei Shilov',
    ],
    'components' => [
        'breadcrumbs' => [
            'name' => 'Breadcrumbs',
            'description' => 'Component builds breadcrumbs based on menu from plugin "Static pages"',
            'params' => [
                'use_locale' => [
                    'name' => 'Use locale',
                    'description' => 'Enables choosing menu using current locale'
                ],
                'code' => [
                    'name' => 'Menu code',
                    'description' => 'Code of menu element from plugin "Static Pages"'
                ]
            ]
        ],
    ]
];