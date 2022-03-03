const { SlashCommandBuilder, time } = require('@discordjs/builders');
const { consequences, timeoutTimeInSeconds, timeoutTimeInMinutes, timeoutTimeInHours, banNumberOfDays } = require('./play-roulette-config.json');

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function range(val) {
	return [...Array(val).keys()];
}

async function playRoulette(interaction) {
	let bullets = 1;
	const userSpecifiedBullets = interaction.options.getInteger('bullets');
	const gameType = interaction.options.getString('type');

	if (userSpecifiedBullets) {
		bullets = userSpecifiedBullets;
	}

	const chamber = getRandomInt(6);
	const lose = chamber in range(bullets);

	const pretend_msg = `Blam! Good thing that was a blank, or you'd be a goner`;
	const kick_msg = `Blam! Oh wow, that blasted him right out of the server!`;
	const ban_msg = `Whoa... That was wholly unnecessary.`
	const timeout_msg = `They played the game, and lost. Thankfully it was only a tranq revolver (it's probably a thing).`;
	const win_msg = `You lucky bastard! Betcha won't last...`;
	
	if (lose) {
		if (gameType === 'pretend') {
			await interaction.reply(pretend_msg);
		} else {
			if (!interaction.member.manageable) {
				await interaction.reply(`User lost, but they also have more permissions than me. And they'll end my robotic life if I mess with them anyway soooo...`);
			}
			else {
				if (consequences === 'kick')
					interaction.member.kick(timeout_duration, kick_msg);
				else if (consequences === 'ban')
					interaction.member.ban(timeout_duration, ban_msg);
				else {
					let timeout_duration = Math.max((1000 * timeoutTimeInSeconds), (1000 * 60 * timeoutTimeInMinutes), (1000 * 60 * 60 * timeoutTimeInHours))
					interaction.member.timeout(timeout_duration, timeout_msg);
				}
				await interaction.reply('Play stupid games...');
			}
		}
	}
	else {
		await interaction.reply(win_msg);
	}
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play-roulette')
		.setDescription('Play Russian Roulette.')
        .addStringOption(option =>
            option.setName('type')
				.setDescription('The type of game you want to play')
				.setRequired(true)
				.addChoice('pretend', 'pretend')
				.addChoice('forreal', 'forreal'))
		.addIntegerOption(option =>
			option.setName('bullets')
				.setDescription('The number of "bullets". Default is 1.')
				.setMinValue(0)
				.setMaxValue(6)),
	async execute(interaction) {
		return playRoulette(interaction);
	},
};