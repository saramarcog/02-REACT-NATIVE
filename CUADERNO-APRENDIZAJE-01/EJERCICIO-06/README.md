# Ejercicio 06 - Dashboard de métricas

## Qué he aprendido
- A crear componentes personalizados para no tener que repetir el mismo código de las tarjetas una y otra vez.
- A usar `flexWrap: 'wrap'` para que los elementos pasen automáticamente a la fila de abajo cuando ya no caben en la pantalla.
- A pasarle datos diferentes (props) a un mismo componente para que cada tarjeta muestre su propia información.

## Respuesta a la pregunta de comprensión
¿Por qué un ancho del 48% puede ser más práctico que 50% cuando además existe separación entre tarjetas?

Respuesta:
Porque si pones cada tarjeta al 50%, dos tarjetas ocuparían el 100% del espacio exacto. En cuanto le añadas una separación o hueco entre ellas, la suma total se pasaría del 100% y la segunda tarjeta se caería a la fila de abajo. Usando 48%, dejas un pequeño porcentaje libre en la fila (4%) para que quepa la separación y se mantengan las dos columnas perfectamente.

## Qué he modificado
- He puesto el fondo principal en azul oscuro y el título "Dashboard" en color blanco.
- He añadido una quinta métrica llamada "Tickets" con el valor "86".

## Resultado
Una pantalla con fondo oscuro y el título "Dashboard" arriba. Debajo hay cinco tarjetas blancas con bordes redondeados organizadas en dos columnas. Las tarjetas muestran el nombre del dato, el numero,... Al ser cinco tarjetas, las dos primeras filas están completas y en la última fila queda una tarjeta sola a la izquierda.