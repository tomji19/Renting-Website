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
        <div ref={searchRef} className="-400 mx-auto">
            {/* Search Input */}
            {/* <div className="relative w-full max-w-5xl mx-auto ">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                    className="w-full px-6 py-3 pl-16 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
                />
                <Search className="absolute left-6 top-4 h-7 w-7 text-gray-500" />
            </div> */}



            <div className="w-full lg:w-1/2 order-3 lg:order-none mx-auto">
                <div className="relative">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for products..."
                        className="w-full py-2 pl-10 pr-4 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Search className="h-5 w-5" />
                    </div>
                </div>
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