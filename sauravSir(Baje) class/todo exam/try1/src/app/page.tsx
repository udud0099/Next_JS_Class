// "use client";
// import { useState } from "react";

// export default function Home() {
//   const [myTask, setMyTask] = useState(["abc", "xyz"]);
//   const [addNew, setAddNew] = useState("");

//   const addData = () => {
//     setMyTask.push(addNew);
//   };
//   return (
//     <>
//       <div className="w-full h-screen overflow-hidden">
//         <div className="w-[50%] mx-auto py-12 flex gap-8 flex-col">
//           <input
//             type="text"
//             placeholder="type your task hear .."
//             className="py-4  text-xl text-white border-none outline-0 focus:outline-0"
//             value={addNew}
//             onChange={(e) => setAddNew(e.target.value)}
//           />
//           <button
//             className="w-full rounded-2xl bg-white text-xl text-black py-4"
//             onClick={() => addData}
//           >
//             Add Task
//           </button>

//           <div className="mt-8">
//             <table>
//               <thead>
//                 <tr>
//                   <th className="w-16 text-left">S.N.</th>
//                   <th className=" w-100 text-left">Task</th>
//                   <th className="w-16 text-left">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {myTask.map((item, index) => (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{item}</td>
//                     <td className="flex gap-4">
//                       <button className=" cursor-pointer">Edit</button>
//                       <button className="text-red-500 cursor-pointer">
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


const myArr = ["ball"]