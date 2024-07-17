import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { a as projectFirestore } from './client_BEufOgtb.mjs';

const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { experience, improvement, newIdeas } = data;
    if (experience || improvement || newIdeas) {
      const feedbackRef = await addDoc(
        collection(projectFirestore, "feedback"),
        {
          experience: experience || "",
          improvement: improvement || "",
          newIdeas: newIdeas || "",
          timestamp: serverTimestamp(),
          userId: "anonymous"
          // You can modify this if you're tracking user sessions
        }
      );
      console.log("Feedback saved with ID: ", feedbackRef.id);
    }
    return new Response(
      JSON.stringify({
        message: "Thank you for your time!",
        redirect: "/thank-you"
        // Adjust this URL to your actual thank you page
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error processing feedback:", error);
    return new Response(
      JSON.stringify({
        message: "Thank you for your time!",
        redirect: "/thank-you"
        // Adjust this URL to your actual thank you page
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

export { POST };
