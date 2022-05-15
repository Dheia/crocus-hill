# Wzorzec cmssi oparty o OctoberCMS v2.0

## Tworzenie nowego projektu
1. `git clone https://github.com/ssi-com-pl/october2.git nazwa-projektu`
2. usunąć folder `.git`
3. stworzyć repo na naszym githubie https://github.com/ssi-com-pl/
4. utworzyć lokalne repo i połączyć z githubem
    ```
    git init
    git add .
    git commit -m "first commit"
    git remote add origin https://github.com/ssi-com-pl/nazwa-repozytorium.git
    git push -u origin master
    ```
5. stworzyć stronę www na dhosting (z ftp i mysql)
6. dodać konfigurajcę git-ftp
    * edycja pliku `.git/config`
    * dodajemy na końcu pliku
    ```
   [git-ftp]
   	url = ftp://nazwa-folderu.dkonto.pl.ftp.dhosting.pl/public_html
   	user = user-ftp
   	password = pass-ftp
   ```
7. wgrać bazę danych - https://phpmyadmin.dkonto.pl
8. plik z konfiguracją do bazy danych `.env.dist` (utworzyć plik .env i uzupełnić danymi do bazy)
9. wygenerować nowy klucz `php artisan key:generate`
10. uzupełnić `.env` danymi do bazy danych i usunąć domyślne dane dostępowe w `config/database.php`
11. zainstalować niezbędne paczki `npm install`
12. po instalacji zalogować się do panelu i włączyć interesujący nas _theme_, niepotrzebny usunąć z projektu z folderu `/themes`
13. w pliku `webpack.mix.js` w zmiennej `templateName` podać nazwę _theme_, który wybraliśmy
14. sprawdzić w panelu czy są dostępne jekieś aktualizacje, jeżeli tak - zaktualizować
15. Z prevki wyciąć ładnie screen topu, nazwać `theme-preview.png` i wrzucić do `theme\nazwaTemplatki\assets\images\theme-preview.png`


## Zmiana klucza licencji 

`php artisan project:set <klucz>`

## Uruchamianie servera lokalnego 
`php artisan serve`

`npm run watch`

## Wgrywanie zmian na github
```
git status
git add .
git commit -m"add super function"
git push
```
## Wdrażanie projektu i późniejszych zmian
1. wgrać pliki na ftp (za wyjątkiem: `node_modules`, `.git`, `package.lock`)
2. po wgraniu plików w terminalu: `git ftp catchup`
3. po jakichś zmianach, aby wgrać je na ftp, zrobić "Wgrywanie zmian na github" a następnie: `git ftp push -v`

## Rzeczy do zrobienia przed wdrożeniem
- utworzyć nowy projekt https://octobercms.com/account/project/dashboard >> Display License Key i zmienić klucz projektu `php artisan project:set <klucz>`
- przekompilować style i js za pomocą komendy `npm run prod`  - dzięki temu style i js będą zminifikowane i zoptymalizowane
- sprawdzić wielkość obrazków - jeżeli są za duże - przekonwertować tiny png (panda) i opieprzyć Pawła, że od razu takich nie dostaliśmy :)
- dodać favicone
- sprawdzić ssl, odkomentować w .htaccess
- posprawdzać i poustawiać meta tagi i title
- usunąć noindex nofollow
- uzupełnić meta tagi - title i description (ze starej strony)
- jeżeli na poprzedniej był google analitycs itp. to też uzupełnić
- jeżeli na stronie jest jakikolwiek formularz:
    * założyć maila na hostingu klienta i podpiąć w Settings -> Mail(Mail configuration)
    * wygenerować google captche i podpiąć w Settings -> CMS(MagicForms)
    * jako odbiorce formularza podać klienta (layout w którym jest component EmptyAjaxForm i w nim NotificationsSettings->Recipients)


## Coś nie działa?

#### Niezbędne moduły w php.ini
`extension=openssl`
`extension=pdo_mysql`
`extension=curl`
`extension=gd2`
`extension=fileinfo`

#### Niezbędne zainstalowane cross-env
`npm i -g cross-env`

#### Kompilacja webpackiem
`npm run dev` 

#### JavaScript
Aby polepszyć statystyki strony, javascript jest ładowany asynchronicznie:
- używany atrybut "defer" w linkach do plików js 
- zdarzenia `"DOMContentLoaded"` dla inline kodu( dodany bezpośrednio w html w znaczniku  `<script></script>` )

*n.p. po aktualizacji systemu trzeba dodać atrybut `defer` w miejscu podłączenia skryptów w pliku modules/cms/twig/FrameworkNode.php*

*`->write("echo '<script src=\"' . Request::getBasePath() . '/modules/system/assets/js/framework.combined-min.js\" defer></script>'.PHP_EOL;" . PHP_EOL)`*

*`->write("echo '<script src=\"' . Request::getBasePath() . '/modules/system/assets/js/framework.js\" defer></script>'.PHP_EOL;" . PHP_EOL)`*

*`->write("echo '<script src=\"' . Request::getBasePath() . '/modules/system/assets/js/framework.extras.js\" defer></script>'.PHP_EOL;" . PHP_EOL)`*