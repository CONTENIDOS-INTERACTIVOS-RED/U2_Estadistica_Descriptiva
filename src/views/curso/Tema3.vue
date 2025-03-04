<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Medidas de asimetría'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 A continuación, conoceremos sobre la temática medidas de asimetría. 

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Coeficientes de asimetría con respecto a la moda y mediana

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Los coeficientes de asimetría son medidas que cuantifican el grado y la dirección de la asimetría de una distribución. Indican si los datos se concentran más hacia uno de los extremos (asimetría positiva o negativa) o si se distribuyen de manera simétrica alrededor de la media (Romero Ramos, 2016).
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Según Llinás Solano (2017), los coeficientes de asimetría más comunes son el coeficiente de asimetría con respecto a la moda (de Pearson) y el coeficiente de asimetría con respecto a la mediana (de Bowley).
    
    .row.mb-5
      .col-lg-6
        p El coeficiente de asimetría de Pearson se calcula como:
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema3/2-1.svg', alt='', style="max-width: 107px;").mx-auto
        p Donde:
        .tabla-a.color-acento-botones.mb-3
          table.pst
            tbody.text-center
              tr
                td <em>x<sub>i</sub></em>
                td es la media
              tr
                td <em>M<sub>0</sub></em>
                td es la moda
              tr
                td <em>s</em>
                td es la desviación estándar

      .col-lg-6
        p El coeficiente de asimetría de <em>Bowley</em> se calcula como:
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema3/2-2.svg', alt='', style="max-width: 210px;").mx-auto
        p Donde:
        .tabla-a.color-acento-botones.mb-3
          table.pst
            tbody.text-center
              tr
                td <em>Q<sub>1</sub></em>
                td es el primer cuartil
              tr
                td <em>M<sub>e</sub></em>
                td es la mediana
              tr
                td <em>Q<sub>3</sub></em>
                td es el tercer cuartil
    
    p.mb-5 En el contexto empresarial, los coeficientes de asimetría pueden ser útiles para analizar la distribución de variables como los salarios de los empleados, los precios de los productos o la satisfacción del cliente. Una asimetría positiva en los salarios puede indicar que unos pocos empleados ganan mucho más que la mayoría, mientras que una asimetría negativa en los precios puede sugerir que la empresa ofrece principalmente productos de bajo costo con algunos productos premium.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Ejercicios coeficientes de asimetría
            p.mb-4(data-aos="fade-right") La asimetría es un concepto estadístico clave que permite evaluar la distribución de los datos en relación con su simetría respecto a la media. En el PDF <b>Ejercicios coeficientes de asimetría</b>, se presentan ejemplos prácticos sobre cómo calcular e interpretar los coeficientes de asimetría de Pearson y Bowley en diferentes contextos, como ventas diarias, ingresos y edades de clientes. Estos ejercicios permiten comprender mejor la forma en que los datos se distribuyen y facilitan el análisis de tendencias en distintos escenarios.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejercicios coeficientes de asimetría.
    
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/3.png', alt='')

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Representación gráfica de la asimetría

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") La representación gráfica de la asimetría se puede realizar mediante histogramas, diagramas de caja o curvas de densidad. Estas visualizaciones permiten identificar rápidamente si una distribución es simétrica o asimétrica, y en qué dirección se encuentra la asimetría (Puente Viedma, 2018).
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La principal diferencia entre histogramas y diagramas de barras radica en el tipo de datos que representan. Los histogramas se emplean para datos continuos, mientras que los diagramas de barras se utilizan para datos categóricos o nominales.
    
    p.mb-5 En los histogramas, no hay espacio entre las barras, dado que estas representan la frecuencia de valores dentro de un rango específico en el eje horizontal. Por otro lado, los diagramas de barras presentan espacios entre las barras, las cuales muestran los valores correspondientes a cada categoría.
    
    .row.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/tema3/6.svg', alt='').mx-auto
        

      .col-lg-6
        figure
          img(src='@/assets/curso/tema3/7.svg', alt='').mx-auto
        

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En un histograma, una distribución simétrica tendrá una forma similar a ambos lados de la clase modal (la barra más alta). Una asimetría positiva se caracteriza por una cola más larga hacia la derecha, mientras que una asimetría negativa presenta una cola más larga hacia la izquierda.
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En un diagrama de caja, una distribución simétrica tendrá una caja centrada respecto a la mediana, con bigotes de igual longitud a ambos lados. Una asimetría positiva se refleja en un bigote más largo hacia la derecha y una caja desplazada hacia la izquierda, mientras que una asimetría negativa presenta un bigote más largo hacia la izquierda y una caja desplazada hacia la derecha.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Teorema de <em>Tchebycheff</em> y representación gráfica
    
    p.mb-4 El teorema de <em>Tchebycheff (o Chebyshev)</em>, es una herramienta estadística que permite acotar la proporción de observaciones que se encuentran a una cierta distancia de la media, sin necesidad de conocer la forma específica de la distribución. Establece que, para cualquier conjunto de datos y cualquier número real k > 1, al menos 1 - (1/k2) de las observaciones se encuentran dentro de k desviaciones estándar de la media (Proaño Rivera, 2020).

    .row.mb-5
      .col-lg-7
        p Matemáticamente, el teorema de <em>Tchebycheff</em> se expresa como:
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema3/10-1.svg', alt='', style="max-width: 158px;").mx-auto
        p Donde:
        .tabla-a.color-acento-botones.mb-3
          table.pst
            tbody.text-center
              tr
                td <em>X</em>
                td es la variable aleatoria
              tr
                td 
                td es la media
              tr
                td <em>σ</em>
                td es la desviación estándar
              tr
                td <em>k</em>
                td es un número real mayor que 1

      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/11.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          p.mb-0 La representación gráfica del teorema de Tchebycheff se puede realizar mediante la regla empírica, que muestra la proporción de observaciones dentro de 1, 2 y 3 desviaciones estándar de la media en una distribución aproximadamente normal. Según esta regla, aproximadamente el 68 % de las observaciones se encuentran dentro de una desviación estándar de la media, el 95 % dentro de dos desviaciones estándar y el 99.7 % dentro de tres desviaciones estándar.
        p(data-aos="fade-left") En el contexto empresarial, el teorema de Tchebycheff puede ser útil para establecer intervalos de confianza o límites de control en procesos de calidad. Por ejemplo, si el tiempo de ensamblaje de un producto tiene una media de 10 minutos y una desviación estándar de 2 minutos, se puede afirmar que al menos el 75 % de los tiempos de ensamblaje se encuentran entre 6 y 14 minutos (10 ± 2 • 2), sin necesidad de conocer la distribución exacta de los tiempos.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Ejercicios Teorema de <em>Tchebycheff</em>
            p.mb-4(data-aos="fade-right") El teorema de Tchebycheff es una herramienta fundamental en estadística para determinar la proporción de datos que se encuentran dentro de un rango específico, sin importar la forma de la distribución. En el PDF <b>Ejercicios Teorema de <em>Tchebycheff</em></b>, se presentan ejemplos prácticos que ilustran cómo aplicar esta regla en diferentes contextos, como calificaciones de exámenes, ventas empresariales y pesos de paquetes en logística. A través de estos ejercicios, se refuerza la comprensión de la variabilidad de los datos y se facilita la toma de decisiones basada en intervalos de confianza.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejercicios Teorema de <em>Tchebycheff</em>.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/12.png', alt='')

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Importancia de la dispersión para evaluar riesgos y oportunidades

    p.mb-4 Para conocer sobre el tema, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h2(data-aos="fade-left") Aplicación práctica: evaluación de la estabilidad de los costos operativos y su relación con los márgenes de ganancia
    p.mb-5 Una de las aplicaciones más importantes de las medidas de dispersión en la administración de empresas, es la evaluación de la estabilidad de los costos operativos y su relación con los márgenes de ganancia. Los costos operativos son aquellos gastos necesarios para mantener en funcionamiento un negocio, como los salarios, el alquiler, los suministros y los servicios públicos. La estabilidad de estos costos es crucial para la planificación financiera y la rentabilidad de la empresa.

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/13.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
        AcordionA(tipo="b")
          .div(titulo="Primero")
            p Supongamos que una empresa manufacturera ha recopilado datos sobre sus costos operativos mensuales durante el último año. La media de los costos operativos es de $100,000 y la desviación estándar es de $20,000. Además, la empresa tiene un precio de venta promedio de $150 por unidad y un costo variable promedio de $80 por unidad.
    
          .div(titulo="Segundo")
            p Para evaluar la estabilidad de los costos operativos, la empresa puede calcular el coeficiente de variación:
            img(src="@/assets/curso/tema3/13-1.svg", style="max-width: 168px").mx-auto.mb-3
            p Un coeficiente de variación del 20 % indica que los costos operativos tienen una variabilidad moderada. La empresa puede utilizar esta información para establecer reservas financieras adecuadas y prepararse para posibles fluctuaciones en los costos.
            
    
          .div(titulo="Tercero")
            p A continuación, la empresa puede analizar cómo la dispersión de los costos operativos afecta a los márgenes de ganancia. El margen de contribución por unidad es la diferencia entre el precio de venta y el costo variable:
            p Margen de contribución = Precio de venta - Costo variable = 150 – 80 = $70.

          .div(titulo="Cuarto")
            p Si la empresa vende 1,000 unidades en un mes determinado, su margen de contribución total será de $70,000. Sin embargo, si los costos operativos aumentan en una desviación estándar ($20,000), el beneficio operativo se reduciría a $50,000. Por el contrario, si los costos operativos disminuyen en una desviación estándar, el beneficio operativo aumentaría a $90,000. 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Este análisis demuestra la importancia de monitorear y controlar la dispersión de los costos operativos para mantener márgenes de ganancia estables. La empresa puede utilizar esta información para implementar medidas de eficiencia, como la optimización de procesos, la negociación de mejores términos con los proveedores o la adopción de tecnologías que reduzcan los costos.
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/14-1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Además, la empresa puede utilizar el análisis de dispersión para establecer precios estratégicos. Si los costos operativos son altamente variables, la empresa puede considerar aumentar ligeramente los precios para crear un "colchón" que absorba las fluctuaciones. Por otro lado, si los costos son estables, la empresa puede optar por precios más agresivos para ganar cuota de mercado.
    
    p.mb-4 En resumen, la evaluación de la estabilidad de los costos operativos y su relación con los márgenes de ganancia es un aspecto crucial de la administración financiera. Las medidas de dispersión, como la desviación estándar y el coeficiente de variación, proporcionan información valiosa sobre la variabilidad de los costos y permiten a las empresas tomar decisiones informadas para optimizar su rentabilidad.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Ejercicio
            p.mb-4(data-aos="fade-right") El análisis de los costos operativos es fundamental para la toma de decisiones estratégicas en cualquier empresa. En el PDF <b>Ejercicio</b>, se presentan cálculos detallados sobre la media, la desviación estándar y el coeficiente de variación de los costos operativos mensuales de una empresa de servicios. Además, se examina el impacto que un aumento en la desviación estándar de los costos tendría en el beneficio operativo, permitiendo evaluar la estabilidad financiera del negocio y la importancia del control de gastos en la rentabilidad.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_8.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejercicio.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/15.png', alt='')
    
    p.mb-4 A continuación, se comparten algunos ejemplos adicionales sobre la importancia en la comprensión de la dispersión de los datos:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ejemplo 1" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Ejemplo 1
            p Un fabricante de piezas electrónicas está evaluando dos proveedores de componentes. Ambos proveedores tienen un tiempo de entrega promedio de 15 días, pero el proveedor <b>A</b> tiene una desviación estándar de 5 días, mientras que el proveedor <b>B</b> tiene una desviación estándar de solo 1 día. Aunque el promedio es el mismo, el proveedor <b>B</b> es probablemente la mejor opción ya que sus tiempos de entrega son mucho más consistentes y predecibles, lo que reduce el riesgo de interrupciones en la cadena de suministro.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/16.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ejemplo 2" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Ejemplo 2
            p Una cadena de restaurantes está analizando los tiempos de espera de los clientes en sus locales. El tiempo promedio de espera es de 10 minutos, pero en algunos restaurantes los tiempos varían ampliamente de 5 a 20 minutos (alta desviación estándar), mientras que en otros son muy estables alrededor de esos 10 minutos (baja desviación estándar). Los restaurantes con alta variabilidad merecen ser investigados, dado que podrían existir problemas con la dotación de personal, la eficiencia de la cocina o la gestión de la capacidad. Reducir esa variabilidad podría mejorar la satisfacción del cliente y la eficiencia operativa.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/17.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ejemplo 3" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Ejemplo 3
            p Una empresa de comercio electrónico está comparando el rendimiento de dos campañas publicitarias. Ambas tienen la misma tasa de conversión promedio del 5 %, pero la campaña <b>A</b> tiene una desviación estándar del 1 %, mientras que la campaña <b>B</b> tiene una desviación estándar del 4 %. Aunque el promedio es igual, la campaña <b>A</b> es más confiable y predecible, lo que facilita la planificación y la asignación de presupuesto. La alta variabilidad de la campaña <b>B</b> sugiere que podría haber factores no controlados que influyen en su rendimiento.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/18.png', alt='', style="width: 100%;")
    
    p.mb-4 Para concluir, esperamos que este repaso de las medidas de dispersión y asimetría haya sido útil para comprender su importancia en el análisis estadístico y la toma de decisiones empresariales. Recuerde que estas medidas nos brindan información valiosa sobre la variabilidad y la forma de una distribución de datos, lo que nos permite evaluar riesgos, identificar oportunidades y tomar decisiones informadas.

    .row.mb-5
      .col-lg-4 
        .bg-color-5.px-4.py-5.mb-3.tarjeta(data-aos="fade-left")
          p.mb-0 La varianza y la desviación estándar nos indican cuánto se alejan los datos de la media, mientras que los coeficientes de variación nos permiten comparar la dispersión entre diferentes conjuntos de datos. Por otro lado, las medidas de asimetría, como los coeficientes de asimetría de Pearson y Bowley, nos informan sobre la dirección y el grado de asimetría de una distribución.
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/19.png', alt='')
      .col-lg-4 
        .bg-color-1.px-4.py-5.mb-3.tarjeta(data-aos="fade-left")
          p.mb-0 En el contexto de la administración de empresas, estas medidas son fundamentales para evaluar la estabilidad de variables clave, como ingresos, costos y márgenes de ganancia. Al monitorear la dispersión de estas variables, los gerentes pueden anticipar riesgos, optimizar procesos y desarrollar estrategias efectivas para mejorar el rendimiento de la empresa.

    p.mb-4 Además, el teorema de <em>Tchebycheff</em> nos permite establecer límites probabilísticos para la proporción de observaciones que se encuentran a una cierta distancia de la media, lo que es útil para establecer intervalos de confianza y límites de control en diversos contextos empresariales.
      
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/20.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/21.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las medidas de dispersión y asimetría son herramientas estadísticas poderosas que todo administrador de empresas debe conocer y aplicar en su práctica profesional. Al comprender y utilizar adecuadamente estos conceptos, podrán tomar decisiones más informadas y orientadas a datos, lo que les permitirá liderar sus organizaciones hacia el éxito en un entorno empresarial cada vez más competitivo y cambiante.
        p(data-aos="fade-left") Recuerde practicar los conceptos aprendidos mediante la resolución de ejercicios y la aplicación de estas medidas en casos prácticos de su entorno laboral. La práctica constante y la aplicación en contextos reales son las claves para dominar estas herramientas estadísticas y aprovechar al máximo su potencial en la toma de decisiones empresariales.
    

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
