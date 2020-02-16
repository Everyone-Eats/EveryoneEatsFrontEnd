import Axios from "axios";

const apiUrl = process.env.API_URL || "http://localhost:8000";

export const createUser = async userInfo => {
  try {
    const newUser = await Axios.post(apiUrl, userInfo);
    return newUser.data;
  } catch (err) {
    return { err: "Something went wrong" };
  }
};

export const getAllUsers = async type => {
  try {
    const users = await Axios.get(
      `${apiUrl}/api/users/${type ? "?type=" + type : ""}`
    );
    return users;
  } catch (err) {
    return { err: "Something went wrong" };
  }
};

export const getUser = async id => {
  try {
    const user = await Axios.get(`${apiUrl}/api/users/${id}`);
    return user.data;
  } catch (err) {
    return { err: "Somthing went wrong" };
  }
};

export const updateUser = async (id, updateInfo) => {
  try {
    await Axios.put(`${apiUrl}/api/users/${id}`, updateInfo);
  } catch (err) {
    return { err: "Something went wrong" };
  }
};

export const deleteUser = async id => {
  try {
    await Axios.delete(`${apiUrl}/api/users/${id}`);
  } catch (err) {
    return { err: "Something went wrong" };
  }
};
