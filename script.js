score=0;
cross=true;
music=false;
gameover=false;
audio=new Audio('r2.mp3');
audio1=new Audio('r1.mp3');
document.getElementById('music').addEventListener('click',()=>{
    if(!music)
    {
        music=true;
        audio.currentTime=0;
        audio.play();
    }
    else
    {
        music=false;
        audio.pause();
    }
})
document.getElementById('start').addEventListener('click',()=>{
    if(music && gameover)
    {
        audio1.pause();
        audio1.currentTime=0;
        audio.currentTime=0;
        audio.play();
    }
    document.querySelector('.gametext').innerHTML='';
    document.getElementById('dino').classList.add('dinoani');
    document.getElementById('obs').classList.add('obsani');
    setTimeout(() => {
        document.getElementById('dino').classList.remove('dinoani');
    }, 1000);
})
document.getElementById('quit').addEventListener('click',()=>{
    document.getElementById('dino').classList.remove('dinoani');
    document.getElementById('obs').classList.remove('obsani');
    ale=confirm('Are you sure you want to exit? ');
    if(ale)
    {
        window.close();
    }
})
document.onkeydown=function(e){
    if(e.key=='ArrowUp')
    {
        if(music && gameover)
        {
            audio1.pause();
            audio1.currentTime=0;
            audio.currentTime=0;
            audio.play();
        }
        document.querySelector('.gametext').innerHTML='';
        document.getElementById('dino').classList.add('dinoani');
        document.getElementById('obs').classList.add('obsani');
        setTimeout(() => {
            document.getElementById('dino').classList.remove('dinoani');
        }, 1000);
    }

    if(e.key=='ArrowRight')
    {
        if(music && gameover)
        {
            audio1.pause();
            audio1.currentTime=0;
            audio.currentTime=0;
            audio.play();
        }
        document.querySelector('.gametext').innerHTML='';
        dino=document.getElementById('dino');
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dinox+50)+"px";
        document.getElementById('obs').classList.add('obsani');
    }
    if(e.key=='ArrowLeft')
    {
        if(music && gameover)
        {
            audio1.pause();
            audio1.currentTime=0;
            audio.currentTime=0;
            audio.play();
        }
        document.querySelector('.gametext').innerHTML='';
        dino=document.getElementById('dino');
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dinox-50)+"px";
        document.getElementById('obs').classList.add('obsani');
    }
}
setInterval(() => {
    dino=document.getElementById('dino');
    obs=document.getElementById('obs');
    gametext=document.querySelector('.gametext');
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    ox=parseInt(window.getComputedStyle(obs,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    oy=parseInt(window.getComputedStyle(obs,null).getPropertyValue('top'));
    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);
    if(offsetx<120 && offsety<50)
    {
        cross=false;
        gameover=true;
        gametext.innerText=`GameOver\n Your Score: ${score}`;
        obs.classList.remove('obsani');
        if(music)
        {
            audio.pause();
            audio1.play();
            setTimeout(() => {
                audio1.pause();
            }, 4000);
        }
        cross=true;
        score=0;
        update_score(score);
    }
    else if(offsetx<100 && cross)
    {
        score+=1;
        update_score(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
        setTimeout(() => {
            newdur=parseFloat(window.getComputedStyle(obs,null).getPropertyValue('animation-duration'));
            obs.style.animationDuration=newdur-0.2 +'s';
        }, 20);
    }
}, 10);
function update_score(score)
{
    document.querySelector('.score').innerText=`Score: ${score}`;
}