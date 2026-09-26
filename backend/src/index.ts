import app from './app.js';
import { connectDatabase } from './config/database.js';

const port = app.get('puerto') || 3000;

connectDatabase(); // Conexión a la base de datos

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});