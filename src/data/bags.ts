import { Bag } from '@/types';

export const bags: Bag[] = [
  {
    id: '1',
    name: '棉花糖小姐',
    style: '甜美可爱风',
    type: '手拿包',
    capacity: '小巧精致，可装下口红、粉饼和小秘密',
    personality: '温柔甜美，总是带着甜甜的笑容，喜欢收集各种可爱的小物件。她是包包世界里最受欢迎的居民，大家都喜欢围在她身边听她讲有趣的故事。',
    collectValue: '⭐⭐⭐⭐ 稀有度：四星',
    description: '棉花糖小姐来自糖果森林，她的身体像棉花糖一样柔软蓬松。她最喜欢的事情是在阳光明媚的午后，坐在云朵上品尝各种口味的马卡龙。据说收集她的人都会拥有甜蜜的好运哦！',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20pink%20fluffy%20handbag%20character%20with%20bow%20kawaii%20style%20pastel%20colors%20fairy%20tale%20illustration&image_size=square_hd',
    color: '#FB7185',
    bgGradient: 'from-pink-200 to-rose-300',
    featured: true,
    hobbies: ['收集蝴蝶结', '烘焙饼干', '云朵漫步'],
    birthday: '三月十五日',
    residence: '糖果森林',
  },
  {
    id: '2',
    name: '星空漫游者',
    style: '梦幻星空风',
    type: '旅行包',
    capacity: '神秘莫测，仿佛装得下整个银河',
    personality: '神秘优雅，喜欢在夜晚独自仰望星空。她知道很多宇宙的秘密，但只告诉最信任的朋友。说话轻声细语，总是带着淡淡的星光气息。',
    collectValue: '⭐⭐⭐⭐⭐ 稀有度：五星',
    description: '星空漫游者来自遥远的星辰之海，她的身体里闪烁着无数小星星。每当夜晚降临，她就会飞到天空中，和月亮聊天，和流星赛跑。传说找到她的人，她会帮你实现一个愿望。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=magical%20starry%20night%20sky%20purple%20blue%20handbag%20character%20with%20sparkles%20fairy%20tale%20fantasy%20illustration&image_size=square_hd',
    color: '#A855F7',
    bgGradient: 'from-purple-300 to-indigo-400',
    featured: true,
    hobbies: ['观星', '收集陨石', '月光浴'],
    birthday: '十二月二十一日',
    residence: '星辰之海',
  },
  {
    id: '3',
    name: '森林守护者',
    style: '自然森系风',
    type: '双肩包',
    capacity: '宽敞舒适，能装下整个森林的礼物',
    personality: '温暖可靠，是森林里所有小动物的好朋友。她喜欢照顾花草树木，总能听到植物们的低语。性格沉稳有耐心，是大家公认的知心姐姐。',
    collectValue: '⭐⭐⭐⭐ 稀有度：四星',
    description: '森林守护者住在古老的橡树洞里，她的身上开满了小花，还住着几只调皮的小松鼠。她会用魔法让枯萎的植物重新焕发生机，是森林里最受尊敬的居民之一。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cozy%20forest%20green%20brown%20woven%20handbag%20character%20with%20flowers%20leaves%20fairy%20tale%20illustration%20nature&image_size=square_hd',
    color: '#34D399',
    bgGradient: 'from-green-200 to-emerald-300',
    featured: true,
    hobbies: ['种花', '和动物聊天', '制作草药'],
    birthday: '五月五日',
    residence: '翡翠森林',
  },
  {
    id: '4',
    name: '复古绅士',
    style: '复古优雅风',
    type: '旅行包',
    capacity: '经典设计，容量适中，尽显绅士风度',
    personality: '彬彬有礼，谈吐优雅，是包包世界里最有风度的绅士。他喜欢阅读古书，对历史和艺术有着深厚的了解。虽然年纪不小了，但心态永远年轻。',
    collectValue: '⭐⭐⭐⭐ 稀有度：四星',
    description: '复古绅士来自时光小镇，他已经在包包世界生活了很久很久。他最喜欢的事是坐在咖啡馆里，品尝一杯香浓的咖啡，翻看着泛黄的老照片。他有讲不完的故事，每个故事都带着时光的香气。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vintage%20brown%20leather%20briefcase%20bag%20character%20gentleman%20style%20with%20mustache%20fairy%20tale%20retro%20illustration&image_size=square_hd',
    color: '#D97706',
    bgGradient: 'from-amber-200 to-orange-300',
    hobbies: ['收藏古书', '品咖啡', '写信'],
    birthday: '九月九日',
    residence: '时光小镇',
  },
  {
    id: '5',
    name: '海洋之心',
    style: '清新海洋风',
    type: '手提包',
    capacity: '深邃如海洋，藏着数不清的珍珠宝贝',
    personality: '活泼开朗，像海浪一样充满活力。她喜欢冒险，对一切新鲜事物都充满好奇。笑声清脆悦耳，就像贝壳里传来的海的声音。',
    collectValue: '⭐⭐⭐⭐ 稀有度：四星',
    description: '海洋之心来自深海的珊瑚宫殿，她是美人鱼公主最好的朋友。她的身体里装着从世界各地收集来的贝壳和珍珠。每当她笑的时候，就会有小泡泡从她身体里飘出来，特别神奇！',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ocean%20blue%20turquoise%20shell%20pearl%20handbag%20character%20mermaid%20style%20fairy%20tale%20underwater%20illustration&image_size=square_hd',
    color: '#38BDF8',
    bgGradient: 'from-blue-200 to-cyan-300',
    hobbies: ['收集贝壳', '冲浪', '和海豚玩耍'],
    birthday: '七月七日',
    residence: '珊瑚宫殿',
  },
  {
    id: '6',
    name: '云朵宝宝',
    style: '软萌治愈风',
    type: '手提包',
    capacity: '蓬松柔软，能装下所有的不开心',
    personality: '软糯可爱，总是懒洋洋的，喜欢在天上飘来飘去。性格单纯善良，看到谁不开心就会飘过去给对方一个大大的云朵拥抱。',
    collectValue: '⭐⭐⭐ 稀有度：三星',
    description: '云朵宝宝是天空中最软的一朵云变成的。她最喜欢在晴天飘来飘去，给大地上的小动物们遮阴凉。她的身体超级柔软，躺在上面就像躺在棉花糖床上一样舒服。心情不好的时候，抱抱她就会立刻好起来！',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fluffy%20white%20cloud%20shaped%20handbag%20character%20cute%20kawaii%20soft%20dreamy%20fairy%20tale%20illustration%20pastel&image_size=square_hd',
    color: '#E0E7FF',
    bgGradient: 'from-slate-100 to-blue-100',
    hobbies: ['晒太阳', '打盹', '变换形状'],
    birthday: '一月一日',
    residence: '天空之城',
  },
  {
    id: '7',
    name: '夜曲精灵',
    style: '神秘哥特风',
    type: '挎包',
    capacity: '暗黑色系，藏着黑夜的秘密',
    personality: '神秘高冷，喜欢独来独往，只在夜晚出现。虽然看起来不好接近，但其实内心很温柔。她会在别人睡着的时候，悄悄把噩梦变成美梦。',
    collectValue: '⭐⭐⭐⭐⭐ 稀有度：五星',
    description: '夜曲精灵来自月影森林的深处，她只在月圆之夜才会现身。她的身体像夜空一样深邃，上面镶嵌着银色的月亮和星星。她掌管着所有包包的梦境，是一位神秘又温柔的梦境守护者。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dark%20gothic%20mysterious%20black%20purple%20handbag%20character%20with%20moon%20stars%20fairy%20tale%20fantasy%20night%20illustration&image_size=square_hd',
    color: '#6366F1',
    bgGradient: 'from-indigo-300 to-purple-400',
    hobbies: ['收集月光', '编织梦境', '夜间散步'],
    birthday: '十月三十一日',
    residence: '月影森林',
  },
  {
    id: '8',
    name: '糖果公主',
    style: '甜蜜梦幻风',
    type: '手拿包',
    capacity: '粉粉嫩嫩，装满了糖果和甜蜜',
    personality: '活泼可爱，有点小傲娇，但心地善良。她是糖果王国的小公主，最喜欢分享糖果给朋友们。虽然偶尔会耍小脾气，但大家都很宠她。',
    collectValue: '⭐⭐⭐ 稀有度：三星',
    description: '糖果公主是糖果王国最小的公主，她的身体是用粉色的糖霜做的，闻起来香香甜甜的。她走到哪里，哪里就会下起糖果雨。她最大的愿望是让每个人都能品尝到幸福的味道。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=candy%20pink%20sweet%20handbag%20character%20princess%20style%20with%20crown%20lollipop%20fairy%20tale%20kawaii%20illustration&image_size=square_hd',
    color: '#F472B6',
    bgGradient: 'from-pink-200 to-fuchsia-300',
    hobbies: ['做糖果', '茶会', '收集发饰'],
    birthday: '二月十四日',
    residence: '糖果王国',
  },
  {
    id: '9',
    name: '书页旅者',
    style: '文艺学院风',
    type: '双肩包',
    capacity: '书香气息，装满了知识和故事',
    personality: '博学多才，安静内敛，喜欢在图书馆里待上一整天。他说话总是文绉绉的，但讲的故事都特别有趣。是包包世界里的移动图书馆。',
    collectValue: '⭐⭐⭐⭐ 稀有度：四星',
    description: '书页旅者是由一本古老的魔法书变成的，他的身体里藏着成千上万本书。每当他翻开身体上的一页，就会有一个故事飞到空中。据说只要认真听他讲故事，就能获得智慧的力量。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vintage%20book%20style%20handbag%20character%20scholar%20glasses%20brown%20cream%20fairy%20tale%20whimsical%20library%20illustration&image_size=square_hd',
    color: '#92400E',
    bgGradient: 'from-amber-100 to-yellow-200',
    hobbies: ['读书', '写作', '收集书签'],
    birthday: '四月二十三日',
    residence: '智慧图书馆',
  },
  {
    id: '10',
    name: '彩虹画家',
    style: '缤纷艺术风',
    type: '挎包',
    capacity: '五彩斑斓，装满了颜料和梦想',
    personality: '热情洋溢，充满创造力，走到哪里都要画上几笔。性格乐观开朗，相信一切美好的事物都可以用画笔描绘出来。',
    collectValue: '⭐⭐⭐⭐ 稀有度：四星',
    description: '彩虹画家是雨后的第一道彩虹变成的，她的身上有七种颜色的颜料。她喜欢在天空中作画，有时候你看到的美丽晚霞，就是她刚刚画好的作品。她的梦想是让整个世界都变得五彩缤纷。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=rainbow%20colorful%20artist%20palette%20handbag%20character%20painter%20style%20with%20brush%20fairy%20tale%20creative%20illustration&image_size=square_hd',
    color: '#EF4444',
    bgGradient: 'from-red-200 via-yellow-200 to-green-200',
    hobbies: ['画画', '收集颜色', '看彩虹'],
    birthday: '六月一日',
    residence: '彩虹桥',
  },
];

export interface Location {
  name: string;
  emoji: string;
  description: string;
}

export interface MapRegion {
  id: string;
  name: string;
  type: string;
  emoji: string;
  description: string;
  gradient: string;
  position: { top: string; left: string };
  iconColor: string;
  fillColor: string;
  strokeColor: string;
  svgPath: string;
  locations: Location[];
}

export const mapRegions: MapRegion[] = [
  {
    id: 'travelbag-valley',
    name: '旅行包山谷',
    type: '旅行包',
    emoji: '⛰️',
    description: '群山环抱的开阔山谷，旅行包居民们从这里启程去往世界各地。山谷间总能看到远行的足迹，与归来时身上风尘仆仆的故事。',
    gradient: 'from-amber-200 via-orange-200 to-yellow-200',
    position: { top: '25%', left: '20%' },
    iconColor: '#D97706',
    fillColor: '#FDE68A',
    strokeColor: '#F59E0B',
    svgPath: 'M5,15 L25,5 L45,12 L40,35 L15,40 Z',
    locations: [
      { name: '星辰之海', emoji: '✨', description: '星空漫游者的故乡，每一颗星辰都有自己的故事。' },
      { name: '时光小镇', emoji: '⏰', description: '复古绅士居住的古老小镇。' },
    ],
  },
  {
    id: 'handbag-city',
    name: '手提包城区',
    type: '手提包',
    emoji: '🏙️',
    description: '繁华热闹的城市中心，住着优雅时尚的手提包居民。街道上飘着咖啡香，橱窗里摆满了精致的小物件，永远熙熙攘攘。',
    gradient: 'from-rose-200 via-pink-200 to-fuchsia-200',
    position: { top: '22%', left: '72%' },
    iconColor: '#FB7185',
    fillColor: '#FECDD3',
    strokeColor: '#FB7185',
    svgPath: 'M55,8 L95,10 L98,40 L70,45 L52,35 Z',
    locations: [
      { name: '珊瑚宫殿', emoji: '🐚', description: '海洋之心的深海家园，珍珠与珊瑚的梦幻王国。' },
      { name: '天空之城', emoji: '☁️', description: '云朵宝宝漂浮在云端的家。' },
    ],
  },
  {
    id: 'backpack-forest',
    name: '双肩包森林',
    type: '双肩包',
    emoji: '🌲',
    description: '一片古老而神秘的森林，双肩包居民们住在树洞与藤蔓小屋中。这里充满自然的气息，时常能听见精灵的低语。',
    gradient: 'from-green-200 via-emerald-200 to-teal-200',
    position: { top: '62%', left: '25%' },
    iconColor: '#34D399',
    fillColor: '#A7F3D0',
    strokeColor: '#10B981',
    svgPath: 'M8,48 L35,42 L50,60 L45,85 L12,78 Z',
    locations: [
      { name: '翡翠森林', emoji: '🌳', description: '森林守护者守护的古老森林。' },
      { name: '智慧图书馆', emoji: '📚', description: '书页旅者藏书千万的知识殿堂。' },
    ],
  },
  {
    id: 'clutch-garden',
    name: '手拿包花园',
    type: '手拿包',
    emoji: '🌷',
    description: '一座开满鲜花的精致花园，手拿包居民们小巧玲珑，被轻轻捧在手心间。花园里每一朵花都是他们的好朋友。',
    gradient: 'from-pink-200 via-rose-200 to-fuchsia-200',
    position: { top: '55%', left: '75%' },
    iconColor: '#F472B6',
    fillColor: '#FBCFE8',
    strokeColor: '#EC4899',
    svgPath: 'M58,45 L92,48 L90,75 L65,82 L50,68 Z',
    locations: [
      { name: '糖果森林', emoji: '🍬', description: '棉花糖小姐的甜蜜森林。' },
      { name: '糖果王国', emoji: '👑', description: '糖果公主统治的甜蜜王国。' },
    ],
  },
  {
    id: 'crossbody-coast',
    name: '挎包海岸',
    type: '挎包',
    emoji: '🌊',
    description: '绵延的金色海岸线，挎包居民们斜跨着身子在海风中漫步。海浪拍打着礁石，总带来远方的故事。',
    gradient: 'from-cyan-200 via-sky-200 to-blue-200',
    position: { top: '82%', left: '50%' },
    iconColor: '#38BDF8',
    fillColor: '#BAE6FD',
    strokeColor: '#0EA5E9',
    svgPath: 'M30,75 L75,72 L85,92 L25,95 L15,85 Z',
    locations: [
      { name: '月影森林', emoji: '🌙', description: '夜曲精灵出没的神秘森林。' },
      { name: '彩虹桥', emoji: '🌈', description: '彩虹画家作画的梦幻之桥。' },
    ],
  },
];

export const getBagById = (id: string): Bag | undefined => {
  return bags.find(bag => bag.id === id);
};

export const getFeaturedBags = (): Bag[] => {
  return bags.filter(bag => bag.featured);
};

export const getBagsByRegion = (regionId: string): Bag[] => {
  const region = mapRegions.find(r => r.id === regionId);
  if (!region) return [];
  return bags.filter(bag => bag.type === region.type);
};

export const getBagsByLocation = (locationName: string): Bag[] => {
  return bags.filter(bag => bag.residence === locationName);
};

export const getRegionByLocation = (locationName: string): MapRegion | undefined => {
  return mapRegions.find(region =>
    region.locations.some(loc => loc.name === locationName)
  );
};
