import { app } from "../../src/infra/webserver";
import { PORT } from "./config/port";

app.listen(PORT, () => {
  console.log(`🚀 Server ready at: ${PORT}`);
});
