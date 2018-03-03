module.exports = function count(s, pairs) {
  let N=1, arr=[], count=0;

  for (let i=0, prs=pairs.length; i<prs; i++) {
    N*=pairs[i][0]**pairs[i][1];
  }

	if(N > 10000007) return count;  //can't solve yet for N > 1000000

	for(let k=1; k<=N; k++) {
		for(let j=0, sl=s.length; j<sl; j++) {
      if(s[j]=='1') {evklid(k+j, N)==1?arr.push(true):arr.push(false);
      }	else if(s[j]=='0') {evklid(k+j, N)!==1?arr.push(true):arr.push(false);}
		}
    if(arr[arr.length-1]==true) {count++;
    }
		arr.length=0;
	}
	return count;
}

let evklid = function(a, b) {
  while (true) {
    if (b==0) return a;
    a%=b;
    if (a==0) return b;
    b%=a;
  }
}
