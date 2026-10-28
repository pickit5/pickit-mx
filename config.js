/* ==== Configuración de Peek & Pick ====
   La comisión y el tiempo para pagar se cambian dentro de la app: #admin → Ajustes. */
window.PICKIT_CONFIG = {
  SUPABASE_URL: "https://qxmqmlqeoeztccnvswlt.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_PzTq6LjZmPUzxNRhIL-Y4w_l6LhRY5z",  // llave pública (nunca la secret/service_role)
  WHATSAPP_SOPORTE: "",                // vacío = no se muestra WhatsApp (soporte por Instagram y correo)
  INSTAGRAM: "peekandpick.mx",             // usuario de Instagram, sin @
  CORREO: "peekandpickmx@gmail.com",      // correo de contacto
  AVISOS_FN: "clever-processor",    // nombre de la función de avisos en Supabase (aparece en su dirección)
  ZONA: ""                             // texto opcional bajo el logo; vacío = muestra la ciudad elegida
};
