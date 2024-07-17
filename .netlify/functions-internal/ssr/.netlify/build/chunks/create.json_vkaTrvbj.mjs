import { createUserWithEmailAndPassword } from 'firebase/auth';
import { p as projectAuth } from './client_BEufOgtb.mjs';
import { R as ROUTES } from './routes_Be0JyTu8.mjs';

const POST = async ({ request }) => {
  const { email, password } = await request.json();
  try {
    await createUserWithEmailAndPassword(projectAuth, email, password);
    return new Response(
      JSON.stringify({
        message: "Accounted created!",
        redirect: ROUTES.HOME
      }),
      {
        status: 201
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
};

export { POST };
