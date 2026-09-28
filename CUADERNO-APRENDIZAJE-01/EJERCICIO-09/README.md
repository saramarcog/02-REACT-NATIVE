# Ejercicio 09 - Interfaz bancaria

## Qué he aprendido
- A usar TypeScript para definir exactamente qué datos necesita recibir un componente para funcionar 
- A organizar una pantalla combinando bloques únicos (como la tarjeta del saldo) con listas de componentes que se repiten (los movimientos).

## Respuesta a la pregunta de comprensión
¿Qué partes de esta pantalla convertirías en componentes y cuáles dejarías directamente en App? Justifica.

Respuesta:
Convertiría en componentes las cosas que se repiten en forma de lista, como la fila de los movimientos, para no tener que copiar y pegar su código estructural un montón de veces. También podría aislar la tarjeta del saldo grande en un componente si pensara reutilizarla en otras pestañas de la app. 
Dejaría directamente en  los títulos, porque son complementos de esta pantalla específica y solo se van a escribir una vez para darle estructura.

## Qué he modificado
- He cambiado el fondo general a mi tono azul oscuro de siempre y he puesto los textos principales en blanco para que resalten.
- He añadido un movimiento extra de mi propia cosecha: un "Bizum Paquita" de + 222 € con fecha del 28 de septiembre.

## Resultado
Ha quedado una interfaz bancaria con fondo azul marino. Arriba te saluda, muestra el nombre en grande y tiene una tarjeta muy oscura destacando el dinero disponible y la cuenta. Abajo hay una lista desplazable con cinco movimientos recientes en tarjetas blancas, donde los conceptos y las fechas salen a la izquierda, y el dinero a la derecha.