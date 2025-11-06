# Mythic Decks - Card Trading Game

A modern web-based card trading game where players can collect, buy, sell, and trade virtual cards with different rarities and values.

## 🎮 Features

### Card System
- **Multiple Card Rarities:**
  - Rare
  - Super Rare
  - Epic
  - Mythic
  - Legendary
  - Dev Cards (Special Edition)

- **Card Packs:**
  - Rare Pack (50$)
  - Super Rare Pack (250$)
  - Epic Pack (1000$)
  - Each pack guarantees a card of that rarity or better

### Trading System
- Buy cards from the market
- Sell cards for profit
- Dynamic pricing system
- Market refresh feature (10$ cost)
- Bulk buy/sell options

### Achievement System
- **Collection Achievements:**
  - Collector I (10 cards)
  - Collector II (25 cards)
  - Collector III (50 cards)
  - Collector IV (75 cards)
  - Collector V (100 cards)
  - Master Of The Cards
  - All Legendary Cards
  - Two Dev Cards
  - First Purchase

### Progression System
- Experience points (XP) system
- Level progression
- Total earnings tracking
- Special tags (e.g., Millionaire Tag)

### Economy Features
- Starting balance: 150$
- Dynamic market prices
- Rarity-based price ranges:
  - Rare: 5$ - 20$
  - Super Rare: 25$ - 45$
  - Epic: 50$ - 150$
  - Mythic: 200$ - 450$
  - Legendary: 500$ - 1,000$
  - Dev Cards: 100,000$ - 1,000,000$

### Account System
- Secure user registration and login
- Automatic game state saving
- Progress persistence across sessions

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mythic-decks.git
cd mythic-decks
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

4. Start the server:
```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000`

## 💻 Tech Stack

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (Vanilla)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

- **Authentication:**
  - JWT (JSON Web Tokens)
  - Bcrypt for password hashing

## 🔒 Security Features

- Password hashing
- JWT authentication
- Protected API routes
- Input validation
- XSS protection
- Rate limiting

## 🎯 Game Mechanics

### Card Limits
- Maximum 100 cards of regular rarities
- Maximum 5 Legendary cards
- Maximum 2 Dev cards

### Market Mechanics
- Random card selection in market
- Price fluctuation on market refresh
- Bulk transaction options
- Rarity-based pricing

### Achievement Requirements
- Collection-based achievements
- Transaction-based achievements
- Special card achievements
- Millionaire status (1,000,000$)

## 🛠️ Development

### Project Structure
```
mythic-decks/
├── public/
│   ├── js/
│   │   ├── game.js
│   │   └── auth.js
│   ├── css/
│   │   └── styles.css
│   ├── game.html
│   ├── login.html
│   └── index.html
├── server/
│   ├── routes/
│   │   ├── auth.js
│   │   └── game.js
│   ├── models/
│   │   └── User.js
│   └── middleware/
│       └── auth.js
├── config/
│   └── database.js
├── package.json
└── README.md
```

### API Endpoints

#### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

#### Game
- `GET /api/game/data` - Get user game data
- `POST /api/game/save` - Save game state

## 🎨 Customization

### Adding New Cards
Add new cards to the `cards` array in `game.js`:
```javascript
{
    id: uniqueId,
    name: "Card Name",
    rarity: "Rarity",
    price: basePrice,
    imageUrl: "image_url"
}
```

### Adding New Features
1. Create new functions in `game.js`
2. Add corresponding server routes if needed
3. Update the UI to include new features
4. Add any new game mechanics
5. Update the database schema if required

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 🐛 Bug Reporting

Please report bugs by opening an issue in the GitHub repository. Include:
- Detailed description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots if applicable
- Browser and OS information

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Card images sourced from various trading card games
- Community feedback and suggestions
- All contributors and testers

## 🔄 Version History

- v1.0.0 - Initial release
- v1.1.0 - Added achievement system
- v1.2.0 - Added card packs
- v1.3.0 - Added bulk transactions
- v1.4.0 - Added new design
- v1.5.0 - Added special tags
- v1.6.0 - Added XP system
- v1.7.0 - Current version with bug fixes and improvements

## 🗺️ Roadmap

### Planned Features
- **Trading System**
  - Player-to-player trading
  - Trade offers system
  - Trade history

- **Social Features**
  - Friend system
  - Chat system
  - Card gifting

- **Game Improvements**
  - More card varieties
  - Additional achievements
  - Enhanced UI/UX
  - Performance optimizations

## 🤝 Connect With Us

### Community
- **Discord Server**: [Join our Discord](https://discord.gg/6qb2B7ZSbF)
  - Trading discussions
  - Game help
  - Bug reports
  - Suggestions
  - Community chat

### Support
- Report bugs through GitHub Issues
- Join our Discord for support
- Email for inquiries (coming soon)

## 📊 Current Features

### Card System
- Multiple card rarities (Rare to Dev Cards)
- Card packs with different tiers
- Dynamic pricing system
- Market refresh mechanism

### Trading System
- Buy cards from market
- Sell cards for profit
- Bulk buy/sell options
- Price ranges based on rarity

### Achievement System
- Collection-based achievements
- Progress tracking
- Special rewards
- Millionaire status

## 🎓 Getting Started

### For New Players
- Start with 150$ balance
- Buy cards from the market
- Collect achievements
- Track your progress

### Trading Tips
- Watch market prices
- Use bulk buy/sell features
- Manage your inventory
- Save your progress regularly

## 🌟 Special Thanks

### Development Team
- All contributors
- Beta testers
- Community feedback providers

## 📝 Version History

### Version 1.7.0 (Current)
- Implemented real-time database synchronization
- Added persistent user state management
- Enhanced user authentication system
- Improved save functionality with automatic state tracking
- Fixed achievement and inventory synchronization

### Version 1.6.0
- Added special tags
- Improved UI responsiveness
- Added bulk transaction options

### Version 1.5.0
- Added real-time market updates
- Enhanced trading system
