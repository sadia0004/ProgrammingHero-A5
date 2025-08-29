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

// Copy Button Logic
document.addEventListener('DOMContentLoaded', function () {
    const copyButtons = document.querySelectorAll('.card button'); 
    const copyCounter = document.querySelector('#copy-btn .counter'); 
    let copyCount = parseInt(copyCounter.textContent); 

    // Event listener for each copy button
    copyButtons.forEach(button => {
        if (button.querySelector('i') && button.querySelector('i').classList.contains('fa-copy')) { 
            button.addEventListener('click', function () {
                const card = this.closest('.card'); 
                const serviceNumber = card.querySelector('.service-nmbr').textContent; 
                const tempInput = document.createElement('input');
                tempInput.value = serviceNumber;  
                document.body.appendChild(tempInput);  
                tempInput.select();
                tempInput.setSelectionRange(0, 99999); 

                document.execCommand('copy');

           
                document.body.removeChild(tempInput);

                alert(`Emergency number saved: ${serviceNumber}`);

                copyCount++;
                copyCounter.textContent = copyCount; 
            });
        }
    });
});

