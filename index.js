const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);

const binarySearchString = `const binarySearch = function search(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}`;
try {
  bot.start((ctx) =>
    ctx.reply(
      "ভাই আমাকে মাফ কর, ভেবেছিলাম তোর গ্রুপে ভালো লোকেরা আছে,ভালো Coder,এসে দেখছি ম্যাদামারা গামলাগুদির ব্যাটাও আছে,আমি নতুন কিছু শিখছি না ভাই,তাই লিভ করলাম।"
    )
  ); // start
  bot.command("binarysearch", (ctx) => ctx.reply(binarySearchString)); //when someone says binary search
  bot.command("toplinuxcommands", (ctx) => ctx.reply("ctx ls pwd")); //when someone says
  bot.command("hatirmargudnei", (ctx) =>
    ctx.reply("tahole hati berolo ki kore?")
  ); //when someone says

  bot.on("sticker", (ctx) => ctx.reply("🩷"));

  // bot.on("text", (ctx) => ctx.reply("i dont understand humans"));
  bot.on("text", (ctx) => {
    console.log(ctx.update.messages);
    if (ctx.update.message.text == "I love you") {
      ctx.reply("love you to leba bhai");
    } else {
      ctx.reply("i dont enderstand humans");
    }
    // ctx.reply("i dont understand humans");
  });

  bot.launch();
} catch {
  console.log("unexpected command");
}
