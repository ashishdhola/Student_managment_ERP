import { delete_data, Student, update_data } from "../ActionTypes";

export const StudentEction=(data)=>{
    return{
        type:Student,
        payload:data
    }
}

export const DeleteDataAction=(pos)=>{
    return{
        type:delete_data,
        payload:pos
    }
}
export const UpdateDataAction=(pos,data)=>{
   return{
    type:update_data,
    payload:{
       pos: pos,
       data:data
    }
   }
}
