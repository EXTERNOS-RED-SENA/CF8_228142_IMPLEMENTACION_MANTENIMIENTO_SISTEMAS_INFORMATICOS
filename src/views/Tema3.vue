<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Restauración de #[i software]
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        p La restauración de #[i software] es una técnica usada en el mantenimiento correctivo de equipos de cómputo, especialmente cuando el problema que afecta al equipo no se debe a fallos de #[i hardware], sino a errores en el sistema operativo o en aplicaciones específicas. Este proceso incluye la reparación, reinstalación o actualización del #[i software] para garantizar que el equipo funcione correctamente. La restauración de #[i software] es indispensable en casos donde el sistema presenta problemas de rendimiento, fallas al arrancar, o conflictos derivados de infecciones de malware o corrupción de archivos.
        .row.justify-content-center.align-items-center
          .col-lg-12.bg1.p-4 
            .row.justify-content-center.align-items-center
              .col-lg-2
                img.img-fluid.img-a(src='@/assets/curso/temas/tema3/img2.svg')
              .col-lg-10
                p Uno de los primeros pasos en la restauración de #[i software] es la reinstalación del sistema operativo. En situaciones en las que el sistema está muy afectado por errores críticos o virus, reinstalar el sistema operativo puede ser la solución más efectiva para devolver el equipo a un estado operativo estable. Este proceso elimina la mayoría de los problemas al restablecer el sistema a su configuración original, aunque requiere hacer una copia de seguridad previa de los archivos importantes para evitar la pérdida de datos. En algunos casos, se opta por realizar una restauración del sistema desde una partición de recuperación, una funcionalidad integrada en muchos equipos modernos que permite restaurar el #[i software] sin necesidad de una instalación completa.
      .col-lg-4
        img.img-fluid.img-a(src='@/assets/curso/temas/tema3/img1.png')
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-4
        img.img-fluid.img-a(src='@/assets/curso/temas/tema3/img3.png')
      .col-lg-8
        p La actualización de controladores y otros elementos de #[i software] es otra técnica primordial para asegurar el buen funcionamiento del equipo. Los controladores son programas que permiten la comunicación entre el sistema operativo y los componentes de #[i hardware], y su correcto funcionamiento es fundamental para la estabilidad y el rendimiento del equipo. Actualizar los controladores a las versiones más recientes puede resolver problemas de compatibilidad y mejorar el rendimiento general. Herramientas como Driver Booster o las actualizaciones automáticas de #[i Windows] son útiles para mantener los controladores actualizados y evitar conflictos que puedan afectar el funcionamiento del equipo.
        .row.justify-content-center.align-items-center
          .col-lg-12.bg4.p-4 
            p La recuperación de datos es otra tarea importante dentro de la restauración de #[i software], especialmente cuando el equipo sufre fallos que comprometen la integridad de la información almacenada. Existen herramientas especializadas para recuperar archivos perdidos o dañados, como Recuva o EaseUS Data Recovery Wizard. Estas herramientas permiten a los técnicos acceder a datos que de otro modo serían inaccesibles debido a la corrupción de archivos o al formateo accidental de unidades. La recuperación de datos es un paso imprescindible cuando se realiza una restauración de #[i software], ya que asegura que el usuario no pierda información valiosa durante el proceso de mantenimiento.
    
    p Adicionalmente a la cobertura, la gestión de interferencias es un aspecto clave de la infraestructura inalámbrica. Las redes inalámbricas pueden verse afectadas por otros dispositivos electrónicos, especialmente en lugares donde existen múltiples redes que operan en frecuencias similares. A través de una planificación adecuada y el uso de canales no superpuestos, los administradores de red pueden minimizar la interferencia y optimizar el rendimiento de la red. La selección de frecuencias y el ajuste de la potencia de transmisión también son aspectos determinantes que se deben ajustar para evitar solapamientos y mantener una conexión estable.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-2
        img.img-fluid.img-a(src='@/assets/curso/temas/tema3/img4.svg')
      .col-lg-10.bg2.p-4
        p Finalmente, la seguridad es un componente imprescindible en la infraestructura inalámbrica. Los #[i Access Points] y controladores permiten implementar protocolos de seguridad que limitan el acceso y protegen los datos que se transmiten a través de la red. Con configuraciones de autenticación y cifrado avanzadas, como WPA3, las redes inalámbricas pueden protegerse contra accesos no autorizados y ataques de intrusión, lo que es determinante para preservar la confidencialidad y la integridad de la información. La seguridad debe planificarse desde el diseño inicial de la red para asegurar que esta no solo sea eficiente, sino también segura frente a amenazas externas.
    
    Separador
    #t_3_1.titulo-segundo.color-acento-botones.mt-5
      h2 3.1 Sistemas operativos y particiones    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        p El sistema operativo es el #[i software] principal de un equipo de cómputo, responsable de gestionar tanto los recursos de #[i hardware] como las aplicaciones que el usuario utiliza. En el mantenimiento correctivo, la restauración o reparación del sistema operativo es una de las soluciones más comunes para resolver problemas de funcionamiento en el equipo. Este proceso puede incluir desde la reinstalación completa del sistema hasta el uso de herramientas de recuperación que permiten reparar archivos corruptos sin eliminar los datos del usuario. La adecuada gestión del sistema operativo es fundamental para asegurar la estabilidad y el rendimiento del equipo a lo largo del tiempo.
      .col-lg-4
        img.img-fluid.img-a(src='@/assets/curso/temas/tema3/img5.png')
    
    .row.justify-content-center.mb-4
      .col-lg-4
        .tarjeta.bg5.p-4.h-100
          p Las particiones juegan un rol determinante en la gestión del sistema operativo y los datos del usuario. Una partición es una división lógica en el disco duro que permite separar el sistema operativo de los archivos de usuario o de otros sistemas operativos instalados en el mismo equipo. Esta estructura facilita la restauración del sistema operativo sin afectar los datos almacenados en otras particiones. En entornos corporativos, es común utilizar particiones para organizar y proteger la información, ya que, en caso de fallos, el sistema puede restaurarse sin comprometer la integridad de los archivos importantes. Igualmente, muchas empresas emplean particiones de recuperación, que permiten revertir el sistema a su configuración de fábrica.
      .col-lg-4.p-0
        .tarjeta.h-100
          img.img-fluid.img-a(src='@/assets/curso/temas/tema3/img6.png')
      .col-lg-4
        .tarjeta.bg6.p-4.h-100
          p La creación y gestión de particiones es una habilidad fundamental en el mantenimiento de sistemas operativos. Existen herramientas de #[i software] como Disk Management en #[i Windows] y GParted en Linux, que permiten crear, redimensionar y eliminar particiones según las necesidades del usuario. La creación de particiones adicionales permite una mayor flexibilidad en la administración de datos y facilita la realización de copias de seguridad. También, en situaciones de mantenimiento correctivo, una partición de recuperación puede ser utilizada para restaurar el sistema operativo a un estado anterior, lo cual es especialmente útil en casos de fallos graves que impiden el inicio normal del sistema.
    
    .row.justify-content-center.align-items-center.bg1.mb-4.p-4
      .col-lg-1
        img.img-fluid.img-a(src='@/assets/curso/temas/tema3/img7.svg')
      .col-lg-11
        p Por último, es importante realizar copias de seguridad antes de realizar cualquier modificación en el sistema operativo o en las particiones. Esta precaución asegura que los datos del usuario permanezcan intactos en caso de errores durante el proceso de restauración o formateo. La gestión adecuada de las particiones y la restauración del sistema operativo son aspectos críticos en el mantenimiento de equipos de cómputo, ya que permiten resolver problemas de rendimiento y funcionamiento sin comprometer la integridad de los datos.

    
    Separador
    #t_3_2.titulo-segundo.color-acento-botones.mt-5
      h2 3.2 Controladores y actualizaciones
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        p Los controladores son programas imprescindibles que permiten la comunicación entre el sistema operativo y el #[i hardware] del equipo. Cada componente de un sistema, desde la tarjeta gráfica hasta la impresora, necesita un controlador adecuado para funcionar correctamente. En el contexto del mantenimiento correctivo, la actualización de controladores es una tarea fundamental, ya que los controladores desactualizados o corruptos pueden causar una variedad de problemas, incluidos fallos de #[i hardware], bloqueos del sistema y disminución del rendimiento. Por lo tanto, mantener los controladores actualizados es fundamental para garantizar la estabilidad y funcionalidad del equipo.
        .row.justify-content-center.align-items-center
          .col-lg-12.bg1.p-4 
            .row.justify-content-center.align-items-center
              .col-lg-2
                img.img-fluid.img-a(src='@/assets/curso/temas/tema3/img8.svg')
              .col-lg-10
                p Actualizar los controladores implica descargar e instalar la versión más reciente del #[i software] correspondiente al #[i hardware] específico. Los fabricantes de #[i hardware] frecuentemente lanzan actualizaciones para corregir errores, mejorar el rendimiento o añadir nuevas funcionalidades. Los técnicos pueden obtener estas actualizaciones directamente del sitio #[i web] del fabricante o a través de herramientas de gestión de controladores, como Driver Booster o el Administrador de dispositivos de #[i Windows]. Estas herramientas automatizan el proceso de búsqueda y actualización, lo que ahorra tiempo y reduce el riesgo de instalar controladores incorrectos.
      .col-lg-4
        img.img-fluid.img-a(src='@/assets/curso/temas/tema3/img9.png')
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-4
        img.img-fluid.img-a(src='@/assets/curso/temas/tema3/img10.png')
      .col-lg-8
        p La instalación de actualizaciones de controladores puede requerir reinicios del sistema y, en algunos casos, la desinstalación de versiones anteriores para evitar conflictos. Es fundamental realizar estas tareas con precaución, ya que la instalación incorrecta de un controlador puede resultar en inestabilidad del sistema. También, es recomendable crear puntos de restauración del sistema antes de realizar cambios significativos, de modo que se pueda revertir a una configuración anterior en caso de que surjan problemas. Este enfoque preventivo ayuda a minimizar el tiempo de inactividad y asegura una transición suave a la nueva versión del controlador.
        .row.justify-content-center.align-items-center
          .col-lg-12.bg4.p-4 
            p Por último, la actualización regular de controladores también es parte de las mejores prácticas de seguridad informática. Los controladores desactualizados pueden ser una puerta de entrada para ataques de malware, ya que pueden contener vulnerabilidades que los atacantes pueden explotar. Mantener los controladores al día no solo mejora el rendimiento del equipo, sino que también contribuye a la seguridad general del sistema. Los usuarios deben establecer un programa de revisión regular para verificar si hay actualizaciones disponibles y asegurarse de que el #[i hardware] esté siempre funcionando con las versiones más recientes de sus controladores.
    
    
    Separador
    #t_3_3.titulo-segundo.color-acento-botones.mt-5
      h2 3.3 Recuperación de datos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        p La recuperación de datos es una de las tareas más críticas en el mantenimiento correctivo de equipos de cómputo, especialmente en situaciones donde se produce la pérdida de información debido a fallos del sistema, errores humanos o daños físicos en los dispositivos de almacenamiento. Este proceso implica la utilización de diversas técnicas y herramientas que permiten recuperar archivos y datos que se consideran perdidos. La capacidad de realizar una recuperación efectiva de datos se requiere para minimizar el impacto de la pérdida de información en entornos personales y empresariales, donde la integridad de los datos es fundamental para la operatividad.
        .row.justify-content-center.align-items-center
          .col-lg-12.bg5.p-4 
            .row.justify-content-center.align-items-center
              .col-lg-2
                img.img-fluid.img-a(src='@/assets/curso/temas/tema3/img11.svg')
              .col-lg-10
                p Una de las primeras etapas en la recuperación de datos es la evaluación de la situación. El técnico debe determinar la causa de la pérdida de datos, que puede variar desde la corrupción de archivos hasta fallos mecánicos en discos duros. Dependiendo de la naturaleza del problema, se pueden emplear diferentes enfoques para la recuperación. Por ejemplo, si la pérdida de datos se debe a la eliminación accidental de archivos, el uso de #[i software] especializado como Recuva o EaseUS Data Recovery Wizard puede ser suficiente para restaurar la información. Estos programas escanean el dispositivo de almacenamiento en busca de datos que aún no han sido sobrescritos y ofrecen opciones para recuperarlos.
      .col-lg-4
        img.img-fluid.img-a(src='@/assets/curso/temas/tema3/img12.png')
    p En casos más complejos, como fallos físicos en el disco duro, la recuperación de datos puede requerir técnicas avanzadas y el uso de laboratorios especializados. Cuando un disco duro presenta daños mecánicos, como cabezales de lectura defectuosos o daños en los platos, es necesario realizar la recuperación en un entorno controlado para evitar la pérdida irreversible de datos. Los servicios profesionales de recuperación de datos cuentan con herramientas y técnicas avanzadas que permiten acceder a los datos en situaciones que no son recuperables por el usuario promedio.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-2
        img.img-fluid.img-a(src='@/assets/curso/temas/tema3/img13.svg')
      .col-lg-10.bg2.p-4
        p La prevención es otro aspecto significativo en el proceso de recuperación de datos. Implementar estrategias de respaldo regulares es fundamental para proteger la información y facilitar su restauración en caso de pérdida. Los usuarios deben utilizar soluciones de almacenamiento en la nube, discos duros externos o sistemas de copia de seguridad automática que realicen respaldos periódicos de los datos importantes. Este enfoque no solo ayuda a evitar la pérdida de información valiosa, sino que también proporciona tranquilidad al usuario, sabiendo que su información está segura y es recuperable en caso de emergencias.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido.aos-init.mt-5
          h5 Tabla 3. |
          span Recuperación de datos
    .tabla-a.color-acento-contenido.mb-5
      table
        caption Fuente: OIT, 2024.
        thead
          tr
            th Tipo de pérdida de datos
            th Herramienta recomendada
            th Descripción de uso
            th Consideraciones adicionales
        tbody
          tr
            td.bg1 Eliminación accidental
            td Recuva
            td Escanea y recupera archivos borrados
            td Evitar sobrescribir datos tras eliminación
          tr
            td.bg1 Formateo de unidad
            td EaseUS Data Recovery Wizard
            td Recupera archivos de unidades formateadas
            td Puede requerir versión paga para recuperación completa
          tr
            td.bg1 Error de sistema operativo
            td #[i Windows] File Recovery
            td Restauración de archivos en #[i Windows]
            td Requiere uso de línea de comandos
          tr
            td.bg1 Fallo de disco duro físico
            td Disk Drill
            td Recuperación avanzada para sectores dañados
            td Recomendado para discos con sectores dañados
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
