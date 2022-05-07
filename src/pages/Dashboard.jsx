import React, { useEffect, useState } from 'react';
import styles from "../styles/components/EmailPage.module.css";
import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import { LinearProgress } from '@mui/material';
import Request from '../bssl/Request';
import { useParams } from 'react-router';
import useMain from '../MainContext';
import Ctable from "../components/Ctable";
import Alert from "../components/elms/Alert";


function createData(id, payment_method, costumer, state, products, stage, createdAt, updatedAt) {
    return { id, payment_method, costumer, state, products, stage, createdAt, updatedAt };
  }

const Dashboard = () => {
  const [loading, setLoading] = useState(false);

   const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        let arr = [];
        for (let i = 0; i < 100; i++) {
            arr.push(createData(i + 2, "Credit Card", "nancy@gmail.com", "paid", "freedo, capucino",  "products collections", "1 week ago", "2 days ago"))
            arr.push(createData(i + 2, "New Banking", "mike@gmail.com", "paid", "xumos, nero",  "finished", "2 month ago", "1 month ago"))
            arr.push(createData(i + 2, "antikatavoli", "nancy2@gmail.com", "pedding", "nero, capucino",  "transfering", "2 week ago", "3 days ago"))
        }
        setRows(arr);
    }, [])

    const columns = [
        "id", 
        "payment_method", 
        "costumer", 
        "state", 
        "products",
        "stage",
        "createdAt",
        "updatedAt"
    ]

    /**
     * "quantity",
        "amount",
        "total",
     */

//   const { emails, setEmails } = useMain();

//   const { currentpage } = useParams();

//   useEffect(() => {
//     (async () => {
//       console.log("fetching emails ...")
//       setLoading(true);
//       await Request.get(`emails?search-page=${currentpage}`, null, async (error, data) => {
//         if(error) return;
//         setEmails(data.emails);
//         setLoading(false);
//       })
//     })()
//     return () => {
      
//     };
//   }, [currentpage, setEmails]);

  return (
      <div className={"page-in-default-01"}>
          {loading && (<LinearProgress color="secondary" style={{marginTop: "2.4px"}} />)}
          <div className={"page-in-default-01-in"}>
                <section className={"page-in-default-section"}>
                <div className='page-in-default-section-title'>
                    <div className='page-in-default-section-title-in'><TagIcon /><h1 style={{marginLeft: "var(--m)"}}>Orders</h1></div>
                    <IconButton> <RefreshIcon /></IconButton>
                </div>
                <Alert title="README" severity={"info"}><strong>This is test version. Soom we will publish the first stable version for production.</strong></Alert>
                </section>
                <br />
                <div className='page-in-default-content' >
                    <Ctable rows={rows} columns={columns} />
                </div>
          </div>
      </div>
  );
}

export default Dashboard;

