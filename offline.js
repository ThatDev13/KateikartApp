document.addEventListener('DOMContentLoaded', () => {
    const downloadButtons = document.querySelectorAll('.download-btn');

    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const topic = button.dataset.topic;
            downloadTopic(topic);
        });
    });

    function downloadTopic(topic) {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.controller.postMessage({
                action: 'cache-topic',
                topic: topic
            });
            alert(`Thema ${topic} wurde heruntergeladen und ist jetzt offline verfügbar.`);
        }
    }
});
