import { useState } from 'react';

import Tabs from './Tabs.jsx';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import { EXAMPLES } from '../data.js';

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState(); {/* initial state is null.  Initially had 'components' but we added conditional statement on line line 48 (line could change)*/}

    function handleSelect(selectedButton) {
      // selectedButton => 'components', 'jsx', 'props', or 'state'
      setSelectedTopic(selectedButton);
      // console.log(selectedTopic);
    }
  
    //we use this variable and return statement to conditionally render the content of the tabContent variable in the {tabContent} on line 65
    let tabContent = <p>Please select a topic.</p>;
  
    if (selectedTopic) {
      tabContent = (
        <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
      );
    }

    return (
        <Section title='Examples' id='examples'>
          {/* This is conditional rendering.  If selectedTopic is null, then the tabContent will be the <p>Please select a topic.</p> otherwise it will be the <div id='tab-content'>...*/} 
          <Tabs 
            buttons={
            <>
              <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
              <TabButton isSelected={selectedTopic === 'jsx'}  onClick={() => handleSelect('jsx')}>JSX</TabButton>
              <TabButton isSelected={selectedTopic === 'props'}  onClick={() => handleSelect('props')}>Props</TabButton>
              <TabButton isSelected={selectedTopic === 'state'}  onClick={() => handleSelect('state')}>State</TabButton>
            </>  
          }>

            {tabContent}
          </Tabs>                   
        </Section>
    );
}