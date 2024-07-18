const editor = document.getElementById('editor');

// Load saved content from local storage
document.addEventListener('DOMContentLoaded', () => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
        editor.innerHTML = savedContent;
    }
});

// Save content to local storage on input
editor.addEventListener('input', () => {
    localStorage.setItem('editorContent', editor.innerHTML);
});