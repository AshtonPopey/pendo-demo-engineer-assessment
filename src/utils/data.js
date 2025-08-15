// Mock data for Newsly prototype

export const categories = [
  'World',
  'U.S.',
  'Business',
  'Sports',
  'Technology',
  'Health',
  'Science',
  'Arts'
];

export const articles = [
  {
    id: 1,
    title: "Breaking: Major Technology Breakthrough Changes Everything",
    description: "Scientists at leading research institutions have announced a groundbreaking discovery that could revolutionize how we interact with technology in our daily lives.",
    author: "Sarah Johnson",
    publishedAt: "2 hours ago",
    category: "Technology",
    isHero: true
  },
  {
    id: 2,
    title: "Global Markets Show Strong Recovery Signs",
    description: "International financial markets are displaying unprecedented resilience following recent economic challenges.",
    author: "Michael Chen",
    publishedAt: "3 hours ago",
    category: "Business"
  },
  {
    id: 3,
    title: "Climate Summit Reaches Historic Agreement",
    description: "World leaders unite on ambitious climate goals that could reshape environmental policy for decades to come.",
    author: "Emma Rodriguez",
    publishedAt: "5 hours ago",
    category: "World"
  },
  {
    id: 4,
    title: "Revolutionary Space Mission Launches Successfully",
    description: "NASA's latest space exploration mission begins its journey to explore uncharted territories of our solar system.",
    author: "Dr. James Wilson",
    publishedAt: "6 hours ago",
    category: "Science"
  },
  {
    id: 5,
    title: "Sports Championship Delivers Unexpected Results",
    description: "Underdog team secures victory in what many are calling the most thrilling championship match in recent history.",
    author: "Alex Thompson",
    publishedAt: "8 hours ago",
    category: "Sports"
  },
  {
    id: 6,
    title: "New Health Study Reveals Surprising Benefits",
    description: "Researchers publish findings that challenge conventional wisdom about nutrition and wellness practices.",
    author: "Dr. Lisa Park",
    publishedAt: "12 hours ago",
    category: "Health"
  },
  {
    id: 7,
    title: "Cultural Festival Celebrates Artistic Innovation",
    description: "Artists from around the world showcase cutting-edge works that blend traditional techniques with modern technology.",
    author: "Maya Patel",
    publishedAt: "1 day ago",
    category: "Arts"
  }
];

export const getTrendingArticles = () => articles.slice(1, 4);
export const getHeroArticle = () => articles.find(article => article.isHero);
export const getArticlesByCategory = (category) => 
  articles.filter(article => article.category === category);
export const getArticleById = (id) => 
  articles.find(article => article.id === parseInt(id));