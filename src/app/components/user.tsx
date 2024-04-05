"use client";

import { SessionProvider, useSession } from "next-auth/react";

export function User() {
  return (
    <SessionProvider>
      <UserInner />
    </SessionProvider>
  );
}

export function UserInner() {
  const session = useSession();
  console.log(session);

  return <div>user</div>;
}
