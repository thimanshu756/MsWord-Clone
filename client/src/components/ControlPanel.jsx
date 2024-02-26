import React, { useEffect } from 'react'
import Quill from 'quill'
import "quill/dist/quill.snow.css";
import { FaUndo,FaRedo } from "react-icons/fa";

const ControlPanel = () => {
//    const toolbarOptions = [
//         ['bold', 'italic', 'underline'],
//         ['undo' , 'redo' ],
//         [{ 'indent': '-1'}, { 'indent': '+1' }],
//         [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
//         ['image']
//     ];
const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];
    let quill;
    useEffect(() => {
         quill = new Quill(' #editor', {
            theme: 'snow',
            modules:{
                toolbar:toolbarOptions
            }
        });
    },[])

    return (
        <>
        <div className=' flex flex-col'>
        <div className=' flex justify-between w-[100px] mx-[130px] m-2 '>
        <button className=' flex items-center justify-center border p-1 w-[40px] rounded-md hover:bg-slate-300 transition-all delay-50' onClick={()=>{
                quill.history.undo();
            }}> 
            <FaUndo/>
            </button>
        <button className=' flex items-center justify-center border p-1 w-[40px] rounded-md hover:bg-slate-300 transition-all delay-50'  onClick={()=>{
                quill.history.redo();
            }}> <FaRedo/></button>
        </div>
           <div id="editor" className='main'>
            
            </div>
        </div>

    
        </>
     
    );
}


export default ControlPanel