import React, { useEffect } from 'react';

import { accountuser } from '../../Assets/Data/account';

import '../../Assets/css/User.css';
import { accountService } from '../../_Service/accountService';


const UserProfile = () => {

    useEffect(() => {
        if (accountService.ConnectorNotConnect()) {
            getInfo();
        } else {
            navigate('/home');
        }
    }, [])

    const getInfo = () => {
        // on utilise l'appel du swagger 
    }

    return (
        <section>

            <div className="header">
                <h1>Welcome back<br />MICHEL!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accountuser.map((account) => (
                <section className="account" key={account.title}>
                    <div className="account-content-wrapper">
                        <h3 className="account-title">{account.title}</h3>
                        <p className="account-amount">{account.amount}</p>
                        <p className="account-amount-description">{account.description}</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            ))}


        </section>
    );
};

export default UserProfile;