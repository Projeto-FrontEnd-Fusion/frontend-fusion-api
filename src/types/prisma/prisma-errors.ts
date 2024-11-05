export type PrismaClientKnownRequestErrorType = {
  code: keyof typeof PrismaClientErrorCodes;
  meta: any;
  message: string;
  clientVersion: string;
};

export enum PrismaClientErrorCodes {
  'UniqueConstrainFailedError' = 'P2002',
}
