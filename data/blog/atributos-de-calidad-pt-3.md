---
title: Atributos de calidad en el software - Parte 3
date: '2021-12-03'
tags: ['atributos', 'calidad', 'software', 'arquitectura']
draft: false
summary: Esta caracteristica representa el grado de efectividad y eficiencia con la que un sistema puede ser modificado para mejorarlo, corregirlo o adaptarlo a los cambios producidos por el entorno y requisitos...
---

# Mantenibilidad

Esta caracteristica representa el grado de efectividad y eficiencia con la que un sistema cuenta para que pueda ser modificado para mejorarlo, corregirlo o adaptarlo a los cambios producidos por el entorno y requisitos.

| **Modularidad**                                                                                                                                         | **Reusabilidad**                                                                                                                                | **Capacidad de análisis**                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Capacidad de un sistema en ser separado por componentes en donde cada una de estos tengan un impacto mínimo con otros. _Ejm: Patrones de arquitectura._ | Caracteristica que trata sobre cuánto podemos aprovechar una pieza de software para poder reutilizarla en otro lado. _Ejm: Código open source._ | Es la conexión entre el código y los requerimientos. |

| **Capacidad de modificación**                                                                                             | **Capacidad de prueba**                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Se refiere a cuan facil o dificil es revisar el código y cambiar su comportamiento. _Ejm: Cobertura de código con tests._ | Se refiere a cuan facil o dificil es poder crear los tests para que el sistema garantice que hace lo que se requiere que haga. |

# Portabilidad

Esta caracteristica representa el grado de efectividad y eficiencia con la que un sistema puede transferirse a un hardware, software u otro entorno operacional.

| **Adaptabilidad**                                                                                                             | **Capacidad de instalación**                                                                                                                | **Capacidad de reemplazo**                                                         |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Grado en el cual un sistema puede ser adaptado efectiva y eficientemente en un hardware, software u otro entorno profesional. | Grado de eficacia y eficiencia en la que un sistema puede instalarse o desinstalarse con exito en un entorno específico. _Ejm: App Stores._ | Grado en el cual un sistema puede ser reemplazado por otro. _Ejm: Microservicios._ |
