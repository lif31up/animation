import React from "react";
import { ObservedDistributor } from "../components/feature/ObservedContainer";
import ObservedText from "../components/feature/ObservedText";
import LazyLoadSection from "../components/section/LazyLoadSection";
import DynamicTextSection from "../components/section/DynamicTextSection";

export default function Home(): React.JSX.Element {
  return (
    <main>
      <LazyLoadSection/>
    </main>
  );
}
