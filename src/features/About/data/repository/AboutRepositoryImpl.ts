import { injectable } from "tsyringe";
import type { AboutRepository } from "../../domain/repository/AboutRepository";
import { type TeamMember } from "../../domain/entity/TeamMember";
import { type Statistic } from "../../domain/entity/Statistic";
import { type CompanyValue } from "../../domain/entity/CompanyValue";

@injectable()
export class AboutRepositoryImpl implements AboutRepository {
    private teamMembers: TeamMember[] = [
        {
            id: "1",
            name: "Ahmet Öwezow",
            role: "Esaslandyryjy & CEO",
            avatar: "👨‍💼",
            status: "Online",
            bio: "10+ ýyl tehnologiýa we bilim ulgamynda tejribesi bar."
        },
        {
            id: "2",
            name: "Maral Gurbanova",
            role: "Tehniki Direktor",
            avatar: "👩‍💻",
            status: "Online",
            bio: "Full-stack Developer we arhitektor. AI we ML hünärmeni."
        },
        {
            id: "3",
            name: "Serdar Mämmedow",
            role: "Bilim Direktory",
            avatar: "👨‍🏫",
            status: "Busy",
            bio: "Pedagog we metodist. Bilim teknologiýalaryny öwrenmek boýunça hünärmen."
        },
        {
            id: "4",
            name: "Jennet Annaýewa",
            role: "Dizaýn Direktory",
            avatar: "👩‍🎨",
            status: "Online",
            bio: "UX/UI dizaýner. Ulanyjy tejribesini kämilleşdirmek boýunça hünärmen."
        }
    ];

    private statistics: Statistic[] = [
        { id: "1", icon: "👨‍🎓", value: "50K+", label: "Okuwçylar" },
        { id: "2", icon: "📚", value: "500+", label: "Kurslar" },
        { id: "3", icon: "🏆", value: "95%", label: "Üstünlik derejesi" },
        { id: "4", icon: "🌍", value: "40+", label: "Ýurtlar" }
    ];

    private companyValues: CompanyValue[] = [
        {
            id: "1",
            icon: "💡",
            title: "Innowsiýa",
            description: "Iň täze tehnologiýalary we okuw usullaryny ulanýarys."
        },
        {
            id: "2",
            icon: "🤝",
            title: "Hyzmatdaşlyk",
            description: "Bilelikde öwrenmek we üstünlige ýetmek üçin goldaw berýäris."
        },
        {
            id: "3",
            icon: "⚡",
            title: "Netijälilik",
            description: "Her bir okuwçynyň üstünligini görmegi maksat edinýäris."
        },
        {
            id: "4",
            icon: "🎯",
            title: "Hiliň",
            description: "Dünýä derejesindäki bilim we üpjünçilik hödürleýäris."
        },
        {
            id: "5",
            icon: "🌟",
            title: "Elýeterlilik",
            description: "Bilimi hemme üçin elýeterli we aňsat edýäris."
        },
        {
            id: "6",
            icon: "🔒",
            title: "Howpsuzlyk",
            description: "Siziň maglumatyňyzy we şahsy durmuşyňyzy goraýarys."
        }
    ];

    async getTeamMembers(): Promise<TeamMember[]> {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 300));
        return this.teamMembers;
    }

    async getStatistics(): Promise<Statistic[]> {
        await new Promise(resolve => setTimeout(resolve, 200));
        return this.statistics;
    }

    async getCompanyValues(): Promise<CompanyValue[]> {
        await new Promise(resolve => setTimeout(resolve, 250));
        return this.companyValues;
    }
}
