import { ExpoRequest, ExpoResponse } from "expo-router/server";
import axios from "axios";

// // staff Routes
export async function POST(request: ExpoRequest) {
  try {
    const staffData = await request.json();

    const response = await axios.post(
      "http://localhost:3000/teachers",
      staffData
    );

    // console.log(response.data.message);

    if (response.status === 201) {
      // Successful creation
      
      return ExpoResponse.json({ message: "Staff Registration Successful" });
    } else if (response.status === 401) {
      // Conflict error
      return ExpoResponse.json({ error: "Staff Already Exists" });
    }
  } catch (error: any) {
      console.log(error);
      return ExpoResponse.json({ error: "An error occurred" });
  }
}

// export async function POST(request: ExpoRequest) {
//   const body = await request.json();

//   console.log(body);

//   return new ExpoResponse("true that i am digital alchemist");
// }

// Teacher Routes
// export function POST_teachers(request: ExpoRequest) {
//   const teacherData = request.body;

//   return axios
//     .post("http://localhost:3000/teachers", teacherData)
//     .then((response) => ExpoResponse.json(response.data))
//     .catch((error) => {
//       console.error("Error sending teacher data:", error);
//     });
// }
