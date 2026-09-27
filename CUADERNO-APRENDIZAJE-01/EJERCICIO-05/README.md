# Ejercicio 05 - Tarjeta de producto

## Qué he aprendido
- A usar `overflow: 'hidden'` en la tarjeta para que la imagen de arriba del todo no se salga por las esquinas y respete los bordes redondeados.
- A usar `justifyContent: 'space-between'` en una fila (`flexDirection: 'row'`) para empujar el precio a la izquierda y el botón a la derecha.
- A crear etiquetas o "pastillas" dándole un color de fondo, bordes redondeados y `alignSelf: 'flex-start'` a un texto para que no ocupe todo el ancho.

## Respuesta a la pregunta de comprensión
¿Qué información debería tener mayor jerarquía visual: categoría, nombre del producto o precio? Justifica tu decisión.

Respuesta:
El nombre del producto y el precio deberían tener la mayor jerarquía. El nombre tiene que ser el texto más grande porque es lo primero que necesitas leer para saber qué estás viendo. El precio también tiene que destacar mucho porque es el dato definitivo para decidir si compras o no. La categoría es un dato extra, por eso se pone más pequeña.

## Qué he modificado
- He cambiado el fondo principal para que sea azul oscuro (`#051120`).
- He modificado los estilos de la categoría para convertirla en una etiqueta destacada: le he puesto fondo rojo claro, texto rojo oscuro, bordes redondeados y he hecho que solo ocupe el ancho del texto.

## Resultado
Una tarjeta de producto con fondo blanco sobre una pantalla oscura. La tarjeta tiene una imagen arriba que ocupa todo el ancho y se recorta en las esquinas superiores. Debajo están los textos ordenados, destacando la etiqueta roja y el título, y en la base el precio a un lado y un botón oscuro de "AÑADIR" al otro.