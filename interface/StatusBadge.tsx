import { CheckBadgeIcon, ExclamationTriangleIcon, NoSymbolIcon, ClipboardIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

import { StatusBadgeProps } from "@/interface/components";

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    switch (status) {
        case 0:
            return (
                <span className="bg-neutral-400 text-white text-xs font-normal px-2 py-1 rounded-full">New user</span>
            )
        case 1:
            return (
                <span className="bg-blue-600 text-white text-xs font-normal px-2 py-1 rounded-full"><p className='flex justify-between items-center gap-1 '><QuestionMarkCircleIcon className='h-4 w-4' /><span className='text-xs font-normal'>HR</span></p> </span>
            )
        case 2:
            return (
                <span className="bg-green-600 text-white text-xs font-normal px-2 py-1 rounded-full"><p className='flex justify-between items-center gap-1 '><CheckBadgeIcon className='h-4 w-4' /><span className='text-xs font-normal'>HR</span></p></span>
            )
        case 3:
            return (
                <span className="bg-auxiliary-600 text-white text-xs font-normal px-2 py-1 rounded-full"><p className='flex justify-between items-center gap-1 '><ExclamationTriangleIcon className='h-4 w-4' /><span className='text-xs font-normal'>HR</span></p></span>
            )
        case 4:
            return (
                <span className="bg-blue-600 text-white text-xs font-normal px-2 py-1 rounded-full"><p className='flex justify-between items-center gap-1 '><QuestionMarkCircleIcon className='h-4 w-4' /><span className='text-xs font-normal'>Mentor</span></p></span>
            )
        case 5:
            return (
                <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full"><p className='flex justify-between items-center gap-1 '><CheckBadgeIcon className='h-4 w-4' /><span className='text-xs font-normal'>Mentor</span></p></span>
            )
        case 6:
            return (
                <span className="bg-auxiliary-600 text-white text-xs font-normal px-2 py-1 rounded-full"><p className='flex justify-between items-center gap-1 '><ExclamationTriangleIcon className='h-4 w-4' /><span className='text-xs font-normal'>Mentor</span></p></span>
            )
        case 7:
            return (
                <span className="bg-white-600 border border-auxiliary-600 text-neutral-500 text-xs font-semibold px-2 py-1 rounded-full"><p className='flex justify-between items-center gap-1 '><NoSymbolIcon className='h-4 w-4 text-auxiliary-600' /><span className='text-xs font-normal text-auxiliary-600'>Blocked</span></p></span>
            )
        default:
            return (
                <span className="bg-neutral-400 text-white text-xs font-normal px-2 py-1 rounded-full">New user</span>
            )
    }
}

export default StatusBadge