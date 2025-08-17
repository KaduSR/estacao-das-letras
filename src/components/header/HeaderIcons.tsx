import { Heart, User, ShoppingCart } from 'lucide-react';
export function HeaderIcons() {
    return (
        <div className="flex items-center gap-4 text-gray-600">
            <Heart className="cursor-pointer hover:text-red-500 transition-colors" size={24} />
            <User className="cursor-pointer hover:text-blue-500 transition-colors" size={24} />
            <ShoppingCart className="cursor-pointer hover:text-green-500 transition-colors" size={24} />
        </div>
    );
}