"use client";

import { useState, useEffect, useCallback } from "react";
import { TopBar } from "@/components/top-bar";
import { BottomNav } from "@/components/bottom-nav";
import { DisclaimerModal } from "@/components/disclaimer-modal";
import { HomeScreen } from "@/components/screens/home-screen";
import { DefendScreen } from "@/components/screens/defend-screen";
import { AdvanceScreen } from "@/components/screens/advance-screen";
import { ScriptureScreen } from "@/components/screens/scripture-screen";
import { IslamScreen } from "@/components/screens/islam-screen";
import { QuickDrawScreen } from "@/components/screens/quick-draw-screen";
import { SearchResults } from "@/components/screens/search-results";
import type { TabType } from "@/lib/data";

export default function FrontlinesFaithApp() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());

  // Check localStorage for disclaimer acceptance on mount
  useEffect(() => {
    const accepted = localStorage.getItem("frontlinesfaith-disclaimer-accepted");
    if (accepted === "true") {
      setShowDisclaimer(false);
    }
    
    // Load bookmarks from localStorage
    const savedBookmarks = localStorage.getItem("frontlinesfaith-bookmarks");
    if (savedBookmarks) {
      try {
        setBookmarks(new Set(JSON.parse(savedBookmarks)));
      } catch {
        // Invalid JSON, ignore
      }
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem("frontlinesfaith-disclaimer-accepted", "true");
    setShowDisclaimer(false);
  };

  const handleToggleBookmark = useCallback((id: string) => {
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      // Save to localStorage
      localStorage.setItem("frontlinesfaith-bookmarks", JSON.stringify([...next]));
      return next;
    });
  }, []);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setSearchQuery(""); // Clear search when changing tabs
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const isSearchMode = searchQuery.trim().length > 0;

  const renderContent = () => {
    if (isSearchMode) {
      return (
        <SearchResults
          query={searchQuery.trim()}
          bookmarks={bookmarks}
          onToggleBookmark={handleToggleBookmark}
        />
      );
    }

    switch (activeTab) {
      case "home":
        return <HomeScreen onNavigate={handleTabChange} />;
      case "defend":
        return (
          <DefendScreen
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
          />
        );
      case "advance":
        return (
          <AdvanceScreen
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
          />
        );
      case "scripture":
        return <ScriptureScreen />;
      case "islam":
        return <IslamScreen />;
      case "quickdraw":
        return <QuickDrawScreen />;
      default:
        return <HomeScreen onNavigate={handleTabChange} />;
    }
  };

  return (
    <>
      {showDisclaimer && <DisclaimerModal onAccept={handleAcceptDisclaimer} />}
      
      <div className="flex flex-col min-h-screen">
        <TopBar 
          searchValue={searchQuery} 
          onSearchChange={handleSearchChange} 
        />
        
        <main className="flex-1 px-4 py-4 pb-20">
          {renderContent()}
        </main>
        
        <BottomNav 
          activeTab={activeTab} 
          onTabChange={handleTabChange} 
        />
      </div>
    </>
  );
}
