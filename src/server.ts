import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect(config.DB_CONNECTION as string);
    app.listen(config.PORT, () => {
        console.log(`Example app listening on port ${config.PORT}`);
    });
}
