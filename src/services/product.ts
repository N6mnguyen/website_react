import axios from "axios";
import api from "../config/axios";
import { FormData, IProduct } from "../interface/product";

export const GetAllProducts = async (): Promise<IProduct[]> => {
    try {
        const { data } = await api.get('products');
        return data;
    } catch (error) {
        throw new Error('Error fetching products');
    }
};

export const GetProductByID = async (id: number | string): Promise<IProduct> => {
    try {
        const { data } = await api.get(`products/${id}`);
        return data;
    } catch (error) {
        throw new Error('Error fetching product by ID');
    }
};

export const AddProduct = async (productData: FormData): Promise<IProduct> => {
    try {
        const { data } = await api.post('products', productData);
        return data;
    } catch (error) {
        throw new Error('Error adding product');
    }
};

export const UpdateProduct = async (productData: FormData, id: number | string): Promise<IProduct> => {
    try {
        const { data } = await api.put(`products/${id}`, productData);
        return data;
    } catch (error) {
        throw new Error('Error updating product');
    }
};

export const DeleteProductById = async (id: number | string): Promise<void> => {
    try {
        await api.delete(`products/${id}`);
    } catch (error) {
        throw new Error('Error deleting product');
    }
};

export const SearchProducts = async (searchTerm: string): Promise<IProduct[]> => {
    try {
        const { data } = await api.get('products');
        return data.filter((product: IProduct) => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    } catch (error) {
        throw new Error('Error searching products');
    }
};

export const GetProductsByCategory = async (categoryId: string): Promise<IProduct[]> => {
    try {
        const response = await axios.get(`/products?category=${categoryId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products by category:", error);
        return [];
    }
};
