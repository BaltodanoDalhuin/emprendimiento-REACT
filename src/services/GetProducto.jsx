const API_URL = "http://localhost:3001/products";

async function GetProducto() {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export default { GetProducto };
