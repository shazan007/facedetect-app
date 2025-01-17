import React from 'react';
import './Imagelinkform.css'


const Imagelinkform = ({onInputChange, onButtonSubmit})=>{
        return(
            <div>
                <p className='white f3'>
                    {'This magic brain will detect faces in your pic. Give it a try'}</p>
                    <div className='center'>
                        <div className='form center pa4 br3 shadow-5'>
                           <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
                           <button className='w-30 grow f4 link ph3 pv dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
                        </div>
                    </div>
                
            </div>
        );
}

export default Imagelinkform;