const baseURL=('http://localhost:3000/films')


document.addEventListener("DOMContentLoaded", () =>{

    fetch(`${baseURL}`)
    .then ((response) => response.json)
    .then(data => {
        const poster ="https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
        const title="The Giant Gila Monster"
        const runtime= '108'
        const showtime="04:00PM"
        let availableTickets=3
        const description="A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature."


        document.getElementById('poster').src=poster;
        document.getElementById('title').textContent =title;
        document.getElementById('runtime').textContent = runtime;
        document.getElementById('showtime').textContent=showtime;
        document.getElementById('ticket-num').textContent= availableTickets;
        document.getElementById('film-info').textContent=description;
    })
       })


fetch(`${baseURL}`)
.then(response => response.json())
.then(films => {
   const filmsContainer = document.querySelector('#films');
   films.forEach(film => {
     const listItem = document.createElement('li');
     listItem.textContent = film.title;
     listItem.classList.add('film', 'item');
     filmsContainer.appendChild(listItem);
   });
})
.catch(error => console.error('Error fetching film data:', error));

const placeholderLi = filmsContainer.querySelector('ul');
if (placeholderLi) {
 filmsContainer.removeChild(placeholderLi);
}
    

document.addEventListener('DOMContentLoaded', () => {
    const ticketQuantity =3; 
    const ticketsAvailable = document.getElementById('ticket-num');
    const buyTicketButton = document.getElementById('buy-ticket');

    buyTicketButton.addEventListener('click', () => {
        if (ticketQuantity > 0) {
            ticketsAvailable.textContent = `${ticketQuantity -1 }`;
        } else {
            alert('Sorry, this showing is sold out.');
        }
    });
});
    