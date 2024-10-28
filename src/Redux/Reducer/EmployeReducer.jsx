import { delete_data, Student, update_data } from "../ActionTypes";


let allget = JSON.parse(localStorage.getItem("employ"))
const initialValue = {
    employee: allget ? allget : []
}


export const EmployeReducer = (state = initialValue, action) => {
    console.log(action);
    
    switch (action.type) {
        case Student: {
            let dataa = [...state.employee, action.payload]
            localStorage.setItem("employ", JSON.stringify(dataa))
            return { ...state, employee: dataa }
        }

        case delete_data:{
            let FilterData= state.employee.filter((val,i)=>{
                return action.payload!=i
            })
            localStorage.setItem("employ", JSON.stringify(FilterData))
            return{...state, employee:FilterData}

        }

        case update_data:{
            state.employee.map((v,i)=>{
                if(i=action.payload.pos)
                {
                    state.employee[i]=action.payload.data
                }
            })
            localStorage.setItem("employ", JSON.stringify(state.employee))
            return{
                ...state,employee:state.employee
            }

        }
        default: return state;


    }
}