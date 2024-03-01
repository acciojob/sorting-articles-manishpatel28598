//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function stripArticles(bandName) {
  // Regular expression to match and remove articles at the beginning of the string, case-insensitive
  return bandName.replace(/^([a|an|the ]+)(.*)/i, '$2');
}

function sortBands(bands) {
  // Sort the bands array based on the stripped names, ignoring articles
  return bands.sort((a, b) => {
    const strippedA = stripArticles(a);
    const strippedB = stripArticles(b);
    return strippedA.localeCompare(strippedB);
  });
}

const sortedBands = sortBands(bands);

const bandList = document.getElementById('band');

sortedBands.forEach(band => {
  const listItem = document.createElement('li');
	listItem.className = "listItem";
  listItem.textContent = band;
  bandList.appendChild(listItem);
});