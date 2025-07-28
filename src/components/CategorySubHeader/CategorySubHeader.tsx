import React from 'react';
import { FaBars } from 'react-icons/fa';

const categories = [
    { label: 'TODOS', icon: <FaBars /> },
    { label: 'LIVROS DIGITAIS'},
    { label: 'LIVROS IMPORTADOS'},
    { label: 'PRÉ-VENDA'},
    { label: 'SUPERSALDÂO'},
];

const CategorySubHeader = () => { 
    return (
        <nav className="bg-gray-50 border-y border-gray-400">
            <ul className="flex justify-around items-center py-3 text-sm font-medium text-gray-800">
                {categories.map((category, index) => (
                    <li key={index} className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
                        {category.icon && <span className="text-lg">{category.icon}</span>}
                        <span>{category.label}</span>
                    </li>
                ))}

            </ul>
        </nav>

    )
}

export default CategorySubHeader;