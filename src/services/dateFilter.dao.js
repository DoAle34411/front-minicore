import axios from 'axios';

export const fetchExpenses = async (startDate, endDate) => {
  try {
    const res = await axios.post('http://localhost:8000/expenses', { startDate, endDate });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error; // Optional: rethrow the error to handle it where the function is used.
  }
};
