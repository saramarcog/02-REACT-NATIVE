# Ejercicio 04 - Pantalla de acceso

## Qué he aprendido
- A usar `TextInput` para crear cajas donde el usuario puede escribir texto.
- A ocultar contraseñas usando la propiedad `secureTextEntry`.
- A crear botones personalizados usando `Pressable`.

## Respuesta a la pregunta de comprensión
¿Por qué en este ejercicio no necesitamos todavía `useState`?

Respuesta:
Porque ahora mismo solo estamos con la parte visual. Como el botón de iniciar sesión todavía no hace nada y no necesitamos guardar ni comprobar lo que el usuario escribe en las cajas de texto, no nos hace falta usar "estados" o memoria.

## Qué he modificado
- He metido todo el formulario dentro de un nuevo `View` para que haga de tarjeta blanca con bordes redondeados.
- Le he puesto un fondo oscuro al contenedor principal de toda la pantalla.
- He cambiado el texto del subtítulo para que ponga solo "Introduce tus datos", igual que en la imagen.
- He ajustado el color de fondo de las cajas de texto a un tono un poco más azulado y el texto de dentro tambien.

## Resultado
Ha quedado una pantalla con fondo azul oscuro y una tarjeta blanca en el centro. La tarjeta tiene un título, dos cajas para meter el correo y la contraseña (que se oculta al escribir), un botón azul grande para iniciar sesión y un enlace pequeñito abajo para registrarse.