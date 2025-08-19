import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import SearchBar from "../src/components/SearchBar";

describe("SearchBar", () => {
  it("renderiza correctamente", () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} isLoading={false} />);

    expect(
      screen.getByPlaceholderText("Buscar por título de película")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Buscar" })).toBeInTheDocument();
  });

  it("actualiza el estado del input correctamente", async () => {
    const user = userEvent.setup();
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} isLoading={false} />);

    const input = screen.getByPlaceholderText("Buscar por título de película");
    await user.type(input, "batman");

    expect(input.value).toBe("batman");
  });

  it("llama a onSearch cuando se envía el formulario", async () => {
    const user = userEvent.setup();
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} isLoading={false} />);

    const input = screen.getByPlaceholderText("Buscar por título de película");
    const button = screen.getByRole("button", { name: "Buscar" });

    await user.type(input, "batman");
    await user.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith({
      title: "batman",
      year: "",
      type: "",
      plot: "short",
    });
  });

  it("no llama a onSearch con texto vacío", async () => {
    const user = userEvent.setup();
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} isLoading={false} />);

    const button = screen.getByRole("button", { name: "Buscar" });
    await user.click(button);

    expect(mockOnSearch).not.toHaveBeenCalled();
  });

  it("deshabilita el input y botón cuando está cargando", () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} isLoading={true} />);

    expect(
      screen.getByPlaceholderText("Buscar por título de película")
    ).toBeDisabled();
    expect(screen.getByRole("button", { name: "Buscando..." })).toBeDisabled();
  });

  it("maneja el envío del formulario con Enter", async () => {
    const user = userEvent.setup();
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} isLoading={false} />);

    const input = screen.getByPlaceholderText("Buscar por título de película");
    await user.type(input, "batman");
    await user.keyboard("{Enter}");

    expect(mockOnSearch).toHaveBeenCalledWith({
      title: "batman",
      year: "",
      type: "",
      plot: "short",
    });
  });
});
