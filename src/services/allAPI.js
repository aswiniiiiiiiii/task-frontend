import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"


//register called by Auth
export const registerAPI = async(reqBody)=>{
  return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}
//loginAPI called by Auth
export const loginAPI = async(reqBody)=>{
  return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}

//addtaskAPI called by taskfrom
export const addtaskAPI = async(reqBody,reqHeader)=>{
  return await commonAPI("POST",`${SERVER_URL}/addtask`,reqBody,reqHeader)
}

//getAllTask called by taskfrom
export const getAllTaskAPI = async(reqHeader)=>{
  return await commonAPI("GET",`${SERVER_URL}/all-task`,{},reqHeader)
}

//updateTask called by taskfrom
export const updateTaskAPI = async (id, reqBody, reqHeader) => {
  return await commonAPI("PUT", `${SERVER_URL}/tasks/${id}/update`, reqBody, reqHeader);
};


//deleteTask called by taskfrom
export const deleteTaskAPI = async(id,reqHeader)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/tasks/${id}/delete-task`,[],reqHeader)
}