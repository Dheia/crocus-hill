<?php

use SSI\News\Models\News;
use Cms\Classes\Page;
use Cms\Classes\Theme;
use RainLab\Pages\Classes\Page as StaticPage;

Route::get('sitemap.xml', function(){
    $news = News::all();

    $theme = Theme::getEditTheme();
    $pages = Page::listInTheme($theme, true);
    $pagesToShow = [];
    $pagesNotToShow = ['/', '/404', '/error'];
    foreach ( $pages as $page ){
        if(!in_array($page->url, $pagesNotToShow) && strpos($page->url, '/:') === false)
        array_push($pagesToShow, $page->url);
    }

    $staticPagesToShow = [];
    $staticPages = StaticPage::listInTheme($theme, true);
    foreach ( $staticPages as $staticPage ){
        if(!$staticPage->navigation_hidden)
            array_push($staticPagesToShow, $staticPage->url);
    }

    return Response::view('ssi.sitemap::sitemap', ['news' => $news, 'pages' => $pagesToShow, 'staticPages' => $staticPagesToShow])->header('Content-Type', 'text/xml');

});