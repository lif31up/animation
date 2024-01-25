import React from "react";
import { ObservedDistributor } from "../component/common/ObservedContainer";
import ObservedText from "../component/common/ObservedText";
import LazyLoadSection from "../component/section/LazyLoadSection";
import DynamicTextSection from "../component/section/DynamicTextSection";

export default function Home(): React.JSX.Element {
  return (
    <main>
      <LazyLoadSection />
      <DynamicTextSection />
    </main>
  );
}
