import app from "./app.js";

// Load environment variables

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`HOSTIFY API SERVER RUNNING Port: ${PORT}`);
});
