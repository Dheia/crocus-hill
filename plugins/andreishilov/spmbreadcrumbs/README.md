## Description
Static Pages plugin has his own staticBreadcrumbs component. But it can build breacrumbs only for static pages. This functionality is enough for simple websites with only static content and poor for complex websites with dynamic pages. 

However Static Pages plugin has menus, which supports extending and flexible settings. Current plugin allows you to build breadcrumbs using Static Pages menus functionality. You can set custom menu tree especially for building breadcrumbs using different titles, tree nesting.

You can find more information about Static Pages menus, settings and extending in the [plugin documentation](https://octobercms.com/plugin/rainlab-pages). 

## Integration

After installation you can use a component "breadcrumbs". In the component parameters you must choose available menu from the list.

You can put a component to any place of your layout.

    <div class="container">
        {% component 'breadcrumbs' %}
    </div>
    
The component looks for current url in the selected menu tree and builds breadcrumbs chain.

## Localization
If you use RainLab.Translate plugin for localization, you should enable checkbox "Use locale" in the component settings.
In this case the "Code" parameter will group menus based on postfixes. For example "breadcrumbs" option value
means a group of menus for different locales:
- breadcrumbs-ru
- breadcrumbs-en
- breadcrumbs-it

If the option is enabled, the component will use current locale and appropriate menu.

## For developers
**Attention!!!** The plugin is appropriate only for quite simple websites without really big amount of pages.
It builds breadcrumbs "on the wing". So, if you have many references in your menu it can take a lot of RAM and slow down your website.

If you want to find the solution of this problem, this is small FAQ:  
For example you have a big table with articles (500-N rows). The main idea is to grab only current record for building menu. If you grab all records, every hit on the page provokes exessive usage of memory for building menu tree on the wing. The only way is to limit the selection using filter. In the example below we have a set of dynamic pages:
```
 /articles/:slug
```
The resolving function grabs only current element according to current URL and builds breadcrumbs. In this case we use RAM only for keeping one element instead of dozens while building breadcrumbs chain and the page downloads faster. This ways looks wierd, but it's difficult to figure out something better.

```
use Illuminate\Support\Facades\URL;

\Event::listen('pages.menuitem.resolveItem', function ($type, $item, $url, $theme) {
	if ($type == 'articles-breadcrumbs') {
		if (\Request::is('articles/*')) {
			$tmpId = \request()->route()->parameter('slug');
			$tmpId = explode('/', $tmpId);

			if (count($tmpId) >= 2) {
				$slug = $tmpId[1];

				if (isset($slug) && strlen($slug) > 0) {
					$record = Article::where('slug', $slug)->get()->first();
					if ($record) {
						$items[] = [
							'url' => URL::to('/articles/' . $record->slug),
							'title' => $record->title,
						];

						return [
							'items' => $items
						];
					}
				}
			}
		}
	}
});

\Event::listen('pages.menuitem.listTypes', function () {
		'articles-breadcrumbs' => 'Articles breadcrumbs',
	];
});

\Event::listen('pages.menuitem.getTypeInfo', function($type) {
	if ($type == 'articles-breadcrumbs') {
		return [
			'dynamicItems' => true
		];
	}
});
```

## Notes
The plugin provides english and russian backend localizations.