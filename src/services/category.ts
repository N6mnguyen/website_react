import api from "../config/axios"
import { FormCate } from "../interface/category";
export const GetAllCategorys = async ()=>{
    try {
        const {data} = await api.get('categorys')
        return data
    } catch (error) {
       throw new Error('lỗi')        
    }
}
export const GetCategoryByID = async (id:number|string)=>{
    try {
        const {data} = await api.get(`categorys/${id}`)
        return data
    } catch (error) {
        throw new Error('lỗi')  
        
    }
}
export const AddCategory= async (categorys:FormCate)=>{
    try {
        const {data} = await api.post(`categorys`,categorys)
        return data
    } catch (error) {
        throw new Error('lỗi')          
    }
}
export const UpdateCategory = async (categorys:FormCate,id:number|string)=>{
    try {
        const {data} = await api.put(`categorys/${id}`,categorys)
        return data
    } catch (error) {
        throw new Error('lỗi')  
        
    }
}
export const DeleteCategoryById = async (id:number|string)=>{
    try {
        const {data} = await api.delete(`categorys/${id}`)
        return data
    } catch (error) {
        throw new Error('lỗi')       
    }
}