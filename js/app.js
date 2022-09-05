const loadQuran = async () => {
  const url = `http://api.alquran.cloud/v1/quran`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    showAllSurahName(data.data.surahs);
  } catch (error) {
    console.log(error);
  }
}
loadQuran();

const showAllSurahName = allSurahName => {
  // console.log(allSurahName);
  const quranContainer = document.getElementById('quran-container');
  allSurahName.forEach(surahName => {
    // console.log(surahName);
    const quranNameUl = document.createElement('ul');
    quranNameUl.classList.add('list-group');
    quranNameUl.classList.add('mb-2');
    quranNameUl.classList.add('list-group-horizontal');
    quranNameUl.innerHTML = `
            <li onclick="loadSurah(${surahName.number})" class="list-group-item" data-bs-toggle="modal" data-bs-target="#exampleModal">${surahName.number}. ${surahName.englishName}</li>
            <li class="list-group-item">${surahName.englishNameTranslation}</li>
            <li class="list-group-item">${surahName.name}</li>
    `;
    quranContainer.appendChild(quranNameUl);
  });
}

const loadSurah = async (id) => {
  const url = `http://api.alquran.cloud/v1/surah/${id}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    showSurah(data.data.ayahs);
  } catch (error) {
    console.log(error);
  }
}
const showSurah = surahs => {
  const surahField = document.getElementById('surah-field');
  surahField.textContent = '';
  surahs.forEach(surah => {
    console.log(surah);
    const li = document.createElement('li');
    li.innerText = surah.text;
    surahField.appendChild(li);
  });

}