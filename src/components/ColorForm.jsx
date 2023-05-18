// import React, { useState } from 'react';

// const ColorForm = ({ addColor }) => {
//   const [color, setColor] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (color) {
//       addColor(color);
//       setColor('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={color}
//         onChange={(e) => setColor(e.target.value)}
//         placeholder="#FFFFFF"
//       />
//       <button type="submit">Add Color</button>
//     </form>
//   );
// };

// export default ColorForm;
