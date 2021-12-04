import { InscriptionModel } from './inscription.js';

const inscriptionResolver = {
  Query: {
    Inscripciones: async (parent, args) => {
      const inscripciones = await InscriptionModel.find();
      return inscripciones;
    },
  },
  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscriptionCreate = await InscriptionModel.create({
        estado: args.estado,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return inscriptionCreate;
    },
    aprobarInscripcion: async (parent, args) => {
      const inscriptionApproved = await InscriptionModel.findByIdAndUpdate(
        args.id,
        {
          estado: 'ACEPTADO',
          fechaIngreso: Date.now(),
        },
        { new: true }
      );
      return inscriptionApproved;
    },
  },
};

export { inscriptionResolver };
