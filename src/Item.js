"use strict";

module.exports = Item;

function Item(name, sellIn, quality) {
    this.name    = name;
    this.quality = quality;
    this.sellIn  = sellIn;
    
}

Item.prototype = {
	
	plusQualiteEtNom: function(seuil, nomAInterdire){
		if (quality>seul && name != nomAInterdire)
			quality = quality - 1;
	},
	
	moinsQualiteAugmente: function(seuil){
		if (quality < 50)
			quality++;
	},
	
	qualiteEnDessousSeuil: function(seuil){
		if (quality < seuil)
			return true;
		return false;
	},
	
	deuxNomDifferents : function(forbiddenNameA, forbiddenNameB){
		if (name != forbiddenNameA && name != forbiddenNameB)
			return true,
		return false;
	},
	
	augmenteQualite: function(toAdd){
		quality += toAdd;
	},
	
	diminuerQualite: function(toRemove){
		quality -= toRemove;
	},
	
	augmenterQualitePrix: function(seuilQualite, seuilPrixA, seuilPrixB){
		if (sellIn < seuilPrixA && quality < seuilQualite)
			quality++;
		if(sellIn < seuilPrixB && quality < seuilQualite)
			quality++;
	},
	
	pasMatchName: function(nomAComparer){
		if (name != nomAComparer)
			return true;
		return false;
	},
	
	matchName: function(nomAComparer){
		if (name == nomAComparer)
			return true;
		return false;
	},
	
	razQualite: function(){
		quality = 0;
	},
	
	prixInferieur: function(seuil){
		if (sellIn < seuil)
			return true;
		return false;
	},
	
	diminuPrix: function(){
		sellIn--;
	},

    setSellIn: function (sellIn) {
        this.sellIn = sellIn;
    },

    setQuality: function (quality) {
        this.quality = quality;
    },

    getName: function () {
        return this.name;
    },

    getSellIn: function () {
        return this.sellIn;
    },

    getQuality: function () {
        return this.quality;
    }
}
