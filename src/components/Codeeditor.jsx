import CodeMirror from '@uiw/react-codemirror';
import {html} from "@codemirror/lang-html"

const CodeEditor = ({ value, height=300, setValue=(e)=>{console.log("no set func", e)}, language }) => {

    return (
        <CodeMirror
            value={value || "no code"}
            height={height}
            theme={"dark"}
            extensions={[html()]}
            onChange={(value, viewUpdate) => setValue(value)}
        />
    )
}

export default CodeEditor;