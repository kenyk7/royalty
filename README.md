# Royalty
Frond-End Royalty
## ¿Cómo montar el proyecto en local?
* Clonar el repositorio al lugar de tu elección
* Modificar el archivo **gulpconfig.js**. Cambiar el valor del proxy de BrowserSync al dominio que le hayas asignado al proyecto en tus virtualhost. Ejemplo:

```javascript
browsersync: {
  files: [build+'/**', '!'+build+'/**.map'] // Exclude map files
, notify: false // In-line notifications (the blocks of text saying whether you are connected to the BrowserSync server or not)
, open: true // Set to false if you don't like the browser window opening automatically
, port: 3000 // Port number for the live version of the site; default: 3000
, proxy: 'local.royalty.com' // We need to use a proxy instead of the built-in server because WordPress has to do some server-side rendering for the theme to work
, watchOptions: {
    debounceDelay: 500 // This introduces a small delay when watching for file change events to avoid triggering too many reloads
  }
},
```
* Asegurarse de tener instalado nodejs/npm y sus paquetes bower y gulp
    * Para instalar esos dos paquetes ejectuar:
        * sudo npm install -g bower
        * sudo npm install -g gulp
* Abrir una terminal en la /carpeta-base-del-proyecto y ejectuar los siguientes comandos:
    * npm install
    * bower install
* Ejecutar la primera construcción de la plantilla con el siguiente comando dentro de la misma terminal que la anterior:
    * gulp build
* El comando anterior debió de generar una nueva carpeta de nombre 'build' que será donde esten los archivos que se van a cargar en el theme
* En la misma terminal de antes, situada en **carpeta-base-del-proyecto** ejecutar:
    * gulp
* El comando anterior hará todas las tareas automáticas configuradas y abrirá un nuevo navegador con el WordPress. Notar que la url que os dará será **http://localhost:3000**. Esta url será la que se podrá usar para ver en tiempo real los cambios que se hagan en el código, pero también estará disponible la url que hayas configurado en tu virtualhost, salvo que tendras que recargar manualmente cada vez que quieras ver un cambio. Ambas url funcionan al 100%


## Organización del proyecto
**IMPORTANTE:** Todo el desarrollo se realiza en la carpeta **/src/** y es la herramienta GULP la encargada de colocar todo como debe.

#### Estilos
Se está usando Sass como precompilador de CSS. Podrás encontrar toda la jerarquía de archivos en:
```
/src/scss/
```
* El archivo style.css solo se modificará para añadir librerías externas de CSS. Actualmente, el proyecto emplea:
    * Bourbon: Colección de mixins
    * Normalize
* La carpeta base contiene archivos generales a toda la aplicación:
    * _animations.scss: Animaciones CSS
    * _fonts.scss: Fuentes
    * _globals.scss: Estilos globales por ejemplo aplicados a body, html, a...
    * _helpers.scss: Clases para facilitarte la vida como para convertir a uppercase.
    * _icons.scss: Iconos CSS
    * _variables.scss: Definición de las variables SCSS a usar en el proyecto.
* La carpeta responsive será la contenedora de todas aquellas clases encargadas de ajustar la vista a diferentes dispositivos.
* La carpeta sections contendrá los estilos en archivos individuales de cada sección (contacto, ayuda, header, footer...)

### Javascripts
Se configuró el proyecto para que separe nuestros scripts en 2 archivos.
* Los plugins o librerías externas irán almacenados en royaltyjs-plugins.js. Estas librerías se deberán instalar mediante bower y es necesario modificar el archivo gulpconfig.js para indicarle los nuevos scripts.
* Nuestro código de aplicación irá en royaltyjs-core.js

El archivo core.js que será donde trabajaremos nuestra aplicación se encuentra en **/src/js/**

### PHP
Los archivos php se encuentran organizados en 3 carpetas:

* En la **/src/template/** se encuentran los archivos base como el header y footer
* En la **/src/pages/** se encuentran los archivos de la diferentes páginas, para crear llamadas a estos se utilizará el metodo **get** de php para carga automática, ejemplo: **?pag=home**
* En la **/src/pages/inc/** se encuentran los archivos que se rautilizarán en la diferentes páginas

### Imágenes
Durante el proceso de creación de la versión de producción se optimizan todas las imágenes que tengamos en nuestra plantilla.

Las imágenes se almacenan en **/src/images/**

**IMPORTANTE:** Siempre que sea posible, organizar las imágenes en subcarpetas para mantener un órden.

Para enlazar imágenes en los CSS, hay una variable que te da el root de la carpeta que las contiene llamada **$imagesPath**

### Fuentes
Las fuentes se encuentran ordenadas en subcarpetas por su familia en **/src/fonts/**

Las fuentes se declaran en el archivo de fuentes de Sass utilizando un mixin de Bourbon para conseguir importar todos los formatos en una sola línea. Ejemplo:

```
@include font-face("nombre-fuente", $icon-font-path + "nombre-fuente/nombre-fuente", $file-formats: eot woff ttf svg);
```

