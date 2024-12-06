export interface FAQItem {
  question: string;
  answer: string;
  button?: {
    text: string;
    link: string;
  };
}

export const faqItems: FAQItem[] = [
  {
    question: "Where can I buy VIP?",
    answer: "Join our discord server and check out the buy-vip-mod channel",
    button: {
      text: "DISCORD",
      link: "https://discord.gg/jgmfut",
    },
  },
  {
    question: "Why can't I trade on the mod?",
    answer: "Trading only works on the VIP version",
  },
  {
    question: "How much does VIP cost?",
    answer: "Apperantly 10€, price can change everytime",
  },
  {
    question: "Can you play the mods on PC?",
    answer: "Yes, you can! The easiest way is to download BlueStacks",
    button: {
      text: "BLUESTACKS",
      link: "https://www.bluestacks.com",
    },
  },
  {
    question: "Updates on the mods",
    answer:
      "We try to update our Madfut 24 and Smoq Games 24 mod atleast once every 2 weeks",
  },
  {
    question: "Why aren't the latest cards showing?",
    answer:
      "Make sure to have the latest mod version. If you have, then check out our discord",
    button: {
      text: "DISCORD",
      link: "https://discord.gg/jgmfut",
    },
  },
  {
    question: "Easiest way to get 100% collection?",
    answer:
      "For Madfut we recommend to use any autoclicker on 100% Random Packs",
  },
  {
    question: "What are Promocodes?",
    answer:
      "Promocodes are available at special events on our discord server, they will give you instant 100% collection. Keep your eyes open!",
    button: {
      text: "DISCORD",
      link: "https://discord.gg/jgmfut",
    },
  },
  {
    question: "How do i get rare cards?",
    answer:
      "In our Madfut 24 and 23 mod you can open the Unpackable Cards Packs to get SBC, Objective and Draft Cup cards",
  },
  {
    question: "Can I trade TOTY cards?",
    answer:
      "No you can't trade TOTY cards, the same goes for every card that is only available in packs with 9 cards in it!",
  },
  {
    question: "Do I only trade with other mods?",
    answer: "No, if you have the VIP mod you trade with normal Madfut users",
  },
];
