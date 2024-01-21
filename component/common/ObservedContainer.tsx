"use client";
import React, { useEffect, useRef } from "react";
import Default from "../../util/interface";

interface ObservedContainer extends Default {
  children: React.ReactNode;
  animation: string;
  threshold?: number;
}
export default function ObservedContainer({
  className,
  id,
  children,
  animation,
  threshold,
}: ObservedContainer): React.JSX.Element {
  const observerRef: any = useRef(null);

  let options: object = {
    root: null,
    rootMargin: "0px",
    threshold: threshold !== null ? threshold : 0.5,
  };

  useEffect((): void => {
    if (typeof id !== "string") return;
    let element: HTMLElement | null = document.getElementById(id);
    const intersectionHandler = (entries: Array<any>): void => {
      entries.forEach((entry): void | (() => void) => {
        if (entry.isIntersecting) {
          if (element === null) return;
          element.style.animationPlayState = "running";
          return (): void => {
            observerRef.current.disconnect();
          };
        }
      });
    };
    observerRef.current = new IntersectionObserver(
      intersectionHandler,
      options
    );
    observerRef.current.observe(element);
  }, []);

  return (
    <div id={id} className={`${animation} ${className}`}>
      {children}
    </div>
  );
}

interface ObservedDistributor extends Default {
  prefix: string;
  children: React.ReactNode;
  animation: string;
  threshold?: number;
}
export function ObservedDistributor({
  prefix,
  children,
  animation,
  threshold,
}: ObservedDistributor): React.JSX.Element {
  const distributor: Array<React.ReactNode> = [];
  React.Children.forEach(
    children,
    (child: React.ReactNode, index: number): void => {
      if (React.isValidElement(child)) {
        distributor.push(
          <ObservedContainer
            id={prefix + `--${index}`}
            animation={animation}
            threshold={threshold}
          >
            {child}
          </ObservedContainer>
        );
      }
    }
  );
  return <>{distributor}</>;
}
