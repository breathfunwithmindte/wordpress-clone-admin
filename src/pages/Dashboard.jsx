import React, { useEffect, useState } from 'react';
import styles from "../styles/components/EmailPage.module.css";
import EmailcardTemplate from './Emailcard.template';
import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton } from '@mui/material';
import { LinearProgress } from '@mui/material';
import Request from '../bssl/Request';
import { useParams } from 'react-router';
import useMain from '../MainContext';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
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
      <div className={styles["emailpage"]}>
        {loading && (<LinearProgress color="secondary" style={{marginTop: "2.4px"}} />)}
        <section className={styles["email-section"]}>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <em>1 / 100</em>
        </section>
        <div className={styles['emails-container']}>
            dasdasdsad
        </div>
      </div>
  );
}

export default Dashboard;

