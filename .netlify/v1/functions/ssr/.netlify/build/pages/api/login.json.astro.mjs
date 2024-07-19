import { p as projectAuth } from '../../chunks/client_BEufOgtb.mjs';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { R as ROUTES } from '../../chunks/routes_Be0JyTu8.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const { email, password } = await request.json();
  try {
    await signInWithEmailAndPassword(projectAuth, email, password);
    console.log("hello world");
    return new Response(
      JSON.stringify({
        message: "Logged in successfully!",
        redirect: ROUTES.HOME
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    let errorMessage = "An unexpected error occurred. Please try again.";
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/user-not-found":
        case "auth/wrong-password":
          errorMessage = "Invalid email or password. Please check your credentials and try again.";
          break;
        case "auth/invalid-email":
          errorMessage = "The email address is not valid.";
          break;
        case "auth/user-disabled":
          errorMessage = "This account has been disabled. Please contact support.";
          break;
        case "auth/too-many-requests":
          errorMessage = "Too many unsuccessful login attempts. Please try again later or reset your password.";
          break;
      }
    }
    return new Response(JSON.stringify({ message: errorMessage }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
