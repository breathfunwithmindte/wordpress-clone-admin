import { Button } from '@mui/material';
import React, { useMemo } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, useLocation } from "react-router";
import useMain from "../MainContext";

const Navigation = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { setOpencompose } = useMain()

  const buttonStyle = {
    color: "inherit", 
    width: "100%", 
    justifyContent: "flex-start",
    borderBottomRightRadius: 14, 
    borderTopRightRadius: 14,
    paddingLeft: "var(--p)",
    textTransform: "none"
  }

  const primary_navigations = useMemo(() => {
    return [
      { label: "My Home", path: "myhome" },
      { label: "Stats", path: "stats" },
      { label: "Static", path: "static" },
      { label: "Categories", path: "categories" },
      { label: "DB Collections", path: "db-collections" }
    ]
  }, [])
  const crm_navigations = useMemo(() => {
    return [
      { label: "Products", path: "crm/products/read" },
      { label: "New Product", path: "crm/products/new" },
      { label: "Orders", path: "crm/orders/read" },
      { label: "Costumers", path: "costumers/read" },
    ]
  }, [])
  const website_navigations = useMemo(() => {
    return [
      { label: "Posts", path: "posts/read" },
      { label: "Pages", path: "pages/read" },
      { label: "Widgets", path: "widgets/read" },
      { label: "Plugins", path: "plugins/read" },
    ]
  }, [])
  const appearance_navigations = useMemo(() => {
    return [
      { label: "theme", path: "theme" },
      { label: "ui library", path: "ui/library" }
    ]
  }, [])
  const autheticatiton_navigations = useMemo(() => {
    return [
      { label: "Costumers", path: "costumers/read" },
      { label: "New Costumer", path: "costumers/new" },
      { label: "Authetication Settings", path: "authetication/settings" }
    ]
  }, [])

  function handleNavigate () {
    navigate("/email/" + this.path + location.search + "11")
  }
  

  return (
    <nav className='navigation'>
      <div className="composer-button-wrapper">
        <Button style={{ borderRadius: 14, width: "92%", height: 46 }} color="primary" variant="contained" onClick={()=>setOpencompose(true)} >
          <AddIcon />
          Add Item
        </Button>
      </div>
      <strong className='muted'>Primary</strong>
      <ul>
        {
          primary_navigations.map((item , index) => {
            return (
              <li key={index}>
                <Button style={buttonStyle} onClick={handleNavigate.bind({ path: item.path })}>
                  {item.label}
                </Button>
              </li>
            )
          })
        }
      </ul>
      <strong className='muted'>Website</strong>
      <ul>
        {
          website_navigations.map((item , index) => {
            return (
              <li key={index}>
                <Button style={buttonStyle} onClick={handleNavigate.bind({ path: item.path })}>
                  {item.label}
                </Button>
              </li>
            )
          })
        }
      </ul>
      <strong className='muted'>CRM</strong>
      <ul>
        {
          crm_navigations.map((item , index) => {
            return (
              <li key={index}>
                <Button style={buttonStyle} onClick={handleNavigate.bind({ path: item.path })}>
                  {item.label}
                </Button>
              </li>
            )
          })
        }
      </ul>
      <strong className='muted'>Appearance</strong>
      <ul>
        {
          appearance_navigations.map((item , index) => {
            return (
              <li key={index}>
                <Button style={buttonStyle} onClick={handleNavigate.bind({ path: item.path })}>
                  {item.label}
                </Button>
              </li>
            )
          })
        }
      </ul>
      <strong className='muted'>Authetication</strong>
      <ul>
        {
          autheticatiton_navigations.map((item , index) => {
            return (
              <li key={index}>
                <Button style={buttonStyle} onClick={handleNavigate.bind({ path: item.path })}>
                  {item.label}
                </Button>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
}

export default Navigation;
