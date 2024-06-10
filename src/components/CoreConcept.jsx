export default function CoreConcept({image, title, description}) {
    return (
      <li>
        {/* These are defined within the CoreConcept component */}
        <img src={image} alt={title} /> 
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }
  
  // This is the same as the above function, but using props instead of destructuring
  
  // function CoreConcept(props) {
  //   return (
  //     <li>
  //       {/* These are defined within the CoreConcept component */}
  //       <img src={props.image} alt={props.title} /> 
  //       <h3>{props.title}</h3>
  //       <p>{props.description}</p>
  //     </li>
  //   );
  // }
  