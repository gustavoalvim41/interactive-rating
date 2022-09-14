const btns = document.querySelectorAll('.btn');
const review = document.querySelector('.review');
const thank = document.querySelector('.thank-you');
const submit = document.querySelector('.btn-submit');
const selected = document.querySelector('.you-selected span');
let rating;

const clickButton = () => {
	for (let i = 0; i < btns.length; i++) {
		btns[i].classList.remove('active');
	}
	event.currentTarget.classList.add('active');
	rating = event.currentTarget.innerText
}

const confirmRating = () => {
	if (!rating) {
		alert("Don't forget to select a note!")
	} else {
		selected.innerText = rating;
		review.classList.add('invisible');
		thank.classList.remove('invisible');
	}
}

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', clickButton);
}

submit.addEventListener('click', confirmRating);