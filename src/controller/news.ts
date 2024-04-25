import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { NewsEntity } from "../entities/news";

class BlogController {
  public async GetBlog(req: Request, res: Response): Promise<void> {
    res.json(
      await AppDataSource.getRepository(NewsEntity).find({
        where: {
          type: "blog",
        },
      })
    );
  }

  public async GetRecipe(req: Request, res: Response): Promise<void> {
    res.json(
      await AppDataSource.getRepository(NewsEntity).find({
        where: {
          type: "recipe",
        },
      })
    );
  }

  public async Get(req: Request, res: Response): Promise<void> {
    res.json(await AppDataSource.getRepository(NewsEntity).find());
  }

  public async GetId(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    res.json(
      await AppDataSource.getRepository(NewsEntity).find({
        where: { id: +id },
      })
    );
  }

  public async Post(req: Request, res: Response) {
    try {
      const {
        title_uz,
        title_ru,
        title_en,
        description_uz,
        description_ru,
        description_en,
        image,
        link,
        type,
      } = req.body;

      const news = await AppDataSource.getRepository(NewsEntity)
        .createQueryBuilder()
        .insert()
        .into(NewsEntity)
        .values({
          title_uz,
          title_ru,
          title_en,
          description_uz,
          description_ru,
          description_en,
          image,
          link,
          type,
        })
        .returning("*")
        .execute();

      res.json({
        status: 201,
        message: "news created",
        data: news.raw[0],
      });
    } catch (error) {
      console.log(error);
    }
  }

  public async Put(req: Request, res: Response) {
    try {
      const {
        title_uz,
        title_ru,
        title_en,
        description_uz,
        description_ru,
        description_en,
        image,
        link,
        type,
      } = req.body;
      const { id } = req.params;

      const news = await AppDataSource.getRepository(NewsEntity)
        .createQueryBuilder()
        .update(NewsEntity)
        .set({
          title_uz,
          title_ru,
          title_en,
          description_uz,
          description_ru,
          description_en,
          image,
          link,
          type,
        })
        .where({ id })
        .returning("*")
        .execute();

      res.json({
        status: 200,
        message: "news updated",
        data: news.raw[0],
      });
    } catch (error) {
      console.log(error);
    }
  }

  public async Delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const news = await AppDataSource.getRepository(NewsEntity)
        .createQueryBuilder()
        .delete()
        .from(NewsEntity)
        .where({ id })
        .returning("*")
        .execute();

      res.json({
        status: 200,
        message: "news deleted",
        data: news.raw[0],
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new BlogController();
