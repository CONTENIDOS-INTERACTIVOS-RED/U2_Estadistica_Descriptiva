<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Medidas de dispersión'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p Las <b>medidas de dispersión</b> en estadística descriptiva, son valores que indican qué tan dispersos o agrupados están los datos con respecto a la media. Es decir, nos ayudan a entender si los datos están muy separados entre sí o sí están concentrados en un rango pequeño. 
        p Principales medidas de dispersión:

    .bg-full-width-1.bg-fondo-1.mb-5
      .px-4.px-md-5.py-4
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/2.svg" alt="" style="width: 90px")
              h5.text-center Rango
              p.mb-0.text-center Diferencia entre el valor máximo y el mínimo.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/3.svg" alt="" style="width: 90px")
              h5.text-center Varianza
              p.mb-0.text-center Mide cuánto se alejan los datos de la media en promedio.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/4.svg" alt="" style="width: 90px")
              h5.text-center Desviación estándar
              p.mb-0.text-center Es la raíz cuadrada de la varianza y muestra la dispersión en las mismas unidades que los datos.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/5.svg" alt="" style="width: 90px")
              h5.text-center Coeficiente de variación
              p.mb-0.text-center Expresa la dispersión en porcentaje con respecto a la media, útil para comparar conjuntos de datos con diferentes unidades.
    
    p.mb-5 Estas medidas nos ayudan a comprender la variabilidad de los datos y su distribución.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Rango

    p.mb-4 El rango es la medida de dispersión más simple y se define como la diferencia entre el valor máximo y el valor mínimo de un conjunto de datos. Proporciona una idea de la amplitud total de la distribución, pero no considera la variabilidad interna de los datos (Llinás Solano, 2017).

    .row.mb-5
      .col-lg-8
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          p Según Gamero Burón (2017), el rango se calcula como:
          p.text-center <em>R=X<sub>max</sub> - X<sub>min</sub></em>
          p Donde:
          p.text-center <em>X<sub>max</sub></em>  es el valor máximo
          p.text-center <em>X<sub>min</sub></em>  es el valor mínimo de la variable.
          p Por ejemplo, considere las ventas diarias de una tienda durante una semana: $120, $150, $100, $180, $130. El rango sería:
          p.text-center R = 180 – 100 = 80
          p Esto indica que la diferencia entre la venta diaria más alta y la más baja es de $80.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
    
    .bg-full-width.bg-color-7.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Ejercicios rango
            p.mb-4(data-aos="fade-right") El rango es una medida estadística fundamental que permite evaluar la dispersión de un conjunto de datos, mostrando la diferencia entre el valor máximo y el valor mínimo. En el PDF <b>Ejercicios rango</b>, se presentan casos prácticos que facilitan el cálculo del rango en distintos contextos, como edades de empleados, puntuaciones de satisfacción del cliente y tiempos de respuesta de un sitio web. Estos ejemplos ofrecen una herramienta útil para interpretar la variabilidad de los datos en escenarios reales.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejercicios rango.
    
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/7.png', alt='')


    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Varianza

    p.mb-4 La varianza es una medida de dispersión que cuantifica la variabilidad de un conjunto de datos respecto a su media. Se calcula como el promedio de los cuadrados de las desviaciones de cada valor respecto a la media (Proaño Rivera, 2020).

    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Romero Ramos (2016), presenta la fórmula para calcular la varianza:
        
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema2/8-1.svg', alt='', style="max-width: 130px;").mx-auto
        
        p donde:

        .tabla-a.color-acento-botones.mb-3
          table
            tbody.text-center
              tr
                td x<sub>i</sub>
                td son los valores de la variable
              tr
                td x̄
                td es la media
              tr
                td n
                td es el tamaño de la muestra
              
    p.mb-4 En el contexto empresarial, la varianza se puede utilizar para evaluar la estabilidad de variables como los ingresos o los costos. Una baja varianza indica que los valores están concentrados alrededor de la media, mientras que una alta varianza sugiere una mayor dispersión y posible imprevisibilidad.

    .bg-full-width.bg-color-7.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Ejercicios varianza
            p.mb-4(data-aos="fade-right") La varianza es una medida estadística fundamental que permite evaluar la dispersión de un conjunto de datos respecto a su media, proporcionando información clave sobre la variabilidad de las observaciones. En el PDF <b>Ejercicios varianza</b>, se presentan ejemplos prácticos que detallan el cálculo de esta medida paso a paso, aplicada a situaciones cotidianas como tiempos de espera, calificaciones y precios, ofreciendo una herramienta útil para el análisis de datos y la comprensión de patrones de distribución en diferentes contextos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejercicios varianza.
    
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/9.png', alt='')


    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Desviación estándar o típica

    p.mb-4 La desviación estándar o típica es la raíz cuadrada de la varianza y se interpreta como la dispersión promedio de los datos respecto a la media. Tiene la ventaja de expresarse en las mismas unidades que la variable original, lo que facilita su interpretación (Puente Viedma, 2018).

    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Según Llinás Solano (2017), la desviación estándar se calcula como:
        
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema2/8-1.svg', alt='', style="max-width: 130px;").mx-auto
        
        p donde:

        .tabla-a.color-acento-botones.mb-3
          table
            tbody.text-center
              tr
                td x<sub>i</sub>
                td son los valores de la variable
              tr
                td x̄
                td es la media
              tr
                td n
                td es el tamaño de la muestra
              
    p.mb-4 En el ámbito empresarial, la desviación estándar se utiliza para medir la volatilidad de variables financieras como precios de acciones, tasas de cambio o rendimientos de inversión. Una alta desviación estándar indica mayor riesgo, mientras que una baja desviación estándar sugiere estabilidad.

    .bg-full-width.bg-color-7.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Ejercicios desviación estándar
            p.mb-4(data-aos="fade-right") La desviación estándar es una medida estadística clave que permite evaluar la dispersión de un conjunto de datos en relación con su media, proporcionando información valiosa sobre la variabilidad de las observaciones. En el PDF <b>Ejercicios desviación estándar</b>, se presentan ejemplos prácticos que ilustran cómo calcular esta medida paso a paso, aplicada a contextos diversos como calificaciones, tiempos de espera y alturas, facilitando una comprensión más profunda de su utilidad en el análisis de datos y la toma de decisiones basada en evidencia.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejercicios desviación estándar.

          .col-lg-4.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/11.png', alt='')
    
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Coeficientes de variación

    p.mb-4 El coeficiente de variación es una medida de dispersión relativa que expresa la desviación estándar como un porcentaje de la media. Permite comparar la variabilidad de diferentes variables o grupos, incluso si están en diferentes unidades de medida (Proaño Rivera, 2020).

    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Gamero Burón (2017), presenta la fórmula para calcular el coeficiente de variación:
        
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema2/12-1.svg', alt='', style="max-width: 130px;").mx-auto
        
          p donde:
          p s es la desviación estándar
          p x̄ es la media
        
              
    p.mb-4 En el contexto empresarial, el coeficiente de variación se puede utilizar para comparar la estabilidad de diferentes líneas de productos, segmentos de mercado o períodos de tiempo. Un menor coeficiente de variación indica una mayor homogeneidad entre las observaciones, mientras que un mayor coeficiente de variación sugiere una mayor heterogeneidad.

    .bg-full-width.bg-color-7.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Ejercicios coeficientes de variación
            p.mb-4(data-aos="fade-right") El coeficiente de variación es una herramienta estadística que permite comparar la dispersión de distintos conjuntos de datos en relación con su media, proporcionando una medida estandarizada de variabilidad. En el PDF <b>Ejercicios coeficientes de variación</b>, se presentan ejemplos prácticos sobre cómo calcular e interpretar esta medida en diferentes contextos, como ventas de productos, salarios y líneas de producción. Estos ejercicios permiten evaluar la estabilidad de los datos y tomar decisiones informadas en distintos ámbitos organizacionales y financieros.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejercicios coeficientes de variación.

          .col-lg-4.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/13.png', alt='')
    
    h2(data-aos="fade-left") Aplicación de las medidas de dispersión en la administración de empresas:
    p Las medidas de dispersión son herramientas fundamentales para el análisis y la toma de decisiones en la administración de empresas. Permiten evaluar la estabilidad, el riesgo y la predictibilidad de diferentes variables claves, como ingresos, costos, precios, demanda y rendimiento.
    p.mb-5 Por ejemplo:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7
              h5 Ejemplo 1
              p Un gerente de producción puede utilizar la desviación estándar para monitorear la variabilidad de los tiempos de fabricación de un producto. Si la desviación estándar es alta, indica que los tiempos de producción son inconsistentes, lo que puede generar cuellos de botella y retrasos en la entrega. En este caso, el gerente podría implementar medidas para estandarizar los procesos y reducir la variabilidad.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/15.png")
            .col-lg-7
              h5 Ejemplo 2
              p Un analista financiero puede utilizar el coeficiente de variación para comparar la volatilidad de diferentes inversiones. Si dos activos tienen rendimientos esperados similares, pero uno tiene un coeficiente de variación más bajo, se consideraría una inversión más estable y menos riesgosa.
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Además, las medidas de dispersión pueden ayudar a identificar oportunidades de mejora y optimización. Por ejemplo, si los costos de materia prima presentan una alta variabilidad, la empresa podría explorar opciones para diversificar proveedores, negociar contratos a largo plazo o implementar estrategias de cobertura para mitigar el riesgo.
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En resumen, las medidas de dispersión brindan a los administradores información valiosa sobre la variabilidad y el riesgo asociados a diferentes aspectos del negocio. Su uso adecuado permite tomar decisiones informadas, identificar áreas de mejora y desarrollar estrategias para optimizar el rendimiento de la empresa.
       


    .bg-full-width.border-top.color-priario
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
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
