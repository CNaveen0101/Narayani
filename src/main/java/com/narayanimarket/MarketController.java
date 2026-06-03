package com.narayanimarket;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;

/**
 * MarketController – handles all page routes for Narayani Market.
 * Uses Thymeleaf templates stored in src/main/resources/templates/
 */
@Controller
public class MarketController {

    // -------------------------------------------------------
    //  Product catalogue – in a real app this would come from
    //  a database (MySQL / PostgreSQL via Spring Data JPA).
    // -------------------------------------------------------
    private static final List<Product> PRODUCTS = Arrays.asList(
        new Product(1,  "Fresh Tomatoes",    "1 kg",    30,  "ti-plant"),
        new Product(2,  "Bananas",           "1 dozen", 40,  "ti-apple"),
        new Product(3,  "Sona Masoori Rice", "5 kg",    220, "ti-bowl"),
        new Product(4,  "Sunflower Oil",     "1 litre", 130, "ti-droplet"),
        new Product(5,  "Turmeric Powder",   "200 g",   35,  "ti-salt"),
        new Product(6,  "Tata Salt",         "1 kg",    25,  "ti-package"),
        new Product(7,  "Green Chillies",    "250 g",   15,  "ti-plant"),
        new Product(8,  "Mangoes",           "1 kg",    80,  "ti-apple"),
        new Product(9,  "Coconut Oil",       "500 ml",  90,  "ti-droplet"),
        new Product(10, "Basmati Rice",      "1 kg",    75,  "ti-bowl"),
        new Product(11, "Red Onions",        "1 kg",    35,  "ti-plant"),
        new Product(12, "Coriander Powder",  "100 g",   20,  "ti-salt")
    );

    /** Home page */
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("products", PRODUCTS);
        model.addAttribute("activePage", "home");
        return "index";   // resolves to templates/index.html
    }

    /** Products page – also accessible as a direct URL */
    @GetMapping("/products")
    public String products(Model model) {
        model.addAttribute("products", PRODUCTS);
        model.addAttribute("activePage", "products");
        return "index";
    }

    /** About page */
    @GetMapping("/about")
    public String about(Model model) {
        model.addAttribute("products", PRODUCTS);
        model.addAttribute("activePage", "about");
        return "index";
    }

    /** Contact page */
    @GetMapping("/contact")
    public String contact(Model model) {
        model.addAttribute("products", PRODUCTS);
        model.addAttribute("activePage", "contact");
        return "index";
    }

    /** REST endpoint – returns product list as JSON (bonus API) */
    @GetMapping("/api/products")
    public org.springframework.http.ResponseEntity<List<Product>> apiProducts() {
        return org.springframework.http.ResponseEntity.ok(PRODUCTS);
    }
}
