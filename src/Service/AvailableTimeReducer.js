const initialValue = ['Not available']

const reducer = (state,action)=>{
    switch (action.type){
        case 'INITIALIZE' : {
           return (
            state = [
                '19:00',
                '20:22'
            ]
            )
           
        }
        default:{
            return state
        }

    }
}

export {initialValue,reducer}