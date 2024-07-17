import type { APIRoute } from "astro";
import { projectAuth } from "../../firebase/client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { ROUTES } from "../../utils/routes";

export const POST: APIRoute = async ({ request }) => {
    const { email, password } = await request.json();

    try {
        await signInWithEmailAndPassword(projectAuth, email, password);
        console.log("hello world");
        return new Response(
            JSON.stringify({
                message: "Logged in successfully!",
                redirect: ROUTES.HOME,
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        // console.error("Login error:", error);

        let errorMessage = "An unexpected error occurred. Please try again.";

        if (error instanceof FirebaseError) {
            switch (error.code) {
                case "auth/user-not-found":
                case "auth/wrong-password":
                    errorMessage =
                        "Invalid email or password. Please check your credentials and try again.";
                    break;
                case "auth/invalid-email":
                    errorMessage = "The email address is not valid.";
                    break;
                case "auth/user-disabled":
                    errorMessage =
                        "This account has been disabled. Please contact support.";
                    break;
                case "auth/too-many-requests":
                    errorMessage =
                        "Too many unsuccessful login attempts. Please try again later or reset your password.";
                    break;
                // Add more cases as needed
            }
        }

        return new Response(JSON.stringify({ message: errorMessage }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }
};
