<template>
  <div class="app">
    <!-- Navigation -->
    <nav class="main-nav">
      <div class="logo-container">
        <img src="https://mekmunsopheaktra.com/assets/images/logo.png" alt="Arvard Logo" class="logo" />
        <span class="brand-name">Arvard</span>
      </div>

      <div class="nav-links">
        <a href="#" class="nav-link active">Home</a>
        <a href="#" class="nav-link">Academic</a>
        <a href="#" class="nav-link">Students Life</a>
        <a href="#" class="nav-link">About Us</a>
        <a href="#" class="nav-link">Alumni</a>
        <button class="create-account">Create Account</button>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="hero">
      <!-- Hero Image -->
      <div class="hero-image">
        <img src="https://mekmunsopheaktra.com/assets/images/logo.png" alt="Students in classroom" />
      </div>

      <!-- Overlay Text -->
      <div class="hero-content">
        <h1 class="hero-title">Inspiring Minds, Igniting Change at Arvard University</h1>
        <p class="hero-description">
          We are committed to inspiring minds and igniting change through transformative education, groundbreaking
          research, and a dedication to social responsibility.
        </p>
        <button class="learn-more">Learn More <span class="arrow">→</span></button>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="stats">
      <div class="stat-item">
        <div class="stat-number">{{ stats.years }}+</div>
        <div class="stat-label">Years of<br />Experiences</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">{{ stats.students }}M</div>
        <div class="stat-label">Success<br />Students</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">{{ stats.programs }}+</div>
        <div class="stat-label">Study<br />Programs</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const stats = ref({
  years: 85,
  students: 25,
  programs: 30,
});
</script>

<style lang="scss" scoped>
// Variables
$primary-color: #f26b3a;
$text-dark: #333333;
$text-gray: #666666;
$white: #ffffff;
$transition: all 0.3s ease;

.app {
  min-height: 100vh;
  background-color: $white;
}

// Navigation
.main-nav {
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-container {
    display: flex;
    align-items: center;

    .logo {
      height: 2rem;
      width: 2rem;
    }

    .brand-name {
      margin-left: 0.5rem;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    .nav-link {
      color: $text-gray;
      text-decoration: none;
      transition: $transition;

      &:hover {
        color: $text-dark;
      }

      &.active {
        color: $white;
        background-color: $text-dark;
        padding: 0.5rem 1rem;
        border-radius: 9999px;
      }
    }

    .create-account {
      background-color: $text-dark;
      color: $white;
      padding: 0.5rem 1.5rem;
      border-radius: 9999px;
      border: none;
      cursor: pointer;
      transition: $transition;

      &:hover {
        transform: translateY(-2px);
      }
    }
  }
}

// Hero Section
.hero {
  position: relative;

  .hero-image {
    width: 100%;
    height: 500px;
    overflow: hidden;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .hero-content {
    position: absolute;
    bottom: 5rem;
    left: 2.5rem;
    max-width: 40rem;
    background-color: $white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .hero-title {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: $text-dark;
    }

    .hero-description {
      color: $text-gray;
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    .learn-more {
      background-color: $primary-color;
      color: $white;
      padding: 0.75rem 1.5rem;
      border-radius: 9999px;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: $transition;

      .arrow {
        margin-left: 0.5rem;
      }

      &:hover {
        transform: translateY(-2px);
      }
    }
  }
}

// Stats Section
.stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 4rem;

  .stat-item {
    text-align: center;

    .stat-number {
      font-size: 3rem;
      font-weight: bold;
      color: $primary-color;
    }

    .stat-label {
      color: $text-gray;
      margin-top: 0.5rem;
      line-height: 1.4;
    }
  }
}

// Responsive Design
@media (max-width: 768px) {
  .main-nav {
    .nav-links {
      display: none; // You might want to add a mobile menu here
    }
  }

  .hero {
    .hero-content {
      left: 1rem;
      right: 1rem;
      bottom: 2rem;

      .hero-title {
        font-size: 2rem;
      }
    }
  }

  .stats {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
}
</style>
