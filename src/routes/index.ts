import { Router } from "express";
import form from "../controller/form";
import news from "../controller/news";
import admin from "../controller/admin";

const router = Router();

// form
router.get("/form", form.Get);
router.get("/form/:id", form.GetId);
router.post("/form", form.Post);
router.put("/form/:id", form.Put);
router.delete("/form/:id", form.Delete);

// news
router.get("/blogs", news.GetBlog);
router.get("/recipes", news.GetRecipe);
router.get("/news", news.Get);
router.get("/news/:id", news.GetId);
router.post("/news", news.Post);
router.put("/news/:id", news.Put);
router.delete("/news/:id", news.Delete);

// admin
router.get("/admin", admin.Get);
router.get("/admin/:id", admin.GetId);
router.post("/admin", admin.Post);
router.post("/login", admin.SignIn);
router.put("/admin/:id", admin.Put);
router.delete("/admin/:id", admin.Delete);

export default router;
