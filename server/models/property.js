"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Property.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      listingType: {
        type: DataTypes.ENUM,
        values: ["SALE", "RENTAL"],
      },
      price: DataTypes.FLOAT,
      propertyTypeId: DataTypes.UUID,
      status: {
        type: DataTypes.ENUM,
        values: ["PENDING", "CANCEL", "APPROVED"],
      },
      isAvailable: DataTypes.BOOLEAN,
      images: {
        type: DataTypes.TEXT,
        get() {
          const rawValue = this.getDataValue("images");
          return rawValue ? JSON.parse(rawValue) : [];
        },
        set(arrayImages) {
          this.setDataValue("images", JSON.stringify(arrayImages));
        },
      },
      featuredImages: DataTypes.STRING,
      postedBy: DataTypes.UUID,
      bedRoom: DataTypes.INTEGER,
      bathRoom: DataTypes.INTEGER,
      propertySize: DataTypes.FLOAT,
      yearBuilt: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Property",
    }
  );
  return Property;
};
