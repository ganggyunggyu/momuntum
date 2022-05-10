const age = parseInt(prompt("너 몇살이야!"));

if(isNaN(age)) {
    alert("나이를 똑바로 입력해줘잉");
}else if(age<20){
    alert("음주 금지!");
}else if(age>19 & age<50){
    alert("음주 허락!");
}else if(age>49){
    alert("건강을 생각해요 가족을 생각해요...");
}