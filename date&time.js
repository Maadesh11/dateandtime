let now=new Date;
document.write(now.getFullYear(),'-');
document.write(now.getDate(),'-');
document.write(now.getMonth(),"<br>");
document.write(now.getHours(),"<br>");
document.write(now.getMinutes(),"<br>");
document.write(now.getSeconds(),"<br>");
document.write(now.getMilliseconds(),"<br>");
document.write(now.getTime(),"<br>");
document.write('how to modify the curret date time date year etc',"<br>");

(now.setHours(now.getHours()-6));
document.write(now,"<br>");
now.setDate(now.getDate()+7);
document.write(now,"<br>");
now.setFullYear(now.getFullYear()+5)
document.write(now,"<br>");
