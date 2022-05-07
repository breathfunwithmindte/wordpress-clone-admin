import styles from "../styles/components/ElmCodeblockTemplate.module.css"
import CodeEditor from "../components/Codeeditor"
import { Button } from "@mui/material";


const ElmCodeblockTemplate = ({ list, selected, codeblock, value, setValue, children }) => {

    return (
        <div className={styles["elm-codeblock-container"]}>
            <ul>
                <li><Button style={{width: "100%"}}>Home Page</Button></li>
            </ul>
            <div className={styles["elm-codeblock"]}>
                <section style={{height: "39px", marginBottom: 5}}>
                    {children}
                </section>
                <CodeEditor height={"639px"} value={value} setValue={setValue} />
            </div>
        </div>
    )
}

export default ElmCodeblockTemplate;