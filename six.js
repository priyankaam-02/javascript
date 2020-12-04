function truncate(str,i){
    let word=str.split(" ");    
    return word.splice(0,i).join(" ");
}
console.log(truncate('The quick brown jumps over the lazy dog',4));






