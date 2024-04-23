document.addEventListener('DOMContentLoaded', function() {
    var saveButton = document.getElementById('saveApiKey');

    saveButton.addEventListener('click', function() {
        var apiKey = document.getElementById('apiKeyInput').value;
        chrome.storage.sync.set({'apiKey': apiKey}, function() {
            console.log('API key saved');
        });
    });
});