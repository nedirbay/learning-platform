export interface CartItem {
    courseId: string;
    price: number;
    title: string;
}

export interface Order {
    id: string;
    items: CartItem[];
    total: number;
    status: 'pending' | 'completed' | 'failed';
    date: Date;
}
