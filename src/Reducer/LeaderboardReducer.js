export const getWeeklyScore=(state={Score:[]},action)=>{
    switch(action.type){
        case 'WEEKLY_REQUEST':
            return{
                ...state,
               loading:true,
            }
            case 'WEEKLY_SUCCESS':
                return{
                    Score: action.payload ,
                    loading:false,
                    success:true,
                }
                case 'WEEKLY_ERROR':
                    return{
                        loading:false,
                        err:action.payload
                        
                    }
                    default :return {
                        state
                    }
    }

}
export const getMonthlyScore=(state={MonthlyScore:[]},action)=>{
    switch(action.type){
        case 'MONTHLY_REQUEST':
            return{
                ...state,
               loading:true,
            }
            case 'MONTHLY_SUCCESS':
                return{
                    MonthlyScore: action.payload ,
                    loading:false,
                    success:true,
                }
                case 'MONTHLY_ERROR':
                    return{
                        loading:false,
                        err:action.payload
                        
                    }
                    default :return {
                        state
                    }
    }

}


export const getOverallScore=(state={OverallScore:[]},action)=>{
    switch(action.type){
        case 'OVERALL_REQUEST':
            return{
                ...state,
               loading:true,
            }
            case 'OVERALL_SUCCESS':
                return{
                    OverallScore: action.payload ,
                    loading:false,
                    success:true,
                }
                case 'OVERALL_ERROR':
                    return{
                        loading:false,
                        err:action.payload
                        
                    }
                    default :return {
                        state
                    }
    }

}