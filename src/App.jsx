import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { EXAMPLES } from './data.js';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState(); {/* initial state is null.  Initially had 'components' but we added conditional statement on line line 48 (line could change)*/}

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', or 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  console.log('APP COMPONENT EXECUTING');

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
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {/* Props Spread Operator: The {...conceptItem} syntax is the spread operator, which passes all properties of conceptItem as individual props to the CoreConcept component. 

            Reusability: This pattern promotes reusability and cleaner code by dynamically generating components based on data.
            
            Dynamic Rendering: The use of .map() ensures that the number of CoreConcept components rendered corresponds to the number of items in the CORE_CONCEPTS array, allowing for dynamic and flexible UI rendering based on the array's content. */}
            {CORE_CONCEPTS.map((conceptItem) => ( 
            <CoreConcept {...conceptItem} />
            ))}                                    
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}  onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}  onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}  onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent} {/* This is the conditional rendering.  If selectedTopic is null, then the tabContent will be the <p>Please select a topic.</p> otherwise it will be the <div id='tab-content'>...*/}           
        </section>
      </main>
    </div>
  );
}

export default App;
