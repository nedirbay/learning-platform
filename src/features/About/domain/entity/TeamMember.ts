export interface TeamMember {
    id: string;
    name: string;
    role: string;
    avatar: string;
    status: 'Online' | 'Offline' | 'Busy';
    bio?: string;
    linkedin?: string;
    twitter?: string;
}
