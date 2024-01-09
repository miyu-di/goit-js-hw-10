import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

let delayInput = document.querySelector('input[name="delay"]');
let delay = delayInput.value;

let inputState = document.querySelectorAll('input[name="state"]');
const selectedStateInput = Array.from(inputState).find(input => input.checked);

        if (!selectedStateInput) {
            iziToast.error({
                title: 'Error',
                message: 'Please select a state (Fulfilled or Rejected).',
                position: 'topRight',
            });
            return;
        }

        const state = selectedStateInput.value;

        const thePromise = new Promise((resolve, reject) => {
            if (state === 'fulfilled') {
                setTimeout(() => {
                    resolve();
                }, delay);
                } else {
                setTimeout(() => {
                    reject();
                }, delay);
                }
            form.reset();
            });
    
    try {
        const result = await thePromise;
        iziToast.success({
                title: 'OK',
                titleColor: '#fff',
                color: '#59A10D',
                message: `Fulfilled promise in ${delay}ms`,
                messageColor: '#fff',
                position: 'topRight',
            })

        } catch (error) {
        iziToast.error({
                title: 'Error',
                titleColor: '#fff',
                color: '#EF4040',
                message: `Rejected promise in ${delay}ms`,
                messageColor: '#fff',
                position: 'topRight',
            })
        } 

    });
});

