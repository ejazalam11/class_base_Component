import React from 'react'

export default function H1(props) {
    let message = prompt("Please enter the heading");

  switch (message) {
    case "h1":
      message = <h1>{props.text}h1</h1>;
      break;
    case "h2":
      message = <h2>{props.text} h2</h2>;
      break;
    case "h3":
      message = <h3>{props.text} h3</h3>;
      break;
    default:
      message = <p>Invalid heading</p>;
  }
 

// function clicked(msg){
//     switch (msg) {
//             case "h1":
//               msg = <h1>{props.text}h1</h1>;
//               break;
//             case "h2":
//               msg = <h2>{props.text} h2</h2>;
//               break;
//             case "h3":
//               msg = <h3>{props.text} h3</h3>;
//               break;
//             default:
//               msg = <p>Invalid heading</p>;
//           }
// }
  return (
    <div>
      
{message}
{/* <input type="text" onClick={clicked} />
<button >Check heading</button> */}

    </div>
  )
}
