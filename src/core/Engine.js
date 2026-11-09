const DEFAULT_ENGINE_OPTIONS = {
  antialias: true,
  powerPreference: 'high-performance'
};

export function createEngine({
  THREE,
  canvas,
  width = globalThis.innerWidth || 1,
  height = globalThis.innerHeight || 1,
  pixelRatio = globalThis.devicePixelRatio || 1
}) {
  if (!THREE || !canvas) {
    throw new TypeError('createEngine requires THREE and a canvas element');
  }

  const renderer = new THREE.WebGLRenderer({
    canvas,
    ...DEFAULT_ENGINE_OPTIONS
  });
  renderer.setPixelRatio(Math.min(pixelRatio, 2));
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  if (THREE.ACESFilmicToneMapping) {
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
  }
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog('#f0c08e', 120, 520);

  const camera = new THREE.PerspectiveCamera(58, width / height, 0.1, 1600);
  camera.position.set(-60, 42, 65);
  camera.lookAt(-10, 4, 15);

  const skyGeometry = new THREE.SphereGeometry(850, 24, 14);
  const skyMaterial = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      top: { value: new THREE.Color('#5b8fc7') },
      mid: { value: new THREE.Color('#f6c48a') },
      bot: { value: new THREE.Color('#f0c08e') }
    },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: 'uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(mid, top, smoothstep(0.02, 0.55, h)) : bot; c = mix(bot, c, smoothstep(-0.02, 0.06, h)); float sun = pow(max(dot(normalize(vP), normalize(vec3(-0.8,0.25,0.4))),0.0), 220.0); c += vec3(1.0,0.85,0.55)*sun*1.5; gl_FragColor = vec4(c,1.0); }'
  });
  const skyMesh = new THREE.Mesh(skyGeometry, skyMaterial);
  scene.add(skyMesh);

  const hemiLight = new THREE.HemisphereLight('#ffe7c2', '#8a6a48', 1.5);
  const ambientLight = new THREE.AmbientLight('#ffffff', 0.65);
  const sunLight = new THREE.DirectionalLight('#ffd29a', 2.6);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(1024, 1024);
  Object.assign(sunLight.shadow.camera, {
    left: -50,
    right: 50,
    top: 50,
    bottom: -50,
    near: 1,
    far: 300
  });
  sunLight.shadow.bias = -0.0005;
  sunLight.position.set(-70, 60, 35);
  scene.add(hemiLight, ambientLight, sunLight, sunLight.target);

  function resize(nextWidth = globalThis.innerWidth || width, nextHeight = globalThis.innerHeight || height) {
    camera.aspect = nextWidth / nextHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(nextWidth, nextHeight);
  }

  return {
    renderer,
    scene,
    camera,
    skyMesh,
    hemiLight,
    ambientLight,
    sunLight,
    resize
  };
}
