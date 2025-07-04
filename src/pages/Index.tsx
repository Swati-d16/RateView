
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Star, MapPin, MessageSquare, TrendingUp, Loader2 } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

interface BusinessData {
  rating: number;
  reviews: number;
  headline: string;
}

const Index = () => {
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegeneratingHeadline, setIsRegeneratingHeadline] = useState(false);

  const API_BASE_URL = 'http://localhost:3001';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!businessName.trim() || !location.trim()) {
      toast.error('Please fill in both business name and location');
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await axios.post(`${API_BASE_URL}/business-data`, {
        name: businessName,
        location: location
      });
      
      setBusinessData(response.data);
      toast.success('Business data loaded successfully!');
    } catch (error) {
      console.error('Error fetching business data:', error);
      toast.error('Failed to load business data. Please make sure the backend is running on port 3001.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerateHeadline = async () => {
    if (!businessData) return;

    setIsRegeneratingHeadline(true);
    
    try {
      const response = await axios.get(`${API_BASE_URL}/regenerate-headline`, {
        params: {
          name: businessName,
          location: location
        }
      });
      
      setBusinessData({
        ...businessData,
        headline: response.data.headline
      });
      toast.success('New SEO headline generated!');
    } catch (error) {
      console.error('Error regenerating headline:', error);
      toast.error('Failed to generate new headline');
    } finally {
      setIsRegeneratingHeadline(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 pt-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Local Business Dashboard
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simulate and analyze your business's online presence with AI-powered SEO insights and Google Business metrics
          </p>
        </div>

        {/* Input Form */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Business Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName" className="text-sm font-medium text-gray-700">
                    Business Name
                  </Label>
                  <Input
                    id="businessName"
                    type="text"
                    placeholder="e.g., Joe's Pizza Palace"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                    Location
                  </Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="e.g., New York, NY"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Analyzing Business...
                  </>
                ) : (
                  'Analyze Business'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Business Data Display Card */}
        {businessData && (
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Business Analytics
                </span>
                <div className="text-sm text-gray-500 font-normal">
                  {businessName} • {location}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 rounded-full">
                      <Star className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Google Rating</p>
                      <p className="text-3xl font-bold text-gray-900">
                        {businessData.rating}
                        <span className="text-lg text-gray-500">/5.0</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <MessageSquare className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Reviews</p>
                      <p className="text-3xl font-bold text-gray-900">
                        {businessData.reviews.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEO Headline Section */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1 bg-green-100 rounded">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">AI-Generated SEO Headline</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      "{businessData.headline}"
                    </p>
                  </div>
                  <Button
                    onClick={handleRegenerateHeadline}
                    disabled={isRegeneratingHeadline}
                    variant="outline"
                    className="shrink-0 border-green-200 text-green-700 hover:bg-green-50"
                  >
                    {isRegeneratingHeadline ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      'Regenerate'
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Instructions Card */}
        {!businessData && (
          <Card className="border-dashed border-2 border-gray-300 bg-gray-50/50">
            <CardContent className="pt-6">
              <div className="text-center space-y-3">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto" />
                <h3 className="text-lg font-semibold text-gray-700">
                  Ready to Analyze Your Business?
                </h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Enter your business name and location above to get simulated Google Business metrics and AI-generated SEO headlines.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Index;
