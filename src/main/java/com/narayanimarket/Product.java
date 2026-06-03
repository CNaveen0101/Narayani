package com.narayanimarket;

/**
 * Product – represents a single grocery/provision item sold at Narayani Market.
 */
public class Product {

    private final int    id;
    private final String name;
    private final String unit;
    private final int    price;
    private final String icon;   // Tabler icon class e.g. "ti-plant"

    public Product(int id, String name, String unit, int price, String icon) {
        this.id    = id;
        this.name  = name;
        this.unit  = unit;
        this.price = price;
        this.icon  = icon;
    }

    public int    getId()    { return id;    }
    public String getName()  { return name;  }
    public String getUnit()  { return unit;  }
    public int    getPrice() { return price; }
    public String getIcon()  { return icon;  }
}
