import { ReactNode } from "react";
import {User} from "@/interface/auth"

export interface PostLoginLayoutProps {
    children: ReactNode;
    userdetails: User
}

interface RightSideNavigationObject {
    label: string;
    icon: ReactNode;
    route: string;
    active: ReactNode
}

export interface RightSideNavigationProps {
    links: RightSideNavigationObject[];
    reference?: string;
    referenceLink?: string;
}