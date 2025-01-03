"use client";

import { useEffect, useState } from "react";

interface NotificationIconProps {
  userId: string | undefined;
}

const NotificationIcon: React.FC<NotificationIconProps> = ({ userId }) => {
  const [unreadCount, setUnreadCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!userId) return;

    // Fetch unread notifications count
    const fetchUnreadCount = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/notifications/unread?userId=${userId}`);
        const data = await response.json();
        setUnreadCount(data.unreadCount || 0);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUnreadCount();
  }, [userId]);

  const handleIconClick = () => {
    // Handle notification icon click (e.g., open a dropdown or navigate to the notifications page)
    console.log("Notification icon clicked");
  };

  return (
    <div className="relative cursor-pointer" onClick={handleIconClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-gray-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25a3.75 3.75 0 00-7.5 0V9M4.5 9v5.25m15-5.25v5.25m-3.75 3.75h-7.5a2.25 2.25 0 01-2.25-2.25V9a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0119.5 9v7.5a2.25 2.25 0 01-2.25 2.25z"
        />
      </svg>
      {!loading && unreadCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {unreadCount}
        </span>
      )}
    </div>
  );
};

export default NotificationIcon;
