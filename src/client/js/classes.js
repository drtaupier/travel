export class UI{
    footer(){
        const today = new Date;
        const year = today.getFullYear();
        const footer = document.getElementById('footer');
        const element = document.createElement('div');
        element.classList.add('footerCopy');
        element.innerHTML = `<h3>Copyright &copy; David Rivera T. - ${year}</h3>`;
        footer.appendChild(element);
    }

    delete(){
        const resultados = document.getElementById('resultados');
        const boton = document.getElementById('send');
        boton.addEventListener('click', ()=>{
            const resultado = resultados.firstElementChild;
            if(resultado){
                resultado.remove();
            }
        })
    }

    showResults(newData){
        const temperature = Math.round((newData.weatherTemp * 9/5)+32); //Convierte de Celsius a F.
        const resultados = document.getElementById('resultados');
        const element = document.createElement('div');
        element.classList.add('showResults');
        element.innerHTML = `<p><img src='${newData.imageWeb}'></p>`;
        element.innerHTML += `<h2>Travel Planner</h2>`;
        element.innerHTML += `<p><b>My trip to:</b><br> <b>${newData.destination}, ${newData.country}</b></p>`;
        element.innerHTML += `<p><i class="fas fa-plane-departure"></i> ${newData.dateStart}</p>`;
        element.innerHTML += `<p><i class="fas fa-plane-arrival"></i> ${newData.dateFinish}</p>`;
        element.innerHTML += `<p>Your trip will be for <b>${newData.diferencia} days</b></p>`;
        element.innerHTML += `<p><b>Weather Forecast:</b> ${temperature} &#176;F </p>`;
        element.innerHTML += `<p>${newData.weatherDescription}</p><br>`;
        element.innerHTML += `<a href="#" name="delete">Delete</a>`;
        resultados.appendChild(element);
    }

    deleteResult(element){
        if(element.name === 'delete'){
            element.parentElement.remove();
        }
    }

    showMessage(mensaje){
        const resultados = document.getElementById('resultados');
        const element = document.createElement('div');
        element.classList.add('showMessage');
        element.innerHTML = `<p>${mensaje}</p>`;
        resultados.appendChild(element);
    }
}

