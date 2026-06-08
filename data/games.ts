export type Game = {
  slug: string;
  title: string;
  thumbnail: string;
  playUrl: string;
  category: string;
  description: string;
  detailUrl: string;
};

export const games: Game[] = [
  {
    slug: "wrong-side-driving-car-game",
    title: "Wrong Side Driving Car Game",
    thumbnail:
      "https://img.gamemonetize.com/61jfjtg8j15v0mxqya1uzhjc1iftdah4/512x384.jpg",
    playUrl: "https://html5.gamemonetize.co/61jfjtg8j15v0mxqya1uzhjc1iftdah4/",
    category: "Hypercasual, Racing",
    description:
      "Wrong Side Driving is a fast-paced endless driving game where you take the ultimate risk — driving on the wrong side of the road. Dodge oncoming traffic, collect power-ups, and test your reflexes as the speed increases with every passing second.",
    detailUrl: "https://gamemonetize.com/wrong-side-driving-car-game-game",
  },
  {
    slug: "maze-survivor-platform-adventure-game",
    title: "Maze Survivor Platform Adventure Game",
    thumbnail:
      "https://img.gamemonetize.com/eqfoqfiufv7zamf3c49ix4xg5v9n7fc3/512x384.jpg",
    playUrl: "https://html5.gamemonetize.co/eqfoqfiufv7zamf3c49ix4xg5v9n7fc3/",
    category: "Adventure, Arcade",
    description:
      "Maze Survivor is a fun 2D platform adventure where players explore maze-like levels, find hidden keys, and reach home safely while avoiding dangerous animals, flying birds, and lava traps.",
    detailUrl:
      "https://gamemonetize.com/maze-survivor-platform-adventure-game-game",
  },
  {
    slug: "orbit-tap-rush-one-tap-game",
    title: "Orbit Tap Rush One Tap Game",
    thumbnail:
      "https://img.gamemonetize.com/skq5w0gwq9coozmm0spmn6r92ayjo0gj/512x384.jpg",
    playUrl: "https://html5.gamemonetize.co/skq5w0gwq9coozmm0spmn6r92ayjo0gj/",
    category: "Hypercasual",
    description:
      "Orbit Tap Rush is a fast-paced hyper casual arcade game where timing and reflexes decide survival. Tap to reverse orbit direction, avoid falling obstacles, and collect star power shields for protection.",
    detailUrl: "https://gamemonetize.com/orbit-tap-rush-one-tap-game-game",
  },
  {
    slug: "go-up-tap-zigzag-box-challenge",
    title: "Go Up Tap ZigZag Box Challenge",
    thumbnail:
      "https://img.gamemonetize.com/d96wlodem0r6r46zclxxgwyrlu7s73t1/512x384.jpg",
    playUrl: "https://html5.gamemonetize.co/d96wlodem0r6r46zclxxgwyrlu7s73t1/",
    category: "Arcade, Hypercasual",
    description:
      "Go Up is a simple yet challenging hyper casual arcade game where every tap shifts direction in zigzag motion. Time each move perfectly, avoid obstacles, and reach the winning line.",
    detailUrl: "https://gamemonetize.com/go-up-tap-zigzag-box-challenge-game",
  },
  {
    slug: "swipe-box-physics-arcade-game",
    title: "Swipe Box Physics Arcade Game",
    thumbnail:
      "https://img.gamemonetize.com/1kei87mxhcff1ootx55gnsfrbu0j67ut/512x384.jpg",
    playUrl: "https://html5.gamemonetize.co/1kei87mxhcff1ootx55gnsfrbu0j67ut/",
    category: "Arcade, Hypercasual",
    description:
      "Swipe Box is a fast-paced physics arcade game where players swipe to move a box and land it inside the basket before time runs out. It blends simple controls with highly addictive timing challenges.",
    detailUrl: "https://gamemonetize.com/swipe-box-physics-arcade-game-game",
  },
  {
    slug: "earth-dunk-physics-arcade-game",
    title: "Earth Dunk Physics Arcade Game",
    thumbnail:
      "https://img.gamemonetize.com/j6z9mgbe7n12tuymdl0bi5tj2b6cm5zp/512x384.jpg",
    playUrl: "https://html5.gamemonetize.co/j6z9mgbe7n12tuymdl0bi5tj2b6cm5zp/",
    category: "Clicker, Arcade",
    description:
      "Earth Dunk is a physics-based HTML5 arcade game where you control a rotating Earth ball and dunk it through moving rings. Collect stars for bonus rewards and survive as long as possible.",
    detailUrl: "https://gamemonetize.com/earth-dunk-physics-arcade-game-game",
  },
  {
    slug: "tilt-it-addictive-arcade-skill-game",
    title: "Tilt It Addictive Arcade Skill Game",
    thumbnail:
      "https://img.gamemonetize.com/b5pjnykwobonj07j3md9jydtb2elqvu4/512x384.jpg",
    playUrl: "https://html5.gamemonetize.co/b5pjnykwobonj07j3md9jydtb2elqvu4/",
    category: "Arcade, Skill",
    description:
      "Tilt It is a challenging arcade skill game inspired by classic balance mechanics. Guide a rolling ball upward by carefully tilting the stick and avoid black holes while chasing high scores.",
    detailUrl:
      "https://gamemonetize.com/tilt-it-addictive-arcade-skill-game-game",
  },
  {
    slug: "flying-parrot",
    title: "Flying Parrot",
    thumbnail:
      "https://img.gamemonetize.com/pzfg2mtgzefuzuz1u2byhcjhko5h9rly/512x384.jpg",
    playUrl: "https://html5.gamemonetize.co/pzfg2mtgzefuzuz1u2byhcjhko5h9rly/",
    category: "Action, Adventure",
    description:
      "Flying Parrot is an endless flying game where you rescue a parrot from obstacles and collect coins from platforms. Keep control, survive longer, and restart quickly for better runs.",
    detailUrl: "https://gamemonetize.com/flying-parrot-game",
  },
];

export const gameCategories = [
  "All",
  ...Array.from(
    new Set(games.flatMap((game) => game.category.split(",").map((c) => c.trim())))
  ),
];

export function getGameBySlug(slug: string) {
  return games.find((game) => game.slug === slug);
}
