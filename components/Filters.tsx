
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FiltersProps, FilterType } from '@/interface/components'

const Filters = <T extends FilterType>({ links, handleFilterChange, filters }: FiltersProps<T>) => {
    return (
        <div className="flex justify-start flex-wrap items-center gap-x-6 gap-y-4">
            {links.map((link, index) => (
                <button
                    onClick={() => handleFilterChange(link.label)}
                    key={index}
                    className={`px-4 py-2 ${filters.includes(link.label) ? 'bg-primary-600 text-white' : 'bg-primary-50 text-primary-300'} rounded-xl`}
                >
                    <p className="flex justify-between items-center gap-2">
                        {link.label} {filters.includes(link.label) && (<span><XMarkIcon className="h-5 w-5" /></span>)}
                    </p>
                </button>
            ))}
        </div>
    );
};
export default Filters