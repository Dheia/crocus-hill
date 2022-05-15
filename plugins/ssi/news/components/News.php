<?php

namespace SSI\News\Components;

use SSI\News\Classes\CollectionHelper;
use SSI\News\Models\News as NewsModel;
use SSI\News\Models\Category as Category;

class News extends \Cms\Classes\ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'Aktualności',
            'description' => 'Wyświetla listę aktualności'
        ];
    }

    public function defineProperties()
    {
        return [
            'newsToShow' => [
                'title' => 'Ilość aktualności',
                'type' => 'string',
                'description' => 'Wpisz ilość aktualności, jeżeli wpiszesz 0 zostaną wyświetlone wszystkie aktualności',
                'default' => 0,
                'validationPattern' => '^[0-9]+$',
                'validation Message' => 'Wpisz wartość liczbową'
            ],
            'category' => [
                'title' => 'Kategoria',
                'type' => 'dropdown',
                'description' => 'Wybierz kategorie',
            ],
            'newsOnMain' => [
                'title' => 'Wyróżnione na stronie głównej',
                'type' => 'checkbox',
                'description' => 'Wyświetlą się tylko aktualności, które mają zaznaczoną opcje "Widoczne na stronie głównej"',
            ],
            'newsPromo' => [
                'title' => 'Czy wyświetlać promowane?',
                'type' => 'checkbox',
                'description' => 'Wyświetlą dodatkowo listę promowanych aktualności',
            ],
            'pageNumber' => [
                'title'       => 'Strona #',
                'description' => 'News Page #',
                'type'        => 'string',
                'default'     => '{{ :page }}',
            ],
            'perPage' => [
                'title'       => 'Paginacja',
                'type'        => 'string',
                'default'     => 0,
                'description' => 'Ilość newsów na stronę, jeżeli wpiszesz 0 strona wyświetli wszystkie dostępne newsy',
            ]
        ];
    }

    public function getCategoryOptions()
    {
        $categoryArray = [];
        $categoryArray['all'] = 'Wszystkie';
        foreach (Category::lists('name', 'id') as $key => $value) {
            $categoryArray[$key] = $value;
        }
        return $categoryArray;
    }

    public function onRun()
    {
        $this->news = $this->loadNews();
        if ($this->property('perPage') > 0) {
            $this->currentPage = $this->news->currentPage();
            $this->lastPage = $this->news->lastPage();
        }
    }

    protected function loadNews()
    {
        $query = NewsModel::orderBy('published_at', 'DESC')->where('visibility', 1)->where('published_at', '<=', now())->get();
        $newsToShow = $this->property('newsToShow');
        $newsByCategory = $this->property('category');
        $newsOnMain = $this->property('newsOnMain');
        $perPage = $this->property('perPage');

        if ($newsByCategory !== 'all') {
            $query = $query->filter(function ($news) {
                return $news->categories()->find(intval($this->property('category')));
            });
        }

        if (boolval($newsOnMain)) {
            $query = $query->where('on_main', 1);
        }

        if ($newsToShow > 0) {
            $query = $query->take($newsToShow);
        }

        if ($perPage > 0) {
            $query = CollectionHelper::paginate($query, $perPage);
        }

        return $query;
    }

    public $news;
    public $currentPage;
    public $lastPage;
}
