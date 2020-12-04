let data=[0,1,2,3,4];
for (let i=0;i<data.length;i++){
    if(i%2==0){
        document.write("\""+data[i]+ " is even\" <br>");
    }
    else {
        document.write("\""+data[i]+" is odd\" <br>");
    }
}

// function prime(n){
// let flag=true;
// if(n==1){
//     flag= false;
// }
// else if(n==2){
//     flag= true;
// }
// else{
//     for(let x=2;x<n;x++){
//         if(n%x==0){
//             flag= false;
//         }
//     }
//     flag= true;
//     if(flag==true){
//         document.write("prime");
//     }
// }
// }
// document.write(prime(3));
 