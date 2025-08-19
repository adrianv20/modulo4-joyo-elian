import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import MovieCard from "../src/components/MovieCard";

const mockMovie = {
  imdbID: "tt0372784",
  Title: "Batman Begins",
  Year: "2005",
  Type: "movie",
  Poster: "https://example.com/poster.jpg",
};

describe("MovieCard", () => {
  it("renderiza correctamente la información de la película", () => {
    const mockOnToggleFavorite = vi.fn();
    render(
      <MovieCard
        movie={mockMovie}
        onToggleFavorite={mockOnToggleFavorite}
        isFavorite={false}
      />
    );

    expect(screen.getByText("Batman Begins")).toBeInTheDocument();
    expect(screen.getByText(/Fecha:\s*2005/)).toBeInTheDocument();
    expect(screen.getByText(/Tipo:\s*movie/)).toBeInTheDocument();
    expect(screen.getByAltText("Batman Begins poster")).toBeInTheDocument();
  });

  it("muestra el botón de agregar a favoritos cuando no es favorito", () => {
    const mockOnToggleFavorite = vi.fn();
    render(
      <MovieCard
        movie={mockMovie}
        onToggleFavorite={mockOnToggleFavorite}
        isFavorite={false}
      />
    );

    expect(screen.getByText("🤍 Agregar a favoritos")).toBeInTheDocument();
  });

  it("muestra el botón de quitar de favoritos cuando es favorito", () => {
    const mockOnToggleFavorite = vi.fn();
    render(
      <MovieCard
        movie={mockMovie}
        onToggleFavorite={mockOnToggleFavorite}
        isFavorite={true}
      />
    );

    expect(screen.getByText("❤️ Quitar de favoritos")).toBeInTheDocument();
  });

  it("llama a onToggleFavorite cuando se hace clic en el botón de favoritos", async () => {
    const user = userEvent.setup();
    const mockOnToggleFavorite = vi.fn();
    render(
      <MovieCard
        movie={mockMovie}
        onToggleFavorite={mockOnToggleFavorite}
        isFavorite={false}
      />
    );

    const favoriteButton = screen.getByText("🤍 Agregar a favoritos");
    await user.click(favoriteButton);

    expect(mockOnToggleFavorite).toHaveBeenCalledWith(mockMovie);
  });

  it("aplica la clase favorited cuando la película es favorita", () => {
    const mockOnToggleFavorite = vi.fn();
    render(
      <MovieCard
        movie={mockMovie}
        onToggleFavorite={mockOnToggleFavorite}
        isFavorite={true}
      />
    );

    const favoriteButton = screen.getByText("❤️ Quitar de favoritos");
    expect(favoriteButton).toHaveClass("bg-red-600"); // La clase que realmente se aplica
  });

  it("maneja películas sin poster", () => {
    const movieWithoutPoster = {
      ...mockMovie,
      Poster: "N/A",
    };

    const mockOnToggleFavorite = vi.fn();
    render(
      <MovieCard
        movie={movieWithoutPoster}
        onToggleFavorite={mockOnToggleFavorite}
        isFavorite={false}
      />
    );

    const image = screen.getByAltText("Batman Begins poster");
    expect(image.src).toContain("placeholder-movie.png");
  });
});
