// import * as facemesh from "@tensorflow-models/face-landmarks-detection";
// import "@tensorflow/tfjs-backend-webgl";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// function Tryon3D() {
//   let scene, camera, renderer, glasses, AImodel;
//   const outputRef = useRef(null);
//   const contextRef = useRef(null);
//   const overlayRef = useRef(null);
//   const webcamRef = useRef(null);
//   let alreadyInitialized = false;

//   useEffect(() => {
//     const Run = async () => {
//       if (!alreadyInitialized) {
//         alreadyInitialized = true;
//         await SetUp3dModel();
//         await SetAIModel();
//         await setupWebcam();
//         await SetCamera();
//       }
//     };
//     Run();
//   }, []);

//   const animate = async () => {
//     if (!renderer || !scene || !camera) {
//       return;
//     }
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
//     await PlayVideo();
//     await trackFace();
//   };

//   const SetUp3dModel = async () => {
//     scene = new THREE.Scene();
//     const video = webcamRef.current;

//     camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
//     renderer = new THREE.WebGLRenderer({
//       canvas: overlayRef.current,
//       alpha: true,
//     });
//     renderer.setSize(video.width, video.height);
//     document.body.appendChild(renderer.domElement);
//     scene.add(camera);

//     const loader = new GLTFLoader();
//     let model;

//     await loader.load("/heart_glasses.glb", (gltf) => {
//       model = gltf.scene;
//       scene.add(model);
//     });

//     while (!model) {
//       await new Promise((resolve) => setTimeout(resolve, 100));
//     }

//     glasses = model;

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(1, 1, 1);
//     scene.add(directionalLight);

//     animate();
//   };

//   const SetAIModel = async () => {
//     AImodel = await facemesh.load(facemesh.SupportedPackages.mediapipeFacemesh);
//   };

//   async function setupWebcam() {
//     return new Promise((resolve, reject) => {
//       navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia;
//       if (navigator.mediaDevices.getUserMedia) {
//         navigator.mediaDevices
//           .getUserMedia({ audio: false, video: { height: 1000, width: 1000 } })
//           .then((stream) => {
//             try {
//               if (webcamRef.current) {
//                 webcamRef.current.srcObject = stream;
//                 webcamRef.current.addEventListener(
//                   "loadeddata",
//                   resolve,
//                   false
//                 );
//               }
//             } catch (error) {
//               console.warn(error);
//             }
//           });
//       } else {
//         reject();
//       }
//     });
//   }

//   const SetCamera = async () => {
//     const video = webcamRef.current;
//     video.play();
//     let videoWidth = video.videoWidth;
//     let videoHeight = video.videoHeight;
//     video.width = videoWidth;
//     video.height = videoHeight;

//     let canvas = outputRef.current;
//     canvas.width = video.width;
//     canvas.height = video.height;

//     let overlay = overlayRef.current;
//     overlay.width = video.width;
//     overlay.height = video.height;

//     contextRef.current = canvas.getContext("2d");
//     contextRef.current.translate(canvas.width, 0);
//     contextRef.current.scale(-1, 1);

//     contextRef.current.fillStyle = "#fdffb6";
//     contextRef.current.strokeStyle = "#fdffb6";
//     contextRef.current.lineWidth = 2;

//     while (!glasses) {
//       await new Promise((resolve) => setTimeout(resolve, 100));
//     }

//     camera.position.x = videoWidth / 2;
//     camera.position.y = -videoHeight / 2;
//     camera.position.z = -(videoHeight / 2) / Math.tan(45 / 2);

//     camera.lookAt({
//       x: videoWidth / 2,
//       y: -videoHeight / 2,
//       z: 0,
//       isVector3: true,
//     });

//     renderer.setSize(video.width, video.height);
//   };

//   const PlayVideo = () => {
//     if (!webcamRef.current || !contextRef.current) {
//       return;
//     }

//     const video = webcamRef.current;
//     contextRef.current.drawImage(
//       video,
//       0,
//       0,
//       video.width,
//       video.height,
//       0,
//       0,
//       video.width,
//       video.height
//     );
//   };

//   async function trackFace() {
//     if (AImodel && contextRef.current && glasses) {
//       const faces = await AImodel.estimateFaces({
//         input: webcamRef.current,
//         returnTensors: false,
//         flipHorizontal: false,
//       });

//       faces.forEach(async (face) => {
//         const x1 = face.boundingBox.topLeft[0];
//         const y1 = face.boundingBox.topLeft[1];
//         const x2 = face.boundingBox.bottomRight[0];
//         const y2 = face.boundingBox.bottomRight[1];

//         drawLine(contextRef.current, x1, y1, x2, y1);
//         drawLine(contextRef.current, x2, y1, x2, y2);
//         drawLine(contextRef.current, x1, y2, x2, y2);
//         drawLine(contextRef.current, x1, y1, x1, y2);

//         glasses.position.x = face.annotations.midwayBetweenEyes[0][0];
//         glasses.position.y = face.annotations.midwayBetweenEyes[0][1];
//         glasses.position.z =
//           -camera.position.z + face.annotations.midwayBetweenEyes[0][2];

//         let canvas = outputRef.current;
//         const glassesScreenPosition = new THREE.Vector3(
//           -(face.annotations.midwayBetweenEyes[0][0] / canvas.width) * 2 + 1,
//           -(face.annotations.midwayBetweenEyes[0][1] / canvas.height) * 2 + 1,
//           1
//         );

//         glassesScreenPosition.unproject(camera);
//         glassesScreenPosition.sub(camera.position).normalize();

//         var distance =
//           (face.annotations.midwayBetweenEyes[0][2] - camera.position.z) /
//           glassesScreenPosition.z;

//         glasses.position
//           .copy(camera.position)
//           .add(glassesScreenPosition.multiplyScalar(distance));

//         glasses.up.x =
//           face.annotations.midwayBetweenEyes[0][0] -
//           face.annotations.noseBottom[0][0];
//         glasses.up.y = -(
//           face.annotations.midwayBetweenEyes[0][1] -
//           face.annotations.noseBottom[0][1]
//         );
//         glasses.up.z =
//           face.annotations.midwayBetweenEyes[0][2] -
//           face.annotations.noseBottom[0][2];

//         const length = Math.sqrt(
//           glasses.up.x * 2 + glasses.up.y * 2 + glasses.up.z ** 2
//         );

//         glasses.up.x /= length;
//         glasses.up.y /= length;
//         glasses.up.z /= length;

//         const eyeDist = Math.sqrt(
//           (face.annotations.leftEyeUpper1[3][0] -
//             face.annotations.rightEyeUpper1[3][0]) **
//             2 +
//             (face.annotations.leftEyeUpper1[3][1] -
//               face.annotations.rightEyeUpper1[3][1]) **
//               2 +
//             (face.annotations.leftEyeUpper1[3][2] -
//               face.annotations.rightEyeUpper1[3][2]) **
//               2
//         );

//         glasses.scale.x = eyeDist / 15;
//         glasses.scale.y = eyeDist / 15;
//         glasses.scale.z = eyeDist / 15;

//         glasses.rotation.y = Math.PI;
//         glasses.rotation.z = Math.PI / 2 - Math.acos(glasses.up.x);
//       });
//     }
//   }

//   function drawLine(ctx, x1, y1, x2, y2) {
//     ctx.beginPath();
//     ctx.moveTo(x1, y1);
//     ctx.lineTo(x2, y2);
//     ctx.strokeStyle = "red";
//     ctx.lineWidth = 3;
//     ctx.stroke();
//   }

//   return (
//     <>
//       <div className="canvas-container ">
//         <canvas ref={outputRef} id="output"></canvas>
//         <canvas ref={overlayRef} id="overlay"></canvas>
//       </div>
//       <video
//         ref={webcamRef}
//         src=""
//         id="webcam"
//         style={{
//           visibility: "hidden",
//           width: "auto",
//           height: "auto",
//           margin: "0px",
//         }}
//       ></video>
//     </>
//   );
// }

// export default Tryon3D;
