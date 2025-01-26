function toggleRightDiv() {
    const rightDiv = document.getElementById('rightDiv');
    rightDiv.classList.toggle('open');
}

function toggleLeftDiv() {
    const middleDiv = document.getElementById('middleDiv');
    middleDiv.classList.toggle('open');
    showLeftDivContents();
}

function showLeftDivContents() {
    const search = document.querySelector('.left .search');
    const buttons = document.querySelector('.left .buttons');
    const people = document.querySelectorAll('.left .people');
    const back = document.querySelector('.back-arrow');
    back.style.display = 'none';
    search.style.display = 'flex';
    buttons.style.display = 'flex';
    people.forEach(person => {
        person.style.display = 'flex';
    });
}