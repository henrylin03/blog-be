import "dotenv/config";
import bcrypt from "bcryptjs";
import { Pool } from "pg";
import { calculateTimeToReadInMinutes } from "../../src/helpers/helpers";
import { prisma } from "../../src/lib/prisma";
import { MOCK_POSTS as POSTS, USERS } from "./seedData";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });

async function main() {
	const passwordSalt = await bcrypt.genSalt(10);
	const MOCK_USERS = USERS.map((user) => {
		const { unhashedPassword, ...otherProperties } = user;
		const hashedPassword = bcrypt.hashSync(unhashedPassword, passwordSalt);
		return { ...otherProperties, password: hashedPassword };
	});

	const MOCK_POSTS = POSTS.map((post) => {
		const { lede, text: body } = post;
		const timeToReadInMinutes = calculateTimeToReadInMinutes(`${lede} ${body}`);
		return { ...post, timeToReadInMinutes };
	});

	const _newUsers = await prisma.user.createMany({ data: MOCK_USERS });
	const _posts = await prisma.post.createMany({ data: MOCK_POSTS });
}

main()
	.then(async () => {
		await prisma.$disconnect();
		await pool.end();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		await pool.end();
		process.exit(1);
	});
