async function searchWord() {
    let word = document.getElementById("wordInput").value;

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Loading...";

    try {
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        let data = await response.json();

        let meaning = data[0].meanings[0].definitions[0].definition;
        let example = data[0].meanings[0].definitions[0].example || "No example available";
        let phonetic = data[0].phonetic || "N/A";

        resultDiv.innerHTML = `
            <h2>${word}</h2>
            <p><b>Meaning:</b> ${meaning}</p>
            <p><b>Example:</b> ${example}</p>
            <p><b>Pronunciation:</b> ${phonetic}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = "Word not found!";
    }
}