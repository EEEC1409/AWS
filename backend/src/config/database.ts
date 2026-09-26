import mongoose from "mongoose";

// src/config/database.ts
export const connectDatabase = async (): Promise<void> => {
  //const MONGO_URI = 'mongodb://root:password123@127.0.0.1:27017/usuarios_db?authSource=admin';
 const MONGO_URI = 'mongodb+srv://edisonenc80_db_user:ZUp7WDWVpTMlTwdq@cluster0.ce0hfi3.mongodb.net/'
                  //mongodb+srv://<db_username>:ZUp7WDWVpTMlTwdq@cluster0.ce0hfi3.mongodb.net/
  try {
    await mongoose.connect(MONGO_URI);
    console.log('🔄 [Database]: Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('❌ Error crítico al conectar a la base de datos:', error);
    process.exit(1);
  }
};

    