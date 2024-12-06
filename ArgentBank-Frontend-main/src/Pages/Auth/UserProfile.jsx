// UserProfile.js  
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, updateProfile } from '../../Redux/Actions/profileActions';
import { accountuser } from '../../Assets/Data/account';
import { accountService } from '../../_Service/accountService';
import '../../Assets/css/User.css';

const UserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState("");

    const profile = useSelector((state) => state.profile);
    const { userDetails, loading, error } = profile;

    // Vérification de la connexion et récupération du profil utilisateur  
    useEffect(() => {
        if (!accountService.ConnectorNotConnect()) {
            navigate('/signin');
        } else {
            dispatch(getProfile({ token: accountService.getToken() }));
        }
    }, [dispatch, navigate]);

    // Mise à jour du prénom lorsque `userDetails` change  
    useEffect(() => {
        if (userDetails) {
            setFirstName(userDetails.firstName);
        }
    }, [userDetails]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        dispatch(updateProfile({ token: accountService.getToken(), firstName }))
            .then(() => setIsEditing(false))
            .catch((error) => {
                console.error('Erreur lors de la mise à jour du profil:', error);
            });
    };

    const handleInputChange = (event) => {
        setFirstName(event.target.value);
    };

    return (
        <section>
            <div className="header">
                <h1>Welcome back<br />{firstName || "User"}!</h1> {/* Afficher "User" si firstName est vide */}
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
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accountuser.length > 0 ? ( // Vérification si il y a des comptes à afficher  
                accountuser.map((account) => (
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
                ))
            ) : (
                <p>No accounts available</p> // Message si aucun compte n’est disponible  
            )}
        </section>
    );
};

export default UserProfile;