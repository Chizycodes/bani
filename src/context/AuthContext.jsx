import { useContext, createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [account, setAccount] = useState(null);

	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	};

	const logOut = () => {
		signOut(auth);
	};

	useEffect(() => {
		const accountDets = JSON.parse(localStorage.getItem('bani_account'));
		if (accountDets) {
			setAccount(accountDets);
		}

		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	useEffect(() => {
		console.log(user, 'user');
	}, [user]);

	return (
		<AuthContext.Provider value={{ googleSignIn, logOut, user, account, setAccount }}>{children}</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
