
# Mini Local Business Dashboard

A full-stack web application that simulates how small businesses might view their SEO content and Google Business data. This project demonstrates core functionality similar to GrowthProAI's business intelligence features.

## 🌟 Features

### Frontend (React + TypeScript + Tailwind CSS)
- **Responsive Business Dashboard** - Clean, professional interface that works on all devices
- **Interactive Input Form** - Business name and location input with validation
- **Real-time Data Display** - Shows simulated Google ratings, reviews, and SEO headlines
- **AI Headline Generation** - Fetch and regenerate SEO headlines with a single click
- **Modern UI Components** - Built with shadcn/ui for a polished look
- **Loading States & Animations** - Smooth user experience with proper feedback

### Backend (Node.js + Express + CORS)
- **RESTful API** - Clean endpoints for business data and SEO headline generation
- **Data Simulation** - Realistic Google Business metrics generation
- **SEO Headline Library** - Curated collection of AI-like business headlines
- **CORS Configuration** - Proper cross-origin resource sharing setup
- **Error Handling** - Comprehensive validation and error responses

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn package manager

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Start the backend server:**
   ```bash
   npm run dev
   ```
   
   The API will be running at `http://localhost:3001`

4. **Verify backend is running:**
   Open `http://localhost:3001/health` in your browser

### Frontend Setup

1. **Navigate back to the root directory:**
   ```bash
   cd ..
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Start the frontend development server:**
   ```bash
   npm run dev
   ```
   
   The application will be running at `http://localhost:8080`

## 📱 How to Use

1. **Enter Business Information:**
   - Fill in your business name (e.g., "Joe's Pizza Palace")
   - Enter your location (e.g., "New York, NY")
   - Click "Analyze Business"

2. **View Business Analytics:**
   - See your simulated Google rating (3.5-5.0 range)
   - Check total review count (25-500 range)
   - Read the AI-generated SEO headline

3. **Generate New Headlines:**
   - Click "Regenerate" to get a fresh SEO headline
   - Perfect for A/B testing different marketing messages

## 🏗️ Project Structure

```
├── src/                    # Frontend source code
│   ├── components/         # Reusable UI components
│   ├── pages/             # Main application pages
│   └── hooks/             # Custom React hooks
├── backend/               # Backend API server
│   ├── server.js          # Express server with all endpoints
│   ├── package.json       # Backend dependencies
│   └── README.md          # Backend documentation
└── README.md              # This file
```

## 🛠️ API Endpoints

### POST `/business-data`
Submit business information to get analytics data.

**Request:**
```json
{
  "name": "Joe's Pizza Palace",
  "location": "New York, NY"
}
```

**Response:**
```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Best Local Business in Your Area - Trusted by Thousands"
}
```

### GET `/regenerate-headline`
Generate a new SEO headline.

**Response:**
```json
{
  "headline": "Your Neighborhood's #1 Choice for Quality and Value"
}
```

## 🎨 Design Features

- **Modern Gradient Backgrounds** - Professional blue-to-indigo gradients
- **Card-based Layout** - Clean, organized information display
- **Responsive Grid System** - Adapts beautifully to all screen sizes
- **Interactive Elements** - Hover effects and smooth transitions
- **Professional Color Scheme** - Business-friendly blues, greens, and yellows
- **Typography Hierarchy** - Clear information structure

## 🔧 Technologies Used

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI component library
- **Axios** - HTTP client for API requests
- **Lucide React** - Beautiful icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **CORS** - Cross-origin resource sharing
- **JSON Parsing** - Built-in request/response handling

## 🚀 Deployment

### Frontend Deployment
The frontend can be deployed to any static hosting service:
- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Backend Deployment
The backend can be deployed to:
- Heroku
- Railway
- DigitalOcean App Platform
- AWS Elastic Beanstalk

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎯 Future Enhancements

- **Database Integration** - Store business data persistently
- **User Authentication** - Multi-user support with accounts
- **Real API Integration** - Connect to actual Google Business API
- **Advanced Analytics** - Charts and graphs for business insights
- **SEO Recommendations** - More detailed SEO analysis and suggestions
- **Competitor Analysis** - Compare with similar businesses
- **Social Media Integration** - Include social media metrics

---

Built with ❤️ for local businesses everywhere
