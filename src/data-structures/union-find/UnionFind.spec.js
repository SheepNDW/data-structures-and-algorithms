import { describe, expect, it } from 'vitest';
import { UnionFind } from './UnionFind';

describe('UnionFind', () => {
  it('should create an initial union find', () => {
    const uf = new UnionFind(10);
    expect(uf.toString()).toBe('0 1 2 3 4 5 6 7 8 9');
  });

  it('should query elements', () => {
    const uf = new UnionFind(10);
    expect(uf.query(0)).toBe(0);
    expect(uf.query(9)).toBe(9);
  });

  it('should merge elements', () => {
    const uf = new UnionFind(10);

    uf.merge(0, 1);
    expect(uf.toString()).toBe('1 1 2 3 4 5 6 7 8 9');

    uf.merge(2, 3);
    expect(uf.toString()).toBe('1 1 3 3 4 5 6 7 8 9');
  });

  it('should check if elements are connected', () => {
    const uf = new UnionFind(10);

    uf.merge(0, 1);
    uf.merge(2, 3);
    uf.merge(0, 3);

    expect(uf.isConnected(0, 1)).toBe(true);
    expect(uf.isConnected(0, 2)).toBe(true);
    expect(uf.isConnected(0, 3)).toBe(true);
    expect(uf.isConnected(4, 9)).toBe(false);
  });
});
