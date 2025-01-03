
export interface User {
    name: string;
    email: string;
    image: string;
    role: string;
    id: string;
    mentorstatus: boolean;
    verifiedmentor: boolean;
    emailverified: boolean;
    userverified: boolean;
    uName: string;
  }
  
  export interface UserDetailsProps {
    userdetails: User;
  }