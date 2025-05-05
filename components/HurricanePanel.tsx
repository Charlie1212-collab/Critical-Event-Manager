import React from "react";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`card ${className || ''}`}>{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="card-content">{children}</div>;
}