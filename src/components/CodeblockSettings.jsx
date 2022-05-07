import styles from "../styles/components/ElmCodeblockTemplate.module.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import CodeEditor from "./Codeeditor";

const CodeblockSettings = () => {
    const [open, setOpen] = useState(false);


    return (
        <div className={styles["v1-codeblock-settings"]}>
             <FormGroup row>
                <FormControlLabel checked={true} control={<Switch defaultChecked />} label="Autheticated" />
                <FormControlLabel control={<Switch />} label="Public" />
            </FormGroup>
            <IconButton style={{marginRight: "var(--m1)"}} onClick={()=>setOpen(!open)}><SettingsIcon /></IconButton>
            <Button variant="contained">Save Changes</Button>
            {open && (<div className={styles["v1-codeblock-settings-window"]}>
                <Button color="secondary" variant="outlined">Import Template/Widget</Button>
                <br />
                <strong>Configurations</strong>
                <em className="muted">Choise data that should be included to current page.</em>
                <FormGroup row >
                    <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Products" />
                    <FormControlLabel control={<Checkbox color="secondary"/>} label="Orders" />
                    <FormControlLabel control={<Checkbox color="secondary"/>} label="Comments" />
                    <FormControlLabel control={<Checkbox color="secondary"/>} label="Categories" />
                    <FormControlLabel control={<Checkbox color="secondary"/>} label="Blogs" />
                    <FormControlLabel control={<Checkbox color="secondary"/>} label="Reviews" />
                    <FormControlLabel control={<Checkbox color="secondary"/>} label="Costumers" />
                </FormGroup>
                <br />
                <em className="muted">General options</em>
                <FormGroup row>
                    <FormControlLabel control={<Switch defaultChecked />} label="Allow client side queries." />
                    <FormControlLabel control={<Switch defaultChecked />} label="Send single item." />
                </FormGroup>
                <em className="muted">Search By single field and value.</em>
                <br />
                <TextField label="Search By" placeholder="(field=value)" />
                <br />
                <strong>Advanced Configurations</strong>
                <em className="muted">Add advanced queries.</em>
                <CodeEditor language={"json"} height={"256px"} />
                <strong>Run Costum Code</strong>
                <em className="muted">currently not available.</em>
            </div>)}
        </div>
    )
}

export default CodeblockSettings;