import { ProtectedMiddleware } from './protected.middleware';

describe('ProtectedMiddleware', () => {
  it('should be defined', () => {
    expect(new ProtectedMiddleware()).toBeDefined();
  });
});
