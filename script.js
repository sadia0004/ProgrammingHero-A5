document.addEventListener('DOMContentLoaded', function () {
    // Favorite Button Logic
    const favoriteButtons = document.querySelectorAll('.fa-regular.fa-heart');
    const bannerFavoriteCounter = document.querySelector('#heart-btn .counter');

    let favoriteCount = 0;

    favoriteButtons.forEach(button => {
        button.addEventListener('click', function () {
            favoriteCount++;
            bannerFavoriteCounter.textContent = favoriteCount;
            this.classList.add('fa-solid');
            this.classList.remove('fa-regular');
        });
    });

    // Copy Button Logic
    const copyButtons = document.querySelectorAll('.card button');
    const copyCounter = document.querySelector('#copy-btn .counter');
    let copyCount = parseInt(copyCounter?.textContent) || 0;

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

                alert(`Copied service number: ${serviceNumber}`);

                copyCount++;
                copyCounter.textContent = copyCount;
            });
        }
    });

    // Dial Button Logic
    const dialButtons = document.querySelectorAll('.call-btn');
    const coinCounter = document.querySelector('#coin-btn .counter');
    const historyContainer = document.getElementById('history-items');

    let coins = parseInt(coinCounter?.textContent) || 100;

    dialButtons.forEach(button => {
        button.addEventListener('click', function () {

            const card = this.closest('.card');
            const serviceName = card.querySelector('h3').textContent;
            const serviceNumber = card.querySelector('.service-nmbr').textContent;

            if (coins < 20) {
                alert("You don't have enough coins to make this call.");
                return;
            }

            coins -= 20;
            coinCounter.textContent = coins;
            alert(`Calling ${serviceName} at ${serviceNumber}`);
            let now = new Date();
            let currentDate = now.toLocaleString();
            if (historyContainer) {
                const historyItem = document.createElement('p');
                historyItem.textContent = `${serviceName} - ${serviceNumber} - ${currentDate}`;
                historyContainer.appendChild(historyItem);
            }
        });
    });

   
});