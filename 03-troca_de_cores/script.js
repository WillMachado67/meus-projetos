


document.getElementById("save").onclick = function() {
    const element = document.querySelector('body');
    const text = document.querySelector('p');
    const color = document.getElementsByName('color');
    
    for (let i = 0; i < color.length; i++) {   
        if (color[i].checked) {
             element.removeAttribute('class')
            element.classList.add(color[i].value);
            text.innerText = `You selected color ${color[i].value}`;   
        } 
    }
};