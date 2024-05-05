import app from "./app";

const PORT = 4000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running`);
});
