import React, { useEffect } from 'react'
import Hero from '../../components/Hero'
import Features from '../../containers/Features'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';

/**
 * Creates Index page component
 * @returns { HTMLElement }
 */
const Index = () => {
    document.title = "Argent Bank - Home Page";
    const navigate = useNavigate()
    const token = useSelector((state) => state.login.token)
    const logoClick = useSelector((state) => state.login.logoClick)
    useEffect(() => {
        if ((token !== null || localStorage.getItem('token') !== null) && logoClick !== true) {
            navigate('/profile')
        } else if (logoClick === true) {
            navigate('/')
        }
    }, [token, navigate, logoClick])
    return (
        <>
            <Header />
            <main className='main'>
                <Hero />
                <Features />
            </main>
        </>
    )
}

export default Index