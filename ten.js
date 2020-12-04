function func(){
    let str = "Hi from SKILLSANTA";
    let str2=' ';
    for(let i=0;i<str.length;i++){
        if(str.charCodeAt(i) >=65 && str.charCodeAt(i) <=90){
            str2=str2 + str.charAt(i).toLowerCase();            
        }
        else str2=str2 + str.charAt(i).toUpperCase();        
    }
    return (str2);
}
console.log(func());
