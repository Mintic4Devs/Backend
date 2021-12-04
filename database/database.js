import mongoose from 'mongoose';

const connectBD = async () => {
  return await mongoose
    .connect('mongodb://user:user@cluster0-shard-00-00.q6sx0.mongodb.net:27017,cluster0-shard-00-01.q6sx0.mongodb.net:27017,cluster0-shard-00-02.q6sx0.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-11mi5z-shard-0&authSource=admin&retryWrites=true&w=majority')
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error de conexión a la base de datos', e);
    });
};

export default connectBD;
