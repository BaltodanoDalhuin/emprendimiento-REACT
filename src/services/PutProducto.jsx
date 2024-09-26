const API_URL = "http://localhost:3001/products";

async function PutProducto(id, updatedData) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
}

export { PutProducto };

