import { useState } from 'react';
import  CoreConcept  from './components/CoreConcept.jsx';
import  Header  from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';
import {CORE_CONCEPTS} from './data.js';
import { EXAMPLES } from './data.js';


function App() {

const [tabContent , setTabContent] = useState();


let tabContentData = <p>Please Select a topic!</p>

if(tabContent)
  tabContentData = ( <div id='tab-content'>
    <h3>{EXAMPLES[tabContent].title}</h3>
    <p>{EXAMPLES[tabContent].description}</p>
    <pre>
      <code>
      {EXAMPLES[tabContent].code}
      </code>
    </pre>
  </div>);

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>

          <ul>

            {
              CORE_CONCEPTS.map((conceptItem => <CoreConcept key={conceptItem.title} {...conceptItem}/>))
            }
          
            {/* <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}
            
          </ul>
        </section>
        <section id='examples' >
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={tabContent === 'components'} onSelect={()=> setTabContent('components')}>Components</TabButton>
            <TabButton isSelected={tabContent === 'jsx'} onSelect={()=> setTabContent('jsx')}>JSX</TabButton>
            <TabButton isSelected={tabContent === 'props'} onSelect={()=> setTabContent('props')}>Props</TabButton>
            <TabButton isSelected={tabContent === 'state'} onSelect={()=> setTabContent('state')}>State</TabButton>
          </menu>
            {tabContentData}
        </section>
        <h2>Time to get started!</h2>
      </main> 
    </div>
  );
}

export default App;
