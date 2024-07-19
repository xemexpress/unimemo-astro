import { p as projectAuth } from '../../chunks/client_BEufOgtb.mjs';
export { renderers } from '../../renderers.mjs';

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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
