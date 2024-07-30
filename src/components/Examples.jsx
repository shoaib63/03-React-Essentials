import { useState } from "react"; 
import { EXAMPLES } from "../data";
import Section from './Section'
import TabButton from "./TabButton";
import Tabs from "./Tabs";




export default function Examples() {
    const [tabContent, setTabContent] = useState();
    let tabContentData = <p>Please Select a topic!</p>

    if (tabContent)
        tabContentData = (<div id='tab-content'>
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
                <code>
                    {EXAMPLES[tabContent].code}
                </code>
            </pre>
        </div>);

    return (
        <Section id='examples' title="Example" >
            <Tabs
            buttons={ <> <TabButton isSelected={tabContent === 'components'} onSelect={() => setTabContent('components')}>Components</TabButton>
                <TabButton isSelected={tabContent === 'jsx'} onSelect={() => setTabContent('jsx')}>JSX</TabButton>
                <TabButton isSelected={tabContent === 'props'} onSelect={() => setTabContent('props')}>Props</TabButton>
                <TabButton isSelected={tabContent === 'state'} onSelect={() => setTabContent('state')}>State</TabButton>
                </>}>
                {tabContentData}
            </Tabs>

        </Section>
    )
}