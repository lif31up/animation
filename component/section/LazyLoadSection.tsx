import React from 'react'
import Default from "../../util/interface";
import TailwindProperties from "../../util/tailwindProperties";
import Heading from "../common/Heading";
import { ObservedDistributor } from "../common/ObservedContainer";
import DummyCard from "../common/DummyCard";

function LazyLoadSection({className}:Default){
  const style: TailwindProperties = {
    sm: 'sm:w-full sm:px-80 sm:my-16',
    base: 'w-full',
  }
  return(
    <section className={`${style.sm} ${style.base} ${className}`}>
      <Heading
        data={{
          filename: 'ObservedContainer.tsx',
          title: '레이지로드',
          desc: 'IntersectionObserver API를 통해 레이지로드를 구현했습니다.',
          href: 'https://github.com/lif31up/animation',
        }}
      />
      <div className="w-full grid my-4 gap-4 sm:justify-items-center">
        <ObservedDistributor
          prefix="observed-distribution--"
          animation="_anime-slp-ltr-slide"
          threshold={0.1}
        >
          <DummyCard />
          <DummyCard />
          <DummyCard />
          <DummyCard />
        </ObservedDistributor>
      </div>
    </section>
  )
}
export default LazyLoadSection