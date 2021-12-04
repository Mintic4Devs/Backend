import { UserModel } from '../../models/user/user.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../../utils/tokenUtils.js';

const authResolvers = {
  Mutation: {
    registro: async (parent, args) => {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(args.password, salt);
      const userCreated = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
        password: hashedPassword,
      });
      console.log('Usuario creado', userCreated);
      return {
        token: generateToken({
          _id: userCreated._id,
          nombre: userCreated.nombre,
          apellido: userCreated.apellido,
          identificacion: userCreated.identificacion,
          correo: userCreated.correo,
          rol: userCreated.rol,
        }),
      };
    },

    login: async (parent, args) => {
      const userFound = await UserModel.findOne({ correo: args.correo });
      if (await bcrypt.compare(args.password, userFound.password)) {
        return {
          token: generateToken({
            _id: userFound._id,
            nombre: userFound.nombre,
            apellido: userFound.apellido,
            identificacion: userFound.identificacion,
            correo: userFound.correo,
            rol: userFound.rol,
          }),
        };
      }
    },

    refreshToken: async (parent, args, context) => {
      console.log('contexto', context);
      if (!context.userData) {
        return {
          error: 'Token no valido',
        };
      } else {
        return {
          token: generateToken({
            _id: context.userData._id,
            nombre: context.userData.nombre,
            apellido: context.userData.apellido,
            identificacion: context.userData.identificacion,
            correo: context.userData.correo,
            rol: context.userData.rol,
          }),
        };
      }
        },
  },
};

export { authResolvers };
