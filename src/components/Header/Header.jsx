
import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescription = ['Fundamental' , 'Crucial', 'Core'];

function genRandomInt(max) { 
  return Math.floor(Math.random()* (max + 1));
}

export default function Header(){
    return (
     <header>d
         <img src={reactImg} alt="Stylized atom" />
         <h1>React Essentials</h1>
         <p>
           {reactDescription[genRandomInt(reactDescription.length-1)]} concepts you will need for almost any app you are
           going to build!
         </p>
     </header>
   )
 }

