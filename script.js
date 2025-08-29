// Heart Button Logic
document.addEventListener('DOMContentLoaded', function () {
    const heartButtons = document.querySelectorAll('.fa-regular.fa-heart');
    const bannerHeartCounter = document.querySelector('#heart-btn .counter');
    let heartCounter = 0;

    heartButtons.forEach(button => {
        button.addEventListener('click', function () {
            heartCounter++;
            bannerHeartCounter.textContent = heartCounter;
            this.classList.add('fa-solid');
            this.classList.remove('fa-regular');
        });
    });
});

