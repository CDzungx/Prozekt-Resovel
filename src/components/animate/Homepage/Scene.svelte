<script>
   import { T, useFrame } from '@threlte/core';
   import { interactivity, OrbitControls } from '@threlte/extras';
   import { SheetObject } from '@threlte/theatre';
   import { Text } from 'troika-three-text';
   import { spring } from 'svelte/motion';
   import { on } from 'solid-js';
   import { onMount } from 'svelte';

   let rotation = 0;
   useFrame((state, delta) => {
      rotation += delta;
   });

   interactivity();
   const scale = spring(0, { stiffness: 0.05, damping: 0.175 });

   onMount(() => {
      setTimeout(() => {
         scale.set(2);
      }, 100);
   });
</script>

<T.DirectionalLight position={[0, 10, 10]} />

<T.Mesh rotation.y={rotation / 3} rotation.z={rotation / 3} scale={$scale}>
   <T.DodecahedronGeometry detail="10" />
   <T.MeshStandardMaterial color="#005b03" wireframe="true"></T.MeshStandardMaterial>
</T.Mesh>
