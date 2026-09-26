module.exports = { 
  apps : [{ 
    name: "mi-node-app", 
    script: "./src/index.js", 
    instances: "max",       // Modo Cluster: usa todos los núcleos de la CPU 
    exec_mode: "cluster", 
 
    // Producción: Variables de entorno protegidas 
    env: { 
      NODE_ENV: "production", 
      PORT: 3000, 
      DB_HOST: "://amazonaws.com", 
      DB_USER: "db_admin", 
      DB_PASS: "password_seguro_de_base_de_datos" 
    }, 
    // Logs y Monitoreo del Servidor 
    error_file: "/var/www/backend-app/backend/logs/err.log", 
    out_file: "/var/www/backend-app/backend/logs/out.log", 
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
      'post-deploy' : 'mkdir -p logs && npm install && pm2 reload ecosystem.config.cjs --env production && pm2 save', 
      ssh_options: "IdentityFile=E:/AWS/par-claves-backend.pem", // Ruta a tu llave .pem local 
      'post-deploy': 'cd backend && mkdir -p logs && npm install && pm2 reload ecosystem.config.cjs --env production && pm2 save'
    } 
  } 
};