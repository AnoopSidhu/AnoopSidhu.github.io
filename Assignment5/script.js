const container = document.getElementById("characterContainer");
const searchInput = document.getElementById("searchInput");
const viewAllBtn = document.getElementById("viewAllBtn");
const modal = document.getElementById("characterModal");
const modalDetails = document.getElementById("modalDetails");
const closeModal = document.querySelector(".close");
let showingAll = false;
const randomCharacterBtn = document.getElementById("randomCharacterBtn");

function displayCharacters(characterList, showFull = true) {
  container.innerHTML = "";
  container.classList.remove("grid-view");

  if (characterList.length === 0) {
    container.innerHTML = "<p>No characters found.</p>";
    return;
  }

  if (!showFull) {
    container.classList.add("grid-view");
    characterList.forEach(character => {
      const card = document.createElement("div");
      card.className = "character-image-only";
      card.innerHTML = `<img src="${character.image}" alt="${character.name}" title="${character.name}" />`;

      card.addEventListener("click", () => showCharacterModal(character));

      container.appendChild(card);
    });
  } else {
    characterList.forEach(character => {
      const card = document.createElement("div");
      card.className = "character-card detailed"; 

      card.innerHTML = `
        <img src="${character.image}" alt="${character.name}" />
        <div class="character-info">
          <h2>${character.name}</h2>
          <p><strong>Series:</strong> ${character.series}</p>
          <p><strong>Traits:</strong> ${character.traits.join(", ")}</p>
          <blockquote>"${character.quote}"</blockquote>
        </div>
      `;

      container.appendChild(card);
    });
  }  
  container.classList.remove("hidden");
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase().trim();

  if (keyword === "") {
    container.classList.add("hidden");
    viewAllBtn.textContent = "View All Characters";
    showingAll = false;
    return;
  }

  const filtered = characters.filter(character =>
    character.name.toLowerCase().includes(keyword) ||
    character.series.toLowerCase().includes(keyword) ||
    character.traits.some(trait => trait.toLowerCase().includes(keyword))
  );

  displayCharacters(filtered, false); 
  viewAllBtn.textContent = "Back";
  showingAll = true;
});

viewAllBtn.addEventListener("click", () => {
  if (!showingAll) {
    displayCharacters(characters, false); 
    viewAllBtn.textContent = "Back";
    showingAll = true;
  } else {
    container.classList.add("hidden"); 
    container.innerHTML = ""; 
    searchInput.value = ""; 
    viewAllBtn.textContent = "View All Characters";
    showingAll = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// The viewall btn is my fav line of code because I learned how to show all the characters without having to load another page. I also learned how to create a randomize button which I thought was really cool since I've never done that before. 

function showCharacterModal(character) {
  modalDetails.innerHTML = `
    <img src="${character.image}" alt="${character.name}" style="width: 100%; border-radius: 8px;" />
    <h2>${character.name}</h2>
    <p><strong>Series:</strong> ${character.series}</p>
    <p><strong>Traits:</strong> ${character.traits.join(", ")}</p>
    <blockquote>"${character.quote}"</blockquote>
  `;
  modal.classList.remove("hidden");
}


closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});


modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

function getRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * characters.length); 
  const randomCharacter = characters[randomIndex]; 
  showCharacterModal(randomCharacter); 
}

randomCharacterBtn.addEventListener("click", getRandomCharacter);