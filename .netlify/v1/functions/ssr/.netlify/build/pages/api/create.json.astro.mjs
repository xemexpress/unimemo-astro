import { createUserWithEmailAndPassword } from 'firebase/auth';
import { p as projectAuth } from '../../chunks/client_BEufOgtb.mjs';
import { R as ROUTES } from '../../chunks/routes_Be0JyTu8.mjs';
export { renderers } from '../../renderers.mjs';

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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
