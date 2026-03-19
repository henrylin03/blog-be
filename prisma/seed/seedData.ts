export const USERS = [
	{
		id: "test-author",
		username: "test-author",
		email: "author@gmail.com",
		unhashedPassword: String(process.env.SEEDED_AUTHOR_PASSWORD),
		isAuthor: true,
	},
	{
		id: "test-user",
		username: "test-user",
		email: "user@gmail.com",
		unhashedPassword: String(process.env.SEEDED_USER_PASSWORD),
		isAuthor: false,
	},
	{
		id: "superadmin",
		username: "henrar",
		email: "henry@test.com",
		unhashedPassword: String(process.env.SEEDED_AUTHOR_PASSWORD),
		firstName: "Henry",
		lastName: "Lin",
		website: "https://henrylin.io",
	},
];

export const MOCK_POSTS = [
	{
		title: "Why the Knee Shield Is Still One of the Best Guards in Modern BJJ",
		lede: "The knee shield quietly solves a lot of problems. It keeps people from smashing you, gives you time to think, and opens up sweeps, underhooks, and leg entries.",
		createdAt: new Date(2026, 2, 14),
		publishedAt: new Date(2026, 2, 14),
		isPublished: true,
		authorId: "test-author",
		text: `
The knee shield has quietly become one of the most reliable guards in modern jiu-jitsu. It used to be thought of mostly as a defensive half guard position, but these days people are using it as a launchpad for attacks.

The biggest thing it gives you is distance control.

If someone gets chest-to-chest on you in half guard, life becomes miserable very quickly. The knee shield prevents that. Your top knee acts as a frame across their body, keeping their weight off you and giving you space to breathe.

Once that space exists, you actually have options.

If your opponent drives into you, the underhook battle starts. Winning that underhook often leads directly to dogfight sweeps or coming up on a single leg.

If they posture up to avoid that pressure, their legs become exposed. That’s where entries into single-leg X or other leg entanglements start appearing.

For hobbyists especially, the knee shield rewards structure over athleticism. When your frames are solid and your knee placement is right, the position becomes surprisingly difficult to smash through.
`,
	},
	{
		title: "3 Simple Half Guard Sweeps That Work at Every Belt Level",
		lede: "Half guard doesn’t have to mean getting smashed. A few simple sweeps — old school, dogfight, and knee lever — can flip the position completely.",
		createdAt: new Date(2026, 2, 10),
		publishedAt: new Date(2026, 2, 14),
		isPublished: true,
		authorId: "superadmin",
		text: `
Half guard often gets a bad reputation because it’s where people end up when things are already going wrong.

But once you understand a few key sweeps, half guard becomes one of the most practical offensive guards in jiu-jitsu.

The first sweep worth learning is the old school sweep. By controlling your opponent’s far knee and driving them forward, you force them to post their hands on the mat. Once their base disappears, tipping them over becomes surprisingly easy.

The second is the dogfight sweep. This starts by winning the underhook and building up onto your elbow and eventually your knees. From that dogfight position, small adjustments in angle can put you directly on top.

The third is the knee lever sweep. This works well when your opponent is trying to stay heavy and stable. Elevating their trapped leg disrupts their balance and creates the opening for the reversal.

None of these sweeps require explosive athleticism. They rely on timing, leverage, and recognizing when your opponent’s weight shifts too far in one direction.
`,
	},
	{
		title: "What White Belts Get Wrong About Escaping Side Control",
		lede: "Most beginners try to bench-press their way out of side control. That almost never works. The real sequence is frame, shrimp, and get your knee back inside.",
		createdAt: new Date(2026, 2, 7),
		publishedAt: new Date(2026, 2, 14),
		isPublished: true,
		authorId: "superadmin",
		text: `
Side control is one of those positions where beginners tend to panic.

When someone heavier is sitting on your chest, the instinct is to push them away with your arms. Unfortunately that often leads directly to submissions.

The real starting point for escaping side control is frames.

Your forearms should create structure between you and your opponent’s hips and shoulders. These frames stop their weight from collapsing directly onto your chest.

Once the frames are established, the next step is hip movement. Shrimping your hips away creates the space needed to bring your knee back inside.

That knee insertion is the key moment of the escape. Once your knee wedges between you and your opponent, recovering guard becomes possible again.

Without frames, shrimping rarely works because your opponent simply follows your hips and maintains the pressure.
`,
	},
	{
		title: "The Overlooked Power of Collar Sleeve Guard",
		lede: "Collar sleeve isn’t flashy, but it’s ridiculously effective. Two grips control posture, break balance, and open the door to sweeps and submissions.",
		createdAt: new Date(2026, 2, 2),
		publishedAt: new Date(2026, 2, 14),
		isPublished: true,
		authorId: "superadmin",
		text: `
Collar sleeve guard is one of those classic gi positions that quietly works at every level.

The setup is simple: one hand on the collar and the other controlling the sleeve. That combination alone gives you a surprising amount of control over your opponent’s posture.

If they try to stand tall, the collar grip pulls them forward. If they pressure into you, the sleeve grip disrupts their base.

From this position, several high-percentage attacks appear. Tripod sweeps, sickle sweeps, and omoplatas all connect naturally from collar sleeve grips.

Another advantage is how easily the guard transitions into others. If your opponent backs away to escape the pressure, moving into De La Riva or spider guard becomes very natural.

For gi players, collar sleeve can easily become the foundation of an entire guard system.
`,
	},
	{
		title: "Why Most Guard Passing Fails (And How to Fix It)",
		lede: "Guard passing usually fails because people rush it. Passing works much better when you control the legs first and slowly collapse the guard.",
		createdAt: new Date(2026, 1, 28),
		authorId: "test-author",
		text: `
Guard passing can feel incredibly frustrating when you first start trying to develop it.

A common mistake is trying to sprint around someone’s guard. That works occasionally, but against someone with decent guard retention it usually leads to getting stuck halfway through the pass.

Effective passing starts with controlling the legs.

Before attempting to move around the guard, good passers focus on pinning or redirecting their opponent’s legs. Once the legs are controlled, the guard structure starts to break down.

Pressure also plays a huge role. Instead of rushing, many experienced passers slowly collapse the guard by applying steady weight and removing defensive frames.

It may not look flashy, but this methodical style of passing is extremely reliable.
`,
	},
	{
		title: "The Beginner’s Guide to Surviving Mount",
		lede: "Mount feels like a nightmare when you’re new. Staying calm, protecting your arms, and slowly rebuilding guard makes the position far more survivable.",
		createdAt: new Date(2026, 1, 24),
		authorId: "test-author",
		text: `
Being stuck in mount is one of the most uncomfortable situations in jiu-jitsu.

Your opponent has gravity on their side, your breathing feels restricted, and submissions are always a threat.

The first priority is protecting your arms and neck. Beginners often push wildly at their opponent’s chest, which creates perfect openings for armbars and Americanas.

Once your arms are safe, the next step is disrupting your opponent’s balance. Bridging can force them to post their hands and momentarily lose stability.

From there, the elbow escape becomes available. By shrimping your hips away and gradually inserting your knee between you and your opponent, you begin rebuilding guard.

Mount escapes rarely happen in one explosive movement. It’s usually a series of small adjustments that slowly create enough space to recover.
`,
	},
	{
		title: "Understanding the Concept of Inside Position",
		lede: "If you control the inside space between you and your opponent, you’re usually winning the exchange. This idea shows up everywhere in jiu-jitsu.",
		createdAt: new Date(2026, 1, 19),
		authorId: "test-author",
		text: `
Inside position is one of the most important concepts in grappling.

At a basic level, it means controlling the space between you and your opponent. When your limbs occupy that space, you usually gain mechanical advantage.

In guard passing, controlling the inside space between your opponent’s knees often determines whether you can start breaking down their guard.

In guard retention, inserting your legs or frames back into that space stops the pass.

The same concept appears when standing. Winning the inside hand position often dictates who controls the grip exchange.

Once you start noticing inside position, you’ll realize it explains a surprising amount of what happens during a roll.
`,
	},
	{
		title: "The Hidden Value of Training With a Game Plan",
		lede: "Rolling randomly is fun, but having a simple plan — even something basic — makes training way more productive.",
		createdAt: new Date(2026, 1, 15),
		authorId: "test-author",
		text: `
Many hobbyists approach sparring without a clear objective.

They slap hands, start rolling, and simply react to whatever happens next. While that can still be enjoyable, it often slows down learning.

Having a simple game plan changes things.

Even a basic sequence like pull guard, sweep, and stabilize side control gives your training structure.

With a plan in mind, you begin noticing small details that help that sequence succeed. You refine the grips, improve the timing, and learn how opponents typically defend.

Over time those small adjustments build into a reliable personal style.
`,
	},
	{
		title: "How to Deal With Bigger Training Partners",
		lede: "Rolling with bigger people doesn’t have to be miserable. Frames, angles, and mobility make a huge difference when strength isn’t on your side.",
		createdAt: new Date(2026, 1, 10),
		authorId: "test-author",
		text: `
Rolling with significantly larger training partners can feel overwhelming at first.

Trying to match their strength is usually a losing strategy. Instead, technique becomes the equalizer.

Frames are your first line of defense. Strong frames prevent your opponent from collapsing their full body weight onto you.

Distance-based guards like butterfly guard or knee shield also work well against bigger opponents because they keep space between you and their pressure.

Angles matter too. Attacking from the side instead of directly underneath someone forces them to constantly adjust their balance.

Training with bigger partners can be frustrating, but it also helps develop efficient technique much faster.
`,
	},
	{
		title: "Why Consistency Matters More Than Talent in BJJ",
		lede: "Natural talent helps, but consistency matters way more. Most people who get good at jiu-jitsu simply never stopped showing up.",
		createdAt: new Date(2026, 1, 6),
		isPublished: false,
		authorId: "superadmin",
		text: `
It’s easy to assume the people who get good at jiu-jitsu are naturally gifted.

But if you spend enough time around the sport, a different pattern starts to appear.

The people who improve the most are often just the ones who kept showing up.

They train a few times a week, slowly accumulate experience, and gradually build familiarity with the positions.

Over time the movements that once felt confusing start to become automatic.

Most black belts weren’t prodigies when they started. They were simply the people who stayed consistent long enough for everything to click.
`,
	},
];
