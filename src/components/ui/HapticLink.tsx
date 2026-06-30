"use client";

import React from "react";
import { Link } from "next-view-transitions";
import { useHaptics } from "@/hooks/use-haptics";

interface HapticLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  pattern?: "light" | "medium" | "heavy";
  external?: boolean;
}

export function HapticLink({
  href,
  pattern = "light",
  external = false,
  onClick,
  children,
  ...props
}: HapticLinkProps) {
  const { trigger } = useHaptics();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trigger(pattern);
    onClick?.(e);
  };

  const isStringHref = typeof href === "string";
  const isExternal =
    external ||
    (isStringHref &&
      (href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")));

  if (isExternal) {
    return (
      <a
        href={isStringHref ? href : undefined}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        {...(props as React.HTMLProps<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
