import { projectResolvers } from '../models/project/resolvers.js';
import { userResolvers } from '../models/user/resolvers.js';
import { progressResolvers } from '../models/advance/resolvers.js';
import { inscriptionResolver } from '../models/inscription/resolvers.js';
import { authResolvers } from './auth/resolvers.js';

export const resolvers = [
  userResolvers,
  projectResolvers,
  progressResolvers,
  inscriptionResolver,
  authResolvers,
];
