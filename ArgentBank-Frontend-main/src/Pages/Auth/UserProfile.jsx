import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { accountuser } from '../../Assets/Data/account';
import { accountService } from '../../_Service/accountService';
import '../../Assets/css/User.css';

const UserProfile = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState("MICHEL");

    useEffect(() => {
        if (!accountService.ConnectorNotConnect()) {
            navigate('/signin');
        } else {
            getInfo();
        }
    }, [navigate]);

    const getInfo = () => {
        // Utilisez l'appel du swagger pour récupérer les informations de l'utilisateur
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        // Sauvegarder le prénom mis à jour (par exemple, en appelant une API)
        setIsEditing(false);
    };

    const handleInputChange = (event) => {
        setFirstName(event.target.value);
    };

    return (
        <section>
            <div className="header">
                <h1>Welcome back<br />{firstName}!</h1>
                {isEditing ? (
                    <div>
                        <input
                            type="text"
                            value={firstName}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSaveClick} className="save-button">Save</button>
                    </div>
                ) : (
                    <button onClick={handleEditClick} className="edit-button">Edit Name</button>
                )}
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
