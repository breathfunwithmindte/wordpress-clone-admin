import { Alert, AlertTitle } from "@mui/material"


const CAlert = ({title, children, severity}) => (
    <Alert severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        {children}
    </Alert>
)

export default CAlert;