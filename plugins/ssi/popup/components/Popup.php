<?php

namespace SSI\Popup\Components;

use Cms\Classes\Content;
use Cms\Classes\Theme;



class Popup extends \Cms\Classes\ComponentBase
{


    public $content = "";

    public function componentDetails()
    {
        return [
            'name' => 'Popup',
            'description' => 'Po wejściu na stronę wyświetla pop-up o określonej treści'
        ];
    }

    public function defineProperties()
    {
        return [
            'contentListName' => [
                'title' => 'Treść',
                'type' => 'dropdown',
                'description' => 'Wybierz z listy dostępnych treści (nową treść należy utworzyć w zakładce "Content")',
            ],
        ];
    }

    public function getContentListNameOptions()
    {

        $activeTheme =  Theme::getActiveTheme();
        $instance = Content::inTheme($activeTheme);

        $content = $instance::all();
        $results = [];

        foreach ($content as $item) {
            if (!$item->viewBag) {
                $results[] = $item->fileName;
            }
        }

        return $results;
    }



    public function onRun()
    {


        $activeTheme =  Theme::getActiveTheme();
        $instance = Content::inTheme($activeTheme);

        $items = $instance->newQuery()->lists('fileName');



        $fileListName = $this->property('contentListName');

        $loadedItem = null;

        foreach ($items as $key => $item) {

            if ($key == $fileListName) {

                $loadedItem = Content::loadCached($activeTheme, $item);
            }
        }

        $this->content = $loadedItem;
    }
}
