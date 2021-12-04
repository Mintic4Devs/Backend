import connectBD from './db/db.js';
import { UserModel } from './models/usuario/usuario';
import { Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo } from './models/enums/enums';
import { ProjectModel } from './models/proyecto/proyecto';
import { ObjectId } from 'mongoose';
import { ObjectiveModel } from './models/objective';

// METODOLOGÍA ONE TO MANY 1
const crearProyectoConObjetivos1 = async () => {
  const usuarioInicial = await UserModel.create({
    nombre: 'Juan',
    apellido: 'Peres',
    correo: 'juan123456@mail.com',
    identificacion: '123456478988',
    rol: Enum_Rol.administrador,
    estado: Enum_EstadoUsuario.autorizado,
  });

  const projectCreated = await ProjectModel.create({
    nombre: 'Proyecto 4DEVS',
    fechaInicio: new Date('2021/12/24'),
    fechaFin: new Date('2022/12/24'),
    presupuesto: 120000,
    lider: usuarioInicial._id,
  });

  const objetivoGeneral = await ObjectiveModel.create({
    descripcion: 'este es el objetivo general',
    tipo: Enum_TipoObjetivo.general,
    proyecto: projectCreated._id,
  });

  const objetivoEspecifico1 = await ObjectiveModel.create({
    descripcion: 'este es el objetivo especifico 1',
    tipo: Enum_TipoObjetivo.especifico,
    proyecto: projectCreated._id,
  });

  const objetivoEspecifico2 = await ObjectiveModel.create({
    descripcion: 'este es el objetivo especifico 2',
    tipo: Enum_TipoObjetivo.especifico,
    proyecto: projectCreated._id,
  });
};
const consultaProyectoConObjetivos1 = async () => {
  const proyecto = await ProjectModel.findOne({ _id: '' });

  console.log('El proyecto encontrado es: ', proyecto);

  const objetivos = await ObjectiveModel.find({ project: '' });

  console.log('Los objetivos del proyecto encontrado son: ', objetivos);

  const proyectoConObjetivos = { ...proyecto, objetivos };

  console.log('el proyecto con objetivos es: ', proyectoConObjetivos);
};

// METODOLOGIA ONE TO MANY 2
const crearProyectoConObjetivos2 = async () => {
  const usuarioInicial = await UserModel.create({
    nombre: 'Juan',
    apellido: 'Perez',
    correo: 'juan123@gmail.com',
    identificacion: '123456789',
    rol: Enum_Rol.administrador,
    estado: Enum_EstadoUsuario.autorizado,
  });

  const objetivoGeneral = await ObjectiveModel.create({
    descripcion: 'Este es el objetivo general',
    tipo: Enum_TipoObjetivo.general,
  });

  const objetivoEspecifico1 = await ObjectiveModel.create({
    descripcion: 'Este es el objetivo especifico 1',
    tipo: Enum_TipoObjetivo.especifico,
  });

  const objetivoEspecifico2 = await ObjectiveModel.create({
    descripcion: 'Este es el objetivo especifico 2',
    tipo: Enum_TipoObjetivo.especifico,
  });

  const projectCreated = await ProjectModel.create({
    nombre: 'Proyecto 4DEVS',
    fechaInicio: new Date('2021/12/24'),
    fechaFin: new Date('2022/12/24'),
    presupuesto: 120000,
    lider: usuarioInicial._id,
    objetivos: [objetivoGeneral._id, objetivoEspecifico1._id, objetivoEspecifico2._id],
  });
};
const consultaProyectoConObjetivos2 = async () => {
  const proyecto = await ProjectModel.find({ id: '618d578f431abaa895d7696d' }).populate(
    'objetivos'
  );
};

// METODOLOGIA ONE TO MANY 3

const crearProyectoConObjetivos3 = async () => {
  const usuarioInicial = await UserModel.create({
    nombre: 'Juan',
    apellido: 'Perez',
    correo: 'juan123@gmail.com',
    identificacion: '12345647',
    rol: Enum_Rol.administrador,
    estado: Enum_EstadoUsuario.autorizado,
  });

  const projectCreated = await ProjectModel.create({
    nombre: 'Proyecto 4DEVS',
    fechaInicio: new Date('2021/12/30'),
    fechaFin: new Date('2022/12/31'),
    presupuesto: 120000,
    lider: usuarioInicial._id,
    objetivos: [
      { descripcion: 'Este es el objetivo general', tipo: Enum_TipoObjetivo.general },
      { descripcion: 'Este es el objetivo especifico 1', tipo: Enum_TipoObjetivo.especifico },
      { descripcion: 'Este es el objetivo especifico 2', tipo: Enum_TipoObjetivo.especifico },
    ],
  });
};
const consultaProyectoConObjetivos3 = async () => {
  const projectCreated = await ProjectModel.find({ id: '' });
  console.log('proyecto', projectCreated);
};

const main = async () => {
  await connectBD();
};

main();

//--CRUD USUARIOS--//
  //CREAR USUARIO
  /*   await UserModel.create({
    apellido: "Avila S",
    correo: "j0f901@gmail.com",
    identificacion: "123884588",
    nombre: "Juan",
    rol: Enum_Rol.administrador,

  })

    .then((u) => {
      console.log("usuario creado", u);
    })
    .catch((e) => {
      console.error("error creando usuario", e);
    }); */

  //OBTENER USUARIO
  /*    await UserModel.find()
    .then((u)=>{
        console.log('usuarios', u);
        

    })
    .catch((e)=>{
        console.error('error obteniendo los usuarios', e);
    }); */

  // OBTENER UN SOLO USUARIO

  /* await UserModel.findOne({ identificacion: "12345678912" })
    .then((u) => {
      console.log("usuario encontrado", u);
    })
    .catch((e) => {
      console.error("error encontrando usuario", e);
    }); */

  //EDITAR USUARIO

  /*  await UserModel.findOneAndUpdate(
    { correo: "juanjose0901@gmail.com" },
    { nombre: "Jose", apellido: "Sanchez", }
  )
    .then((u) => {
      console.log("usuario actualizado", u);
    })
    .catch((e) => {
      console.error("error actualizando usuario", e);
    }); */

  //ELIMINAR USUARIO
  /* await UserModel.findOneAndDelete({ correo: "juanjose0901@gmail.com" })
    .then((u) => {
      console.log("usuario eliminado", u);
    })
    .catch((e) => {
      console.error("error eliminando usuario", e);
    }); */
