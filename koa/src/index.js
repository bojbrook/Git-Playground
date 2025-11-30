const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "Hello from Koa!";
});

router.get("/about", (ctx) => {
  ctx.body = { message: "This is the about route." };
});

// register routes
app.use(router.routes());
app.use(router.allowedMethods());
// Run server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Koa server running on http://localhost:${PORT}`);
});
