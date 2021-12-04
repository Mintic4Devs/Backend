import { progressModel } from './advance.js';

const progressResolvers = {
  Query: {
    Avances: async (parent, args) => {
      const avance = await progressModel.find().populate('proyecto').populate('creadoPor');
      return avance;
    },
    filtrarAvance: async (parents, args) => {
      const progressFiltered = await progressModel.find({ proyecto: args._id })
        .populate('proyecto')
        .populate('creadoPor');
      return progressFiltered;
    },
  },
  Mutation: {
    crearAvance: async (parents, args) => {
      const progressCreated = progressModel.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      });
      return progressCreated;
    },
  },
};

export { progressResolvers };
