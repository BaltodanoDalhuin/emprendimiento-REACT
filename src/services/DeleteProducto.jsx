const API_URL = "http://localhost:3001/products";

async function DeleteProducto(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
}

export { DeleteProducto };
