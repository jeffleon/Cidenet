import Head from 'next/head'
import * as React from 'react'
import Home from "../../styles/Home.module.css"

const Layout: React.FC = ({children}) =>(
        <div className={Home.page_header}>
            {children}
        </div>
);

export default Layout;