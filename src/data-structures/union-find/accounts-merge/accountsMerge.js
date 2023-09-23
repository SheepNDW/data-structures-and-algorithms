import { UnionFind } from '../UnionFind';

/**
 * 721. Accounts Merge
 * @param {string[][]} accounts
 * @return {string[][]}
 */
function accountsMerge(accounts) {
  const uf = new UnionFind(accounts.length);
  const owners = {};

  // 開始合併帳戶
  for (let i = 0; i < accounts.length; i++) {
    const emails = accounts[i];
    for (let j = 1; j < emails.length; j++) {
      const email = emails[j];
      if (Object.hasOwn(owners, email)) {
        const owner = owners[email];
        uf.merge(owner, i); // 如果共用同一個 email，就合併帳戶
      } else {
        owners[email] = i;
      }
    }
  }

  // 將同一個帳戶的 email 放在一起
  const userEmails = {};
  for (let i = 0; i < accounts.length; i++) {
    const root = uf.query(i); // 找到合併後小組的索引值名
    const emails = accounts[i];
    if (!userEmails[root]) {
      userEmails[root] = new Set();
    }
    emails.forEach((email, i) => {
      if (i > 0) {
        userEmails[root].add(email);
      }
    });
  }

  const result = [];
  for (const [root, emails] of Object.entries(userEmails)) {
    const name = accounts[root][0];
    const sortedEmails = [...emails].sort();
    result.push([name, ...sortedEmails]);
  }

  return result;
}

export { accountsMerge };
