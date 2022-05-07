import styles from "../styles/components/ElmCodeblockTemplate.module.css"
import CodeEditor from "../components/Codeeditor"
import { Button } from "@mui/material";


const ElmCodeblockTemplate = ({ list, selected, codeblock, value, setValue, children }) => {

    return (
        <div className={styles["elm-codeblock-container"]}>
            <ul>
                <li><Button style={{ textTransform: "none"}}>Home Page</Button></li>
                <li><Button style={{ textTransform: "none"}}>404 | not found</Button></li>
                <li><Button style={{ textTransform: "none"}}>500 | Error</Button></li>
                <li><Button style={{ textTransform: "none"}}>Login (costumers)</Button></li>
                <li><Button style={{ textTransform: "none"}}>Register (costumers)</Button></li>
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