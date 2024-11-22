<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3.j1
        img.img-fluid.img-a(src='@/assets/curso/temas/sintesis/img2.png')
      .col-lg-8.my-lg-0.my-3
        .row.justify-content-center.align-items-center
          .col-lg-7.my-lg-0.my-3
            .p-3.brad.j1.h-100
              p
                | Este componente aborda los fundamentos y técnicas fundamentales para la configuración, implementación y gestión de redes inalámbricas, así como los dispositivos de cómputo que las soportan. Comienza con un análisis de las tecnologías inalámbricas y sus estándares principales, como #[i Wi-Fi, Bluetooth], y redes celulares 3G/4G/5G, además de explorar conceptos de propagación en el espectro electromagnético y arquitecturas que sustentan estas redes.
          .col-lg-5.my-lg-0.my-3.j1
            img.img-fluid.img-a(src='@/assets/curso/temas/sintesis/img1.svg')
        .row.justify-content-center.align-items-center.bg1.br-d.p-4.brad
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/sintesis/img3.svg' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0
              | Asimismo, se examinan los dispositivos que permiten el intercambio de datos de manera inteligente y eficiente en la red, considerando no solo los componentes básicos, sino también aquellos que habilitan funcionalidades avanzadas, como la integración de sensores y controladores. Esta interconectividad resulta fundamental en el contexto del Internet de las Cosas (IoT), donde los dispositivos deben operar en conjunto para lograr una red funcional, autónoma y escalable, capaz de sostener múltiples usuarios y aplicaciones.
    p.mb-5
      | Por último, el componente enfatiza la importancia de la seguridad en redes inalámbricas, abordando tanto la protección de la infraestructura como la autenticación y control de acceso para los usuarios. Se presentan estrategias avanzadas de monitoreo y gestión que permiten supervisar y mantener la integridad de la red, asegurando que el acceso sea seguro y que el rendimiento se mantenga óptimo en todo momento.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
