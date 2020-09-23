export class Satellite { // Add properties to the Satellite class
  name: string;
  orbitType: string;
  type: string;
  operational: boolean;
  launchDate: string;

constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) { // Add a constructor to Satellite class.
  this.name = name;
  this.orbitType = orbitType;
  this.type = type;
  this.operational = operational;
  this.launchDate = launchDate;
  }

  shouldShowWarning() {  // Add a shouldShowWarning method to the Satellite class.
  if (this.type === 'Space Debris') {
    return true;
  }
  return false;
 }
}

// module.exports = Satellite;
