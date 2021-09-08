import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts'

export const getAllPost = async () => {
    try {
      return await axios.get(`${url}`);
     
    } catch (error) {
      return error;
    }
  };

  export const getSpecificPost = async (id) => {
    try {
      console.log(`${url}?userId=${id}`);
      return await axios.get(`${url}?userId=${id}`);
      
    } catch (error) {
      return error;
    }

    
  };
  
  export const deleteSpecificPost = async (id) => {
    try {
      console.log(`${url}?userId=${id}`);
      return await axios.delete(`${url}/${id}`);
      
    } catch (error) {
      return error;
    }
  };



  export const createPost = async (title,body) => {
    console.log("title",title) ;
    console.log("body", body);
    console.log("url",url)
    try {
      return await axios.post(url,JSON.stringify({
        title: {title},
        body: {body},
        userId: 1,
      }));
      
    } catch (error) {
      return error;
    }
  };
