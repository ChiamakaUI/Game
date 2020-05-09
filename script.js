document.addEventListener('DOMContentLoaded', ()=>{
    const section = document.querySelectorAll('.section');
    const next = document.querySelector('#next');
    const scoreBoard = document.querySelector('#score');
    next.setAttribute('disabled', 'true');
    next.style.backgroundColor = '#555'
    section[0].style.display = 'block';

    var score = 0;

    scoreBoard.textContent = score;

    next.addEventListener('click', ()=>{
        
    })

    section.forEach((section)=>{
        var form = section.children[1];

        for(let i=0; i < form.elements.length;i++){
            form.elements[i].addEventListener('click', ()=>{
                if(form.elements[i].getAttribute('name') == '1'){
                    if(form.elements[i].value == 'm'){
                        form.elements[i].nextSibling.nextSibling.style.backgroundColor = '#31da4d';
                        form.elements[i].nextSibling.nextSibling.style.color = 'white';
                        score = score + 1;
                        scoreBoard.textContent = score;
                        next.setAttribute('disabled', 'false');

                    } else if(form.elements[i].value == 'g') {
                        form.elements[i].nextSibling.nextSibling.style.backgroundColor = '#e21313';
                        form.elements[i].nextSibling.nextSibling.style.color = 'white';

                        form.elements[i].previousSibling.previousSibling.previousSibling.style.backgroundColor = '#31da4d';
                        form.elements[i].previousSibling.previousSibling.previousSibling.style.color = 'white';
                        next.setAttribute('disabled', 'false');

                    } else {
                        form.elements[i].nextSibling.nextSibling.style.backgroundColor = '#e21313';
                        form.elements[i].nextSibling.nextSibling.style.color = 'white';

                        form.elements[i].previousSibling.previousSibling.previousSibling.
                        previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.style.backgroundColor = '#31da4d';

                        form.elements[i].previousSibling.previousSibling.previousSibling.
                        previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.style.color = 'white';
                        next.setAttribute('disabled', 'false');
                        
                    }
                } else if(form.elements[i].getAttribute('name') == '2') {
                    if(form.elements[i].value == 'f'){
                        form.elements[i].nextSibling.nextSibling.style.backgroundColor = '#31da4d';
                        form.elements[i].nextSibling.nextSibling.style.color = 'white';
                        score = score + 1;
                        scoreBoard.textContent = score;

                    } else if(form.elements[i].value == 'l') {
                        form.elements[i].nextSibling.nextSibling.style.backgroundColor = '#e21313';
                        form.elements[i].nextSibling.nextSibling.style.color = 'white';

                        form.elements[i].previousSibling.previousSibling.previousSibling.style.backgroundColor = '#31da4d';
                        form.elements[i].previousSibling.previousSibling.previousSibling.style.color = 'white';

                    } else {
                        form.elements[i].nextSibling.nextSibling.style.backgroundColor = '#e21313';
                        form.elements[i].nextSibling.nextSibling.style.color = 'white';

                        form.elements[i].previousSibling.previousSibling.previousSibling.
                        previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.style.backgroundColor = '#31da4d';

                        form.elements[i].previousSibling.previousSibling.previousSibling.
                        previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.style.color = 'white';
                        
                    }
                } else if(form.elements[i].getAttribute('name') == '3'){
                    if(form.elements[i].value == '6'){
                        form.elements[i].nextSibling.nextSibling.style.backgroundColor = '#31da4d';
                        form.elements[i].nextSibling.nextSibling.style.color = 'white';
                        score = score + 1;
                        scoreBoard.textContent = score;

                    } else if(form.elements[i].value == 'l0') {
                        form.elements[i].nextSibling.nextSibling.style.backgroundColor = '#e21313';
                        form.elements[i].nextSibling.nextSibling.style.color = 'white';

                        form.elements[i].previousSibling.previousSibling.previousSibling.style.backgroundColor = '#31da4d';
                        form.elements[i].previousSibling.previousSibling.previousSibling.style.color = 'white';

                    } else {
                        form.elements[i].nextSibling.nextSibling.style.backgroundColor = '#e21313';
                        form.elements[i].nextSibling.nextSibling.style.color = 'white';

                        form.elements[i].previousSibling.previousSibling.previousSibling.
                        previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.style.backgroundColor = '#31da4d';

                        form.elements[i].previousSibling.previousSibling.previousSibling.
                        previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.style.color = 'white';
                        
                    }
                } else if(form.elements[i].getAttribute('name') == '4'){
                    if(form.elements[i].value == 'm'){
                        form.elements[i].nextSibling.nextSibling.style.backgroundColor = '#31da4d';
                        form.elements[i].nextSibling.nextSibling.style.color = 'white';
                        score = score + 1;
                        scoreBoard.textContent = score;

                    } else if(form.elements[i].value == 'r') {
                        form.elements[i].nextSibling.nextSibling.style.backgroundColor = '#e21313';
                        form.elements[i].nextSibling.nextSibling.style.color = 'white';

                        form.elements[i].previousSibling.previousSibling.previousSibling.style.backgroundColor = '#31da4d';
                        form.elements[i].previousSibling.previousSibling.previousSibling.style.color = 'white';

                    } else {
                        form.elements[i].nextSibling.nextSibling.style.backgroundColor = '#e21313';
                        form.elements[i].nextSibling.nextSibling.style.color = 'white';

                        form.elements[i].previousSibling.previousSibling.previousSibling.
                        previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.style.backgroundColor = '#31da4d';

                        form.elements[i].previousSibling.previousSibling.previousSibling.
                        previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.style.color = 'white';
                        
                    }
                } else {
                    if(form.elements[i].value == 'u'){
                        form.elements[i].nextSibling.nextSibling.style.backgroundColor = '#31da4d';
                        form.elements[i].nextSibling.nextSibling.style.color = 'white';
                        score = score + 1;
                        scoreBoard.textContent = score;

                    } else if(form.elements[i].value == 'e') {
                        form.elements[i].nextSibling.nextSibling.style.backgroundColor = '#e21313';
                        form.elements[i].nextSibling.nextSibling.style.color = 'white';

                        form.elements[i].previousSibling.previousSibling.previousSibling.style.backgroundColor = '#31da4d';
                        form.elements[i].previousSibling.previousSibling.previousSibling.style.color = 'white';

                    } else {
                        form.elements[i].nextSibling.nextSibling.style.backgroundColor = '#e21313';
                        form.elements[i].nextSibling.nextSibling.style.color = 'white';

                        form.elements[i].previousSibling.previousSibling.previousSibling.
                        previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.style.backgroundColor = '#31da4d';

                        form.elements[i].previousSibling.previousSibling.previousSibling.
                        previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.style.color = 'white';
                        
                    }
                }
            })
        }
    });

});
