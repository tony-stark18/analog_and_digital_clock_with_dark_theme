sec=document.getElementById('sec');
min=document.getElementById('min');
hr=document.getElementById('hr');
tgl=document.getElementById('tgl');
ctr=document.getElementById('cntnr');
tggle=document.getElementById('tggle');
clck=document.getElementById('clck');
let e=0;
tgl.addEventListener("click",function(){
    if (e%2==0){
        ctr.style.backgroundColor='#25252D';
        tgl.innerHTML='light_mode';
        tggle.style.backgroundColor='#25252D';
        tggle.classList.add('dark_theme');
        clck.style.backgroundColor='#25252D';
        clck.classList.add('dark_theme');
        document.getElementsByClassName('hour')[0].style.backgroundColor='#ECECF3';
        document.getElementsByClassName('minute')[0].style.backgroundColor='#ECECF3';
        document.getElementsByClassName('digital')[0].style.color='#ECECF3';
        document.getElementsByClassName('digital-small')[0].style.color='#ECECF3';
    }
    else
    {
        ctr.style.backgroundColor='#ECECF3';
        tggle.style.backgroundColor='#ECECF3';
        tggle.classList.remove('dark_theme');
        clck.classList.remove('dark_theme');
        clck.style.backgroundColor='#ECECF3';
        document.getElementsByClassName('hour')[0].style.backgroundColor='#25252D';
        document.getElementsByClassName('minute')[0].style.backgroundColor='#25252D';
        document.getElementsByClassName('digital')[0].style.color='#1a1a4a';
        document.getElementsByClassName('digital-small')[0].style.color='#1a1a4a';
        tgl.innerHTML='dark_mode';
    }
    e++;
})
let d=new Date();
let s=d.getSeconds();
let m=d.getMinutes();
let h=d.getHours();
min.style.transform = "rotate("+(180+(m*6)+s*(1/10))+"deg)";
hr.style.transform = "rotate("+(180+(h*30)+m*(1/2))+"deg)";
sec.style.transform = "rotate("+(180+(s)*6)+"deg)";
setInterval(update,1000)
setInterval(rotate,1000)
function rotate() 
{
    if(s==60)
    {
        if (m==60)
        {
            min.style.transform = "rotate("+(180+m*6)+"deg)";
            h++;
            hr.style.transform = "rotate("+(180+h*30)+"deg)";
            m=0;
        }
        sec.style.transform = "rotate("+(180+(s)*6)+"deg)";
        m++;
        min.style.transform = "rotate("+(180+m*6)+"deg)";
        hr.style.transform = "rotate("+(180+(h*30)+m*(1/2))+"deg)";

        s=0;
    }
    sec.style.transform = "rotate("+(180+(s)*6)+"deg)";
    min.style.transform = "rotate("+(180+(m*6)+s*(1/10))+"deg)";
    s++;
}
month=["Jan","Febr","March","April","May","June","July","August","Sept","Oct","Nov","Dec"]

function update() 
{
   document.getElementsByClassName("d-hr")[0].innerHTML = h; 
   document.getElementsByClassName("d-min")[0].innerHTML = m; 
   document.getElementsByClassName("d-sec")[0].innerHTML = s; 
   document.getElementsByClassName("d-dt")[0].innerHTML = d.getDate();
   document.getElementsByClassName("d-mnth")[0].innerHTML = month[d.getMonth()];
   document.getElementsByClassName("d-yr")[0].innerHTML = d.getFullYear();
}