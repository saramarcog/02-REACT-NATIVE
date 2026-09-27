# Ejercicio 07 - Feed de noticias

## Qué he aprendido
- A usar el componente `ScrollView` en lugar de un `View` normal. Esto sirve para que la pantalla se pueda deslizar hacia arriba y hacia abajo cuando el contenido no cabe en una sola vista.
- A seguir afianzando el uso de componentes reutilizables (`NewsCard`), enviándoles información diferente (categoría y título) para construir la lista rápido y sin repetir código.

## Respuesta a la pregunta de comprensión
¿Qué parte debe cambiar entre una noticia y otra y qué parte debería permanecer igual?

Respuesta:
Lo que debe cambiar son los datos de la noticia (el texto del titular, la categoría a la que pertenece o la fecha). Lo que debe permanecer exactamente igual es la estructura visual y los estilos para que la lista mantenga la coherencia.
## Qué he modificado
- He cambiado el color de fondo del `ScrollView` principal a azul oscuro
- Le he añadido el color blanco al título de "Noticias" para que destaque sobre el nuevo fondo oscuro.
- He añadido un cuarto componente `NewsCard` al final de la lista con la categoría "DISEÑO" y el titular "Interfaces accesibles"

## Resultado
La interfaz es una lista desplazable con fondo oscuro y un gran título blanco arriba. Debajo aparecen cuatro tarjetas blancas apiladas verticalmente. Cada tarjeta muestra la categoría en letras azules pequeñas, el titular en negro y negrita, y el texto "Hace 2 horas" en gris.