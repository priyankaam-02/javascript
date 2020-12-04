function protect_email(user_email){
    let sp,avg,email1,email2;
    sp=user_email.split("@");
    email1 =sp[0];
    avg = email1.length/2;
    email1 = email1.substring(0,(email1.length-avg));
    email2 = sp[1];
    return email1 + "...@" + email2;

}
console.log(protect_email("eddygrant@example.com"));
document.write(protect_email("eddygrant@example.com"));