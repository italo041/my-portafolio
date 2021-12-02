---
title: Atributos de calidad en el software - Parte 1
date: '2021-12-01'
tags: ['atributos', 'calidad', 'software', 'arquitectura']
draft: false
summary: Es un concepto que conecta lo que el usuario quiere realizar (tareas u objetivos que tengan que resolver con un sistema) y el cómo están implementadas funcionalmente en dicho sistema...
---

# Ideonidad funcional

Es un concepto que conecta lo que el usuario quiere realizar (tareas u objetivos que tengan que resolver con un sistema) y el cómo están implementadas funcionalmente en dicho sistema.

| **Completitud funcional**                                                                                                                                                | **Exactitud funcional**                                                                       | **Pertinencia funcional**                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Se refiere a cuan completa está la implementación con respecto a lo que se espera que haga un sistema. _Ejm: Requerimientos funcionales vs Requerimientos implementados_ | Se refiere a cuan preciso es un sistema. _Ejm: Resultados esperados vs Resultados obtenidos._ | Se refiere a cuan alineado está lo que se implemento con lo que se necesita. _Ejm: Objetivos cumplidos vs Objetivos esperados._ |

# Eficiencia de ejecucion

Trata acerca de que tan eficiente es el sistema a la hora de responder lo que necesita el usuario y tambien el cómo aprovecha o desaprovecha esos recursos.

| **Tiempo a comportamiento**                                                                                                    | **Uso de recursos**                                                                                                                                                                                                                                          | **Capacidad**                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Se refiere a cuan bueno es el sistema respondiendo al usuario. _Ejm: Pedido vs Respuesta, Tiempo esperado vs Tiempo tolerado._ | Se refiere a cuan bien o mal un sistema usa los recursos. _Ejm: Uso de memoria ram, cpu, etc._ Es importante medir el sistema en su uso promedio, horas pico, en consumo máximo de memoria, etc; esto para comparar el consumo esperado vs consumo tolerado. | Se refiere a cuanto soporta un sistema con respecto a la cantidad de peticiones. _Ejm: Límite de tolerancia detectado vs Límite de tolerancia esperado._ Se pueden medir a través de stress tests. |

# Compatibilidad

Agrupa los atributos acerca de cuanto el sistema coexiste o interopera con otros sistemas, es decir, cuanto puede el sistema vivir en un contexto mas grande.

| **Interoperatibilidad**                                                                                                                                  | **Coexistencia**                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Se refiere a cuan facil es poder comunicarse con el sistema y este con otros. _Ejm: Que tan facil es que se integre una plataforma de pagos al sistema._ | Esta dado por cuanto el sistema soporta o no el estar en un contexto con otro sistema. Se mide a través de la cantidad de fallos que obtenemos, sin que esos fallos sean generados por la misma aplicación. |

# Usabilidad

Es el grado o atributo del cual un sistema al ser utilizado por usuarios especificos logra alcanzar sus objetivos con efectividad, eficiencia y satisfacción.

| **Reconocimiento de ideonidad**                                                                               | **Curva de aprendizaje**                                                                                                                                | **Operabilidad**                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Grado en el cual los usuarios pueden reconocer si un producto o sistema es el apropiado para sus necesidades. | Gira en torno a la cantidad de tiempo o habilidad requerida para usar el sistema. Se puede medir a través de numeros de consultas al soporte por ayuda. | Hace referencia al número de pasos que se tiene que realizar para cumplir con una tarea, lo ideal es que sea el menor número de pasos posible. |

| **Protección a errores**                                                                                                                                       | **Estética de interfaz**                                                                                                                                                                                         | **Accesibilidad**                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Esta caracteristica no significa que no existirán errores, sino que hace referencia al feedback que se le tiene que dar al usuario cuando este genere errores. | Lo ideal es generar una estética que brinde placer en la experiencia al usuario y que contribuya a la facilidad para comprender el sistema. La forma más practica de medir la estética es a través de encuestas. | Es la incorporación al sistema de funcionalidades para generar una experiencia de usuario satisfactoria para personas que cuentan con diversas necesidades especiales ya sean sensoriales o físicas. |
