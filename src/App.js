import logo from './logo.svg';
import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom'
import csesocWholesome from './csesocTeam.jpg'
import me from "./me.glb"
import pondering from "./pondering.jpg"
import sorting from "./sorting.png"
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretDown } from '@fortawesome/free-solid-svg-icons'; */

import AudioPlayer from './AudioPlayer';

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

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
        <div className='text-6xl text-black animate-pulse font-semibold'>
          Vote <code className="text-[#B18FCF] animate-pulse-slow"> Matthew Lim </code> for Technical Vice President 24`
        </div>
      </header>

    <div className='bg-white p-20' >
    <div className='text-3xl text-[#B18FCF] p-4 font-bold'>
            CSESoc has greatly enriched my university experience...
          </div>
      <div className='flex flex-row'>
        <div>
          <div className='text-3xl text-[#2c2c34] p-6'>
            ... through CSESoc, I have met so many amazing people with incredible stories and talents.
            It is a community I feel like I belong to, one where I've forged friendships that will last a lifetime 🙂.
          </div>
          <div className='text-3xl text-[#2c2c34] p-6'>
            UNSW CSE would not be the same without CSESoc 🤗.
          </div>
        </div>
        <div className='p-5'>
          <img src={csesocWholesome} alt="csesoc whoelsome" className='rounded-3xl'/>
        </div>
      </div>
      <div>
        <div className='text-4xl text-[#B18FCF] p-4 font-semibold'>
          I hope to contribute to the work of CSESoc as Technical Vice President for 2024.
        </div>
        <div className='text-3xl text-[#2c2c34] p-10'>
          Serving in this role, I aim to streamline communication, enhance organizational efficiency, and ensure that CSESoc continues to be a vibrant and inclusive community for all members.
        </div>
        <div className='text-4xl text-[#2c2c34] p-2 font-bold'>
          Let's work together to make CSESoc even more exceptional in the coming years!
        </div>
      </div>
    </div>

      <br></br>

    <div className='bg-[#EAEAEC] p-20' >
    <div className='bg-white rounded-3xl mr-10 ml-10 mb-10 pb-3'>
        <div className='text-4xl text-[#B18FCF] p-4 font-bold'>
        Vision Statement
        </div>
        <div className='text-4xl text-[#2C2C34] p-4 font-semibold'>
          To empower co-presidents, directors and subcom to fulfil their personal
          visions in order to contribute to the greater vision of CSESoc.
        </div>
    </div>


      <div className='text-4xl text-[#978897] p-4 font-bold'>
        Action Plan
      </div>
      <div className='text-2xl text-[#494850] p-4'>
      <div className='flex flex-row'>
        <div className='m-10 basis-1/3'>
          <img src={pondering} className='rounded-3xl hover:scale-105'/>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <Card className="mt-6 w-96 rounded-3xl hover:scale-105">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Support and Resources
            </Typography>
            <Typography className='text-xl'>
              I will provide resources and support to help our leaders realize their personal visions. 
              This may involve allocating budgets, connecting them with relevant networks, 
              and providing access to tools and technologies.
            </Typography>
          </CardBody>
        </Card>

        <Card className="mt-6 w-96 rounded-3xl hover:scale-105">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Collaboration
            </Typography>
            <Typography className='text-xl'>
              I will encourage collaboration among our leadership team. 
              By fostering an environment of collaboration and open communication, 
              we will develop a synergy that will positively influence the broader CSE society.
            </Typography>
          </CardBody>
        </Card>

        <Card className="mt-6 w-96 rounded-3xl hover:scale-105">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Feedback Mechanisms
            </Typography>
            <Typography className='text-xl'>
              Regular feedback sessions will be conducted to assess progress and make necessary adjustments. 
              This will involve seeking input from co-presidents, directors, and subcom members to continuously improve our approach.
            </Typography>
          </CardBody>
        </Card>

        <Card className="mt-6 w-96 rounded-3xl hover:scale-105">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Measurable Goals
            </Typography>
            <Typography className='text-xl'>
              I will establish measurable goals and key performance indicators to track our progress. 
              These metrics will help me evaluate the impact of our actions and make data-driven decisions.
            </Typography>
          </CardBody>
        </Card>

        </div>
      </div>

      </div>
    </div>

    <div className='bg-slate-100 p-20' >
    <div className='flex flex-row'>

    </div>

        <div className='text-4xl text-[#B18FCF] p-4 font-bold'>
          Vision philosophy/background
        </div>
        <div className='text-2xl'>
          My perspective of a successful Technical Vice President lies in the challenges and experiences I have faced as both a leader and follower. 
        </div>
        <div className='text-2xl mb-6'>
          I'll explain some of my experiences, and the valuable things they have taught me.
        </div>
      <div className='flex flex-row'>
        <div>
          <div  className='text-xl p-2 mt-4 text-[#978897] font-semibold'>
            COOPSoc Exec team
          </div>

          <div className='flex flex-row bg-[#EFEFFB] rounded-2xl p-3 hover:scale-105'>
            <div  className='text-xl p-2'>
              Working in the COOPSoc exec team enabled me to see firsthand the systems 
              that enable the efficient management of teams, agendas and record-keeping.
            </div>
            <div
            class="inline-block w-0.5 self-stretch bg-slate-700 opacity-50">
            </div>
            <div  className='text-l p-2'>
              One impactful experience in this role was when I overstepped and was too authoritative in my leadership style 
              towards a subcom member. I reflected upon this and realised that I was suppressing their vision.
              As such, I have grown to value my trust in others, enabling 
              others to lead and instruct. This improves team morale, and improves team efficiency.
            </div>
          </div>



          <div  className='text-xl mt-4 p-2 text-[#978897] font-semibold'>
            CSESoc Dev Content
          </div>

          <div className='flex flex-row bg-[#EFEFFB] rounded-2xl p-3 hover:scale-105'>
            <div  className='text-xl p-2'>
              Creating content for CSESoc allowed me to refine my personal values as a member 
              of a university society. This is because, in order to create engaging content, 
              I needed to discern the values and interests of society members.
            </div>
            <div
              class="inline-block w-0.5 self-stretch bg-slate-700 opacity-50">
            </div>
            <div  className='text-l p-2'>
              The most impactful experience in this role was discussing with my directors
              Omar and Rachel, 'What makes a good director?'. It was through this 
              discussion where I began to reshape my perspective on leadership - being that 
              the leader must put their followers first, and that the leader must 
              always show empathy towards their followers.
            </div>
          </div>

          <div  className='text-xl p-2 mt-4 text-[#978897] font-semibold'>
            PISoc IT director
          </div>
          <div className='flex flex-row bg-[#EFEFFB] rounded-2xl p-3 hover:scale-105'>
            <div  className='text-xl p-2'>
              Managing a team enabled me to experience firsthand the administrative difficulties 
              faced in leading a team, and to experiment with processes to resolve this.
            </div>
            <div
              class="inline-block w-0.5 self-stretch bg-slate-700 opacity-50">
            </div>
            <div  className='text-l p-2'>
              A challenge I faced in this role was communication and team-wide productivity.
              Here, I was mentored by an exec, Yash, who taught me practical methods to 
              better manage and utilise the team's resources. Some of these ideas challenged 
              the systems put in place through technology (eg. relying on when2meet for team meetings), 
              and therefore increased the scope of leadership techniques that I know.
            </div>
          </div>
        </div>
        <div className='basis-4/5'>
          <img src={sorting} className='ml-10 mr-10 mt-10 rounded-2xl hover:scale-105' />
        </div>
      </div>

    </div>

    <div className='bg-[#F5F1F9] p-20' >
        <div className='text-4xl text-[#5959D9] p-4 font-bold'>
          What do I gain?
        </div>
        <div className='text-xl p-2'>
          From a technical perspective, I hope to learn from and understand the operation of a university 
          society from an administrative standpoint. 
        </div>
        <div className='text-xl p-2'>
          For personal growth, I want to understand macroscopically, how instiutions can shape 
          the lives and experiences of people.
        </div>
        <div className='text-xl p-2'>
          In terms of spiritual growth, I hope to be able to empower others to succeed in their own goals 
          and to live their best lives.
        </div>
    </div>
      <AudioPlayer />
    </div>
  );
}

export default App;
