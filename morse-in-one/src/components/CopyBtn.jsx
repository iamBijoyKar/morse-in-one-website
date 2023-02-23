import { CopyToClipboard } from 'react-copy-to-clipboard';
import copy_logo from './../assets/copy-btn.png';
CopyTo.props ={
    text:String
}
export default function CopyTo(props){
    // console.log(props.text)
    return(
        <>
            <CopyToClipboard text={props.text} >
            <button>
                <img src={copy_logo} width="20" alt="" />
            </button>
            </CopyToClipboard>
        </>
    )
}