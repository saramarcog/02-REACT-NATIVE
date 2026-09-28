# Ejercicio 08 - Catálogo con FlatList

## Qué he aprendido
- A usar el componente `FlatList` para crear listas a partir de un bloque de datos (un array) sin tener que escribir el diseño de cada tarjeta una por una.
- A hacer que la lista se divida en varias columnas para que parezca una cuadrícula.

## Respuesta a la pregunta de comprensión
¿Qué ventaja tiene cambiar un producto en el array en lugar de buscar su tarjeta manualmente dentro del JSX?

Respuesta:
La gran ventaja es que separas la información del diseño visual. Si quiero añadir, borrar o cambiar el precio de un producto, solo tengo que tocar la lista de datos de arriba.Si lo hiciera a mano, tendría que ir buscando línea por línea, copiando y pegando todo el código de la tarjeta cada vez que quisiera añadir algo.

## Qué he modificado
- He añadido dos productos nuevos al final de la lista de datos.
- He cambiado el color del fondo de la pantalla para que se pareciera mas al resultado esperado.
- Le he puesto el color blanco al título principal para que destaque sobre el fondo oscuro.

## Resultado
Ha quedado una pantalla de catálogo con fondo azul oscuro y el título "Productos" en claro. Debajo hay una cuadrícula de dos columnas con 8 tarjetas en total. Cada tarjeta es de color claro y muestra el emoji, el nombre del producto en negro y el precio en azul.