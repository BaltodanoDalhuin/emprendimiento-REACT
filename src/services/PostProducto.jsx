const API_URL = "http://localhost:3001/products";

async function PostProducto(name, brand, category, price, image) {
    try {
        const productData = {
            name,
            brand,
            category,
            price,
            image
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });
        return await response.json();
    } catch (error) {
        console.error('Error posting product:', error);
        throw error;
    }
}

export { PostProducto };
