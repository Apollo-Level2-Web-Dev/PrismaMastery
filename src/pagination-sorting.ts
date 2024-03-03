import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSoring = async () => {
    // offset pagination
    const offsetData = await prisma.post.findMany({
        skip: 5,
        take: 2
    })

    //console.log("Offest paginated data: ", offsetData);

    // cursor based pagination
    const cursorData = await prisma.post.findMany({
        skip: 5,
        take: 2,
        cursor: {
            id: 15
        }
    })

    //console.log("cursor based paginated data: ", cursorData);

    // sorting
    const sortedData = await prisma.post.findMany({
        orderBy: {
            id: 'desc'
        },
        skip: 2,
        take: 2,
        where: {
            title: "Title 1"
        }
    });

    console.log("sorted data: ", sortedData);
};

paginationSoring()