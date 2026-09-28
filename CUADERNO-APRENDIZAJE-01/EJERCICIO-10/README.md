# Ejercicio 10 - Proyecto final: Fitness

## Qué he aprendido
- A coger una base genérica y transformarla por completo cambiando colores, textos y estructuras.
- A combinar en una sola pantalla casi todo lo visto antes: vistas desplazables, cuadrículas, y componentes reutilizables.

## Respuesta a la pregunta de comprensión
¿Qué decisiones visuales has tomado por tu cuenta y qué conceptos de ejercicios anteriores has recuperado?

Respuesta:
He decidido cambiar toda la temática a un dashboard de gimnasio. Para ello, he creado una paleta de colores propia con un fondo muy oscuro y detalles en rosa pastel y dorado. También he modificado la distribución de las tarjetas de estadísticas para que el icono y el valor salgan en la misma línea. 
De los ejercicios anteriores he recuperado un montón de cosas: el uso de `props` para que un mismo componente pinte datos distintos, el `flexWrap` para hacer la cuadrícula 2x2, el `flexDirection: 'row'` para colocar elementos en horizontal, y la creación de tarjetas con fondos, márgenes y bordes redondeados.

## Qué he modificado
- He puesto mi nombre (Sara) en el saludo inicial
- He cambiado todos los textos, métricas y actividades para orientar la app al entrenamiento en el gimnasio (minutos, Kg movidos, Kcal, etc.).
- He aplicado mi propia paleta de colores
- He metido un contenedor extra en `StatCard` con `flexDirection: 'row'` para que el emoji y el número se muestren alineados en horizontal.

## Resultado
Un dashboard de gimnasio totalmente personalizado. Arriba destaca una gran tarjeta rosa y dorada que muestra el progreso de los minutos de entrenamiento. En el centro hay una cuadrícula con cuatro tarjetas oscuras para los datos clave (peso, calorías, pulsaciones y agua), y abajo una lista con el detalle de los últimos entrenamientos.