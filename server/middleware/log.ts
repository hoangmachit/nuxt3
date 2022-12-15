export default defineEventHandler((event) => {
  console.log("API Middleware: " + event.node.req.url);
});
