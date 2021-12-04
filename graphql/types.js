import { gql } from 'apollo-server-express';
import { EnumsTypes } from '../models/enums/types.js';
import { userTypes } from '../models/user/types.js';
import { projectTypes } from '../models/project/types.js';
import { advanceTypes } from '../models/advance/types.js';
import { inscriptionTypes } from '../models/inscription/types.js';
import { authTypes } from './auth/types.js';

const globalTypes = gql`
  scalar Date
`;

export const tipos = [
  globalTypes,
  EnumsTypes,
  userTypes,
  projectTypes,
  advanceTypes,
  inscriptionTypes,
  authTypes,
];
