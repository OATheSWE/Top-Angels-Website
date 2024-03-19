import axios from "axios";

// export function GET(request) {
//   return Response.json({ hello: "world" });
// }

// // Example: Adding a new student to the students table
// export async function POST(request) {
//   try {
//     const body = await request.json(); // Parse request body
//     const response = await axios.post('http://localhost:3000/students', body);

//     if (response.status === 201) {
//       return Response.json({ success: 'Login Successful' })
//     } else {
//       return Response.json({ error: 'Signup UnSuccessful' })
//     }
//   } catch (error) {
//     return Response.json({ error: error })
//   }
// }

// Example: Checking if a student exists in the students table
export async function GET(request) {
  try {
    // const { name, password } = await request.json(); // Parse request body

    // if (!name || !password) {
    //   return Response.json({ error: 'Name and password are required' });
    // }

    // Query the students table to check if the name and password exist
    const response = await axios.get(
      'http://localhost:3000/students?'
    );

    return Response.json({ success: "I got It", name: response.data });
  } catch (error) {
    return Response.json({ error: error.message });
  }
}
