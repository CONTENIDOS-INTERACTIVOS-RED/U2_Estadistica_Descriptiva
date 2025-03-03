<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    p.mb-4 En esta unidad, se explorará el mundo de las medidas de dispersión y asimetría, herramientas fundamentales en el análisis estadístico. Estas medidas le permitirán comprender y cuantificar la variabilidad de los datos y la forma en que se distribuyen, más allá de las medidas de tendencia central como la media o la mediana. Su dominio es esencial para cualquier profesional que busque tomar decisiones basadas en evidencia, en campos como la administración de empresas, la economía, las ciencias sociales y muchos otros.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Al finalizar esta unidad, será capaz de analizar las medidas de dispersión (rango, varianza, desviación estándar, coeficiente de variación) y de asimetría, aplicándolas para evaluar la variabilidad y la distribución de los datos en diferentes contextos, y utilizarlas como herramientas para la toma de decisiones estadísticas fundamentadas.
        p(data-aos="fade-left") Imagine que es un gerente de una empresa y debe tomar decisiones sobre dos proyectos de inversión. Ambos tienen el mismo retorno promedio esperado, pero uno tiene una variabilidad mucho mayor en sus resultados potenciales. ¿Cuál elegiría? Las medidas de dispersión le darán las herramientas para evaluar los riesgos y tomar la decisión más informada. O considere un caso donde quiere entender si los salarios en su empresa se distribuyen de manera equitativa. Las medidas de asimetría le permitirán detectar si hay un sesgo hacia salarios altos o bajos. Estas son solo algunas de las muchas aplicaciones prácticas que hacen de las medidas de dispersión y asimetría conocimientos invaluables en su mundo profesional.
    
    .row.justify-content-center.align-items-center.bg-color-2.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-8(data-aos="fade-left").order-2
            h5 Se iniciará con una introducción a los conceptos básicos, donde:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Se explorarán las nociones de variación, asimetría y curtosis. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Se sumergirá en las medidas de dispersión, cubriendo el rango, la varianza, la desviación estándar y el coeficiente de variación, y sabrá cómo calcularlas e interpretarlas. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Abordará las medidas de asimetría, incluyendo los coeficientes de asimetría respecto a la media, la mediana y la moda.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Aprenderá a representar gráficamente la asimetría. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Se discutirá el teorema de Tchebycheff y su importancia.  
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Trabajará con ejemplos prácticos y ejercicios para consolidar su aprendizaje.
          .col-lg-4(data-aos="zoom-in").mb-3.mb-lg-0.order-1
            img.img-fluid(src='@/assets/curso/intro/3.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .bg-full-width.bg-color-4
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Para aprovechar al máximo esta unidad, es importante que se involucre activamente en el aprendizaje. Esto significa no solo leer y escuchar atentamente, sino también hacer preguntas, participar en discusiones y, sobre todo, practicar los conceptos a través de los ejercicios. Lo más importante es su disposición para aprender y su curiosidad por descubrir cómo estas herramientas estadísticas pueden enriquecer su comprensión de los datos y mejorar su toma de decisiones.

</template>
