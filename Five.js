function capitalize_words(str){
   let word=str.split(' ');
   let word2=[];
   for(let i=0;i<word.length;i++){
       word2.push(word[i].charAt(0).toUpperCase()+word[i].slice(1));
   }
   return word2.join(' ');

}
console.log(capitalize_words("hi from skillsanta"));