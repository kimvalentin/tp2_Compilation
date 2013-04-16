"use strict";
module.exports = GildedRose;

var Item = require('./Item.js');

function GildedRose() {
}

function diminuerQualiteSulfura(toEdit){
	toEdit.plusQualiteEtNom(0,"Sulfuras, Hand of Ragnaros");
}

function parcoursList(listeAParcourir){
	for (var i = 0; i < listeAParcourir.length; i++) {
		if (listeAParcourir[i].deuxNomDifferents("Aged Brie","Backstage passes to a TAFKAL80ETC concert"))
			diminuerQualiteSulfura(listeAParcourir[i]);
		} else {
			if (listeAParcourir[i].qualiteEnDessousSeuil(50)) {
				listeAParcourir[i].augmenterQualite(1);

				if (listeAParcourir[i].matchName("Backstage passes to a TAFKAL80ETC concert"))
					listeAParcourir[i].augmenterQualitePrix(50, 11, 6);
		}

		if (listeAParcourir[i].pasMatchName("Sulfuras, Hand of Ragnaros"))
			listeAParcourir[i].diminuerPrix();

		if (listeAParcourir[i].prixInferieur(0)) {
			if (listeAParcourir[i].deuxNomDifferents("Aged Brie","Backstage passes to a TAFKAL80ETC concert"))
				diminuerQualiteSulfura(listeAParcourir[i]);
				} else {
					listeAParcourir[i].razQualite();
				}
			} else {
				listeAParcourir[i].moinsQualiteAugmente(50);
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
