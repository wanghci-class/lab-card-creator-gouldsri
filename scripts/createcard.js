document.addEventListener('DOMContentLoaded', function () {
    const previewBtn = document.getElementById('preview-btn');
    const saveBtn = document.getElementById('save-btn');
    const form = document.getElementById('card-form');

    previewBtn.addEventListener('click', function () {
        const title = document.getElementById('title').value;
        const subtitle = document.getElementById('subtitle').value;
        const to = document.getElementById('to').value;
        const from = document.getElementById('from').value;
        const message = document.getElementById('message').value;

        document.querySelector('.title-text').textContent = title;
        document.querySelector('.subtitle-text').textContent = subtitle;
        document.querySelector('.to-text').textContent = to;
        document.querySelector('.from-text').textContent = from;
        document.querySelector('.message-text').textContent = message;
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const cardData = {
            title: document.getElementById('title').value,
            subtitle: document.getElementById('subtitle').value,
            to: document.getElementById('to').value,
            from: document.getElementById('from').value,
            message: document.getElementById('message').value,
        };

        let cards = JSON.parse(localStorage.getItem('cards') || '[]');
        cards.push(cardData);
        localStorage.setItem('cards', JSON.stringify(cards));
    });
});
