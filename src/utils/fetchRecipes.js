export const fetchRecipes = async (phase) => {
  try {
    const response = await fetch(`/api/recipes?phase=${phase}`);
    if (!response.ok) throw new Error("Failed to fetch recipes");
    return await response.json();
  } catch (error) {
    console.error("Error fetching recipes:", error.message);
    return [];
  }
};
