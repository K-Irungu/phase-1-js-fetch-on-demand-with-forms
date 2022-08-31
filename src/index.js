const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (e) => {//this callback function will be abstracted?
        e.preventDefault();
        // console.log(e);
        // console.log(e.target.children[1].value);
        const input = document.querySelector('input#searchByID');
        console.log(input.value);

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        // .then(data => {
        //     console.log(data); At this pint, we have a JS object
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            
            title.innerText = data.title; //how  we access the keys ofthe json
            summary.innerText = data.summary;
        })


        });
    };

  


document.addEventListener('DOMContentLoaded', init);