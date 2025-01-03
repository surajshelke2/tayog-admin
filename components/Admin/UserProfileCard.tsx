"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

import StatusBadge from '../../interface/StatusBadge'
import { UsersResult as UserProfileCardProps } from "@/interface/admin"


const UserProfileCard: React.FC<UserProfileCardProps> = ({ id, accountStatus, name, email }) => {
  const [Iscopied, setCopied] = useState(false);

  const saveClipboard = async (userid: string) => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`${userid}`);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Clipboard not supported');
    }
  };

  return (
    <div className="w-auto  bg-white border border-1 rounded-xl p-2 py-5 shadow-normal hover:shadow-medium ">
      <div className="flex justify-center mb-2">
        <StatusBadge status={accountStatus} />

      </div>
      <div className="text-center mt-1">
        <h2 className="text-base font-medium text-gray-800">{name}</h2>

        <button className="transition ease-in-out all  break-all" onClick={() => saveClipboard(id)}><span className="text-xs text-gray-600 mt-2 ">{id}{Iscopied && <span className='text-xs text-green-500'> Copied ✔</span>}</span></button>

      </div>
      <div className="flex justify-around items-center mt-4">
        <button className="flex items-center justify-center   rounded-lg">
          <EnvelopeIcon className="h-9 w-9 text-gray-500  p-1 rounded-lg hover:bg-gray-400 hover:text-white" />
        </button>
        <Link href={`/admin/user?userId=${id}`} className="px-3 py-1 bg-white border border-blue-600 text-blue-600 rounded-xl font-medium hover:bg-blue-600 hover:text-white transition">
          View profile
        </Link>
      </div>
    </div>
  )
}

export default UserProfileCard