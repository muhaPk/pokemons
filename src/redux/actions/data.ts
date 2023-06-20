import axios from "axios"
import {setData} from "../reducers/dataReducer"
import {setCurrentData} from "../reducers/currentDataReducer"

export const getData = (endpoints: string[]) => {
    return async (dispatch: any) => {
        try {
            axios
                .all(endpoints.map((endpoint: string) => axios.get(endpoint)))
                .then((result: object[]) => {
                    const formatData = result.map((el: any) => el.data)
                    dispatch(setData(formatData))
                    dispatch(setCurrentData(formatData?.slice(0, 50)))
                })
        }
        catch (error) {
            console.log("data.js getData catch", error)
        }
    }

}
