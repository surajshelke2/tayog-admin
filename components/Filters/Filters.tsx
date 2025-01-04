import { XMarkIcon } from '@heroicons/react/24/outline';
import { FiltersProps, FilterType } from '@/interface/components';

const Filters = <T extends FilterType>({
  links,
  handleFilterChange,
  filters,
}: FiltersProps<T>) => {
  return (
    <div className="flex flex-wrap justify-start gap-4 md:gap-6">
      {links.map((link, index) => (
        <button
          onClick={() => handleFilterChange(link.label)}
          key={index}
          className={`px-3 py-2 text-sm font-medium ${
            filters.includes(link.label)
              ? 'bg-primary-600 text-white'
              : 'bg-primary-50 text-primary-600 border border-primary-300'
          } rounded-lg hover:bg-primary-100 focus:ring-2 focus:ring-primary-400 transition-all duration-200`}
        >
          <p className="flex items-center gap-2">
            {link.label}{' '}
            {filters.includes(link.label) && (
              <span>
                <XMarkIcon className="h-4 w-4" />
              </span>
            )}
          </p>
        </button>
      ))}
    </div>
  );
};

export default Filters;
