import instance from "./instance";
import { IUser } from "../types/product";
const getAllUser = () => {
    return instance.get('/users')
}
const addUser = (user: IUser) => {
    return instance.post('/users', user)
}
const deleteUser = (id: number) => {
    return instance.delete('/users/' + id)
}
const updateUser = (user: IUser) => {
    return instance.put('/users/' + user.id, user)
}

export { getAllUser, addUser, deleteUser, updateUser }