import styles from "../styles/components/ElmCodeblockTemplate.module.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button, IconButton, TextField } from "@mui/material";

const CodeblockSettings = () => {



    return (
        <div className={styles["v1-codeblock-settings"]}>
             <FormGroup row>
                <FormControlLabel checked={true} control={<Switch defaultChecked />} label="Autheticated" />
                <FormControlLabel control={<Switch />} label="Public" />
            </FormGroup>
            <IconButton style={{marginRight: "var(--m1)"}}><SettingsIcon /></IconButton>
            <Button variant="contained">Save Changes</Button>
            <div className={styles["v1-codeblock-settings-window"]}>
                <Button color="secondary" variant="outlined">Import Template/Widget</Button>
                <br />
                <strong>Configurations</strong>
                <em className="muted">Choise data that should be included to current page.</em>
                <br />
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
                <strong>Advanced Configurations</strong>
                <em className="muted">currently not available.</em>
            </div>
        </div>
    )
}

export default CodeblockSettings;