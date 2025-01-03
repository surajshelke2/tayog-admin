"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import UserProfileCard from "@/components/Admin/UserProfileCard";
import Filters from "@/components/Filters";
import SearchBox from "@/components/SearchBox";
import { AccountStatusType, UsersResult } from "@/interface/admin";
import Link from "next/link";
import { IoIosArrowBack, IoMdMore } from "react-icons/io";
const links: AccountStatusType[] = [
  { label: "Account reported", status: 8 },
  { label: "Account Blocked", status: 7 },
  { label: "Mentor Account refuted", status: 6 },
  { label: "Verfied Mentor", status: 5 },
  { label: "Mentor Verification Pending", status: 4 },
  { label: "HR Account refuted", status: 3 },
  { label: "HR Verfied", status: 2 },
  { label: "HR Verification pending", status: 1 },
];

const fetchUsers = async ({
  page,
  query,
  filters,
}: {
  page: number;
  query: string;
  filters: number[];
}) => {
  const response = await axios.get("/api/admin/users", {
    params: {
      page,
      query,
      filters: filters,
    },
  });
  return response.data;
};

export default function Results() {
  const limit = 20;
  const router = useRouter();
  const searchParams = useSearchParams();

  const [result, setResult] = useState<UsersResult[]>([]);
  const [total, setTotal] = useState<number>(0);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters, setFilters] = useState<string[]>([]);

  const pageFromQuery = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    const queryFromQuery = searchParams.get("query") || "";
    const filtersFromQuery =
      searchParams.getAll("filters").filter((f) => f !== "") || [];
    const filterArray =
      filtersFromQuery.length > 0
        ? filtersFromQuery.map(
            (status) =>
              links.find((link) => link.status === parseInt(status, 10))
                ?.label || ""
          )
        : [];
    setSearchQuery(queryFromQuery);
    setFilters(filterArray);
    fetchUserDetails(pageFromQuery, queryFromQuery, filtersFromQuery);
  }, [pageFromQuery, searchParams]);

  const fetchUserDetails = async (
    page: number,
    query: string,
    filter: string[]
  ) => {
    try {
      const response = await axios.get(
        `/api/admin/users?page=${page}&limit=${limit}&query=${query}&filters=${filter.join(
          "&filters="
        )}`
      );
      setResult(response.data.users);
      setTotal(response.data.total);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(
      `?page=1&query=${searchQuery}&filters=${filters
        .map((f) => links.find((link) => link.label === f)?.status)
        .join("&filters=")}`
    );
  };

  //This is if you want to auto search after the input length > 3

  // useEffect(() => {
  //     if (searchQuery.length > 3) {
  //         fetchUserDetails(page, searchQuery, filters);
  //     }
  // }, [page, searchQuery, filters]);

  // This is for filter
  const handleFilterChange = (filter: string) => {
    const updatedFilters = filters.includes(filter)
      ? filters.filter((f) => f !== filter)
      : [...filters, filter];
    const filterStatuses = updatedFilters.map(
      (f) => links.find((link) => link.label === f)?.status
    );

    router.push(
      `?page=1&query=${searchQuery}&filters=${filterStatuses.join("&filters=")}`
    );
  };

  return (
    <section>
      <div className="">
        <div className="flex flex-col mt-2 ">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <IoIosArrowBack />
              <p>Users</p>
            </div>

            <div className="ml-auto">
              <IoMdMore />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-8">
          <SearchBox
            value={searchQuery}
            handleSearch={handleSearch}
            setValue={setSearchQuery}
            placeholder="Search by User ID, Name, or Email"
          />
        </div>

        <div className="mb-8">
          <Filters
            links={links}
            handleFilterChange={handleFilterChange}
            filters={filters}
          />
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {result.map((user) => (
          <UserProfileCard
            key={user.id}
            name={user.name}
            id={user.id}
            email={user.email}
            accountStatus={user.accountStatus}
          />
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <Link
          href={`?page=${
            pageFromQuery - 1
          }&query=${searchQuery}&filters=${filters
            .map((f) => links.find((link) => link.label === f)?.status)
            .join("&filters=")}`}
          className={`px-4 py-2 text-white rounded-xl ${
            pageFromQuery <= 1
              ? "pointer-events-none opacity-50 bg-neutral-400"
              : "bg-primary-600"
          }`}
        >
          Previous
        </Link>
        <Link
          href={`?page=${
            pageFromQuery + 1
          }&query=${searchQuery}&filters=${filters
            .map((f) => links.find((link) => link.label === f)?.status)
            .join("&filters=")}`}
          className={`px-4 py-2 text-white rounded-xl ${
            pageFromQuery * limit >= total
              ? "pointer-events-none opacity-50 bg-neutral-400"
              : "bg-primary-600"
          }`}
        >
          Next
        </Link>
      </div>
    </section>
  );
}
