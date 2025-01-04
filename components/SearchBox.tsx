
import { MagnifyingGlassIcon, BackspaceIcon } from '@heroicons/react/24/outline'
import { SearchBoxProps } from "@/interface/components";

const SearchBox: React.FC<SearchBoxProps> = ({ value, handleSearch, setValue, placeholder }) => {

    const handleClear = () => {
        setValue('');
        handleSearch(new Event('submit') as unknown as React.FormEvent<HTMLFormElement>);
    };
    return (
        <form onSubmit={handleSearch} className="flex items-center rounded-xl w-full shadow-md px-3 bg-white py-2 text-sm">
            <input
                type="text"
                name="Search"
                id="Search"
                className="flex-grow outline-none w-full"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <div className='flex items-center gap-x-1'>
                {value && (
                    <button className='p-1 rounded-lg hover:bg-neutral-100' type="button" onClick={handleClear}>
                        <BackspaceIcon width={18} height={18} />
                    </button>
                )}
                <button type="submit" className='p-1 rounded-lg hover:bg-neutral-100'>
                    <MagnifyingGlassIcon width={18} height={18} />
                </button>
            </div>

        </form>
    )
}

export default SearchBox