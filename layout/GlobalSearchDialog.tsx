'use client'

import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function GlobalSearchDialog() {

    const router = useRouter();

    const [open, setOpen] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');

    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setOpen(false);
        router.push(`/search?q=${encodeURIComponent(query)}&f=opportunity`);
        setQuery('')
    }

    return (
        <section>
            <button className="sm:border rounded-lf border border-black sm:px-4 py-1 px-4 space-x-2 gap-2 text-neutral-400 flex items-center sm:space-x-4" onClick={() => setOpen(true)}>
                <div className="text-sm pr-3 hidden   py-2">Domain, Skill, Specialization</div>
                <Search width={20} height={20} />
            </button>
            <Dialog open={open} onOpenChange={() => setOpen(false)} >
                <DialogContent className="max-w-sm md:max-w-3xl">
                    <DialogHeader>
                        <DialogTitle className="font-normal text-base text-neutral-700">Search you goal</DialogTitle>
                        <div className="text-sm font-light  text-justify">Search for research opportunities, mentors, and collaborations to elevate your academic journey.</div>
                    </DialogHeader>

                    <form action="" onSubmit={handleSearch} className="" >

                        <div className="flex space-x-4">
                            <input
                                type="text"
                                placeholder="Ex: Domain, Skill, Specialization"
                                className="flex-grow p-2 px-3 border border-gray-300 rounded-xl focus:outline-none text-sm"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <button
                                className="bg-primary-600 text-sm text-white text-center px-4 py-2 rounded-xl "
                                type="submit"
                            >
                                Explore
                            </button>
                        </div>

                    </form>

                </DialogContent>
            </Dialog>
        </section>
    )
}