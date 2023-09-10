const prisma = require("../app/lib/prismaClient")
const bcrypt = require("bcrypt");
async function main() {
  // Create an Admin user
  const hashedPassword = await bcrypt.hash("admin", 5);
  await prisma.user.create({
    data: {
      name: "admin",
      email: "admin@example.com",
      password: hashedPassword,
      role: "ADMIN",
      
    },
  });

  // Create course
  await prisma.Course.create({
    data: {
        title: "Math1",
        description: "Mathematic",
        start_date: new Date('2023-09-08T12:00:00'),
        end_date: new Date('2023-09-10T12:00:00'),
        duration: "48 hour"
    }
  });

  await prisma.$disconnect();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });