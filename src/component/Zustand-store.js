import { create } from 'zustand'

const CreateStore = create((set)=>({
    name: 'himanshu',
    id:1,
    increment: ()=>{
        set((state)=>({
            id: state.id + 1
        }))
    }
}))


export default CreateStore;
