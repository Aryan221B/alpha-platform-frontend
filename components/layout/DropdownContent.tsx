import React from 'react';
import Link from 'next/link';

interface DropdownContentProps {
  category: {
    name: string;
    columns: {
      title: string;
      items: string[];
    }[];
  };
}

const DropdownContent: React.FC<DropdownContentProps> = ({ category }) => {
  return (
    <div className="flex justify-between">
      {category.columns.map((column, index) => (
        <div key={index} className="flex-1">
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

