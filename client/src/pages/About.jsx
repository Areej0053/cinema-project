
import { Link } from "react-router-dom";
import movies from "../data/movies";
import collections from "../data/collections";
import "../styles/about.css";

const features = [
  {
    icon: "🎬",
    title: "Explore Movies",
    description:
      "Discover films across different genres, from thrilling action adventures to emotional dramas and animated classics."
  },
  {
    icon: "🔍",
    title: "Find Your Favorites",
    description:
      "Search movies by title, filter by genre, and sort results to discover exactly what you want to watch."
  },
  {
    icon: "🍿",
    title: "Discover Movie Collections",
    description:
      "Explore complete movie franchises and follow your favorite characters through every chapter of their stories."
  },
  {
    icon: "⭐",
    title: "Movie Details",
    description:
      "Explore movie posters, ratings, release years, descriptions, and related films in one convenient place."
  }
];

const team = [
  {
    name: "Areej",
    role: "Authentication & Project Integration",
    icon: "💻",
    description:
      "Worked on the Login and Register interfaces and helped bring the project together."
  },
  {
    name: "Waed",
    role: "Movie Discovery & Explore",
    icon: "🎞️",
    description:
      "Developed the movie browsing experience, including movie cards, searching, filtering, and sorting."
  },
  {
    name: "Sara",
    role: "Navigation & About",
    icon: "🎨",
    description:
      "Created the navigation experience and contributed to the About page."
  }
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-overlay">
          <span className="about-eyebrow">
            WELCOME TO CINEVERSE
          </span>

          <h1>
            Every Movie Has <span>a Story.</span>
          </h1>

          <p>
            Welcome to CineVerse, your movie discovery
            experience. Explore unforgettable stories,
            discover iconic characters, and find your
            next favorite film.
          </p>

          <Link to="/" className="about-primary-button">
            Explore Movies →
          </Link>
        </div>
      </section>

      <section className="about-section about-intro">
        <div className="about-intro-text">
          <span className="about-eyebrow">WHO WE ARE</span>

          <h2>
            More Than Just a <span>Movie List</span>
          </h2>

          <p>
            CineVerse is a movie discovery web application
            created by three university students who share
            an interest in technology, creativity, and
            entertainment.
          </p>

          <p>
            Our goal is to make exploring movies simple,
            enjoyable, and interactive. Whether you're
            looking for an exciting adventure, a classic
            romance, or the next chapter of your favorite
            franchise, CineVerse helps you discover it.
          </p>

          <p>
            Built using React, CineVerse combines modern
            web development with a cinematic design to
            create a smooth and responsive browsing
            experience.
          </p>
        </div>

        <div className="about-intro-image">
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=85"
            alt="Rows of seats inside a movie theater"
            loading="lazy"
          />
        </div>
      </section>

      <section className="about-stats">
        <div>
          <strong>{movies.length}+</strong>
          <span>Movies to Discover</span>
        </div>

        <div>
          <strong>{collections.length}</strong>
          <span>Movie Collections</span>
        </div>

        <div>
          <strong>{new Set(movies.map(movie => movie.genre)).size}</strong>
          <span>Movie Genres</span>
        </div>

        <div>
          <strong>3</strong>
          <span>Team Members</span>
        </div>
      </section>

      <section className="about-section about-features">
        <div className="about-section-heading">
          <span className="about-eyebrow">
            THE CINEVERSE EXPERIENCE
          </span>

          <h2>
            Everything You Need to <span>Explore</span>
          </h2>

          <p>
            Designed to make discovering your next
            favorite movie easier and more exciting.
          </p>
        </div>

        <div className="about-feature-grid">
          {features.map((feature) => (
            <article
              className="about-feature-card"
              key={feature.title}
            >
              <div className="about-feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cinema-banner">
        <div>
          <span className="about-eyebrow">
            THE MAGIC OF CINEMA
          </span>

          <h2>One Universe. Endless Stories.</h2>

          <p>
            From legendary heroes to unforgettable
            adventures, every movie opens the door
            to a new world.
          </p>

          <Link to="/" className="about-primary-button">
            Discover the Collection →
          </Link>
        </div>
      </section>

      <section className="about-section about-team">
        <div className="about-section-heading">
          <span className="about-eyebrow">
            THE PEOPLE BEHIND CINEVERSE
          </span>

          <h2>
            Meet Our <span>Team</span>
          </h2>

          <p>
            Three students. One shared vision.
            A universe of movies.
          </p>
        </div>

        <div className="about-team-grid">
          {team.map((member) => (
            <article
              className="about-team-card"
              key={member.name}
            >
              <div className="about-team-avatar">
                {member.icon}
              </div>

              <h3>{member.name}</h3>
              <span>{member.role}</span>
              <p>{member.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-final-cta">
        <h2>Ready for Your Next Movie Night?</h2>

        <p>
          Your next favorite movie might be just
          one click away.
        </p>

        <Link to="/" className="about-primary-button">
          Start Exploring →
        </Link>
      </section>
    </main>
  );
}
