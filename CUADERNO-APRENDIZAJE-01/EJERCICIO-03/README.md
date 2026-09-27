# Ejercicio 03 - Ficha de perfil

## Qué he aprendido
- A poner imágenes que vienen de un enlace de internet usando el componente `Image`.
- A recortar una imagen para que se vea redonda usando `borderRadius` con la mitad de lo que mide.
- A usar `flexDirection: 'row'` para colocar cosas en horizontal, una al lado de la otra.

## Respuesta a la pregunta de comprensión
Si quieres que dos estadísticas aparezcan una al lado de otra, ¿en qué View aplicarías `flexDirection: 'row'` y por qué?

Respuesta:
Se lo pondría al `View` contenedor que envuelve a las estadísticas (el padre). Lo hago porque en React Native todo se coloca de arriba a abajo por defecto (en columna). Si le pongo 'row' al contenedor padre, le estoy diciendo que cambie la dirección y coloque a sus "hijos" en fila, uno al lado del otro.

## Qué he modificado
- He puesto el fondo principal de la pantalla en un color oscuro.
- He añadido un tercer bloque dentro de las estadísticas para que muestre "Contactos" y el número "86".

## Resultado
Se ve una tarjeta blanca sobre un fondo muy oscuro. Dentro de la tarjeta sale una foto de perfil redonda, el nombre y la profesión centrados, y en la parte de abajo están las tres estadísticas alineadas en una sola fila.