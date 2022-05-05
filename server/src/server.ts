import express from "express";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());
// continuar a partir de 47 min
app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const data = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });
  return res.status(201).json({ data });
});

app.listen(3333, () => {
  console.log("Serviço rodando...");
});
