//{children} is the same as (props) and then passing {props.children} in the return statement

// 'children' is the only prop that is required to be called 'children'.  All other props are to be named as needed.

export default function TabButton({children, isSelected, ...props}) {
    console.log('TABBUTTON COMPONENT EXECUTING');
  
    return (
        <li>
            <button className={isSelected ? 'active' : undefined } {...props}>{children}</button>
        </li>
    );
}