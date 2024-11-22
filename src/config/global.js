export default {
  global: {
    componenteFormativo:
      'Mantenimiento correctivo de equipos de cómputo: técnicas y procedimientos',
    descripcionCurso:
      'El presente componente abarca técnicas de diagnóstico, reparación y restauración necesarias para el mantenimiento correctivo de equipos de cómputo. Incluye identificación de fallas, reemplazo de componentes, recuperación de datos y actualización de software. También abarca la validación, documentación técnica y garantías para asegurar el óptimo funcionamiento del equipo y prolongar la vida útil del mismo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Diagnóstico de fallas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Identificación de problemas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: '<em>Software</em> de diagnóstico',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Códigos de error y <em>troubleshooting</em>',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas de reparación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Reemplazo de componentes',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de soldadura',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Actualización de <em>hardware</em>',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Restauración de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Sistemas operativos y particiones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Controladores y actualizaciones',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Recuperación de datos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Validación y entrega',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Pruebas de funcionamiento',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Documentación técnica',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Garantías y soporte',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Diagnóstico de fallas',
      referencia:
        'Leonardo Duarte. (2016, julio 31). <em>Diagnóstico de fallas en computadoras y periféricos.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bz2J6xILf4Y',
    },
    {
      tema: 'Software de diagnóstico',
      referencia:
        'C&G Soporte Técnico. (2022, julio 8). <em>Como reparar problemas de hardware</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=T564hsRwaeU',
    },
    {
      tema: 'Códigos de error y troubleshooting',
      referencia:
        'Microsoft <em>Learn Website. (2023). Windows Update error reference</em>.',
      tipo: 'Web',
      link:
        'https://learn.microsoft.com/es-es/windows/deployment/update/windows-update-error-reference.',
    },
    {
      tema: 'Identificación de problemas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023, octubre 24). Gestión de equipos informáticos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dJ0rNne1xuY',
    },
    {
      tema: 'Sistemas operativos y particiones',
      referencia:
        '<em>Sevivon Studio Canal Youtube</em>. (2020, marzo 20). <em>Particiones primarias, lógicas y extendidas</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CSbUiK2pytE',
    },
    {
      tema: 'Recuperación de datos',
      referencia:
        'Zona <em>Hardware</em>. (2022, noviembre 20). <em>Reparar y recuperar datos de disco duro dañado</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yguGPx0J7jw',
    },
  ],
  glosario: [
    {
      termino: 'Actualización de <em>hardware</em>',
      significado:
        'Proceso de mejora de los componentes físicos de un equipo para aumentar su rendimiento o compatibilidad.',
    },
    {
      termino: 'Compatibilidad',
      significado:
        'Capacidad de un componente o <em>software</em> de funcionar adecuadamente con otros elementos del sistema.',
    },
    {
      termino: 'Componentes',
      significado:
        'Partes físicas de un equipo de cómputo, como la memoria RAM, el disco duro, y la tarjeta gráfica.',
    },
    {
      termino: 'Controladores',
      significado:
        'Programas que permiten la comunicación entre el sistema operativo y el <em>hardware</em> del equipo.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'Evaluación inicial para identificar fallas o problemas en el <em>hardware</em> o <em>software</em> de un equipo de cómputo.',
    },
    {
      termino: 'Documentación técnica',
      significado:
        'Registro detallado de los procedimientos realizados en el equipo, incluyendo reparaciones y actualizaciones.',
    },
    {
      termino: 'Garantía',
      significado:
        'Cobertura que asegura el funcionamiento de los componentes reparados o reemplazados en un período específico.',
    },
    {
      termino: '<em>Hardware</em>',
      significado:
        'Conjunto de componentes físicos de un equipo de cómputo, como la CPU, RAM, y dispositivos de almacenamiento.',
    },
    {
      termino: 'Mantenimiento correctivo',
      significado:
        'Procedimiento para reparar y restaurar el funcionamiento de un equipo en caso de fallos o mal funcionamiento.',
    },
    {
      termino: 'Partición',
      significado:
        'División lógica en el disco duro que permite separar el sistema operativo de los datos del usuario.',
    },
    {
      termino: 'Pruebas de funcionamiento',
      significado:
        'Evaluaciones realizadas después de una reparación para asegurar que el equipo funciona correctamente.',
    },
    {
      termino: 'Recuperación de datos',
      significado:
        'Proceso de restauración de archivos o información perdida debido a fallos, errores o formateos.',
    },
    {
      termino: 'Reemplazo de componentes',
      significado:
        'Sustitución de piezas defectuosas de un equipo para restaurar su funcionamiento.',
    },
    {
      termino: 'Restauración de <em>software</em>',
      significado:
        'Proceso de reinstalación o corrección del <em>software</em> en un equipo, especialmente en el sistema operativo.',
    },
    {
      termino: 'Seguridad',
      significado:
        'Medidas aplicadas para proteger los datos y el equipo de amenazas o pérdidas de información.',
    },
    {
      termino: 'Sistema operativo',
      significado:
        '<em>Software</em> que controla y administra los recursos del equipo y permite la ejecución de aplicaciones.',
    },
    {
      termino: 'Soldadura',
      significado:
        'Técnica de reparación utilizada para restablecer conexiones eléctricas en componentes de <em>hardware</em>.',
    },
    {
      termino: 'Soporte técnico',
      significado:
        'Asistencia que se brinda para resolver problemas relacionados con el equipo, después del mantenimiento.',
    },
    {
      termino: 'Validación',
      significado:
        'Proceso de verificación que confirma el correcto funcionamiento del equipo tras el mantenimiento.',
    },
    {
      termino: 'Virus informático',
      significado:
        'Programa malicioso que puede dañar o comprometer el funcionamiento del equipo y sus datos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Andrews, J. (2019). A+ Guide to IT Technical Support (Hardware and Software) (10.ª ed.). Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Beisse, F. (2014). A Guide to Computer User Support for Help Desk and Support Specialists (6.ª ed.). Cengage Learning.Adafruit Industries. (s.f.). Adafruit guide to excellent soldering. ',
      link: 'https://learn.adafruit.com/adafruit-guide-excellent-soldering',
    },
    {
      referencia:
        'Adafruit Industries. (s.f.). Adafruit guide to excellent soldering.',
      link: 'https://learn.adafruit.com/adafruit-guide-excellent-soldering',
    },
    {
      referencia:
        'Battle.net. (2023). Updating your drivers and operating system.',
      link: 'https://us.battle.net/support/en/article/31024',
    },
    {
      referencia:
        'Bosch Security and Safety Systems. (2023). Documentación técnica de Video Analytics. Bosch Security and Safety Systems',
      link:
        'https://www.boschsecurity.com/xl/es/soluciones/sistemas-de-video/video-analytics/documentacion-tecnica-de-video-analytics',
    },
    {
      referencia:
        'Colegio Nacional de Educación Profesional Técnica. (2023). Diagnóstico de fallas en equipos de cómputo. Colegio Nacional de Educación Profesional Técnica.',
      link:
        'https://iztav211.webcindario.com/programasyguias/cuarto_semestre/ManttoEquipoComputo/GP_DFAC_03.pdf',
    },
    {
      referencia:
        'Crucial website. (2023). How to upgrade desktop memory. Crucial.',
      link:
        'https://www.crucial.com/articles/about-memory/how-to-upgrade-desktop-memory',
    },
    {
      referencia:
        'EaseUS. (2023). Can I recover deleted files from hard disks. EaseUS.',
      link:
        'https://www.easeus.com/resource/recover-deleted-files-hard-drive.html',
    },
    {
      referencia:
        'Lifewire website. (2021, 22 de junio). How to run diagnostics on Windows. Lifewire.',
      link: 'https://www.lifewire.com/run-diagnostics-on-windows-5214801',
    },
    {
      referencia:
        'MakeUseOf. (2017, 27 de marzo). How to test your PC for failing hardware: Tips and tools. MakeUseOf.',
      link:
        'https://www.makeuseof.com/tag/how-to-test-your-pc-for-failing-hardware/',
    },
    {
      referencia:
        'Meyers, M. (2021). CompTIA A+ Certification All-in-One Exam Guide (10.ª ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Microsoft Support Website. (2023, 31 de julio). Create and format a hard disk partition. Microsoft.',
      link:
        'https://support.microsoft.com/en-us/windows/create-and-format-a-hard-disk-partition-bbb8e185-1bda-ecd1-3465-c9728f7d7d2e',
    },
    {
      referencia:
        'Microsoft Support Website. (2023, 31 de julio). Manage disk partitions in Windows. Microsoft.',
      link:
        'https://support.microsoft.com/en-us/help/17418/windows-10-create-partition',
    },
    {
      referencia:
        'Microsoft. (2023, 31 de julio). Update drivers manually in Windows. Microsoft.',
      link:
        'https://support.microsoft.com/en-us/windows/update-drivers-manually-in-windows-ec62f46c-ff14-c91d-eead-d7126dc1f7b6',
    },
    {
      referencia:
        'Odom, W. (2018). CompTIA IT Fundamentals (ITF+) Study Guide (2.ª ed.). Pearson IT Certification.',
      link: '',
    },
    {
      referencia:
        'PCMag. (2022, 17 de marzo). Fix buggy hardware: How to manually update your drivers in Windows. PCMag. ',
      link: 'https://www.pcmag.com/how-to/update-drivers-in-windows',
    },
    {
      referencia:
        'Pyles, M., & McRee, D. (2016). CompTIA A+ Complete Deluxe Study Guide: Exams 220-901 and 220-902. Sybex.',
      link: '',
    },
    {
      referencia:
        'SparkFun Electronics. (2013, 4 de octubre). How to solder - Through-hole soldering. SparkFun Electronics.',
      link:
        'https://learn.sparkfun.com/tutorials/how-to-solder---through-hole-solderin',
    },
    {
      referencia:
        'TechRepublic. (2021, 2 de agosto). How to test your computer hardware and software. TechRepublic. ',
      link:
        'https://www.techrepublic.com/article/how-to-test-your-computer-hardware-and-software',
    },
  ],
}
