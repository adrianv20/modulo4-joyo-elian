import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Favorites from "../src/components/Favorites";

const mockMovies = [
  {
    imdbID: "tt0372784",
    Title: "Batman Begins",
    Year: "2005",
    Type: "movie",
    Poster: "https://example.com/poster1.jpg",
  },
  {
    imdbID: "tt0468569",
    Title: "The Dark Knight",
    Year: "2008",
    Type: "movie",
    Poster: "https://example.com/poster2.jpg",
  },
];

describe("Favorites", () => {
  it("muestra el mensaje de lista vacía cuando no hay favoritos", () => {
    const mockOnToggleFavorite = vi.fn();
    render(
      <Favorites favorites={[]} onToggleFavorite={mockOnToggleFavorite} />
    );

    expect(screen.getByText("Mis Películas Favoritas ❤️")).toBeInTheDocument();
    expect(
      screen.getByText("No tienes películas favoritas aún.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("¡Busca películas y agrégalas a tu lista!")
    ).toBeInTheDocument();
  });

  it("renderiza la lista de películas favoritas cuando hay favoritos", () => {
    const mockOnToggleFavorite = vi.fn();
    render(
      <Favorites
        favorites={mockMovies}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(screen.getByText("Batman Begins")).toBeInTheDocument();
    expect(screen.getByText("The Dark Knight")).toBeInTheDocument();
  });

  it("muestra el título correcto cuando hay favoritos", () => {
    const mockOnToggleFavorite = vi.fn();
    render(
      <Favorites
        favorites={mockMovies}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    // El título aparece en MovieList cuando hay favoritos
    expect(screen.getByText("Mis Películas Favoritas ❤️")).toBeInTheDocument();
  });

  it("renderiza el número correcto de películas favoritas", () => {
    const mockOnToggleFavorite = vi.fn();
    render(
      <Favorites
        favorites={mockMovies}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    // Verifica que se rendericen todas las películas
    const movieTitles = screen.getAllByText(/Batman|Dark Knight/);
    expect(movieTitles).toHaveLength(2);
  });
});
