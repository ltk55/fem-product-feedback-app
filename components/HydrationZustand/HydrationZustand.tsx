"use client";

import { useEffect, useState } from "react";

export default function HydrationZustand({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return <>{isHydrated ? <div>{children}</div> : null}</>;
}
