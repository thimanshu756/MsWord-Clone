import React, { useEffect } from 'react'
import Quill from 'quill'
import "quill/dist/quill.snow.css";

const ControlPanel = () => {
    useEffect(() => {
        const quill = new Quill(' #editor', {
            theme: 'snow'
        });
    },[])

    return (
        <div id="editor" className='main'>
        </div>
    );
}


export default ControlPanel