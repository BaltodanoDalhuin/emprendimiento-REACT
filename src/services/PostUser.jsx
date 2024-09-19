async function PostUser(usuario,email,password) {
    try {
        const userData = { 
            email,
            password
        };

        const response = await fetch("http://localhost:5173/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        return await response.json();
        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{PostUser}