'use client';

import { Search } from 'lucide-react';

export default function SearchBar(){
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Buscar livros, autores, categorias..."
        className="w-full rounded-2xl border border-gray-300 py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>

  );
}

