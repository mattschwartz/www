import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const Layout = ({ children }) => (
    <div style={{ overflow: 'hidden' }}>
        <Header />
        {children}
    </div>
)

export default Layout
