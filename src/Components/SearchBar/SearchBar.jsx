import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const searchRef = useRef(null);
    const navigate = useNavigate();

    // Fetch all products from API when component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:5000/products");
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                setAllProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    // Filter products based on search term
    useEffect(() => {
        if (searchTerm.trim()) {
            setIsSearching(true);

            // Filter products starting with the entered letters (case insensitive)
            const results = allProducts.filter((product) =>
                product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
            );

            setSearchResults(results);
        } else {
            setIsSearching(false);
            setSearchResults([]);
        }
    }, [searchTerm, allProducts]);

    // Close search suggestions when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearching(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleProductClick = (product) => {
        navigate(`/product/${product.id}`, { state: { product } });
        setSearchTerm("");
        setIsSearching(false);
    };
    
    return (
        <div ref={searchRef} className="relative w-full max-w-lg mx-auto">
            {/* Search Input */}
            <div className="relative w-full max-w-5xl mx-auto ">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                    className="w-full px-6 py-3 pl-16 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
                />
                <Search className="absolute left-6 top-4 h-7 w-7 text-gray-500" />
            </div>

            {/* Search Results Dropdown */}
            {isSearching && searchResults.length > 0 && (
                <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg border max-h-60 overflow-auto">
                    <ul>
                        {searchResults.map((product) => (
                            <li
                                key={product.id}
                                className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-lg"
                                onClick={() => handleProductClick(product)}
                            >
                                {product.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBar;