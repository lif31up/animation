import React from 'react'
import TailwindProperties from "../../util/tailwindProperties";
import Default from "../../util/interface";

function DummyCard({className}:Default){
  const style: TailwindProperties = {
    sm: 'sm:w-96 sm:bg-neutral-100 sm:p-4 sm:shadow sm:pb-8',
    base: 'w-full h-fit bg-white p-4',
  }
  return (
    <div className={`${style.sm} ${style.base} ${className}`}>
      <h1 className="text-xs font-bold text-neutral-500">더미 파라그래프</h1>
      <p className="text-base font-medium">더미 파라그래프입니다.</p>
    </div>
  )
}
export default DummyCard