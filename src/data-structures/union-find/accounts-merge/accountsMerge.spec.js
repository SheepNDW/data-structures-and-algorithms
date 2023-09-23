import { describe, expect, it } from 'vitest';
import { accountsMerge } from './accountsMerge';

describe('accountsMerge', () => {
  it('should merge accounts', () => {
    const accounts1 = [
      ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
      ['John', 'johnsmith@mail.com', 'john00@mail.com'],
      ['Mary', 'mary@mail.com'],
      ['John', 'johnnybravo@mail.com'],
    ];
    const accounts2 = [
      ['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe1@m.co'],
      ['Kevin', 'Kevin3@m.co', 'Kevin5@m.co', 'Kevin0@m.co'],
      ['Ethan', 'Ethan5@m.co', 'Ethan4@m.co', 'Ethan0@m.co'],
      ['Hanzo', 'Hanzo3@m.co', 'Hanzo1@m.co', 'Hanzo0@m.co'],
      ['Fern', 'Fern5@m.co', 'Fern1@m.co', 'Fern0@m.co'],
    ];

    const result1 = accountsMerge(accounts1);
    const result2 = accountsMerge(accounts2);

    expect(result1).toMatchInlineSnapshot(`
      [
        [
          "John",
          "john00@mail.com",
          "john_newyork@mail.com",
          "johnsmith@mail.com",
        ],
        [
          "Mary",
          "mary@mail.com",
        ],
        [
          "John",
          "johnnybravo@mail.com",
        ],
      ]
    `);
    expect(result2).toMatchInlineSnapshot(`
      [
        [
          "Gabe",
          "Gabe0@m.co",
          "Gabe1@m.co",
          "Gabe3@m.co",
        ],
        [
          "Kevin",
          "Kevin0@m.co",
          "Kevin3@m.co",
          "Kevin5@m.co",
        ],
        [
          "Ethan",
          "Ethan0@m.co",
          "Ethan4@m.co",
          "Ethan5@m.co",
        ],
        [
          "Hanzo",
          "Hanzo0@m.co",
          "Hanzo1@m.co",
          "Hanzo3@m.co",
        ],
        [
          "Fern",
          "Fern0@m.co",
          "Fern1@m.co",
          "Fern5@m.co",
        ],
      ]
    `);
  });
});
