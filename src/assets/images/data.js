// ---------- IMPORTS ----------

import { icons } from './imgs'
import { imgs } from './imgs'

// ---------- NAVIGATION BAR LINKS ----------

export const NAVBAR_LINKS = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Treatments', link: '/treatment' },
    { name: 'Doctors', link: '/doctors' }
]

// ---------- HERO SECTION DATA ----------

export const HERO_SECTION_LINKS = [
    { name: 'Chat with our consultants', link: '/chat', icon: icons.right_arrow },
    { name: 'Meet to Our Doctors', link: '#doctors', icon: icons.right_arrow },
    { name: 'Explore our Treatments', link: '#treatments', icon: icons.right_arrow }
]

export const slides = [
    {
        image: imgs.slide1,
        title: 'Gentle Dental Care',
        desc: 'Comfortable treatment with modern equipment and caring specialists.'
    },
    {
        image: imgs.slide2,
        title: 'Bright & Healthy Smiles',
        desc: 'We help you achieve a confident smile with personalized care.'
    },
    {
        image: imgs.slide3,
        title: 'Trusted By Families',
        desc: 'Friendly consultations and quality treatment for every age group.'
    }
]

// ---------- ABOUT SECTION DATA ----------

export const stats = [
    { value: '12+', label: 'Years of Excellence' },
    { value: '24/7', label: 'Emergency Support' },
    { value: '3K+', label: 'Smiles Transformed' },
    { value: '98%', label: 'Patient Satisfaction' },
]

// ---------- TREATMENT SECTION DATA ----------

export const treatments = [
    {
        id: '01',
        title: 'Dental Cleaning',
        description:
            'Maintain oral health and prevent cavities with professional deep cleaning and gentle polishing for a brighter smile.',
        type: 'text',
    },
    {
        id: '02',
        title: 'Teeth Whitening',
        description:
            'Get rid of stains and restore your natural sparkle through our fast, safe, and effective whitening treatments.',
        type: 'text',
    },
    {
        id: 'image-1',
        image: imgs.treatmentImg1,
        alt: 'Portrait of a patient in dental care theme',
        type: 'image',
    },
    {
        id: 'image-2',
        image: imgs.treatmentImg2,
        alt: 'Close-up dental treatment procedure',
        type: 'image',
    },
    {
        id: '03',
        title: 'Dental Implants',
        description:
            'Replace missing teeth with durable, natural-looking implants that restore your confidence and perfect your smile.',
        type: 'text',
    },
    {
        id: '04',
        title: 'Root Canal Therapy',
        description:
            'Relieve pain and save your natural tooth with painless, precise root canal treatment using advanced technology.',
        type: 'text',
    },
]

// ---------- DOCTORS SECTION DATA ----------

export const doctors = [
    {
        name: 'Dr. Tarek Hossain',
        specialty: 'Implantologist',
        description:
            'We specialize in dental implants, oral restoration, aiming for natural results that restore function & Smile.',
        image: imgs.doc1,
        social: {
            meta: '#',
            instagram: '#',
            linkedin: '#',
        },
    },
    {
        name: 'Dr. Bannya Talukder',
        specialty: 'Orthodontic Specialist',
        description:
            'We specialize in braces and aligners, crafting aligned smiles with advanced techniques and a focus on patient.',
        image: imgs.doc2,
        social: {
            meta: '#',
            instagram: '#',
            linkedin: '#',
        },
    },
    {
        name: 'Dr. Farhana Ahmed',
        specialty: 'Pediatric Dentist',
        description:
            'Friendly and caring with young patients. Makes every child\'s dental visit stress-free, educational, and positive.',
        image: imgs.doc3,
        social: {
            meta: '#',
            instagram: '#',
            linkedin: '#',
        },
    },
]

// ---------- TESTIMONIALS SECTION DATA ----------

export const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Student',
        rating: 5,
        review:
            'The staff at the clinic were incredibly friendly and made me feel at ease throughout the procedure.',
    },
    {
        name: 'Michael Lee',
        role: 'Businessman',
        rating: 5,
        review:
            'Had a great experience here! They explained everything in detail, and the service was top-notch.',
    },
    {
        name: 'Priya Sharma',
        role: 'Teacher',
        rating: 5,
        review:
            'Amazing dental care! The doctors are highly professional and the clinic is very clean and welcoming.',
    },
    {
        name: 'James Carter',
        role: 'Engineer',
        rating: 5,
        review:
            'Best dental clinic I have visited. The team is caring, efficient, and always on time. Highly recommend.',
    },
    {
        name: 'Aisha Malik',
        role: 'Nurse',
        rating: 5,
        review:
            'I was nervous before my visit but the staff made me feel completely comfortable. Truly world-class service.',
    },
    {
        name: 'David Nguyen',
        role: 'Freelancer',
        rating: 4,
        review:
            'Very good experience overall. Doctors are knowledgeable and explain the procedure clearly before starting.',
    },
]