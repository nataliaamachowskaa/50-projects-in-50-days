const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');

let currentActive =1;
next.addEventListener('click',() => 
{currentActive ++
    if(currentActive > circle.length){
        currentActive = circle.length;
    }
update()
})

prev.addEventListener('click',() => 
{currentActive --
    if(currentActive < 1){
        currentActive = 1;
    }
update()
})

function update(){

    circles.ForEach((circle, idx) => {

        if (idx < currentActive)
        {
            circle.classList.add('active')
        }else{
            circle.classList.remove('active';)
        }
    })

}