import React from 'react';
import Link from 'next/link';

interface DropdownContentProps {
  categories: {
    name: string;
    columns: {
      title: string;
      items: string[];
    }[];
  }[];
  activeCategory: string;
}

const DropdownContent: React.FC<DropdownContentProps> = ({ categories, activeCategory }) => {
  const category = categories.find(cat => cat.name === activeCategory);

  if (!category) return null;

  return (
    <div className="grid grid-cols-3 gap-8">
      {category.columns.map((column, index) => (
        <div key={index}>
          <h3 className="font-semibold text-white text-lg mb-3">{column.title}</h3>
          <ul className="space-y-2">
            {column.items.map((item) => (
              <li key={item}>
                <Link href={`/${category.name.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-base text-gray-300 hover:text-white transition-colors relative group block">
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DropdownContent;
