import CodeMirror from '@uiw/react-codemirror';
import {html} from "@codemirror/lang-html"
import {json} from "@codemirror/lang-json"
import { useMemo } from 'react';

const CodeEditor = ({ value, height=300, setValue=(e)=>{console.log("no set func", e)}, language }) => {

    const extensions = useMemo(() => {
        if(language === "json") return [json()]
        return [html()]
    }, [])

    const default_value = useMemo(() => {
        if(language === "json") return '{"your-json": "some value"}'
        return "<div> build something awesome </div> "
    }, [])

    return (
        <CodeMirror
            value={value || default_value}
            height={height}
            theme={"dark"}
            extensions={extensions}
            onChange={(value, viewUpdate) => setValue(value)}
        />
    )
}

export default CodeEditor;