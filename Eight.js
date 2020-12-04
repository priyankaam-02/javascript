function fibonacci(n){
let n1=0,n2=1,sum=0;
document.write(n1+" "+n2);
for(let i=2;i<n;i++){
    sum=n1+n2;
    document.write(" "+sum);
    n1=n2;
    n2=sum;
}
}
fibonacci(5);