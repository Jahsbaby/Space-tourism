'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import data from '@/data/data.json'
import { CrewMember } from '@/types'

export default function CrewPage() {
  const [selectedCrew, setSelectedCrew] = useState<CrewMember>(data.crew[0])

  return (
    <div className="crew">
      <Navigation />
      <main id="main" className="grid-container grid-container--crew flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span> Meet your crew
        </h1>

        <div className="dot-indicators flex" role="tablist">
          {data.crew.map((crew, index) => (
            <button
              key={crew.name}
              aria-selected={selectedCrew.name === crew.name}
              role="tab"
              tabIndex={selectedCrew.name === crew.name ? 0 : -1}
              onClick={() => setSelectedCrew(crew)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedCrew(crew)
                }
              }}
            >
              <span className="sr-only">{crew.role}</span>
            </button>
          ))}
        </div>

        <article className="crew-details flow">
          <header className="flow flow--space-small">
            <h2 className="fs-600 ff-serif uppercase">{selectedCrew.role}</h2>
            <p className="fs-700 uppercase ff-serif">{selectedCrew.name}</p>
          </header>
          <p>{selectedCrew.bio}</p>
        </article>

        <picture>
          <source srcSet={selectedCrew.images.webp} type="image/webp" />
          <Image
            src={selectedCrew.images.png}
            alt={`${selectedCrew.name}, ${selectedCrew.role}`}
            width={514}
            height={700}
            priority
          />
        </picture>
      </main>
    </div>
  )
}