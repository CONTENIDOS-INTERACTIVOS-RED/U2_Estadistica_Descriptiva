<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción (conceptos básicos)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p.mb-3 En el estudio de la estadística descriptiva, es fundamental comprender no solo las medidas de tendencia central que permiten resumir un conjunto de datos en un valor representativo, sino también las medidas de dispersión y asimetría. Estas últimas brindan información valiosa sobre la variabilidad y distribución de los datos, aspectos cruciales para el análisis y toma de decisiones en diferentes ámbitos, incluyendo la administración de empresas.
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las medidas de dispersión cuantifican qué tan alejados están los datos de su valor central, permitiendo evaluar la homogeneidad o heterogeneidad de una distribución. Por su parte, las medidas de asimetría indican si los datos se distribuyen de manera simétrica alrededor de la media o si, por el contrario, presentan una mayor concentración hacia uno de los extremos.
        p(data-aos="fade-left") Ambos tipos de medidas complementan la información proporcionada por las medidas de tendencia central.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Medida de variación

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Se entiende por medida de variación o dispersión, aquellas medidas estadísticas que cuantifican la separación o dispersión de un conjunto de datos, respecto a un valor central, típicamente la media aritmética. Estas medidas permiten evaluar qué tan homogéneos o heterogéneos son los datos, brindando información complementaria a las medidas de tendencia central (Puente Viedma, 2018).
        p(data-aos="fade-left") Según Gamero Burón (2017), las medidas de dispersión son fundamentales en el análisis estadístico, dado que dos conjuntos de datos pueden tener la misma media, pero presentar una variabilidad muy diferente. 

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/4.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
        AcordionA(tipo="b")
          .div(titulo="Ejemplo 1")
            p Considere las ventas mensuales de dos tiendas: la tienda A con ventas de $100, $200, $300, $400 y $500, y la tienda B con ventas de $290, $300, $310, $320 y $330. Ambas tienen una media de $300, pero la tienda A presenta una mayor variabilidad en sus ventas.
    
          .div(titulo="Ejemplo 2")
            p Considere los siguientes datos de ventas mensuales (en miles de dólares) de dos representantes de ventas: Representante <b>A:</b> 80, 90, 85, 95, 100 Representante <b>B:</b> 70, 120, 60, 110, 90 Ambos representantes tienen una media de ventas de $90,000, pero la variabilidad de sus ventas es diferente. El representante <b>A</b>tiene ventas más consistentes alrededor de la media, mientras que las ventas del representante <b>B</b>fluctúan más ampliamente.
    
          .div(titulo="Ejemplo 3")
            p Suponga que una empresa fabrica dos productos: A y B. Los tiempos de producción (en minutos) de cada producto son: Producto A: 20, 22, 21, 19, 23, 20, 22, 21, 20, 22 Producto B: 15, 25, 18, 27, 14, 24, 16, 26, 17, 23 Aunque ambos productos pueden tener tiempos de producción medios similares, la variabilidad de los tiempos de producción puede diferir significativamente. Esta variabilidad puede tener implicaciones importantes para la planificación de la producción y la eficiencia de la empresa.
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En el ámbito empresarial, las medidas de dispersión son útiles para evaluar la estabilidad de variables como ingresos, costos, precios o demanda. Una baja dispersión indica consistencia y predictibilidad, mientras que una alta dispersión sugiere mayor incertidumbre y posibles riesgos u oportunidades. Por ejemplo, si los costos de producción presentan una alta variabilidad, puede ser necesario implementar medidas para estandarizar procesos y reducir la dispersión.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Asimetría

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0.order-1
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          p.mb-0 La asimetría es una característica de la distribución de un conjunto de datos que indica si estos se distribuyen de manera simétrica alrededor de la media o si, por el contrario, presentan una mayor concentración hacia uno de los extremos. Una distribución simétrica tiene una forma similar a ambos lados de la media, mientras que una distribución asimétrica presenta una cola más larga hacia uno de los lados (Llinás Solano, 2017).
        p(data-aos="fade-left") Romero Ramos (2016), señala que existen tres tipos de asimetría:

    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/7.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="2%" y="62.5%" numero="+")
                h5 01. Positiva (o a la derecha)
                p En una asimetría positiva, la cola más larga se extiende hacia los valores más altos, y la media es mayor que la mediana y la moda.
    
              .bg-color-white.box-shadow.p-3(x="98%" y="22%" numero="+")
                h5 02. Negativa (o a la izquierda)
                p En una asimetría negativa, la cola más larga se extiende hacia los valores más bajos, y la media es menor que la mediana y la moda.
    
              .bg-color-white.box-shadow.p-3(x="95%" y="62%" numero="+")
                h5 03. Simétrica
                p En una distribución simétrica, la media, mediana y moda coinciden.
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Por ejemplo, considere los salarios de los empleados de una empresa. Si unos pocos ejecutivos tienen salarios muy altos en comparación con la mayoría de los trabajadores, la distribución presentará una asimetría positiva. En cambio, si hay un salario máximo establecido y unos pocos empleados ganan mucho menos que el resto, la distribución tendrá una asimetría negativa. Conocer la asimetría permite comprender mejor la estructura salarial de la empresa.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Para calcular la asimetría, se pueden utilizar coeficientes como el de Fisher o el de Pearson. Por ejemplo, el coeficiente de asimetría de Fisher, se calcula como:
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema1/9-1.svg', alt='', style="max-width: 130px;").mx-auto
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
              tr
                td s
                td es la desviación estándar

        p Un valor positivo indica asimetría a la derecha, un valor negativo indica asimetría a la izquierda y un valor cercano a cero indica simetría.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Curtosis

    p.mb-4 La curtosis es una medida que describe la forma de la distribución de los datos en términos de su apuntamiento o achatamiento en comparación con la distribución normal. Indica si los datos están más concentrados alrededor de la media (distribución leptocúrtica), más dispersos (distribución platicúrtica) o se comportan de manera similar a la distribución normal (distribución mesocúrtica) (Proaño Rivera, 2020).

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Según Puente Viedma (2018), la curtosis se puede medir a través del coeficiente de curtosis, que compara el grado de apuntamiento de una distribución con el de la distribución normal. Este coeficiente se calcula como:
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema1/10-1.svg', alt='', style="max-width: 217px;").mx-auto
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
              tr
                td s
                td es la desviación estándar

        p Un valor positivo indica una distribución leptocúrtica, un valor negativo indica una distribución platicúrtica y un valor cercano a cero indica una distribución mesocúrtica.
    
    p.mb-4 En el contexto empresarial, la curtosis puede ser relevante para analizar la distribución de variables como el rendimiento de un producto, el tiempo de entrega o la satisfacción del cliente. Por ejemplo, si el tiempo de entrega presenta una distribución leptocúrtica, significa que la mayoría de los pedidos se entregan en un tiempo muy cercano a la media, lo que indica un proceso consistente y predecible.

    .bg-full-width.bg-color-7.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Ejercicios curtosis
            p.mb-4(data-aos="fade-right") El análisis de la curtosis es fundamental para comprender la forma de distribución de los datos en relación con su achatamiento o concentración en los extremos. En el PDF <b>Ejercicios curtosis</b>, se presentan ejemplos prácticos que ilustran cómo calcular el coeficiente de curtosis en diferentes contextos, desde calificaciones de satisfacción del cliente hasta precios de cierre de acciones y tiempos de entrega. Estos ejercicios permiten interpretar la forma de las distribuciones y su implicación en la variabilidad de los datos, proporcionando una base sólida para el análisis estadístico avanzado.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejercicios curtosis.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/11.png', alt='')


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
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
