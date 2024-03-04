import {Box, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import { Link } from 'react-router-dom'
import NavBarDecor from "./NavBarDecor"

type menuType = {
    name: string,
    path: string
}

type navBarPropsType = {
    menus: menuType[]
}

const NavBar = (navBarProps: navBarPropsType) => {
    const {menus} = navBarProps
    const [menu, changeMenu] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(event)
        changeMenu(newValue);
    };

    return (
        <div style={{zIndex: 10}}>
            <Box sx={{ width: '100%', backgroundColor: '#85A9BB', height: '10vh' }}>
                <Tabs
                    value={menu}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="primary"
                    aria-label="secondary tabs example"
                >
                    {
                        menus.map((m: menuType, index: number) => {
                               return <Tab value={index} label={m.name} key={index} component={Link} to={m.path}/>
                        })
                    }
                </Tabs>
            </Box>
            <div style={{position: 'relative', zIndex: -1}}>
                <NavBarDecor/>
            </div>
        </div>
    )
}

export default NavBar
