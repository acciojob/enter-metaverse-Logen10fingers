const statusParagraph = document.getElementById('status');
const enterButton = document.getElementById('enterBtn');


enterButton.addEventListener('click', () => {
    statusParagraph.innerHTML = '<h1>Entered Metaverse</h1>';
});