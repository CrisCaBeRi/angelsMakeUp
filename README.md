# Documentacion proyecto Angels Make Up.

![image](https://user-images.githubusercontent.com/108433878/210156390-aecbebb9-6191-41a5-ae9a-60e7da12dafe.png)

Proyecto de tienda virtual utilizando REACT.
*Desarrollado por Cristian Camilo Betancourt Rincon.

### Tecnologías utilizadas: 
* React JS.
* HTML. 
* JavaScript. 
* Node Js. 
* **Extensiones:**
  * Quokka JS.
  * Prettier. 
  * JS Snippet Pack.
  * Atom Grammar. 
  * JS ES6.
  * ES7 React/Redux.
* **Librerías:** 
  * Bootstrap. 
  * Redux. 
  * Router Dom.
  * WhatsApp. 
  * RemixIcons.  

Página realizada con React JS utilizando el IDE Visual Studio Code.

### Descripción del cliente

*Angels Makeup es un distribuidora de productos de belleza que se encuentra ubicada en la localidad de Suba. Lleva 2 años operando y ha ido creciendo exponencialmente hasta el punto de duplicar su oferta de productos. Actualmente posee un alcance zonal para el área en el cual se encuentra el punto físico y se espera que por medio de estrategias de marketing e integración de soluciones informáticas, se pueda expandir ese alcance y brindar la posibilidad de generar un nuevo modelo de negocio basado en la comercialización de productos con entrega a domicilio.*

### ¿Cómo se integra el desarrollo al modelo de negocio? 
*La aplicación se encuentra enfocada a cubrir la necesidad de generar un nuevo aplicacion al segmento de interés o de compradores para la tienda de Angels Makeup . Las ventas de domicilio serán el enfoque de este desarrollo y permitirán cumplir con las expectativas del proyecto de integrarse a esta nueva rama del modelo de negocio web.*

## Proceso de desarrollo 

*Este desarrollo se basa en la estructura de componentes del Atomic Design, permitiendo un desarrollo secuencial ordenado partiendo desde los elementos de la página más pequeños hasta la estructura de las páginas.*

![image](https://user-images.githubusercontent.com/108433878/210156616-3f08fd50-f0ff-4ff9-b90a-8cd78b8851cd.png)

Para ello, primero se ha estructurado el modelo de diseño correspondiente a Wireframe y Mockup donde se puede evidenciar el modelo de componentes inicialmente. 
[Enlace al diseño en Figma](https://www.figma.com/file/U3qICxQqx5j1XfwRF2ho57/Untitled?node-id=0%3A1&t=7wY54sioTJXzFUwS-1)

### Especificaciónes del desarrollo - requerimientos 

- Se requiere estudio previo del negocio del cliente. 
- Se requiere Wireframe. 
- Se requiere Mockup Aprobados por el cliente. 
- El desarrollo debe ser con React. 
- El desarrollo debe usar CSS puro para dar estilos o uso de librerias. 
- El desarrollo debe contar con un carrito de compra (no es pasarela de pago). 
- El desarrollo debe tener la funcionalidad de al finalizar el pedido, el establecimiento debe recibirlo a través de WhatsApp (debe incluir los productos, la cantidad de productos, el total de cada producto dependiendo de las unidades pedidas y el total de todo el pedido). 
- El desarrollo debe estar en inglés al 100% menos para los strings que ve el usuario final pues estos deben estar en Español. 
- El desarrollo debe contar con filtros de categorías para los diversos productos. 
- El desarrollo debe respetar la carta gráfica del cliente. 
- El desarrollo debe ser RESPONSIVE - Mobile First.

## Componenetes transversales 
* Header

![image](https://user-images.githubusercontent.com/108433878/210156973-49cb79c2-0bf6-40cc-901a-07719e78b149.png)

> ### *Descripción*
> * Dentro del componente header se encuentra la programación necesaria para la visualización del menu de navegación en su versión escritorio y mobile. Su funcionalidad es diferente para estas versiones ya que cuando se alacanza un modo de visualización menor a 678 px el menu se conviete en un desplegable "hamburguesa que contiene todos los elementos iniciales*.

* Footer 

![image](https://user-images.githubusercontent.com/108433878/210157119-854c4683-bfde-48e8-bfea-cfab44cf1d87.png)

> ### *Descripción*
> * Dentro del componente header se encuentra la programación necesaria para la visualización de la información adicional de la tienda que consta de la dirección del punto físico de atención, las redes sociales con su hipervínculo y una descripcion o resumen de la operación realizada.*


## Página HOME 

![image](https://user-images.githubusercontent.com/108433878/210156809-14d09606-04a1-46ce-a6fc-36a6faed5108.png)

*En esta página se encontraran los siguientes componentes:*
* CarouselHome.

> *Este componenete hereda las librerías manejadas de bootstrap, por ende, se manejan las etiquetas Carosuel que permiten una visualización interactiva de los elementos pasando secuancialmente.*


* Categories.

![image](https://user-images.githubusercontent.com/108433878/210157387-a7dcdd70-f58d-479a-929c-faf558d1f42f.png)

> *Este componenete hereda la librería manejada de react router dom ya que es un componente que redirige a las secciones de categorías de productos y se vínculan a los elementos gráficos correspondientes (imagen y texto).*


## Página PRODUCTS

![image](https://user-images.githubusercontent.com/108433878/210157443-da0a9729-ba58-4f98-a0f6-bb722b5bd659.png)

*En esta página se encontraran los siguientes componentes:*
**Se ha optado por dividir en 4 páginas para manejar la secciones y subproductos, por ende, no se explican las páginas adicionales ya que se heredan los componentes y lo único que cambian son las props enviadas desde la página al componente**
* Header(ya explicado).
* Footer(ya explicado). 

* NavbarCategories.

![image](https://user-images.githubusercontent.com/108433878/210157466-33d2a6e0-b4be-4041-827b-a0d07505de71.png)

> *Este componenete hereda los elementos de la librería de react correspondientes a los hooks de UseState, por otra parte, importa el JSON creado para almacenar la información de los productos de la tienda. En este componente se maneja el filtro por categorías trayendo las propiedades(props) directamente desde la página PRODUCTS,  adicionalmente, se importa los elementos de useSelector y useDispatch encargados de alterar los elementos almacenados en el carrito de compras.*

## Página ByuCart 

![image](https://user-images.githubusercontent.com/108433878/210157574-968e6673-2744-43fa-a150-e5bddcca16fd.png)

*En esta página se encontraran los siguientes componentes:*
* Header(ya explicado).
* Footer(ya explicado). 

* Shopping car. 

![image](https://user-images.githubusercontent.com/108433878/210157584-7f23774b-49fc-4def-a7ad-5d49c72ec53b.png)

> *Este componente importa le elemento useState, useSelector y useDespatch de las librerías react y react redux correspondientemente. Dentro de este componente se lleva a cabo toda la lóagica del carro de compras partiendo del uso de una variable global para almacenar los cambios del carro de compras. Adicionalmente, este componente cuenta con la lógica correspondiente para la adicion o sustracción de los elementos del carrito y también con la posibilidad de eleminarlos. Otra funcionalidad del componente es la del formulario de envío que almacena los datos de un formulario y los envia a un mensaje estructurado de whatsapp con los totales sumados de los tiems presentes en el carro, los lombres de los productos y la cantidad de itemes de cada uno. *
