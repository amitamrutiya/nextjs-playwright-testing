import prisma from "../src/lib/prismadb";

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Amit Amrutiys",
      email: "amitamrutiya2210@gmail.com",
      image: "https://github.com/octocat.png",
    },
  });

  const tasks = await prisma.task.createMany({
    data: [
      {
        title: "Learn Next.js",
        userId: user.id,
      },
      {
        title: "Learn Playwright",
        userId: user.id,
      },
    ],
  });
}

main();
