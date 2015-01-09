**Que se pretende**:
    Crear un dialogo común mientras se ponen en práctica algunos de los conceptos más importantes de angular a través de la realización de una App web.
    Habrá diferentes temas, donde se explicará un concepto de angular nuevo que nos ayudará a hacer nuestra aplicación mas modular, reusable, robusta y testeable.
    Ya que sólo contamos con 3 horas, en cada tema se profundizará de manera muy básica, aunque lo suficiente como para tener una toma de contacto útil e ir haciendo mas interesante nuestra App.
    La idea no es salir de allí sabiendo crear dicha aplicación web, sino a través del dialogo y viendo en conjunto las diferentes secciones, tener una idea global de qué es Angularjs.

**Que se necesita**:
    Conocimientos: Básicos de HTML y Javascript.
    Material: Un portatil con nodejs, bower y grunt instalados.

**La APP Web**: "Generador de números aleatorios - GNA" 

**Cómo lo vamos a hacer**:
    Va a haber unas 6 partes/temas/ejercicios divididos en 2 etapas.
    Lo primero que vamos a hacer es crear un GNA. Lo que pasa es que este va a ser el GNA mas cutre que jamás haya existido, y lo vamos a ir mejorando según vayamos viendo nuevos conceptos de angular que nos permitan hacerlo. Este va a ir creciendo en elegancia, complejidad, modularidad y testeabilidad etc.

    Estas son las partes en las que se va a dividir nuestra sesión Angular:

    Etapa 1.

    Parte 1: "GNA Manual"
        . El maravillosísimo Doble Data Binding de 
          Angular.
        . Creando nuestra App.
        
    Parte 2: "GNA Programado": Angular Controllers
        . Programando el GNA
        . Añadiendo metodos al $scope
        . Haciendo GNA Automatico: $interval
        . Sacando el Javascript del markup (index.html)
    
    Parte 3: "Directiva GNA": Angular Directives
        . Refactorizando. GNA en una directiva.
        . Pasando atributos a la directiva: GNA MOD & 
          $interval ms?
        . Creando 10 GNAs en 5.3 segundos

    Parte 4: "Modularizando el GNA": Angular Services
        . "Angular way": Delegando cálculo y logica en
          servicios no en controlladores.
          $rootScope.$broadcast && $scope.on(event).
        
    Etapa 2:

    Parte 5: "Creando un Contenedor de GNAs": Cómo estructurar grandes Apps y tomando contacto con $route (ngRoute).
        . Refactorizando aún más: Nuestros 4 GNAs creados
          hasta ahora durante la etapa 1, son 4 modulos
          que que forman nuestro contenedor de GNAs
          y que son completamentes independientes
          haciendolos fácilmente testeables"

    Parte 6: "Atacando una API REST": $http
        . Refactorizando. Nuestro servicio angular ya no 
          calcula los números random, sino que los obtiene 
          de un servicio externo.
      
