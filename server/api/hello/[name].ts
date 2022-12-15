export default eventHandler((event) => {
  const { name } = event.context.params;
  return `Hello ${name}!`;
});
