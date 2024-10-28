import jwt from 'jsonwebtoken';
import { JwtSignInAdapter } from '.';

jest.mock('jsonwebtoken', () => ({
  sign(): string {
    return 'any_token';
  },
}));

const makeSut = (): JwtSignInAdapter => {
  return new JwtSignInAdapter('any_secret');
};

describe('JwtSignInAdapter', () => {
  it('Should call sign with correct values', async () => {
    const sut = makeSut();
    const signSpy = jest.spyOn(jwt, 'sign');
    sut.execute('any_id');
    expect(signSpy).toHaveBeenCalledWith({ email: 'any_id' }, 'any_secret', {
      expiresIn: '1h',
    });
  });

  it('Should throw if sign throws', async () => {
    const sut = makeSut();
    jest.spyOn(jwt, 'sign').mockImplementationOnce(() => {
      throw new Error();
    });
    expect(() => sut.execute('any_id')).toThrow();
  });

  it('Should return a token if sign success', async () => {
    const sut = makeSut();
    const accessToken = sut.execute('any_id');
    expect(accessToken).toEqual({ token: 'any_token' });
  });
});
