import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      userType: 'CREATOR' | 'BRAND';
    };
  }

  interface User {
    id: string;
    email: string;
    name: string;
    userType: 'CREATOR' | 'BRAND';
  }
}
