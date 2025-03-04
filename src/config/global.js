export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Medidas de dispersión y asimetría',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción (conceptos básicos)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Medida de variación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Asimetría',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Curtosis',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Medidas de dispersión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Rango',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Varianza',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Desviación estándar o típica',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Desviación estándar o típica',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Medidas de asimetría',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Coeficientes de asimetría con respecto a la moda y mediana',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Representación gráfica de la asimetría',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Teorema de <em>Tchebycheff</em> y representación gráfica',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Importancia de la dispersión para evaluar riesgos y oportunidades',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Gamero Burón, C. (2017). Estadística I: elementos de estadística descriptiva y de teoría de la probabilidad: ( ed.). Servicio de Publicaciones y Divulgación Científica de la Universidad de Málaga. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/60724?page=1',
    },
    {
      referencia:
        'Llinás Solano, H. (2017). Estadística descriptiva y distribuciones de probabilidad: ( ed.). Universidad del Norte. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/70059?page=1',
    },
    {
      referencia:
        'Puente Viedma, C. D. L. (2018). Estadística descriptiva e inferencial: ( ed.). Ediciones IDT. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/59931?page=1',
    },
    {
      referencia:
        'Romero Ramos, E. (2016). Estadística para todos: análisis de datos: estadística descriptiva, teoría de la probabilidad e inferencia: ( ed.). Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/49136?page=1',
    },
    {
      referencia:
        'Llinás Solano, H. (2017). Estadística descriptiva y distribuciones de probabilidad: ( ed.). Universidad del Norte. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/70059?page=1',
    },
    {
      referencia:
        'Proaño Rivera, W. B. (2020). Estadística descriptiva e inferencial: (1 ed.). Universidad del Azuay. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/233574?page=1',
    },
    {
      referencia:
        'Puente Viedma, C. D. L. (2018). Estadística descriptiva e inferencial: ( ed.). Ediciones IDT. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/59931?page=1',
    },
    {
      referencia:
        'Romero Ramos, E. (2016). Estadística para todos: análisis de datos: estadística descriptiva, teoría de la probabilidad e inferencia: ( ed.). Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/49136?page=1',
    },
    {
      referencia:
        'Gamero Burón, C. (2017). Estadística I: elementos de estadística descriptiva y de teoría de la probabilidad: ( ed.). Servicio de Publicaciones y Divulgación Científica de la Universidad de Málaga. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/60724?page=1',
    },
    {
      referencia:
        'Llinás Solano, H. (2017). Estadística descriptiva y distribuciones de probabilidad: ( ed.). Universidad del Norte. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/70059?page=1',
    },
    {
      referencia:
        'Proaño Rivera, W. B. (2020). Estadística descriptiva e inferencial: (1 ed.). Universidad del Azuay. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/233574?page=1',
    },
    {
      referencia:
        'Puente Viedma, C. D. L. (2018). Estadística descriptiva e inferencial: ( ed.). Ediciones IDT. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/59931?page=1',
    },
    {
      referencia:
        'Romero Ramos, E. (2016). Estadística para todos: análisis de datos: estadística descriptiva, teoría de la probabilidad e inferencia: ( ed.). Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/49136?page=1',
    },
  ],
  glosario: [
    {
      termino: 'Asimetría',
      significado:
        'Característica de una distribución que indica si los datos se concentran más hacia un lado de la media o si se distribuyen de manera equilibrada.',
    },
    {
      termino: 'Coeficiente de Asimetría de <em>Bowley</em>',
      significado:
        'Medida de asimetría que se calcula utilizando los cuartiles y la mediana de una distribución.',
    },
    {
      termino: 'Coeficiente de Asimetría de Fisher',
      significado:
        'Medida de asimetría que se calcula utilizando la media, la desviación estándar y los valores individuales de una distribución.',
    },
    {
      termino: 'Coeficiente de Asimetría de Pearson',
      significado:
        'Medida de asimetría que se calcula utilizando la media, la moda y la desviación estándar de una distribución.',
    },
    {
      termino: 'Coeficiente de Curtosis',
      significado:
        'Medida que compara el grado de apuntamiento de una distribución con el de la distribución normal.',
    },
    {
      termino: 'Coeficiente de Variación (Cv)',
      significado:
        'Medida de dispersión relativa que expresa la desviación estándar como un porcentaje de la media.',
    },
    {
      termino: 'Curtosis',
      significado:
        'Medida que describe la forma de una distribución en términos de su apuntamiento o achatamiento en comparación con la distribución normal.',
    },
    {
      termino: 'Desviación Estándar s',
      significado:
        'Medida de dispersión que cuantifica la variabilidad de un conjunto de datos respecto a su media. Se calcula como la raíz cuadrada de la varianza.',
    },
    {
      termino: 'Diagrama de Caja (Box Plot)',
      significado:
        'Representación gráfica que muestra la distribución de un conjunto de datos a través de sus cuartiles y valores atípicos.',
    },
    {
      termino: 'Dispersión',
      significado:
        'Grado en que los datos se alejan de un valor central, típicamente la media.',
    },
    {
      termino: 'Distribución Asimétrica',
      significado:
        'Distribución en la que los datos se concentran más hacia un lado de la media, presentando una cola más larga en un extremo.',
    },
    {
      termino: 'Distribución Leptocúrtica',
      significado:
        'Distribución con un apuntamiento mayor que la distribución normal, es decir, con una mayor concentración de datos alrededor de la media.',
    },
    {
      termino: 'Distribución Mesocúrtica',
      significado:
        'Distribución con un apuntamiento similar a la distribución normal.',
    },
    {
      termino: 'Distribución Platicúrtica',
      significado:
        'Distribución con un apuntamiento menor que la distribución normal, es decir, con una menor concentración de datos alrededor de la media.',
    },
    {
      termino: 'Distribución Simétrica',
      significado:
        'Distribución en la que los datos se distribuyen de manera equilibrada a ambos lados de la media.',
    },
    {
      termino: 'Histograma',
      significado:
        'Representación gráfica de la distribución de un conjunto de datos a través de barras que representan la frecuencia o densidad de los valores en intervalos específicos.',
    },
    {
      termino: 'Media Aritmética x̄',
      significado:
        'Medida de tendencia central que se calcula sumando todos los valores de un conjunto de datos y dividiendo por el número total de observaciones.',
    },
    {
      termino: 'Mediana (Me)',
      significado:
        'Valor que divide un conjunto de datos ordenados en dos partes iguales, de manera que el 50% de las observaciones están por debajo de este valor y el 50% por encima.',
    },
    {
      termino: 'Medidas de Dispersión',
      significado:
        'Medidas que cuantifican la variabilidad o dispersión de un conjunto de datos respecto a un valor central, como la media.',
    },
    {
      termino: 'Moda (Mo)',
      significado:
        'Valor que aparece con mayor frecuencia en un conjunto de datos.',
    },
    {
      termino: 'Rango (R)',
      significado:
        'Medida de dispersión que se calcula como la diferencia entre el valor máximo y el valor mínimo de un conjunto de datos.',
    },
    {
      termino: 'Rango Intercuartil (Iqr)',
      significado:
        'Medida de dispersión que se calcula como la diferencia entre el tercer y el primer cuartil de una distribución.',
    },
    {
      termino: 'Regla Empírica:',
      significado:
        'Regla que describe la proporción de observaciones que se encuentran dentro de cierto número de desviaciones estándar de la media en una distribución aproximadamente normal.',
    },
    {
      termino: 'Teorema de <em>Tchebycheff</em>',
      significado:
        'Teorema que establece límites probabilísticos para la proporción de observaciones que se encuentran a una cierta distancia de la media, sin necesidad de conocer la forma específica de la distribución.',
    },
    {
      termino: 'Valor Atípico (<em>Outlier</em>)',
      significado:
        'Observación que se encuentra significativamente alejada de la mayoría de los datos en una distribución.',
    },
    {
      termino: 'Variabilidad',
      significado:
        'Grado en que los datos difieren entre sí o se alejan de un valor central.',
    },
    {
      termino: 'Varianza s^2',
      significado:
        'Medida de dispersión que cuantifica la variabilidad de un conjunto de datos respecto a su media. Se calcula como el promedio de los cuadrados de las desviaciones de cada valor respecto a la media.',
    },
  ],
}
