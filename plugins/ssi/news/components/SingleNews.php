<?php

namespace SSI\News\Components;

use SSI\News\Models\News as News;

class SingleNews extends \Cms\Classes\ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'Treść aktualności',
            'description' => 'Widok pojedynczego aktualności'
        ];
    }

//    public function news() {
//        return News::findOrFail($this -> param('id'));
//    }

    public function onRun()
    {
        $this->news = $this->loadNews();
        if($this->news){
            $this->page->title = $this->news->title;
        }
        if($this->news->meta_title){
            $this->page->meta_title = $this->news->meta_title;
        }else{
            $this->page->meta_title = $this->news->title;
        }
        if($this->news->meta_description){
            $this->page->meta_description = $this->news->meta_description;
        }else{
            $this->page->meta_description = $this->news->excerpt;
        }
    }

    protected function loadNews()
    {
        $newsID = intval($this->param('id'));
        $query = News::where('visibility', 1)
            ->where('published_at', '<=', now())
            ->where('id', $newsID)
            ->first();
        return $query;
    }

    public $news;
}