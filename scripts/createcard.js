document.addEventListener('DOMContentLoaded', function() {
    const previewButton = document.getElementById('preview-btn');
    const saveButton = document.getElementById('save-btn');

    previewButton.addEventListener('click', function() {
        document.querySelector('.title-text').textContent = document.getElementById('title').value;
        document.querySelector('.subtitle-text').textContent = document.getElementById('subtitle').value;
        document.querySelector('.to-text').textContent = document.getElementById('to').value;
        document.querySelector('.message-text').textContent = document.getElementById('message').value;
        document.querySelector('.from-text').textContent = document.getElementById('from').value;
    });

    saveButton.addEventListener('click', function(event) {
        event.preventDefault();
        let cards = JSON.parse(localStorage.getItem('cards')) || [];

        const card = {
            title: document.getElementById('title').value,
            subtitle: document.getElementById('subtitle').value,
            to: document.getElementById('to').value,
            from: document.getElementById('from').value,
            message: document.getElementById('message').value
        };

        cards.push(card);
        localStorage.setItem('cards', JSON.stringify(cards));
    });
});
