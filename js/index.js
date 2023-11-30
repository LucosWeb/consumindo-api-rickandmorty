const characterId = document.getElementById('characterId');
const BtnGO = document.getElementById('BtnGO');
const content = document.getElementById('content');
const img = document.getElementById('img');

const fetchApi = (value) => {
const url = ('https://rickandmortyapi.com/api');
const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
.then((res) => res.json())
.then((data) => {
    console.log(data);
    return data;
});
return result;
}
fetchApi(700);
BtnGO.addEventListener('click', async (event) => {
event.preventDefault();
const result = await fetchApi(characterId.value);
content.textContent = `${JSON.stringify(result, undefined, 2)}`;
img.src = `${result.image}`;
});


