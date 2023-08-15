import express from "express";
import cors from "cors";
import dbModel from "./app/models/index.js";
import CategoryRoute from "./app/routes/category.routes.js";
import GameCatalogRoute from "./app/routes/gameCatalog.routes.js";
import SliderPromoRoute from "./app/routes/sliderPromo.routes.js";
import TopUpAmountRoute from "./app/routes/topUpAmount.routes.js";
import UserRoute from "./app/routes/user.routes.js";


const app = express();



app.use(cors({ 
    credentials: true, 
    origin: ['http://localhost:3006'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}));

const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

dbModel.mongoose.connect(dbModel.url, mongooseConfig)
.then(() => console.log("database connected"))
.catch(err => {
    console.log(`connection failed ${err.message}`)
    console.log(dbModel.url)
})

app.use(express.json());
app.use(express.static("public"));
app.use(CategoryRoute);
app.use(GameCatalogRoute);
app.use(SliderPromoRoute);
app.use(TopUpAmountRoute);
app.use(UserRoute);

app.listen(8000, ()=> console.log('Server up and running..'));