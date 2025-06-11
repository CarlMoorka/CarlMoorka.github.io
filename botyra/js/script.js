document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                preloader.classList.add('hidden');
                setTimeout(function() {
                    preloader.style.display = 'none';
                }, 500);
            }
        }, 1000);
    });


    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });


    const copyBtn = document.querySelector('.copy-btn');
    const passwordText = document.querySelector('.password-value');
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(passwordText.textContent).then(() => {
            console.log('Password copy!');  // Это как затычка пусть будет, похуй, любовью Сыщик
        });
    });
});