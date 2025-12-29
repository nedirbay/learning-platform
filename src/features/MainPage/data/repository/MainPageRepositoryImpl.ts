import { injectable } from "tsyringe";
import type { HomePageData } from "../../domain/entity/HomePageEntities";
import type { MainPageRepository } from "../../domain/repository/MainPageRepository";

@injectable()
export class MainPageRepositoryImpl implements MainPageRepository {
  async getHomePageData(): Promise<HomePageData> {
    // Mock data simulation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          stats: [
            { label: 'Aktiw Okuwçy', value: '15k+' },
            { label: 'Bilim Berijiler', value: '120+' },
            { label: 'Jemi Kurslar', value: '500+' },
            { label: 'Üstünlik', value: '98%' }
          ],
          categories: [
            { name: 'Programirleme', icon: '💻', count: 120 },
            { name: 'Dizajn', icon: '🎨', count: 85 },
            { name: 'Biznes', icon: '💼', count: 64 },
            { name: 'Marketing', icon: '📢', count: 42 },
            { name: 'Fotografiýa', icon: '📷', count: 30 },
            { name: 'Şahsy Ösüş', icon: '🌱', count: 55 },
            { name: 'Diller', icon: '🗣️', count: 48 },
            { name: 'Saglyk', icon: '💪', count: 25 },
          ],
          featuredCourses: [
            {
              title: 'Baştan Başlaýanlar Üçin Python',
              category: 'Programirleme',
              price: '200 TMT',
              rating: 4.8,
              image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&auto=format&fit=crop&q=80',
              instructor: 'Aman Amanow',
              instructorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
              role: 'Senior Developer',
              lessons: 24,
              duration: '12 sagat'
            },
            {
              title: 'UI/UX Dizajn Esaslary we Figma',
              category: 'Dizajn',
              price: '250 TMT',
              rating: 4.9,
              image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d4b?w=600&auto=format&fit=crop&q=80',
              instructor: 'Jeren Meredowa',
              instructorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
              role: 'Product Designer',
              lessons: 18,
              duration: '8 sagat'
            },
            {
              title: 'Sanly Marketing we SMM Strategiýasy',
              category: 'Marketing',
              price: '180 TMT',
              rating: 4.7,
              image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&auto=format&fit=crop&q=80',
              instructor: 'Guwanç Saparow',
              instructorImage: 'https://randomuser.me/api/portraits/men/85.jpg',
              role: 'Marketing Expert',
              lessons: 32,
              duration: '16 sagat'
            }
          ]
        });
      }, 500);
    });
  }
}
