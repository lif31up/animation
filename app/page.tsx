import React from "react";
import { ObservedDistributor } from "../component/common/ObservedContainer";
import ObservedText from "../component/common/ObservedText";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="grid justify-items-center gap-8 mb-20">
        <div>
          <h1 className="text-2xl font-bold">
            0. ObservedAPI를 이용해서 사용자 화면에 따라 동작하는
            에니메이션입니다.
          </h1>
          <p className="text-base mt-4">
            화면을 스크롤하면 에니메이션이 트리거 되면서 LazyLoad가 되는 걸 볼
            수 있습니다.
          </p>
        </div>
        <ObservedDistributor
          prefix="ltr-slide--"
          animation="_anime-slp-ltr-slide"
          threshold={0.1}
        >
          <div className="h-60 w-96 bg-black" />
          <div className="h-60 w-60 bg-black" />
          <div className="h-60 w-32 bg-black" />
          <div className="h-60 w-80 bg-black" />
          <div className="h-60 w-60 bg-black" />
          <div className="h-60 w-56 bg-black" />
        </ObservedDistributor>
      </section>
      <section className="mb-20">
        <div className="mb-20">
          <h1 className="text-2xl font-bold">
            1. ObservedAPI를 이용해서 사용자 화면에 따라 동작하는
            에니메이션입니다.
          </h1>
          <p className="text-base mt-4">
            각 문자들이 개별적으로 감지되어 에니메이션이 작동하는 것을 보실 수
            있습니다.
          </p>
        </div>
        <ObservedText
          className="text-4xl font-bold text-yellow-600 flex"
          animation="_anime-slp-space-in-up"
          id="first"
        >
          제 에니메이션을 트리거해주셔서 감사합니다.
        </ObservedText>
      </section>
    </main>
  );
}
