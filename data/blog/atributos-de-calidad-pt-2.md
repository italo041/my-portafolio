---
title: Atributos de calidad en el software - Parte 2
date: '2021-12-02'
tags: ['atributos', 'calidad', 'software', 'arquitectura']
draft: false
summary: Es un concepto que conecta lo que el usuario quiere realizar (tareas u objetivos que tengan que resolver con un sistema) y el cómo están implementadas funcionalmente en dicho sistema...
---

# Confiabilidad

Atributos que tienen que ver con el uso normal de un sistema a través del tiempo.

| **Madurez**                                                                                                                                                                                                             | **Disponibilidad**                                                                                                                     | **Tolerancia a fallos**                                                                                                                      | **Capacidad de recuperación**                                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Es el grado en que un sistema satisface las necesidades de confiabilidad. Un sistema es más maduro en cuanto menos fallas tenga. La madurez de un sistema se usa el tiempo medio de averias. _Ejm: Sistemas bancarios._ | Grado en el cual un sistema es operacional y accesible cuando se require su uso. _Ejm: Sistemas con eventos con carga pico puntuales._ | Grado en que un sistema funciona según lo previsto a pesar de la presencia de fallas en el software o hardware. _Ejm: Aplicaciones moviles._ | Grado en el que cuando se presente una interrupción o fallo en el sistema, este pueda recuperar los datos directamente afectados y restablecerse al estado deseado. _Ejm: Configuraciones autoescalables en la nube tipo AWS._ |

# Seguridad

Es el grado o atributo en el que un sistema protege la información y datos. Es uno de los atributos mas conocidos en el desarrollo de software.

| **Confidencialidad**                                                                                                                                     | **Integridad**                                                                                     | **Comprobación de hechos**                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Grado en el cual un sistema asegura que los datos solo sean accesibles para aquellos usuarios autorizados para obtener el acceso. _Ejm: Redes sociales._ | Grado en el que un sistema impide el acceso a la modificación de datos. _Ejm: Sistemas bancarios._ | Grado en el que se demuestra que las acciones o eventos tuvieron lugar en el sistema. _Ejm: Registro de auditorias._ |

| **Traza de responsabilidad**                                                                                                          | **Autenticidad**                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Grado en el que las acciones de una entidad se pueden conectar con los responsables que la realizaron. _Ejm: Registro de auditorias._ | Grado en el cual se garantiza que el sistema reconoce que un usuario es quien realmente dice ser. _Ejm: Correo electrónico, número de teléfono, datos biométricos._ |
