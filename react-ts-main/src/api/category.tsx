import instance from "./instance";
import { ICate } from "../types/product";
const getAllCate = () => {
    return instance.get('/categories')
}
const addCate = (cate: ICate) => {
    return instance.post('/categories', cate)
}
const deleteCate = (id: number) => {
    return instance.delete('/categories/' + id)
}
const updateCate = (cate: ICate) => {
    return instance.put('/categories/' + cate.id, cate)
}

export { getAllCate, addCate, deleteCate, updateCate }