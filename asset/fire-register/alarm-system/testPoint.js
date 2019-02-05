var testPoint;
switch (d.getWeek()) {
  case 0:
  case 15:
  case 30:
  case 45:
    testPoint = "L1 D001 | Main Plant Room & L1 D006 Activities Corridor (Mews Courtyard)";
    break;
  case 1:
  case 16:
  case 31:
  case 46:
    testPoint = "L01 D009 | Activities Corridor (Mews Dining Room) & L01 D011 | Mews Dining Room (Front)";
    break;
  case 2:
  case 17:
  case 32:
  case 47:
    testPoint = "L01 D013 | Mews Dining Room (Rear) & L01 D015 | Mews Warden's Office";
    break;
  case 3:
  case 18:
  case 33:
  case 48:
    testPoint = "L01 D016 | Mews Plant Room & L01 D033 | Laundry Corridor";
    break;
  case 4:
  case 19:
  case 34:
  case 49:
    testPoint = "L01 D040 | Main Laundry & L01 D064 | Front Entrance Hall";
    break;
  case 5:
  case 20:
  case 35:
  case 50:
    testPoint = "L01 D072 | Basement & L01 D073 | Maintenance Workshop";
    break;
  case  6:
  case  21:
  case  36:
  case  51:
    testPoint = "L01 D076 | Maintenance Office & L01 D088 | Kitchen Dry Store";
    break;
  case  7:
  case  22:
  case  37:
  case  52:
    testPoint = "L01 D092 | Kitchen Corridor & L02 D032 | Training Room";
    break;
  case  8:
  case  23:
  case  38:
  case  53:
    testPoint = "L02 D035 | Orangery & L02 D036 | Terrace Apartment";
    break;
  case  9:
  case  24:
  case  39:
    break;
    testPoint = "L02 D076 | Main Hall Stairs & L02 D102 | Second Floor Corridor (Lakeview)";
    break;
  case  10:
  case  25:
  case  40:
    testPoint = "L02 D103 | Second Floor Corridor (East Stairs) & L03 D040 | Annexe Ground Floor Corridor (West)";
    break;
  case  11:
  case  26:
  case  41:
    testPoint = "L03 D064 | Annexe Ground Floor Corridor (Sun Lounge) & L03 D065 | Annexe Ground Floor Corridor (East)";
    break;
  case  12:
  case  27:
  case  42:
    testPoint = "L03 D066 | Annexe Ground Floor Corridor (Far Stairs) & L03 D096 | Annexe First Floor Corridor (Central Stairs)";
    break;
  case  13:
  case  28:
  case  43:
    testPoint = "L03 D097 | Annexe First Floor Corridor (Far Stairs) & L04 D035 | North Wing Corridor (Nurse Station)";
    break;
  case  14:
  case  29:
  case  44:
    testPoint = "L04 D036 | North Wing Corridor (Escape Ramp) & L04 D037 | North Wing Corridor (Fire Panel)";
    break;
}
document.getElementById("testPoint").innerHTML = "Test Points " + testPoint;
