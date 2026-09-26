module.exports = {
  apps : [{
    name: "backend-app",
    script: "./src/index.js", // Asegúrate de que apunte a tu archivo de entrada real (ej. index.js, app.js o server.js)
    env: {
      DB_PASS: "password_seguro_de_base_de_datos"
    },
    // Logs y Monitoreo del Servidor (Corregidos sin la subcarpeta backend)
    error_file: "/var/www/backend-app/shared/logs/err.log",
    out_file: "/var/www/backend-app/shared/logs/out.log",
    log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    merge_logs: true
  }],

  // Automatización del Despliegue desde tu PC local
  deploy : {
    production : {
      user : 'ubuntu',
      host : '18.224.111.77',
      ref  : 'origin/main',
      repo : 'git@github.com:EEEC1409/backend-aws.git',
      path : '/var/www/backend-app',
      ssh_options: "IdentityFile=E:/AWS/par-claves-backend.pem",
      // Comando limpio: Sin "cd backend" y ejecutando pm2 reload desde la raíz
      'post-deploy' : 'cd backend && mkdir -p shared/logs && npm install && pm2 reload ../ecosystem.config.cjs --env production && pm2 save'
    }
  }
};
