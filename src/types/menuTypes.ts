// types.ts
import { Clock, Users, Building, Heart, Phone, Home, Search, DollarSign, BookOpen, MapPin } from 'lucide-react';

export const iconMap = {
  Clock,
  Users,
  Building,
  Heart,
  Phone,
  Home,
  Search,
  DollarSign,
  BookOpen,
  MapPin
} as const;

export interface MenuLink {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}

export interface MenuSection {
  links: MenuLink[];
}

export interface MenuContent {
  sections: MenuSection[];
  featuredImage: string;
  featuredTitle: string;
  featuredDescription: string;
}

export type MenuType = 'aboutUs' | 'buyers' | 'sellers' | 'communities' | 'resources';

export const menuContent: Record<MenuType, MenuContent> = {
  aboutUs: {
    sections: [{
      links: [
        {
          title: "Our Story",
          description: "Learn about our journey and values",
          icon: "Heart"
        },
        {
          title: "Meet the Team",
          description: "Get to know our expert agents",
          icon: "Users"
        },
        {
          title: "Our Process",
          description: "How we help you succeed",
          icon: "Clock"
        },
        {
          title: "Locations",
          description: "Find our offices near you",
          icon: "MapPin"
        },
        {
          title: "Contact Us",
          description: "Get in touch with our team",
          icon: "Phone"
        }
      ]
    }],
    featuredImage: "/images/about-featured.jpg",
    featuredTitle: "Our Story",
    featuredDescription: "Building trust in real estate since 2010"
  },
  buyers: {
    sections: [{
      links: [
        {
          title: "First Time Buyers",
          description: "Start your homebuying journey",
          icon: "Home"
        },
        {
          title: "Pre-Approval",
          description: "Get ready to make an offer",
          icon: "DollarSign"
        },
        {
          title: "Home Search",
          description: "Find your perfect home",
          icon: "Search"
        },
        {
          title: "Making an Offer",
          description: "Navigate the buying process",
          icon: "Building"
        },
        {
          title: "Buyer Resources",
          description: "Helpful guides and tools",
          icon: "BookOpen"
        }
      ]
    }],
    featuredImage: "/images/buyers-featured.jpg",
    featuredTitle: "Ready to Buy?",
    featuredDescription: "Let us guide you home"
  },
  sellers: {
    sections: [{
      links: [
        {
          title: "Pricing Strategy",
          description: "Get the best value for your home",
          icon: "DollarSign"
        },
        {
          title: "Home Preparation",
          description: "Maximize your home's appeal",
          icon: "Home"
        },
        {
          title: "Marketing Plan",
          description: "Reach qualified buyers",
          icon: "Heart"
        },
        {
          title: "Offer Management",
          description: "Navigate multiple offers",
          icon: "Building"
        },
        {
          title: "Closing Process",
          description: "Complete your home sale",
          icon: "Clock"
        }
      ]
    }],
    featuredImage: "/images/sellers-featured.jpg",
    featuredTitle: "Ready to Sell?",
    featuredDescription: "Get top dollar for your home"
  },
  communities: {
    sections: [{
      links: [
        {
          title: "Arlington",
          description: "Explore Arlington neighborhoods",
          icon: "MapPin"
        },
        {
          title: "Alexandria",
          description: "Discover Alexandria communities",
          icon: "MapPin"
        },
        {
          title: "Fairfax",
          description: "Browse Fairfax properties",
          icon: "MapPin"
        },
        {
          title: "McLean",
          description: "Learn about McLean living",
          icon: "MapPin"
        },
        {
          title: "Vienna",
          description: "See what Vienna offers",
          icon: "MapPin"
        }
      ]
    }],
    featuredImage: "/images/communities-featured.jpg",
    featuredTitle: "Our Communities",
    featuredDescription: "Find your perfect neighborhood"
  },
  resources: {
    sections: [{
      links: [
        {
          title: "Market Reports",
          description: "Latest real estate trends",
          icon: "BookOpen"
        },
        {
          title: "Buyer's Guide",
          description: "Essential buying tips",
          icon: "Home"
        },
        {
          title: "Seller's Guide",
          description: "Maximize your sale",
          icon: "DollarSign"
        },
        {
          title: "Mortgage Calculator",
          description: "Plan your financing",
          icon: "Clock"
        },
        {
          title: "FAQ",
          description: "Common questions answered",
          icon: "Search"
        }
      ]
    }],
    featuredImage: "/images/resources-featured.jpg",
    featuredTitle: "Helpful Resources",
    featuredDescription: "Knowledge is power"
  }
};