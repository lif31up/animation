"use client";
import React, { MutableRefObject, useEffect, useRef } from "react";
import Default from "../../util/interface";

interface ObservedText extends Default {
  children: string;
  animation: string;
}

export default function ObservedText({
  className,
  children,
  animation,
  id,
}: ObservedText) {
  const observerRef: MutableRefObject<IntersectionObserver | null> =
    useRef(null);
  useEffect(() => {
    if (typeof id !== "string") return;
    const typography: HTMLElement | null = document.getElementById(id);
    if (!typography) return;
    const intersectionHandler = (
      entries: Array<IntersectionObserverEntry>
    ): void => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const letters: NodeListOf<HTMLElement> =
            typography.querySelectorAll("._letter");
          letters.forEach((element: HTMLElement, index: number) => {
            setTimeout(() => {
              element.style.animationPlayState = "running";
            }, index * 100);
          });
          return () => {
            if (observerRef.current) observerRef.current.disconnect();
          };
        }
      });
    };
    const options = { root: null, rootMargin: "0px", threshold: 0.1 };
    observerRef.current = new IntersectionObserver(
      intersectionHandler,
      options
    );
    observerRef.current.observe(typography);
  }, []);
  const typography: Array<React.ReactNode> = [];
  for (let i = 0; children[i]; i++) {
    if (children[i] === " ") {
      typography.push(<div key={i} style={{ width: "1.25rem" }} />);
    } else {
      typography.push(
        <div key={i} className={["_letter", animation].join(" ").trim()}>
          {children[i]}
        </div>
      );
    }
  }
  return (
    <div className={`flex items-center justify-start ${className}`} id={id}>
      {typography}
    </div>
  );
}
