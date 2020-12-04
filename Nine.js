function celsius_to_fahrenheit(n){
    let ctemp=n;;
    let fahrenheit = (ctemp * 9/5) + 32;
    return (n+"\x0BC "+ "is "+fahrenheit+"\x0BF");

}

function fahrenheit_to_celsius(n){
    let ftemp = n;
    let celsius = (ftemp - 32) * 5/9;
    return (n+"\x0BF"+" is "+celsius+"\x0BC")
}
 console.log(celsius_to_fahrenheit(60));
 console.log(fahrenheit_to_celsius(45));

