
import {mcConvert} from 'morse-in-one';
import './../../css/livecode.css';
export default function LiveCode(){

    return(
        <>
        <textarea className='prettyprint' contentEditable='true' name="" id="live-code" cols="90" rows="10">
            {`console.log('hello')`}
        </textarea>
        <p> Output {()=>eval("console.log('hello')")}</p>
        <p>{mcConvert('hello')}</p>
        </>
    )
}