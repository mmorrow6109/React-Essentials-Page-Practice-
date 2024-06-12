import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js';

export default function CoreConcepts() {
return (
    <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
            {/* Props Spread Operator: The {...conceptItem} syntax is the spread operator, which passes all properties of conceptItem as individual props to the CoreConcept component. 

            Reusability: This pattern promotes reusability and cleaner code by dynamically generating components based on data.
            
            Dynamic Rendering: The use of .map() ensures that the number of CoreConcept components rendered corresponds to the number of items in the CORE_CONCEPTS array, allowing for dynamic and flexible UI rendering based on the array's content. */}
            {CORE_CONCEPTS.map((conceptItem) => ( 
            <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}                                    
        </ul>
    </section>
    );
}
