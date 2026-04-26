"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import styles from "./products.module.css";
import React, { Suspense } from "react";

function ProductsList() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  
  const [categoryFilter, setCategoryFilter] = useState<string>(initialCategory);
  const [conditionFilter, setConditionFilter] = useState<string>("All");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) setCategoryFilter(category);
  }, [searchParams]);

  const categories = [
    { name: "All", icon: "💎" },
    { name: "iPhone", icon: "📱" },
    { name: "MacBook", icon: "💻" },
    { name: "iPad", icon: "📟" },
    { name: "Watch", icon: "⌚" },
    { name: "AirPods", icon: "🎧" }
  ];
  const conditions = [
    { name: "All", icon: "✨" },
    { name: "New", icon: "📦" },
    { name: "Certified Pre-owned", icon: "🛡️" },
    { name: "Used - Good", icon: "♻️" }
  ];

  const filteredProducts = products.filter(p => {
    const categoryMatch = categoryFilter === "All" || p.category === categoryFilter;
    const conditionMatch = conditionFilter === "All" || p.condition === conditionFilter;
    return categoryMatch && conditionMatch;
  });

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.headerBox}>
        <h1 className={`${styles.title} reveal`}>Explore Our <span>Collection</span></h1>
        <p className={`${styles.resultsCount} reveal stagger-1`}>
          Showing {filteredProducts.length} premium models
        </p>
      </div>
      
      <div className={`${styles.filterBar} glass-card reveal stagger-2`}>
        <div className={styles.filterGroup}>
          <p className={styles.filterLabel}>Collection</p>
          <div className={styles.filtersScroll}>
            {categories.map((cat, i) => (
              <button 
                key={cat.name}
                className={categoryFilter === cat.name ? styles.activeFilter : styles.filterBtn}
                onClick={() => setCategoryFilter(cat.name)}
              >
                <span className={styles.btnIcon}>{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.filterGroup}>
          <p className={styles.filterLabel}>Condition</p>
          <div className={styles.filtersScroll}>
            {conditions.map((cond, i) => (
              <button 
                key={cond.name}
                className={conditionFilter === cond.name ? styles.activeFilter : styles.filterBtn}
                onClick={() => setConditionFilter(cond.name)}
              >
                <span className={styles.btnIcon}>{cond.icon}</span>
                {cond.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.grid} reveal stagger-3`}>
        {filteredProducts.map((product, i) => (
          <div key={product.id} className="scale-in" style={{ animationDelay: `${i * 0.1 + 0.5}s` }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className={`${styles.noResults} reveal`}>
          <p>No products found matching your filters. 🌸</p>
          <button 
            className="btn-primary"
            onClick={() => { setCategoryFilter("All"); setConditionFilter("All"); }}
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading collections...</div>}>
      <ProductsList />
    </Suspense>
  );
}
