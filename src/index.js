module.exports = function count(s, pairs) {
  let N=1, prs=pairs.length, arr=[];
  for (let i=0; i<prs; i++) {
    N*=pairs[i][0]**pairs[i][1];
    arr.push(pairs[i][0]);
  }
  return N%1000000007;
}
