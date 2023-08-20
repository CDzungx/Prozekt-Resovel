<script>
   import { Canvas } from '@threlte/core';
   import { Theatre } from '@threlte/theatre';
   import Scene from './Scene.svelte';

   const diff = 2;
   let curX = 0;
   let curY = 0;

   function parallax(event) {
      curX = (window.innerWidth - event.pageX * diff) / 90;
      curY = (window.innerHeight - event.pageY * diff) / 90;
   }
</script>

<div class="relative flex h-screen w-screen items-center justify-center" role="presentation" on:mousemove={parallax}>
   <div
      class="threltebg absolute h-[95%] w-[95%] transition-transform duration-200 ease-out"
      style={`transform: translate(${curX}px, ${curY}px);`}>
      <Canvas>
         <Scene />
      </Canvas>
   </div>
</div>
