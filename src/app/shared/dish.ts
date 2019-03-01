import { Comment } from './comment';
export class Dish {
    id: string;
    name: string;
    image: string;
    category: string;
    featured: boolean;
    label: string;
    price: string;
    description: string;
    // update the Dish class to have a comment property
    comments: Comment[];
}
