# Ejercicio 02 - Tarjeta de bienvenida

## Qué he aprendido
- A meter un `View` dentro de otro `View` para hacer una tarjeta sobre un fondo.
- A jugar con los colores de fondo y de texto para que se parezca a una imagen de referencia.
- A quitar el centrado de los textos para que se coloquen a la izquierda de forma automática.

## Respuesta a la pregunta de comprensión
¿Por qué usarías `padding` en una tarjeta en lugar de `margin` para separar el texto del borde?

Respuesta:
Porque el `padding` mete espacio por dentro de la caja. Si le pongo `padding` a la tarjeta, los textos se separan de los bordes pero el color de fondo sigue cubriendo ese espacio. Si usara `margin`, empujaría la tarjeta entera por fuera, pero los textos se quedarían pegados a la línea de la tarjeta por dentro.

## Qué he modificado
- Le he puesto un fondo azul muy oscuro a la pantalla principal.
- Le he cambiado el color a la tarjeta para que sea un tono crema o hueso.
- He borrado el `textAlign: 'center'` del título y subtítulo para que se vayan a la izquierda.
- He puesto el título y el botón en tonos naranjas para que destaquen.

## Resultado
Ha quedado una pantalla oscura con una caja color crema en el medio. Dentro de la caja, el texto principal y la descripción están a la izquierda, y debajo hay un botón naranja bastante llamativo. Se ve casi igual que la foto de ejemplo.