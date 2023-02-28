require("module-alias/register");

import { app } from "@/infra/webserver";
import { PORT } from "./config/port";

app.listen(PORT, () => {
  console.log(`🚀 Server ready at: ${PORT}`);
});
