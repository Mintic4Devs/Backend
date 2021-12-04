import mongoose from 'mongoose';

const connectBD = async () => {
  return await mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error de conexión a la base de datos', e);
    });
};

export default connectBD;
