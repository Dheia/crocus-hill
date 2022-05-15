<?php

namespace SSI\Files\Components;

use SSI\Files\Models\Files as filesModel;

class Files extends \Cms\Classes\ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'Lista plików',
            'description' => 'Wstawia listę plików z pluginu Pliki'
        ];
    }

    public function defineProperties()
    {
        return [
            'fileListName' => [
                'title' => 'Nazwa listy plików',
                'type' => 'dropdown',
                'description' => 'Wybierz listę plików',
            ],
        ];
    }

    public function getFileListNameOptions()
    {
        return filesModel::lists('name', 'name');
    }

    public function files()
    {
        $fileListName = $this->property('fileListName');
        $files = filesModel::where('name', $fileListName)->first();
        return $files;
    }
}
