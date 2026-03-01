#Govila Dental Consultation Website

A modern, responsive dental clinic website built with React, Tailwind CSS, and React Router, showcasing services, testimonials, booking forms, and location integration.

Table of Contents

Project Overview

Features

Screenshots

Installation

Usage

Technologies Used

Folder Structure

Contributing

License

Project Overview

Govila Dental Consultation website is designed to provide an intuitive and professional experience for patients:

Display clinic information and services

Show real before/after patient results

Interactive FAQ and testimonials

Online appointment booking with instant confirmation

Google Maps integration for easy navigation

Fully responsive for desktop, tablet, and mobile

Features

Responsive Design: Works seamlessly on all devices

Booking Form: Requests submitted by patients

Testimonials Carousel: Automatic sliding of reviews

Before/After Gallery: Interactive patient results

Interactive FAQ Section: Expandable questions

Google Maps Embed: Clinic location displayed

Professional UI: Tailwind CSS-based modern styling

Screenshots
Home Page (assets/SSHome.png)

Services Section (assets/SSServices.png)

Booking Form (assets/SSAppointment.png)

Testimonials (assets/SSReviews.png)

Contact & Map Section (assets/SSContact&Map.png)

Installation

Clone the repository

git clone https://github.com/Liorhx/dentist.git

Navigate to the project directory

cd govila-dental

Install dependencies

npm install

Start the development server

npm run dev

Open http://localhost:5173
in your browser.

Usage

Navigate through the Home, About, Services, Reviews, and Contact pages.

Submit an appointment request via the booking form.

Click Call Now to call the clinic directly from desktop or mobile.

View clinic location on Google Maps.

Technologies Used

React – Frontend library

Tailwind CSS – Styling framework

React Router DOM – Routing between pages

Lucide Icons – Icons

Vite – Development build tool

Folder Structure
govila-dental/
├─ public/
├─ src/
│ ├─ assets/ # Images and media
│ ├─ components/ # Reusable components (ServiceCard, TestimonialCard, Navbar)
│ ├─ data/ # Mock data (clinic info, services, testimonials)
│ ├─ pages/ # Page components (Home, Services, Contact, etc.)
│ ├─ App.jsx
│ ├─ main.jsx
│ └─ App.css
├─ package.json
└─ README.md
Contributing

Fork the repository

Create your branch: git checkout -b feature/your-feature

Commit your changes: git commit -m 'Add some feature'

Push to the branch: git push origin feature/your-feature

Open a Pull Request

License

This project is open source and available under the MIT License
.
