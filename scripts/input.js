function onFormSubmit(word, button) {
    resultsDiv.innerHTML = "";
    globalWords = [];
    const createResults = async () => {
        let words = await generateWords(word.toLowerCase());
        displayResults(words)
    }
    createResults().then(r => {});
    button.disabled = true;
}