### Escuela Colombiana de Ingeniería
### Arquitecturas de Software - ARSW

## Escalamiento en Azure con Maquinas Virtuales, Sacale Sets y Service Plans

### Dependencias
* Cree una cuenta gratuita dentro de Azure. Para hacerlo puede guiarse de esta [documentación](https://azure.microsoft.com/en-us/free/search/?&ef_id=Cj0KCQiA2ITuBRDkARIsAMK9Q7MuvuTqIfK15LWfaM7bLL_QsBbC5XhJJezUbcfx-qAnfPjH568chTMaAkAsEALw_wcB:G:s&OCID=AID2000068_SEM_alOkB9ZE&MarinID=alOkB9ZE_368060503322_%2Bazure_b_c__79187603991_kwd-23159435208&lnkd=Google_Azure_Brand&dclid=CjgKEAiA2ITuBRDchty8lqPlzS4SJAC3x4k1mAxU7XNhWdOSESfffUnMNjLWcAIuikQnj3C4U8xRG_D_BwE). Al hacerlo usted contará con $200 USD para gastar durante 1 mes.

### Parte 0 - Entendiendo el escenario de calidad

Adjunto a este laboratorio usted podrá encontrar una aplicación totalmente desarrollada que tiene como objetivo calcular el enésimo valor de la secuencia de Fibonnaci.

**Escalabilidad**
Cuando un conjunto de usuarios consulta un enésimo número (superior a 1000000) de la secuencia de Fibonacci de forma concurrente y el sistema se encuentra bajo condiciones normales de operación, todas las peticiones deben ser respondidas y el consumo de CPU del sistema no puede superar el 70%.

### Escalabilidad Serverless (Functions)

1. Cree una Function App tal cual como se muestra en las  imagenes.

![](images/part3/part3-function-config.png)

![](images/part3/part3-function-configii.png)

2. Instale la extensión de **Azure Functions** para Visual Studio Code.

![](images/part3/part3-install-extension.png)

3. Despliegue la Function de Fibonacci a Azure usando Visual Studio Code. La primera vez que lo haga se le va a pedir autenticarse, siga las instrucciones.

![](images/part3/part3-deploy-function-1.png)

![](images/part3/part3-deploy-function-2.png)

4. Dirijase al portal de Azure y pruebe la function.

![](images/part3/part3-test-function.png)

5. Modifique la coleción de POSTMAN con NEWMAN de tal forma que pueda enviar 10 peticiones concurrentes. Verifique los resultados y presente un informe.

6. Cree una nueva Function que resuleva el problema de Fibonacci pero esta vez utilice un enfoque recursivo con memoization. Pruebe la función varias veces, después no haga nada por al menos 5 minutos. Pruebe la función de nuevo con los valores anteriores. ¿Cuál es el comportamiento?.

**Preguntas**

* ¿Qué es un Azure Function?
<br>
R: es un servicio en la nube, que proporciona la estructura y recursos necesarios para ejecutar las aplicaciones 
* ¿Qué es serverless?
<br>
R: tecnologia que permite ejecutar durante un periodo de tiempo predeterminado funciones de codigo sin la necesidad de hacerse cargo de la infraestructura subyacente la cual se proporciona para dar el servicio
* ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?
<br>
R: Es el entorno en el cual vamos a ejecutar nuestra aplicacion, implica que al momento de la ejecucion este se inicie en la plataforma adecuada y a la cual tengamos accesibilidad correcta 
* ¿Por qué es necesario crear un Storage Account de la mano de un Function App?
<br>
R: Es necesario crearla ya que sin este la aplicacion no puede ejecuttar 
* ¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.
<br>
***Plan de consumo***<br>
**ventajas:**<br>
Escale de forma automática y pague los recursos de proceso solo cuando se ejecuten las funciones.
<br>
En el plan de consumo, las instancias del host de Functions se agregan y quitan de forma dinámica según el número de eventos de entrada.
<br>
✔ Plan de hospedaje predeterminado.<br>
✔ Pague solo cuando se ejecutan las funciones.<br>
✔ Escala de forma automática, incluso durante períodos de carga elevada.<br>
***Plan Premium***<br>
**Ventajas:**<br>
Escala automáticamente en función de la demanda mediante trabajos preparados previamente que ejecutan aplicaciones sin ningún retraso después de estar inactivas, ejecuta en instancias más eficaces y se conecta a redes virtuales.<br>
Considere la posibilidad de elegir el plan Premium de Azure Functions en las siguientes situaciones:<br>
✔ La aplicación de funciones se ejecuta de forma continua, o casi continua.<br>
✔ Tiene un gran número de ejecuciones pequeñas y una factura de ejecución elevada, pero pocos GB por segundo en el plan de consumo.<br>
✔ Necesita más opciones de CPU o memoria de las que proporciona el plan de consumo.<br>
✔ Su código debe ejecutarse durante más tiempo del máximo permitido en el plan de consumo.<br>
✔ Necesita características que no están disponibles en el plan de consumo, como la conectividad con red virtual.<br>
✔ Quiere proporcionar una imagen personalizada de Linux en la que ejecutar sus funciones.<br>
***Plan dedicado***<br>
**Ventajas:**<br>
Ejecute las funciones en un plan de App Service a los Precios de App Service normales.<br>
Mejor para escenarios de ejecución prolongada en los que no se puede usar Durable Functions. Considere el plan de App Service en las situaciones siguientes:<br>
✔ Tiene máquinas virtuales infrautilizadas que ya ejecutan otras instancias de App Service.<br>
✔ Se requieren escalado y costos predictivos.<br>

* ¿Por qué la memoization falla o no funciona de forma correcta?
<br>
R: El memoization falla en determinados numeros ya que al utilizar una lista esta tiene un limite, por lo que al usar numeros grandes (ej: 1.000.000, 100.000, 10.000) el programa no devolvera un resultado coherente y dara error

* ¿Cómo funciona el sistema de facturación de las Function App?
<br>
R: El sistema de facturacion se basa en cuanto tiempo se ejecto, o el total de ejecuciones que se hicieron
* Informe
<br>
R: el informe se encuentra en el directorio raiz
