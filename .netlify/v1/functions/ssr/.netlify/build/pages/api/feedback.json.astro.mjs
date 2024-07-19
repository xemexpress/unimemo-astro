import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { a as projectFirestore } from '../../chunks/client_BEufOgtb.mjs';
export { renderers } from '../../renderers.mjs';

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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
