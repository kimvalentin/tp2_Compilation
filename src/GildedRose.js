"use strict";
module.exports = GildedRose;

var Item = require('./Item.js');

function GildedRose() {
}

function diminuerQualiteSulfura(toEdit){
	if (toEdit.getQuality() > 0 && toEdit.getName() !== "Sulfuras, Hand of Ragnaros")
		toEdit.setQuality(toEdit.getQuality() - 1);
}

function parcoursList(listeAParcourir){
	for (var i = 0; i < listeAParcourir.length; i++) {
		if (listeAParcourir[i].getName() !== "Aged Brie" 
			&& listeAParcourir[i].getName() !== "Backstage passes to a TAFKAL80ETC concert") {
			diminuerQualiteSulfura(listeAParcourir[i]);
		} else {
			if (listeAParcourir[i].getQuality() < 50) {
				listeAParcourir[i].setQuality(listeAParcourir[i].getQuality() + 1);

				if (listeAParcourir[i].getName()
						 === "Backstage passes to a TAFKAL80ETC concert") {
					if (listeAParcourir[i].getSellIn() < 11 && listeAParcourir[i].getQuality() < 50)
						listeAParcourir[i].setQuality(listeAParcourir[i].getQuality() + 1);

					if (listeAParcourir[i].getSellIn() < 6 && listeAParcourir[i].getQuality() < 50)
						listeAParcourir[i].setQuality(listeAParcourir[i].getQuality() + 1);
					}
				}
		}

		if (listeAParcourir[i].getName() !== "Sulfuras, Hand of Ragnaros")
			listeAParcourir[i].setSellIn(listeAParcourir[i].getSellIn() - 1);

		if (listeAParcourir[i].getSellIn() < 0) {
			if (listeAParcourir[i].getName() !== "Aged Brie") {
				if (listeAParcourir[i].getName()
						 !== "Backstage passes to a TAFKAL80ETC concert") {
					if (listeAParcourir[i].getQuality() > 0 && 
						listeAParcourir[i].getName()!== "Sulfuras, Hand of Ragnaros")
							listeAParcourir[i].setQuality(listeAParcourir[i].getQuality() - 1);
					}
				} else {
					listeAParcourir[i].setQuality(listeAParcourir[i].getQuality() - listeAParcourir[i].getQuality());
				}
			} else {
				if (listeAParcourir[i].getQuality() < 50)
					listeAParcourir[i].setQuality(listeAParcourir[i].getQuality() + 1);
			}
		}
	}
}

GildedRose.prototype = {

    makeItems: function () {
        var items = [ ];
        items.push(new Item("+5 Dexterity Vest", 10, 20));
        items.push(new Item("Aged Brie", 2, 0));
        items.push(new Item("Elixir of the Mongoose", 5, 7));
        items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
        items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
        items.push(new Item("Conjured Mana Cake", 3, 6));
        return items;
    },

    updateQuality: function (list) {
        var items = list;
        parcoursList(items);
    }
}
