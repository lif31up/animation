import React from 'react'
import Default from "../../utils/interface";
import TailwindProperties from "../../styles/tailwindProperties";
import Heading from "../common/Heading";
import ObservedText from "../feature/ObservedText";

function DynamicTextSection({className}:Default):React.JSX.Element{
  const style: TailwindProperties = {
    sm: 'sm:w-full sm:px-80 sm:my-16',
    base: 'w-full',
  }
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <Heading
        data={{
          filename: 'ObservedText.tsx',
          title: '움직이는 글씨',
          desc: '움직이는 글씨를 만들었습니다.',
          href: 'https://github.com/lif31up/animation',
        }}
      />
      <div className="w-full my-8 grid justify-items-center text-4xl font-bold">
        <ObservedText animation={'_anime-slp-space-in-up'} id="observer-text--">
          안녕하세요
        </ObservedText>
      </div>
    </section>
  )
}
export default DynamicTextSection