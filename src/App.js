import logo from './logo.svg';
import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom'
import csesocWholesome from './csesocTeam.jpg'
import me from "./me.glb"
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretDown } from '@fortawesome/free-solid-svg-icons'; */

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

// colour palette
// https://coolors.co/d8d8f6-b18fcf-978897-494850-2c2c34

function Model(props) {
  const {scene} = useGLTF(me);
  return <primitive object={scene} scale={0.01} {...props} />
}

/* function Model(props) {
  const {scene} = useGLTF("/me.glb");

  // Set up an animation loop
  useFrame(() => {
    // Rotate the model
    if (scene.current) {
      scene.current.rotation.x += 0.01;
    }
  });

  return (
    <primitive object={scene} scale={0.01} {...props} />
  );
}
 */

function App() {
/*   const scrollElement = document.getElementById('scrollElement');

  window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
          scrollElement.style.display = 'block';
      } else {
          scrollElement.style.display = 'none';
      }
  }); */

  return (
    <div className="App">
      <Canvas dpr={[1, 2]} shadows camera={{fov:45}} style={{zIndex:0, "position":"absolute"}}>
        <color attach="background" args={["#FFFFFF"]} />
        <PresentationControls speed={1.5} global zoom={.5}>
          <Stage environment={null}>
            <Model scale={0.01}/>
          </Stage>

        </PresentationControls>
      </Canvas>


{/*       <div id="scrollElement" style={{zIndex: 2, position: 'fixed', bottom: 20}} className='animate-bounce motion-safe'>      
        <FontAwesomeIcon icon={faSquareCaretDown} 
          style={{color: "#FFFFFF"}} 
          className="h-10 transition-opacity ease-in duration-700 opacity-100 hover:opacity-0"/>
      </div>
      <script src="script.js"></script> */}

      <header className="App-header" style={{zIndex: 3}}>
        <div className='text-7xl text-black animate-pulse font-semibold'>
          Vote for <code className="text-[#B18FCF] animate-pulse-slow"> Matthew Lim </code> for Secretary 24`
        </div>
      </header>

    <div className='bg-white p-20' >
    <div className='text-4xl text-[#B18FCF] p-4 font-bold'>
            CSESoc has greatly enriched my university experience.
          </div>
      <div className='flex flex-row'>
        <div>
          <div className='text-4xl text-[#2c2c34] p-6'>
            Through CSESoc, I have met so many amazing people with incredible stories and talents.
            It is a community I feel like I belong to, one where I've forged friendships that will last a lifetime.
          </div>
        </div>
        <div className='p-5'>
          <img src={csesocWholesome} alt="csesoc whoelsome" />
        </div>
      </div>
      <div>
        <div className='text-4xl text-[#B18FCF] p-4 font-semibold'>
          I hope to contribute to the work of CSESoc as Secretary in 2024.
        </div>
        <div className='text-4xl text-[#2c2c34] p-10'>
          Serving in this role, I aim to streamline communication, enhance organizational efficiency, and ensure that CSESoc continues to be a vibrant and inclusive community for all members.
        </div>
        <div className='text-4xl text-[#2c2c34] p-2'>
          Let's work together to make CSESoc even more exceptional in the coming years!
        </div>
      </div>
    </div>

      <br></br>

    <div className='bg-slate-100 p-20' >
      <div className='text-4xl text-[#B18FCF] p-4 font-bold'>
        Vision Statement
      </div>
      <div className='text-4xl text-[#2C2C34] p-4 font-semibold'>
        To empower co-presidents, directors and subcom to fulfil their personal
        visions in order to contribute to the greater vision of CSESoc.
      </div>
      <div className='text-4xl text-[#B18FCF] p-4 font-bold'>
        Action Plan
      </div>
      <div className='text-2xl text-[#494850] p-4'>

      <div className='text-2xl text-[#B18FCF] p-4 font-semibold'>
      Support and Resources
      </div>
      
      <div>
        I will provide resources and support to help our leaders realize their personal visions. 
        This may involve allocating budgets, connecting them with relevant networks, 
        and providing access to tools and technologies.
      </div>

      <div className='text-2xl text-[#B18FCF] p-4 font-semibold'>
      Collaboration
      </div>

      <div>
        I will encourage collaboration among our leadership team. 
        By fostering an environment of collaboration and open communication, 
        we will develop a synergy that will positively influence the broader CSE society.
      </div>

      <div className='text-2xl text-[#B18FCF] p-4 font-semibold'>
      Feedback Mechanisms
      </div>

      <div>
      Regular feedback sessions will be conducted to assess progress and make necessary adjustments. 
      This will involve seeking input from co-presidents, directors, and subcom members to continuously improve our approach.
      </div>

      <div className='text-2xl text-[#B18FCF] p-4 font-semibold'>
      Measurable Goals
      </div>

      <div>
      I will establish measurable goals and key performance indicators to track our progress. 
      These metrics will help me evaluate the impact of our actions and make data-driven decisions.
      </div>

      </div>
    </div>

{/*     <div className='bg-slate-100 p-20' >
        <div className='text-4xl text-[#B18FCF] p-4 font-bold'>
          Vision philosophy
        </div>
        <div>
          My perspective of a successful secretary lies in the challenges and experiences 
          I have faced as both a leader and follower.
        </div>
        <div>
          This year, as a member of Dev Content subcom, the departure of our amazing director Rachel 
          inspired me to reconsider what exactly made a great leader.
        </div>

    </div> */}

    </div>
  );
}

export default App;
