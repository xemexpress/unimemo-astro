import { p as projectAuth } from './client_BEufOgtb.mjs';

const POST = async () => {
  try {
    await projectAuth.signOut();
    return new Response(
      JSON.stringify({ message: "Logged out!", redirect: "/" }),
      {
        status: 200
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
};

export { POST };
