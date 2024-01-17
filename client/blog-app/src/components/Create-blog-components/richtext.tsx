import JoditEditor from 'jodit-react';
import { useRef,useState,useMemo, } from 'react';

function Richtext(){
    const editor = useRef(null);
	const [content, setContent] = useState('');

	

	return (
		<JoditEditor
        ref={editor}
        value={content}
        onChange={(e)=>{setContent(e)}}/>
	);

}
export default Richtext;