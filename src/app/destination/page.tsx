'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import data from '@/data/data.json'
import { Destination } from '@/types'

export default function DestinationPage() {
  const [selectedDestination, setSelectedDestination] = useState<Destination>(data.destinations[0])

  return (
    <div className="destination">
      <Navigation />
      <main id="main" className="grid-container grid-container--destination flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Pick your destination
        </h1>

        <picture>
          <source srcSet={selectedDestination.images.webp} type="image/webp" />
          <Image
            src={selectedDestination.images.png}
            alt={`${selectedDestination.name} planet`}
            width={445}
            height={445}
            priority
          />
        </picture>

        <div className="tab-list underline-indicators flex" role="tablist">
          {data.destinations.map((destination, index) => (
            <button
              key={destination.name}
              aria-selected={selectedDestination.name === destination.name}
              role="tab"
              tabIndex={selectedDestination.name === destination.name ? 0 : -1}
              className="uppercase ff-sans-cond text-accent letter-spacing-2"
              onClick={() => setSelectedDestination(destination)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedDestination(destination)
                }
              }}
            >
              {destination.name}
            </button>
          ))}
        </div>

        <article className="destination-info flow">
          <h2 className="fs-800 uppercase ff-serif">{selectedDestination.name}</h2>
          <p>{selectedDestination.description}</p>
          
          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="ff-serif uppercase">{selectedDestination.distance}</p>
            </div>
            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="ff-serif uppercase">{selectedDestination.travel}</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}