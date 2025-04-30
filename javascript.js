function getRecommendations() {
    const goal = document.getElementById("goal").value;
    const fitnessLevel = document.getElementById("fitnessLevel").value;
    const timeAvailable = document.getElementById("timeAvailable").value;
    const recommendationsDiv = document.getElementById("recommendations");
    const exerciseList = document.getElementById("exerciseList");

    // Clear previous recommendations
    exerciseList.innerHTML = "";

    let exercises = [];

    // Define recommendations based on the goal
    if (goal === "weightLoss") {
        exercises = ["Running", "HIIT", "Cycling", "Zumba", "Swimming", "Rowing"];
    } else if (goal === "muscleGain") {
        exercises = ["Weight Lifting", "Bodyweight Exercises", "Martial Arts", "Boxing", "Resistance Training"];
    } else if (goal === "mentalHealth") {
        exercises = ["Yoga", "Meditation", "Pilates", "Tai Chi", "Walking"];
    } else if (goal === "generalFitness") {
        exercises = ["Running", "Rowing", "Cycling", "Aerobics", "Swimming"];
    } else if (goal === "increaseEnergy") {
        exercises = ["Brisk Walking", "Jump Rope", "Dancing", "Cycling", "Running"];
    }

    // Tailor recommendations based on fitness level
    if (fitnessLevel === "beginner") {
        exercises = exercises.map(exercise => exercise + " (Beginner Friendly)");
    } else if (fitnessLevel === "intermediate") {
        exercises = exercises.map(exercise => exercise + " (Intermediate Level)");
    } else if (fitnessLevel === "advanced") {
        exercises = exercises.map(exercise => exercise + " (Advanced Level)");
    }

    // Adjust recommendations based on time available
    exercises = exercises.filter(exercise => {
        if (timeAvailable === "15" && exercise !== "Long-Distance Running" && exercise !== "Swimming") {
            return true; // Exercises fitting within 15 minutes
        } else if (timeAvailable === "30" && exercise !== "Long-Distance Running") {
            return true; // Exercises fitting within 30 minutes
        } else if (timeAvailable === "60") {
            return true; // All exercises fit for 60 minutes
        }
        return false;
    });

    // Show the recommendations
    exercises.forEach(exercise => {
        const listItem = document.createElement("li");
        listItem.textContent = exercise;
        exerciseList.appendChild(listItem);
    });

    recommendationsDiv.style.display = "block"; // Show the recommendations section
}
