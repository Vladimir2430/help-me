module.exports = function count(s, pairs) {
  var N=1;
  for (let i=0; i<pairs.length; i++) {
    N*=pairs[i][0]**pairs[i][1];
  }
  return N % 1000000007;
}
