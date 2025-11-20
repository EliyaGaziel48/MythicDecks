# Mythic Decks - Setup Guide

This guide will walk you through setting up and running the Mythic Decks card trading game on your local machine.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation Steps](#installation-steps)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Testing the Game](#testing-the-game)
- [Troubleshooting](#troubleshooting)
- [Development Tools](#development-tools)

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js and npm**
   - Node.js version 14 or higher
   - Download from [Node.js official website](https://nodejs.org/)
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **MongoDB**
   - Option 1: MongoDB Atlas (Cloud - Recommended)
     - Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
     - Set up a new cluster
     - Whitelist your IP address
     - Create a database user
     - Get your connection string
   
   - Option 2: Local MongoDB Installation
     - Download from [MongoDB Community Server](https://www.mongodb.com/try/download/community)
     - Install and start the MongoDB service

3. **Git** (Optional)
   - Download from [Git official website](https://git-scm.com/)
   - Useful for cloning the repository

## Installation Steps

1. **Get the Code**
   ```bash
   # Extract the zip file
   # Extract the provided zip file and navigate to the directory
   cd cardGame
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

## Configuration

1. **Create Environment File**
   - Create a new file named `.env` in the root directory
   - Add the following configuration:
   ```env
   JWT_SECRET=your_jwt_secret_key_here
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

2. **MongoDB Connection String**
   - For MongoDB Atlas:
     - Format: `mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority`
     - Replace `<username>`, `<password>`, `<cluster-url>`, and `<database-name>` with your values
   
   - For Local MongoDB:
     - Use: `mongodb://localhost:27017/mythicdecks`

## Database Setup

1. **Test Connection**
   ```bash
   # Verify database connectivity
   node testConnection.js
   ```

2. **Initialize Database**
   ```bash
   # Create collections and indexes
   node initDatabase.js
   ```

3. **Seed Data** (Optional)
   ```bash
   # Add initial game data
   npm run seed
   ```

## Running the Application

1. **Start the Server**
   ```bash
   # Production mode
   npm start

   # Development mode (with auto-reload)
   npm run dev
   ```

2. **Access the Application**
   - Open your web browser
   - Navigate to `http://localhost:3000`
   - You should see the Mythic Decks login page

## Testing the Game

1. **Create an Account**
   - Click "Register" on the main page
   - Fill in the registration form:
     - Username
     - Email
     - Password
   - Submit and log in

2. **Test Account** (if available)
   - Username: `Eliyaaa`
   - Password: `Eliya2011`

3. **Game Features to Test**
   - Card Market
     - Buy cards
     - Sell cards
     - Refresh market
   - Card Packs
     - Open different pack types
     - Check card rarities
   - Inventory Management
     - View owned cards
     - Check card details
   - Achievements
     - Track progress
     - Unlock achievements
   - Profile
     - Check balance
     - Monitor XP and level
   - Limited Cards
     - Special events
     - Exclusive cards

## Troubleshooting

1. **MongoDB Connection Issues**
   - Verify your connection string in `.env`
   - Check if MongoDB service is running
   - Ensure IP whitelist includes your address
   - Confirm database user credentials

2. **Module Not Found Errors**
   ```bash
   # Try reinstalling dependencies
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Port Conflicts**
   - Check if port 3000 is available
   - Modify PORT in `.env` if needed
   - Kill any process using the port:
     ```bash
     # Windows
     netstat -ano | findstr :3000
     taskkill /PID <PID> /F

     # Linux/Mac
     lsof -i :3000
     kill -9 <PID>
     ```

4. **Common Issues**
   - JWT errors: Check JWT_SECRET in `.env`
   - Database errors: Check MongoDB connection
   - Missing files: Verify all files are present
   - Permission issues: Check file permissions

## Development Tools

1. **Browser DevTools**
   - Press F12 in browser
   - Check Console for errors
   - Monitor Network requests
   - Debug JavaScript

2. **MongoDB Tools**
   - MongoDB Compass (GUI)
   - MongoDB Atlas Dashboard
   - Database monitoring

3. **Code Editor**
   - VSCode (recommended)
   - Extensions:
     - MongoDB
     - Node.js
     - JavaScript
     - Git

4. **Terminal Commands**
   ```bash
   # View logs
   npm start > logs.txt

   # Check Node.js processes
   ps aux | grep node

   # Monitor file changes
   npm run dev
   ```

## Additional Notes

1. **Auto-Save Feature**
   - Game progress saves automatically
   - Manual save available
   - Check save status in profile

2. **Market System**
   - Prices refresh periodically
   - Limited cards are time-sensitive
   - Market refresh costs in-game currency

3. **Performance Tips**
   - Keep browser cache clear
   - Monitor memory usage
   - Check network speed
   - Update dependencies regularly

4. **Security Notes**
   - Keep `.env` file secure
   - Don't share account credentials
   - Use strong passwords
   - Regular backups recommended

## Support

For additional help or bug reports:
- Check the console logs
- Review error messages
- Contact development team
- Check documentation updates

---

Last Updated: April 2024
Version: 1.7.0 