# Prueba técnica Emais
## descripción del ejercicio
La prueba consistirá en realizar una pequeña aplicación web en la que se mostrará un listado
de películas con su póster, título y fecha de estreno. Además, cada ítem tendrá asociado un
botón de “Favoritos”, que permitirá asociar/desasociar la película a una lista de favoritos. El
diseño de la UI es completamente libre.

Para la obtención de los datos de las películas se utilizará el siguiente API KEY de TheMovieDB
API: xxxxxxxxxxxxxxxxxxx

Se podrá utilizar la query de consulta por texto
Conexión al API de themoviedb.

Si funciona la API KEY, puede verse el ejercicio  [Aquí](https://titin-c.github.io/emais).

## Condiciones 
- El buscador + listado debe encontrarse en una ruta principal o /search
- Añadir un botón de favoritos + una lista con las películas seleccionadas como favoritas en /favs.
- Se puede utilizar cualquier librería de componentes, sea pública o propia.


# Aclaraciones de Titín

## `Estructura de archivos`
Normalmente, si el proyecto es grande, y reutilizo componentes dentro del mismo, suelo paquetizar los componentes en carpetas, donde dentro guardo su css, sus archivos y su documentación.

Pero cómo era un ejercicio sencillo con 3 vistas y dos componentes, he preferido separar los archivos por tipos:
- **assets:** Carpeta de imagenes, archivos e iconos.
- **components:** Carpeta para los componentes que se reutilizan.
- **hooks:** Carpeta para los personal hooks.
- **screens:** Carpeta con los diseños de las páginas.
- **services:** Conexiones a la API.
- **styles:** Carpeta  para los archivos .scss de Sass.

## `Pros del proyecto`

• He creado toda **la estructura con HTML y el diseño con css utilizando sass**, no he utilizado ninguna biblioteca.

Podría haber utilizado alguna bibiliteca css para agilizar el trabajo... Pero he preferido hacer TODO el css desde cero, para demostrar mis conocimientos de Sass y css3.

• A parte de las condiciones requeridas, me he molestado en añadir algunas funcionalidades, extra de ux/ui como podría ser:

- Poner un **imagen de sustitución** para las peliculas que no tienen poster.
- Poner **spinner** de carga y mensajes cuando no haya datos.
- Se puede añadir a favoritos, tanto desde el listado como dentro de la ficha de la película.
- Si en favoritos hay más de 1 poner "favoritos" en plural.
- **Cargar de la API las imagenes segun su tamaño** y no limitarme a modificarlas con css.
- Ocultar la puntuación de la película si no tiene votos, para que no salga 0.
- Ocultar la la descripción en pantallas pequeñas o cuando no existe.
- Mensajes si no hay resultados de búsqueda o favoritos en el listado.
- Ajustar el logotipo a pantallas pequeñas.
- Página del detalle de la ficha con *useParams* de react-router-dom.
- Ocultada la API_KEY.
- Comentarios aclarativos y buen tabulado en el código.

## `Cosas que hubiese hecho mejor` 

• En primer lugar usar *Vite* porque es más rápido, y así de paso haber creado el proyecto con typescript. he perdido mucho tiempo compilando con webpack.

• Me confié creyendo que iba a necesitar menos funciones de las que al final he utilizado... Lo hubiese hecho con *REDUX* para que quedase más limpio y no tener que marear con las props de padres a hijos y de hijos a padres.

• Algún problema con el renderizado de algunos componentes, que podría haber solucionado con el hook useEffect.

• Con más tiempo podría haber repasado las pruebas con Jest, que lo tengo bastante de lado.
