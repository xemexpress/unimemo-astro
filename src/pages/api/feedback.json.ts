import type { APIRoute } from "astro";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { projectFirestore } from "../../firebase/client";

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        const { experience, improvement, newIdeas } = data;

        // Check if there's any input
        if (experience || improvement || newIdeas) {
            // Add feedback to Firestore
            const feedbackRef = await addDoc(
                collection(projectFirestore, "feedback"),
                {
                    experience: experience || "",
                    improvement: improvement || "",
                    newIdeas: newIdeas || "",
                    timestamp: serverTimestamp(),
                    userId: "anonymous", // You can modify this if you're tracking user sessions
                }
            );

            console.log("Feedback saved with ID: ", feedbackRef.id);
        }

        // Always return a success response with a redirect
        return new Response(
            JSON.stringify({
                message: "Thank you for your time!",
                redirect: "/thank-you", // Adjust this URL to your actual thank you page
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error processing feedback:", error);
        // Even on error, redirect to thank you page
        return new Response(
            JSON.stringify({
                message: "Thank you for your time!",
                redirect: "/thank-you", // Adjust this URL to your actual thank you page
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
};
