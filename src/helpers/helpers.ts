export const calculateTimeToReadInMinutes = (blogText: string): number => {
	// see https://www.sciencedirect.com/science/article/abs/pii/S0749596X19300786
	const WORDS_PER_MINUTE_READING_SPEED = 238;
	const wordCount = blogText.trim().split(/\s+/).length;
	return wordCount / WORDS_PER_MINUTE_READING_SPEED;
};
