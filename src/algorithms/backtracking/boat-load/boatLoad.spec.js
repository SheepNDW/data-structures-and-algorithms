import { describe, expect, it } from 'vitest';
import { boatLoad } from './boatLoad';

describe('boat load problem', () => {
  it('should return the subset of goods that can be put in the boats', () => {
    const c1 = 50;
    const c2 = 50;
    const goods = [10, 40, 40];

    const [boat1, boat2] = boatLoad(c1, c2, goods);

    expect(boat1).toEqual([10, 40]);
    expect(boat2).toEqual([40]);
  });

  it('should return empty arrays if no solution is found', () => {
    const c1 = 50;
    const c2 = 50;
    const goods = [20, 40, 40];

    const [boat1, boat2] = boatLoad(c1, c2, goods);

    expect(boat1).toEqual([]);
    expect(boat2).toEqual([]);
  });
});
