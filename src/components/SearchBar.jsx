import { useState } from "react";

const SearchBar = ({ onSearch, isLoading }) => {
  const [form, setForm] = useState({
    title: "",
    type: "",
    year: "",
    plot: "short",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title.trim()) {
      onSearch({
        title: form.title.trim(),
        type: form.type,
        year: form.year,
        plot: form.plot,
      });
    }
  };

  return (
    <form
      className="flex flex-col items-center w-full mb-8"
      onSubmit={handleSubmit}
    >
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 mb-4 md:grid-cols-2">
        <input
          type="text"
          name="title"
          placeholder="Buscar por título de película"
          value={form.title}
          onChange={handleChange}
          className="px-4 py-3 text-white transition border rounded-lg border-slate-700 bg-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-slate-800 disabled:cursor-not-allowed"
          disabled={isLoading}
        />
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="px-4 py-3 text-white transition border rounded-lg border-slate-700 bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          disabled={isLoading}
        >
          <option value="">Tipo (opcional)</option>
          <option value="movie">Película</option>
          <option value="series">Serie</option>
          <option value="episode">Episodio</option>
        </select>
        <input
          type="number"
          name="year"
          placeholder="Año (opcional)"
          value={form.year}
          onChange={handleChange}
          className="px-4 py-3 text-white transition border rounded-lg border-slate-700 bg-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          disabled={isLoading}
        />
        <select
          name="plot"
          value={form.plot}
          onChange={handleChange}
          className="px-4 py-3 text-white transition border rounded-lg border-slate-700 bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          disabled={isLoading}
        >
          <option value="short">Plot corto</option>
          <option value="full">Plot completo</option>
        </select>
      </div>
      <button
        type="submit"
        className="px-8 py-3 font-semibold text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:bg-slate-700 disabled:cursor-not-allowed"
        disabled={isLoading || !form.title.trim()}
      >
        {isLoading ? "Buscando..." : "Buscar"}
      </button>
    </form>
  );
};

export default SearchBar;
