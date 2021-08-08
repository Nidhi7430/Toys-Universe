import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ToysUniverse } from "./api/routes";
import { knex } from "./knex";
import * as knexConfig from "./knex/knex.config";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import helmet from "helmet";
import forceSSL from "express-force-ssl";
import expressNunjucks from "express-nunjucks";

dotenv.config();
const app = express();
// save env variables into constant
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// TODO learn this
app.use((req: Request, res: Response, next: NextFunction) => {
  res.locals.nonce = Buffer.from(uuidv4()).toString("base64");
  next();
});

// TODO learn this
// Setup the viwe engine for express so we can inject a nonce into the index.html file,
// The nonce will be used for CSP style-src to prevent styling injection attacks
app.set("views", __dirname);
expressNunjucks(app, {
  watch: false,
  noCache: true,
});

// TODO learn this
// security middleware
app.use(
  helmet({
    contentSecurityPolicy: false,
    hsts: {
      maxAge: 5400000,
      preload: true,
    },
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(cors());
} else {
  // TODO learn this
  // do not allow OPTIONS request for security vulnerability
  app.options("/*", (req: Request, res: Response) => res.sendStatus(403));

  // TODO learn this
  // only allow TSL certified domain to work when in production
  app.use(forceSSL);
  app.set("forceSSLOptions", {
    trustXFPHeader: true,
  });
}

// Router
app.use("/toys_universe", ToysUniverse);

// TODO learn this
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(
    express.static(path.resolve(__dirname, "client/build"), {
      // we want the index file to be served by the * route so that we can set cache headers
      index: false,
    })
  );
  app.use(
    express.static(path.resolve(__dirname, "client/public"), {
      // we want the index file to be served by the * route so that we can set cache headers
      index: false,
    })
  );

  // fallback for SPA routes that the user may navigate directly to via bookmarks or other means
  app.get("*", (req: Request, res: Response) => {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", "0");

    res.render("/client/build/index.html", {
      nonce: res.locals.nonce,
    });
  });

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// Knex Database Migrations
console.log("migration started");
knex.migrate
  .latest(knexConfig)
  .then(() => {
    console.log("migration completed");
  })
  .catch((err: any) => {
    console.log("Error in database migrations");
    console.log(err);
  });

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
