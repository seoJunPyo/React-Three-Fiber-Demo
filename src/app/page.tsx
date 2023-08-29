'use client';

import { Example1, Example2 } from '@/components';
import { Canvas } from '@react-three/fiber';

export default function Home() {
  return (
    <div className="w-full p-4 md:py-0 md:px-8 ">
      <h2 className="text-4xl font-bold mb-8">Render 3D Model in Web</h2>

      <h3 className="text-2xl font-bold mb-2">React Three Fiber</h3>
      <p>이 웹은 React Three Fiber(R3F) 라이브러리를 사용해 만든 Demo입니다.</p>
      <p>R3F는 Three.js 기반으로 구성되어 React로 빌드된 웹에서 3D 모델을 랜더링할 수 있게 도와줍니다.</p>

      <div className="h-48 md:h-72">
        <Canvas>
          <Example1 />
        </Canvas>
      </div>

      <h3 className="text-2xl font-bold mb-2">Demo에서 제공하는 것</h3>
      <p>이 데모에서는 R3F에서 제공하는 다양한 Geometry, Material 설정의 예시를 확인할 수 있습니다.</p>
      <p>컨트롤러를 사용해 설정들을 테스트하여 어떻게 적용되는지 확인할 수 있습니다.</p>

      <Example2 />
    </div>
  );
}
