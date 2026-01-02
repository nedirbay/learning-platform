import { injectable } from "tsyringe";
import type { CourseRepository } from "../../domain/repository/CourseRepository";
import { type Course } from "../../domain/entity/Course";

@injectable()
export class CourseRepositoryImpl implements CourseRepository {
  async getCourses(): Promise<Course[]> {
    // Mock data with diverse categories
    return [
      // Programming & Technology
      {
        id: "1",
        title: "Vue 3 Masterclass",
        description: "Vue 3-iň ösen aýratynlyklaryny we Composition API-ni öwreniň",
        instructor: "Ahmet Rejepow",
        price: 299,
        rating: 4.8,
        thumbnailUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
        categories: ["Programmirleme", "Web Development"],
        duration: "12 sagat",
        enrolledStudents: 1250,
        level: "Orta",
        language: "Türkmençe",
        lastUpdated: "2025-12"
      },
      {
        id: "2",
        title: "TypeScript Essentials",
        description: "JavaScript-den TypeScript-e geçiş we advanced type system",
        instructor: "Maral Gurbanova",
        price: 249,
        rating: 4.9,
        thumbnailUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400",
        categories: ["Programmirleme"],
        duration: "8 sagat",
        enrolledStudents: 890,
        level: "Başlangyç",
        language: "Türkmençe",
        lastUpdated: "2025-11"
      },
      {
        id: "3",
        title: "Python Machine Learning",
        description: "AI we Machine Learning bilen Python programmalaşdyrma",
        instructor: "Serdar Mämmedow",
        price: 399,
        rating: 4.7,
        thumbnailUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400",
        categories: ["Programmirleme", "AI", "Data Science"],
        duration: "20 sagat",
        enrolledStudents: 2100,
        level: "Ösen",
        language: "Türkmençe",
        lastUpdated: "2026-01"
      },

      // Business & Entrepreneurship
      {
        id: "4",
        title: "Biznes Başlamak",
        description: "Zero-den täze biznes döretmek we üstünlikli dolandyrmak",
        instructor: "Jemal Hojagulýýew",
        price: 349,
        rating: 4.6,
        thumbnailUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
        categories: ["Biznes", "Telekeçilik"],
        duration: "15 sagat",
        enrolledStudents: 1580,
        level: "Başlangyç",
        language: "Türkmençe",
        lastUpdated: "2025-12"
      },
      {
        id: "5",
        title: "Digital Marketing Strategy",
        description: "Online marketing, SEO, SMM we content marketing strategiýalary",
        instructor: "Oguljan Annaýewa",
        price: 279,
        rating: 4.8,
        thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
        categories: ["Marketing", "Biznes"],
        duration: "10 sagat",
        enrolledStudents: 1920,
        level: "Orta",
        language: "Türkmençe",
        lastUpdated: "2025-11"
      },
      {
        id: "6",
        title: "Maliýe Dolandyryşy",
        description: "Şahsy we biznes maliýäni dolandyrmak, maýa goýum strategiýalary",
        instructor: "Döwran Gurbanov",
        price: 299,
        rating: 4.5,
        thumbnailUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400",
        categories: ["Maliýe", "Biznes"],
        duration: "12 sagat",
        enrolledStudents: 1340,
        level: "Orta",
        language: "Türkmençe",
        lastUpdated: "2025-10"
      },

      // Design & Creativity
      {
        id: "7",
        title: "Grafik Dizaýn Ulgamy",
        description: "Adobe Photoshop, Illustrator we InDesign bilen professional dizaýn",
        instructor: "Jennet Annaýewa",
        price: 329,
        rating: 4.9,
        thumbnailUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400",
        categories: ["Dizaýn", "Sungat"],
        duration: "18 sagat",
        enrolledStudents: 2450,
        level: "Başlangyç",
        language: "Türkmençe",
        lastUpdated: "2025-12"
      },
      {
        id: "8",
        title: "UI/UX Dizaýn Kursy",
        description: "Ulanyjy tejribesini öwrenmek, Figma we prototyping",
        instructor: "Aýna Nurýýewa",
        price: 349,
        rating: 4.8,
        thumbnailUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400",
        categories: ["Dizaýn", "UX/UI"],
        duration: "14 sagat",
        enrolledStudents: 1870,
        level: "Orta",
        language: "Türkmençe",
        lastUpdated: "2026-01"
      },
      {
        id: "9",
        title: "Video Montaj we Editing",
        description: "Adobe Premiere Pro we After Effects bilen professional video editing",
        instructor: "Batyr Gurbanow",
        price: 379,
        rating: 4.7,
        thumbnailUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400",
        categories: ["Dizaýn", "Wideo"],
        duration: "16 sagat",
        enrolledStudents: 1650,
        level: "Orta",
        language: "Türkmençe",
        lastUpdated: "2025-11"
      },

      // Languages
      {
        id: "10",
        title: "Iňlis dili - A1 deň Başlangyç",
        description: "Zero-den iňlis dilini öwrenmek, grammatika we söhbetdeşlik",
        instructor: "Merdan Orazow",
        price: 199,
        rating: 4.6,
        thumbnailUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400",
        categories: ["Diller", "Iňlis dili"],
        duration: "25 sagat",
        enrolledStudents: 3200,
        level: "Başlangyç",
        language: "Türkmençe",
        lastUpdated: "2025-12"
      },
      {
        id: "11",
        title: "Türk dili Kursy",
        description: "Türk dilini öwrenmek, grammatika we praktiki söhbetdeşlik",
        instructor: "Gülnara Mämmedowa",
        price: 229,
        rating: 4.7,
        thumbnailUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
        categories: ["Diller", "Türk dili"],
        duration: "20 sagat",
        enrolledStudents: 1450,
        level: "Başlangyç",
        language: "Türkmençe",
        lastUpdated: "2025-10"
      },
      {
        id: "12",
        title: "Rus dili - Orta dereje",
        description: "Rus dilini kämilleşdirmek, edebiýat we grammatika",
        instructor: "Aýgül Saparowa",
        price: 249,
        rating: 4.5,
        thumbnailUrl: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=400",
        categories: ["Diller", "Rus dili"],
        duration: "18 sagat",
        enrolledStudents: 980,
        level: "Orta",
        language: "Türkmençe",
        lastUpdated: "2025-11"
      },

      // Health & Fitness
      {
        id: "13",
        title: "Yoga we Meditasiýa",
        description: "Aýdyň-beýik we sagdyn durmuş üçin yoga we meditation tehnikalar",
        instructor: "Mahri Täçmyradowa",
        price: 179,
        rating: 4.8,
        thumbnailUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
        categories: ["Saglyk", "Fitness"],
        duration: "10 sagat",
        enrolledStudents: 2200,
        level: "Başlangyç",
        language: "Türkmençe",
        lastUpdated: "2025-12"
      },
      {
        id: "14",
        title: "Sagdyn Iýmitlenmek we Nutrisiýa",
        description: "Sagdyn iýmitlenmek, diet planlary we nutrisiýa esaslary",
        instructor: "Dr. Kerim Hojayew",
        price: 259,
        rating: 4.6,
        thumbnailUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400",
        categories: ["Saglyk", "Nutrisiýa"],
        duration: "12 sagat",
        enrolledStudents: 1560,
        level: "Başlangyç",
        language: "Türkmençe",
        lastUpdated: "2025-11"
      },
      {
        id: "15",
        title: "Fitness we Güýç Türgenligi",
        description: "Bedenterbiýäçilik, gym exercises we personal training",
        instructor: "Akmuhammet Geldiyew",
        price: 219,
        rating: 4.7,
        thumbnailUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400",
        categories: ["Saglyk", "Fitness", "Sport"],
        duration: "15 sagat",
        enrolledStudents: 1890,
        level: "Orta",
        language: "Türkmençe",
        lastUpdated: "2025-12"
      },

      // Music & Arts
      {
        id: "16",
        title: "Gitara Çalmak - Başlangyç",
        description: "Akustik gitarada ilkinji ädimleriňizi ädip, aýdym çalmak",
        instructor: "Myrat Nuryýew",
        price: 199,
        rating: 4.9,
        thumbnailUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400",
        categories: ["Saz", "Sungat"],
        duration: "20 sagat",
        enrolledStudents: 1720,
        level: "Başlangyç",
        language: "Türkmençe",
        lastUpdated: "2025-10"
      },
      {
        id: "17",
        title: "Piano Çalmak we Teoriýa",
        description: "Classical piano, saz teoriýasy we nota okamak",
        instructor: "Gözel Hojagulýýewa",
        price: 329,
        rating: 4.8,
        thumbnailUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400",
        categories: ["Saz", "Sungat"],
        duration: "25 sagat",
        enrolledStudents: 1240,
        level: "Orta",
        language: "Türkmençe",
        lastUpdated: "2025-11"
      },
      {
        id: "18",
        title: "Suratkeşlik we Reňkler",
        description: "Akrilik we ýag bilen suratkeşlik, kompozisiýa we reňk teoriýasy",
        instructor: "Emine Gurbanova",
        price: 279,
        rating: 4.6,
        thumbnailUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400",
        categories: ["Sungat", "Suratkeşlik"],
        duration: "18 sagat",
        enrolledStudents: 980,
        level: "Başlangyç",
        language: "Türkmençe",
        lastUpdated: "2025-12"
      },

      // Photography & Videography
      {
        id: "19",
        title: "Professional Suratkeşlik",
        description: "DSLR kameralar, kompozisiýa, yşyklandyryş we editing",
        instructor: "Muhammet Gurbanow",
        price: 349,
        rating: 4.9,
        thumbnailUrl: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400",
        categories: ["Suratkeşlik", "Sungat"],
        duration: "16 sagat",
        enrolledStudents: 1650,
        level: "Orta",
        language: "Türkmençe",
        lastUpdated: "2026-01"
      },
      {
        id: "20",
        title: "Toy Suratçylygy we Videografiýa",
        description: "Weddings, events photography we professional videography",
        instructor: "Azat Täçmyradow",
        price: 399,
        rating: 4.7,
        thumbnailUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400",
        categories: ["Suratkeşlik", "Wideo"],
        duration: "14 sagat",
        enrolledStudents: 1120,
        level: "Ösen",
        language: "Türkmençe",
        lastUpdated: "2025-11"
      },

      // Cooking & Culinary
      {
        id: "21",
        title: "Türkmen Aşhanasy",
        description: "Milli tagamlar, palowlar we süýji naharlary taýýarlamak",
        instructor: "Ogulgerek Rejepowa",
        price: 169,
        rating: 4.8,
        thumbnailUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400",
        categories: ["Aşpezlik", "Milli tagamlar"],
        duration: "10 sagat",
        enrolledStudents: 2340,
        level: "Başlangyç",
        language: "Türkmençe",
        lastUpdated: "2025-12"
      },
      {
        id: "22",
        title: "International Aşpezlik",
        description: "Dürli ýurtlaryň tagamlary: Italiýa, Fransiýa, Aziatik aşhanalar",
        instructor: "Şirin Mämmedowa",
        price: 229,
        rating: 4.7,
        thumbnailUrl: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400",
        categories: ["Aşpezlik", "International"],
        duration: "15 sagat",
        enrolledStudents: 1450,
        level: "Orta",
        language: "Türkmençe",
        lastUpdated: "2025-10"
      },
      {
        id: "23",
        title: "Konditer Sungatynyň Esaslary",
        description: "Tort bezeme, pastry we süýji önümleri taýýarlamak",
        instructor: "Aýlar Nuryýewa",
        price: 289,
        rating: 4.9,
        thumbnailUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
        categories: ["Aşpezlik", "Konditerlik"],
        duration: "12 sagat",
        enrolledStudents: 1780,
        level: "Orta",
        language: "Türkmençe",
        lastUpdated: "2025-11"
      },

      // Personal Development
      {
        id: "24",
        title: "Liderlik we Topar Dolandyryşy",
        description: "Effective leadership, team management we communication skills",
        instructor: "Batyr Hojagulýýew",
        price: 299,
        rating: 4.6,
        thumbnailUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
        categories: ["Şahsy Ösüş", "Liderlik"],
        duration: "13 sagat",
        enrolledStudents: 1890,
        level: "Orta",
        language: "Türkmençe",
        lastUpdated: "2025-12"
      },
      {
        id: "25",
        title: "Wagt Dolandyryşy we Önümçilik",
        description: "Time management, productivity hacks we work-life balance",
        instructor: "Aýna Saparowa",
        price: 199,
        rating: 4.7,
        thumbnailUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400",
        categories: ["Şahsy Ösüş", "Önümçilik"],
        duration: "8 sagat",
        enrolledStudents: 2560,
        level: "Başlangyç",
        language: "Türkmençe",
        lastUpdated: "2025-11"
      },
      {
        id: "26",
        title: "Emotional Intelligence",
        description: "EQ ösüşi, empatiýa we emosional balance",
        instructor: "Dr. Merdan Nurýýew",
        price: 249,
        rating: 4.8,
        thumbnailUrl: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=400",
        categories: ["Şahsy Ösüş", "Psihologiýa"],
        duration: "11 sagat",
        enrolledStudents: 1340,
        level: "Orta",
        language: "Türkmençe",
        lastUpdated: "2025-12"
      },

      // Fashion & Beauty
      {
        id: "27",
        title: "Moda dizaýny we Tikin",
        description: "Fashion design, pattern making we professional tikinçilik",
        instructor: "Maral Gurbanova",
        price: 319,
        rating: 4.5,
        thumbnailUrl: "https://images.unsplash.com/photo-1558769132-cb1aea260629?w=400",
        categories: ["Moda", "Dizaýn"],
        duration: "17 sagat",
        enrolledStudents: 1120,
        level: "Orta",
        language: "Türkmençe",
        lastUpdated: "2025-10"
      },
      {
        id: "28",
        title: "Professional Makeup Artist",
        description: "Makeup artistry, bridal makeup we special effects",
        instructor: "Jennet Täçmyradowa",
        price: 279,
        rating: 4.9,
        thumbnailUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400",
        categories: ["Gözellik", "Makeup"],
        duration: "14 sagat",
        enrolledStudents: 1890,
        level: "Başlangyç",
        language: "Türkmençe",
        lastUpdated: "2025-11"
      },

      // Science & Mathematics
      {
        id: "29",
        title: "Matematika - Ýokary Dereje",
        description: "Advanced mathematics: Calculus, Linear Algebra we Statistics",
        instructor: "Dr. Döwran Öwezow",
        price: 269,
        rating: 4.7,
        thumbnailUrl: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400",
        categories: ["Ylym", "Matematika"],
        duration: "22 sagat",
        enrolledStudents: 890,
        level: "Ösen",
        language: "Türkmençe",
        lastUpdated: "2025-12"
      },
      {
        id: "30",
        title: "Astronomiya we Kosmos",
        description: "Ýyldyzlar, planetalar we älem syrlary",
        instructor: "Merdan Saparow",
        price: 229,
        rating: 4.6,
        thumbnailUrl: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400",
        categories: ["Ylym", "Astronomiya"],
        duration: "10 sagat",
        enrolledStudents: 1450,
        level: "Başlangyç",
        language: "Türkmençe",
        lastUpdated: "2025-11"
      },

      // Children & Parenting
      {
        id: "31",
        title: "Terbiýe we Çagalaryң Ösüşi",
        description: "Çagalaryň psihologiýasy, terbiýe we ösdürme usullary",
        instructor: "Dr. Aýgül Mämmedowa",
        price: 189,
        rating: 4.8,
        thumbnailUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400",
        categories: ["Terbiýe", "Maşgala"],
        duration: "9 sagat",
        enrolledStudents: 1670,
        level: "Başlangyç",
        language: "Türkmençe",
        lastUpdated: "2025-12"
      },

      // Agriculture & Gardening
      {
        id: "32",
        title: "Organik Bag ekmek",
        description: "Organic gardening, gök-önüm ösdürmek we ekologiýa",
        instructor: "Kerim Gurbanow",
        price: 159,
        rating: 4.5,
        thumbnailUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
        categories: ["Oba hojalygy", "Ekologiýa"],
        duration: "11 sagat",
        enrolledStudents: 780,
        level: "Başlangyç",
        language: "Türkmençe",
        lastUpdated: "2025-10"
      },

      // Real Estate
      {
        id: "33",
        title: "Gozgalmaýan Emläk Işi",
        description: "Real estate investing, property management we market analysis",
        instructor: "Maksat Orazow",
        price: 349,
        rating: 4.6,
        thumbnailUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400",
        categories: ["Gozgalmaýan Emläk", "Maýa goýum"],
        duration: "13 sagat",
        enrolledStudents: 1120,
        level: "Orta",
        language: "Türkmençe",
        lastUpdated: "2025-11"
      }
    ];
  }

  async getCourseById(id: string): Promise<Course | null> {
    const courses = await this.getCourses();
    return courses.find(c => c.id === id) || null;
  }
}
