document.addEventListener("DOMContentLoaded", function () {
  let onlineVisitors = JSON.parse(localStorage.getItem("onlineVisitors")) || [];

  // Check if a visitor is logged in
  if (onlineVisitors.length > 0) {
    let visitor = onlineVisitors[0]; // Assuming only one visitor is logged in

    // Update the visitor's name and coins in the navigation menu
    let visitorInfo = document.getElementById("visitor-info");
    visitorInfo.innerHTML = `${visitor.visitorName} - Coins: ${visitor.coins}`;
  }
  const visitorSelect = document.getElementById("visitor-select");

  // Retrieve visitors data from local storage
  const visitors = JSON.parse(localStorage.getItem("visitors")) || [];

  // Add options for each visitor
  visitors.forEach((visitor) => {
    const option = document.createElement("option");
    option.value = visitor.name; // Set the visitor's name as the option value
    option.textContent = visitor.name; // Set the visitor's name as the option text
    visitorSelect.appendChild(option); // Append the option to the select element
  });
  const resetButton = document.getElementById("reset-button");
  if (resetButton) {
    resetButton.addEventListener("click", function () {
      // Clear all local storage data
      localStorage.clear();
      // Redirect to the home page or any other desired page
      window.location.href = "/login.html";
    });
  }

  showVisitedAnimals();
  showFeededAnimals();
  showFavoriteAnimal();
  function showVisitedAnimals() {
    // Retrieve online visitors from local storage
    let onlineVisitors =
      JSON.parse(localStorage.getItem("onlineVisitors")) || [];

    // Check if there is a visitor logged in
    if (onlineVisitors.length === 0) {
      console.log("No visitor is logged in.");
      return; // Exit the function if no visitor is logged in
    }

    // Assuming only one visitor is logged in
    let visitor = onlineVisitors[0];

    // Access the visitedAnimals array of the logged-in visitor
    let visitedAnimals = visitor.visitedAnimals || [];

    // Display the visited animals on the dashboard
    let visitedAnimalsDiv = document.getElementById("visited-animals");
    visitedAnimalsDiv.innerHTML = ""; // Clear previous content

    // Update the headline with the visitor's name
    let headline = document.createElement("h2");
    headline.textContent = "Visited animals of " + visitor.visitorName;
    visitedAnimalsDiv.appendChild(headline);

    if (visitedAnimals.length === 0) {
      let message = document.createElement("p");
      message.textContent = "No animals visited yet.";
      visitedAnimalsDiv.appendChild(message);
    } else {
      visitedAnimals.forEach((animal) => {
        let animalElement = document.createElement("div");
        animalElement.textContent = animal.name; // Display the name of the visited animal
        visitedAnimalsDiv.appendChild(animalElement);
      });
    }
  }

  function showFeededAnimals() {
    //ממשו את הלוגיקה שמציגה את החיות שהאורח הנוכחי האכיל אותן
    let onlineVisitors =
      JSON.parse(localStorage.getItem("onlineVisitors")) || [];

    // Check if there is a visitor logged in
    if (onlineVisitors.length === 0) {
      console.log("No visitor is logged in.");
      return; // Exit the function if no visitor is logged in
    }

    // Assuming only one visitor is logged in
    let visitor = onlineVisitors[0];

    // Access the fedAnimals array of the logged-in visitor
    let fedAnimals = visitor.feededAnimals || [];

    // Display the fed animals on the dashboard
    let fedAnimalsDiv = document.getElementById("feeded-animals");
    fedAnimalsDiv.innerHTML = ""; // Clear previous content

    // Update the headline with the visitor's name
    let headline = document.createElement("h2");
    headline.textContent = "Fed animals of " + visitor.visitorName;
    fedAnimalsDiv.appendChild(headline);

    if (fedAnimals.length === 0) {
      let message = document.createElement("p");
      message.textContent = "No animals fed yet.";
      fedAnimalsDiv.appendChild(message);
    } else {
      fedAnimals.forEach((animal) => {
        let animalElement = document.createElement("div");
        animalElement.textContent = animal.name; // Display the name of the fed animal
        fedAnimalsDiv.appendChild(animalElement);
      });
    }
  }

  function showFavoriteAnimal() {
    // Retrieve online visitors from local storage
    let onlineVisitors =
      JSON.parse(localStorage.getItem("onlineVisitors")) || [];

    // Check if there is a visitor logged in
    if (onlineVisitors.length === 0) {
      console.log("No visitor is logged in.");
      return; // Exit the function if no visitor is logged in
    }

    // Assuming only one visitor is logged in
    let visitor = onlineVisitors[0];

    // Access the visitedAnimals array of the logged-in visitor
    let visitedAnimals = visitor.visitedAnimals || [];

    // Count occurrences of each animal
    let animalCounts = {};
    visitedAnimals.forEach((animal) => {
      animalCounts[animal.name] = (animalCounts[animal.name] || 0) + 1;
    });

    // Find the animal with the maximum occurrences
    let favoriteAnimal = null;
    let maxCount = 0;
    for (let animalName in animalCounts) {
      if (animalCounts[animalName] > maxCount) {
        maxCount = animalCounts[animalName];
        favoriteAnimal = animalName;
      }
    }

    // Display the favorite animal on the dashboard
    let favoriteAnimalDiv = document.getElementById("favorite-animal");
    favoriteAnimalDiv.innerHTML = ""; // Clear previous content
    let headline = document.createElement("h2");
    headline.textContent = "Favorite Animal of " + visitor.visitorName;
    favoriteAnimalDiv.appendChild(headline);
    if (favoriteAnimal) {
      let favoriteAnimalElement = document.createElement("div");
      favoriteAnimalElement.textContent = favoriteAnimal;
      favoriteAnimalDiv.appendChild(favoriteAnimalElement);
    } else {
      let message = document.createElement("p");
      message.textContent = "No favorite animal found.";
      favoriteAnimalDiv.appendChild(message);
    }
  }
});
