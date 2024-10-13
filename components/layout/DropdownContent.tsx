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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pl-4">
      {category.columns.map((column, index) => (
        <div key={index}>
          <h3 className="text-white text-[18px] font-semibold mb-3">{column.title}</h3>
          <ul className="space-y-2">
            {column.items.map((item) => (
              <li key={item}>
                <Link 
                  href={`/${category.name.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-white text-[14px] hover:text-gray-300 transition-colors duration-200 block"
                >
                  {item}
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
