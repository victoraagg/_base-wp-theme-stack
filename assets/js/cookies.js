var cc = initCookieConsent()

// run plugin with config object
cc.run({
  current_lang: 'es',
  autoclear_cookies: true, // default: false
  cookie_name: 'cc_cookie_sanur', // default: 'cc_cookie'
  cookie_expiration: 365, // default: 182
  page_scripts: true, // default: false
  // auto_language: null, // default: null; could also be 'browser' or 'document'
  // autorun: true, // default: true
  // delay: 0, // default: 0
  // force_consent: false,
  // hide_from_bots: false, // default: false
  // remove_cookie_tables: false // default: false
  // cookie_domain: location.hostname, // default: current domain
  // cookie_path: "/", // default: root
  // cookie_same_site: "Lax",
  // use_rfc_cookie: false, // default: false
  // revision: 0, // default: 0

  gui_options: {
    consent_modal: {
      layout: 'box', // box,cloud,bar
      position: 'bottom right', // bottom,middle,top + left,right,center
      transition: 'slide', // zoom,slide
    },
    settings_modal: {
      layout: 'box', // box,bar
      // position: 'left', // right,left (available only if bar layout selected)
      transition: 'slide', // zoom,slide
    },
  },

  onFirstAction: function () {
    //console.log("onFirstAction fired");
  },

  onAccept: function (cookie) {
    //console.log("onAccept fired ...");
  },

  onChange: function (cookie, changed_preferences) {
    //console.log("onChange fired ...");
  },

  languages: {
    es: {
      consent_modal: {
        title: '🍪 Preferencias de Cookies',
        description:
          'Hola, este sitio web utiliza cookies esenciales para garantizar su correcto funcionamiento y cookies de seguimiento para comprender cómo interactúa con él. Este último se establecerá sólo después del consentimiento. <button type="button" data-cc="c-settings" class="cc-link">Revisar preferencias</button>',
        primary_btn: {
          text: 'Aceptar todo',
          role: 'accept_all', // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: 'Rechazar todo',
          role: 'accept_necessary', // 'settings' or 'accept_necessary'
        },
      },
      settings_modal: {
        title: 'sanur',
        save_settings_btn: 'Guardar preferencias',
        accept_all_btn: 'Acceptar todo',
        reject_all_btn: 'Rechazar todo',
        close_btn_label: 'Close',
        cookie_table_headers: [
          { col1: 'Nombre' },
          { col2: 'Dominio' },
          { col3: 'Expiración' },
          { col4: 'Descripción' },
        ],
        blocks: [
          {
            title: 'Uso de cookies 📢',
            description:
              'Utilizo cookies para garantizar las funcionalidades básicas del sitio web y mejorar su experiencia en línea. Puede elegir para cada categoría optar por participar o no cuando lo desee. Para obtener más detalles relacionados con las cookies y otros datos confidenciales, lea la <a href="' +
              cookie_vars.privay_policy_url +
              '" class="cc-link">política de privacidad</a> completa.',
          },
          {
            title: 'Cookies de rendimiento y análisis',
            description:
              'Estas cookies permiten que el sitio web recuerde las elecciones que ha realizado en el pasado.',
            toggle: {
              value: 'analytics', // there are no default categories => you specify them
              enabled: false,
              readonly: false,
            },
            cookie_table: [
              {
                col1: '_ga_2BR5YB9GQW',
                col2: 'google.com',
                col3: '1 año',
                col4: 'Cookie de análisis de tráfico',
                //is_regex: true,
              },
              {
                col1: '_gid',
                col2: 'google.com',
                col3: '1 día',
                col4: 'Cookie de análisis de tráfico',
                //is_regex: true,
              },
              {
                col1: '_ga',
                col2: 'google.com',
                col3: '1 año',
                col4: 'Cookie de análisis de tráfico',
                //is_regex: true,
              },
              {
                col1: '_gat_gtag_UA_58860021_19',
                col2: 'google.com',
                col3: '1 año',
                col4: 'Cookie de análisis de tráfico',
                //is_regex: true,
              },
            ],
          },
          {
            title: 'Más información',
            description:
              'Para cualquier consulta en relación con la política de cookies y sus opciones, puede consultarnos a través de nuestro formulario de contacto.',
          },
        ],
      },
    },
  },
})
