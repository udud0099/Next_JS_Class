const { username, password } = process.env;

export const connectionSrt =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@cluster0.lvsvqd6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
