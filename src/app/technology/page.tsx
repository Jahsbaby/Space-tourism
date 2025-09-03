'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import data from '@/data/data.json'
import { Technology } from '@/types'

export default function TechnologyPage() {
  const [selectedTechnology, setSelectedTechnology] = useState<Technology>(data.technology[0])

  return (
    <div className="technology">
      <Navigation />
      <main id="main" className="grid-container grid-container--technology flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">03</span> Space launch 101
        </h1>

        <div className="number-indicators flex" role="tablist">
          {data.technology.map((tech, index) => (
            <button
              key={tech.name}
              aria-selected={selectedTechnology.name === tech.name}
              role="tab"
              tabIndex={selectedTechnology.name === tech.name ? 0 : -1}
              className="ff-serif fs-600"
              onClick={() => setSelectedTechnology(tech)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedTechnology(tech)
                }
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <article className="technology-details flow">
          <header className="flow flow--space-small">
            <p className="text-accent fs-400 ff-sans-cond uppercase letter-spacing-2">
              The terminology...
            </p>
            <h2 className="fs-700 uppercase ff-serif">{selectedTechnology.name}</h2>
          </header>
          <p>{selectedTechnology.description}</p>
        </article>

        <picture>
          <source 
            srcSet={selectedTechnology.images.portrait} 
            media="(min-width: 45em)" 
          />
          <Image
            src={selectedTechnology.images.landscape}
            alt={`${selectedTechnology.name} technology`}
            width={515}
            height={527}
            priority
          />
        </picture>
      </main>
    </div>
  )
}