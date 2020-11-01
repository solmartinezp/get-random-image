let width= document.getElementById('width');
let heigth= document.getElementById('height');
let button= document.getElementById('button');
let vacio= document.getElementById('vacio');
var activo= false; 

button.addEventListener('click', () => 
    {   
        let widthValue= width.value;
        let heightValue= height.value;
        if (!activo) {
            try { 
                if (widthValue != '' && heightValue != '') {   
                mostrarImg(widthValue, heightValue);
                } else {
                    throw new Error ('No ingresó ninguna medida');
                    }
                }  
                catch(err) {
                   alert(err);
                }
        } else { 
            borrar();
        }
});

width.addEventListener('focus', () => {
    if(activo) {
        borrar();
    }
});

height.addEventListener('focus', () => {
    if(activo) {
        borrar();
    }
});

let mostrarImg= (width, height) => {
    activo= true;
    let url= `https://picsum.photos/${width}/${height}`;
    fetch(url)
    .then((resp)=> {
        let src= resp.url;
        let link= document.createElement('a');
        link.setAttribute('href', src);
        link.setAttribute('target', '_blank');
        link.innerHTML= `<img src=${src} alt="Image"/>`;
        vacio.appendChild(link);
    })
    .catch(e=> console.log(e));
}

let borrar = () => { 
            let link= document.getElementsByTagName('a')[0];
            vacio.removeChild(link);
            activo= false;
        }