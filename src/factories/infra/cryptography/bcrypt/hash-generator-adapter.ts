import {
  HashGenerator,
  HashGeneratorAdapter,
} from '@/infra/cryptography/bcrypt/hash-generator';

export const makeHashGeneratorAdapter = (): HashGenerator => {
  return new HashGeneratorAdapter();
};
