const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
export const connectionStr = `mongodb+srv://${username}:${password}@cluster0.fffgi7z.mongodb.net/userData?retryWrites=true&w=majority`;
