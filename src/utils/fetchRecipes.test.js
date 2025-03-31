import { fetchRecipes } from "./fetchRecipes";
import { vi } from "vitest";

global.fetch = vi.fn();

describe("fetchRecipes", () => {
  it("fetches recipes based on phase", async () => {
    const mockData = [{ id: 1, name: "Smoothie" }];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const recipes = await fetchRecipes("follicular");
    expect(fetch).toHaveBeenCalledWith("/api/recipes?phase=follicular");
    expect(recipes).toEqual(mockData);
  });

  it("returns an empty array if fetch fails", async () => {
    fetch.mockResolvedValueOnce({ ok: false });
    const recipes = await fetchRecipes("luteal");
    expect(recipes).toEqual([]);
  });
});
