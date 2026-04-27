// Datos de vehículos basados en análisis de supercarros.com y carrosrd.com
// Estos datos representan rangos de precios realistas para el mercado dominicano

export interface Vehicle {
  id: string;
  marca: string;
  modelo: string;
  subModelo: string;
  año: number;
  precio: number;
  moneda: 'USD' | 'DOP';
  condicion: 'Nuevo' | 'Usado';
  kilometraje?: number;
  ubicacion: string;
  imagen?: string;
}

export interface Marca {
  nombre: string;
  modelos: Modelo[];
}

export interface Modelo {
  nombre: string;
  subModelos: string[];
}

// Marcas y modelos disponibles
export const marcas: Marca[] = [
  {
    nombre: 'Toyota',
    modelos: [
      { nombre: 'Corolla', subModelos: ['LE', 'SE', 'XLE', 'XSE', 'L', 'S'] },
      { nombre: 'Camry', subModelos: ['LE', 'SE', 'XLE', 'XSE', 'TRD'] },
      { nombre: 'RAV4', subModelos: ['LE', 'XLE', 'Limited', 'Adventure', 'TRD Off-Road'] },
      { nombre: 'Highlander', subModelos: ['LE', 'XLE', 'Limited', 'Platinum'] },
      { nombre: 'Hilux', subModelos: ['SR', 'SR5', 'TRD Sport', 'TRD Off-Road', 'Limited'] },
      { nombre: '4Runner', subModelos: ['SR5', 'TRD Off-Road', 'Limited', 'TRD Pro'] },
      { nombre: 'Tacoma', subModelos: ['SR', 'SR5', 'TRD Sport', 'TRD Off-Road', 'Limited'] },
      { nombre: 'Prado', subModelos: ['TX', 'TX-L', 'VX', 'VXL'] },
      { nombre: 'Land Cruiser', subModelos: ['GXR', 'VXR', 'ZX'] },
    ]
  },
  {
    nombre: 'Honda',
    modelos: [
      { nombre: 'Civic', subModelos: ['LX', 'Sport', 'EX', 'Touring', 'Si', 'Type R'] },
      { nombre: 'Accord', subModelos: ['LX', 'Sport', 'EX', 'EX-L', 'Touring'] },
      { nombre: 'CR-V', subModelos: ['LX', 'EX', 'EX-L', 'Touring', 'Sport'] },
      { nombre: 'Pilot', subModelos: ['LX', 'EX', 'EX-L', 'Touring', 'Elite', 'Black Edition'] },
      { nombre: 'HR-V', subModelos: ['LX', 'Sport', 'EX', 'EX-L', 'Touring'] },
      { nombre: 'Ridgeline', subModelos: ['Sport', 'RTL', 'RTL-E', 'Black Edition'] },
    ]
  },
  {
    nombre: 'Hyundai',
    modelos: [
      { nombre: 'Elantra', subModelos: ['SE', 'SEL', 'Limited', 'N Line', 'N'] },
      { nombre: 'Sonata', subModelos: ['SE', 'SEL', 'Limited', 'N Line'] },
      { nombre: 'Tucson', subModelos: ['SE', 'SEL', 'XRT', 'Limited', 'N Line'] },
      { nombre: 'Santa Fe', subModelos: ['SE', 'SEL', 'XRT', 'Limited', 'Calligraphy'] },
      { nombre: 'Palisade', subModelos: ['SE', 'SEL', 'XRT', 'Limited', 'Calligraphy'] },
      { nombre: 'Kona', subModelos: ['SE', 'SEL', 'Limited', 'N Line', 'N'] },
      { nombre: 'Creta', subModelos: ['GL', 'GLS', 'Limited', 'N Line'] },
      { nombre: 'Venue', subModelos: ['SE', 'SEL', 'Limited'] },
    ]
  },
  {
    nombre: 'Kia',
    modelos: [
      { nombre: 'Forte', subModelos: ['LX', 'LXS', 'GT-Line', 'GT'] },
      { nombre: 'K5', subModelos: ['LX', 'LXS', 'GT-Line', 'EX', 'GT'] },
      { nombre: 'Sportage', subModelos: ['LX', 'EX', 'SX', 'X-Pro', 'X-Line'] },
      { nombre: 'Sorento', subModelos: ['LX', 'S', 'EX', 'SX', 'SX Prestige', 'X-Line'] },
      { nombre: 'Telluride', subModelos: ['LX', 'S', 'EX', 'SX', 'SX Prestige', 'X-Line', 'X-Pro'] },
      { nombre: 'Seltos', subModelos: ['LX', 'S', 'EX', 'SX', 'X-Line'] },
      { nombre: 'Soul', subModelos: ['LX', 'S', 'GT-Line', 'EX', 'Turbo'] },
      { nombre: 'Rio', subModelos: ['LX', 'S', 'EX'] },
    ]
  },
  {
    nombre: 'Nissan',
    modelos: [
      { nombre: 'Sentra', subModelos: ['S', 'SV', 'SR', 'SL'] },
      { nombre: 'Altima', subModelos: ['S', 'SV', 'SR', 'SL', 'Platinum'] },
      { nombre: 'Maxima', subModelos: ['SV', 'SR', 'Platinum'] },
      { nombre: 'Rogue', subModelos: ['S', 'SV', 'SL', 'Platinum'] },
      { nombre: 'Pathfinder', subModelos: ['S', 'SV', 'SL', 'Platinum', 'Rock Creek'] },
      { nombre: 'Murano', subModelos: ['S', 'SV', 'SL', 'Platinum'] },
      { nombre: 'Armada', subModelos: ['S', 'SV', 'SL', 'Platinum'] },
      { nombre: 'Frontier', subModelos: ['S', 'SV', 'Pro-4X', 'SL'] },
      { nombre: 'Titan', subModelos: ['S', 'SV', 'Pro-4X', 'SL', 'Platinum Reserve'] },
      { nombre: 'X-Trail', subModelos: ['S', 'SV', 'SL', 'Platinum'] },
    ]
  },
  {
    nombre: 'Ford',
    modelos: [
      { nombre: 'F-150', subModelos: ['XL', 'XLT', 'Lariat', 'King Ranch', 'Platinum', 'Limited', 'Raptor'] },
      { nombre: 'Explorer', subModelos: ['Base', 'XLT', 'Limited', 'ST', 'Platinum', 'Timberline'] },
      { nombre: 'Escape', subModelos: ['S', 'SE', 'SEL', 'Titanium'] },
      { nombre: 'Edge', subModelos: ['SE', 'SEL', 'ST-Line', 'ST', 'Titanium'] },
      { nombre: 'Bronco', subModelos: ['Base', 'Big Bend', 'Black Diamond', 'Outer Banks', 'Badlands', 'Wildtrak', 'Everglades', 'Raptor'] },
      { nombre: 'Bronco Sport', subModelos: ['Base', 'Big Bend', 'Outer Banks', 'Badlands'] },
      { nombre: 'Mustang', subModelos: ['EcoBoost', 'GT', 'Mach 1', 'Shelby GT500'] },
      { nombre: 'Ranger', subModelos: ['XL', 'XLT', 'Lariat', 'Raptor'] },
      { nombre: 'Expedition', subModelos: ['XLT', 'Limited', 'King Ranch', 'Platinum'] },
    ]
  },
  {
    nombre: 'Chevrolet',
    modelos: [
      { nombre: 'Silverado', subModelos: ['WT', 'Custom', 'LT', 'RST', 'LTZ', 'High Country', 'ZR2'] },
      { nombre: 'Equinox', subModelos: ['LS', 'LT', 'RS', 'Premier'] },
      { nombre: 'Traverse', subModelos: ['LS', 'LT', 'RS', 'Z71', 'High Country', 'Premier'] },
      { nombre: 'Tahoe', subModelos: ['LS', 'LT', 'RST', 'Z71', 'Premier', 'High Country'] },
      { nombre: 'Suburban', subModelos: ['LS', 'LT', 'RST', 'Z71', 'Premier', 'High Country'] },
      { nombre: 'Trailblazer', subModelos: ['LS', 'LT', 'Activ', 'RS'] },
      { nombre: 'Blazer', subModelos: ['2LT', '3LT', 'RS', 'Premier'] },
      { nombre: 'Colorado', subModelos: ['WT', 'LT', 'Trail Boss', 'Z71', 'ZR2'] },
      { nombre: 'Camaro', subModelos: ['1LT', '2LT', '3LT', 'SS', 'ZL1'] },
      { nombre: 'Malibu', subModelos: ['LS', 'RS', 'LT', '2LT', 'Premier'] },
    ]
  },
  {
    nombre: 'Jeep',
    modelos: [
      { nombre: 'Wrangler', subModelos: ['Sport', 'Sport S', 'Sahara', 'Rubicon', 'High Altitude', '392'] },
      { nombre: 'Grand Cherokee', subModelos: ['Laredo', 'Limited', 'Overland', 'Summit', 'Summit Reserve', 'Trailhawk', 'SRT', 'Trackhawk'] },
      { nombre: 'Cherokee', subModelos: ['Latitude', 'Latitude Plus', 'Limited', 'Trailhawk', 'Overland'] },
      { nombre: 'Compass', subModelos: ['Sport', 'Latitude', 'Latitude Plus', 'Limited', 'Trailhawk', 'High Altitude'] },
      { nombre: 'Renegade', subModelos: ['Sport', 'Latitude', 'Limited', 'Trailhawk'] },
      { nombre: 'Gladiator', subModelos: ['Sport', 'Sport S', 'Overland', 'Rubicon', 'Mojave', 'High Altitude'] },
      { nombre: 'Wagoneer', subModelos: ['Series I', 'Series II', 'Series III', 'Carbide'] },
      { nombre: 'Grand Wagoneer', subModelos: ['Series I', 'Series II', 'Series III', 'Obsidian'] },
    ]
  },
  {
    nombre: 'Mazda',
    modelos: [
      { nombre: 'Mazda3', subModelos: ['2.0', '2.5 S', '2.5 Turbo', 'Premium'] },
      { nombre: 'Mazda6', subModelos: ['Sport', 'Touring', 'Grand Touring', 'Grand Touring Reserve', 'Signature'] },
      { nombre: 'CX-5', subModelos: ['2.5 S', '2.5 S Select', '2.5 S Preferred', '2.5 Carbon Edition', '2.5 Turbo', '2.5 Turbo Signature'] },
      { nombre: 'CX-50', subModelos: ['2.5 S', '2.5 S Select', '2.5 S Preferred', '2.5 Premium', '2.5 Turbo', '2.5 Turbo Premium Plus'] },
      { nombre: 'CX-30', subModelos: ['2.5 S', '2.5 S Select', '2.5 S Preferred', '2.5 Carbon Edition', '2.5 Turbo', '2.5 Turbo Premium Plus'] },
      { nombre: 'CX-9', subModelos: ['Sport', 'Touring', 'Grand Touring', 'Signature', 'Carbon Edition'] },
      { nombre: 'CX-90', subModelos: ['3.3 Turbo', '3.3 Turbo S', '3.3 Turbo S Premium', '3.3 Turbo S Premium Plus'] },
      { nombre: 'MX-5 Miata', subModelos: ['Sport', 'Club', 'Grand Touring'] },
    ]
  },
  {
    nombre: 'BMW',
    modelos: [
      { nombre: 'Serie 3', subModelos: ['330i', '330e', 'M340i', 'M3'] },
      { nombre: 'Serie 5', subModelos: ['530i', '530e', '540i', 'M550i', 'M5'] },
      { nombre: 'X1', subModelos: ['sDrive28i', 'xDrive28i', 'M35i'] },
      { nombre: 'X3', subModelos: ['sDrive30i', 'xDrive30i', 'M40i', 'X3 M'] },
      { nombre: 'X5', subModelos: ['sDrive40i', 'xDrive40i', 'xDrive50e', 'M60i', 'X5 M'] },
      { nombre: 'X7', subModelos: ['xDrive40i', 'M60i', 'Alpina XB7'] },
      { nombre: 'X6', subModelos: ['xDrive40i', 'M60i', 'X6 M'] },
      { nombre: 'Serie 7', subModelos: ['740i', '760i', 'i7', 'Alpina B7'] },
    ]
  },
  {
    nombre: 'Mercedes-Benz',
    modelos: [
      { nombre: 'Clase C', subModelos: ['C300', 'C43 AMG', 'C63 AMG', 'C63 S AMG'] },
      { nombre: 'Clase E', subModelos: ['E350', 'E450', 'E53 AMG', 'E63 S AMG'] },
      { nombre: 'Clase S', subModelos: ['S500', 'S580', 'S63 AMG', 'Maybach S580', 'Maybach S680'] },
      { nombre: 'GLA', subModelos: ['GLA250', 'GLA35 AMG', 'GLA45 AMG'] },
      { nombre: 'GLC', subModelos: ['GLC300', 'GLC43 AMG', 'GLC63 AMG', 'GLC63 S AMG'] },
      { nombre: 'GLE', subModelos: ['GLE350', 'GLE450', 'GLE53 AMG', 'GLE63 S AMG', 'Maybach GLS600'] },
      { nombre: 'GLS', subModelos: ['GLS450', 'GLS580', 'Maybach GLS600', 'GLS63 AMG'] },
      { nombre: 'Clase G', subModelos: ['G550', 'G63 AMG'] },
    ]
  },
  {
    nombre: 'Audi',
    modelos: [
      { nombre: 'A3', subModelos: ['Premium', 'Premium Plus', 'Prestige', 'S3', 'RS3'] },
      { nombre: 'A4', subModelos: ['Premium', 'Premium Plus', 'Prestige', 'S4', 'RS4'] },
      { nombre: 'A6', subModelos: ['Premium', 'Premium Plus', 'Prestige', 'S6', 'RS6'] },
      { nombre: 'Q3', subModelos: ['Premium', 'Premium Plus', 'Prestige', 'RS Q3'] },
      { nombre: 'Q5', subModelos: ['Premium', 'Premium Plus', 'Prestige', 'SQ5', 'RS Q5'] },
      { nombre: 'Q7', subModelos: ['Premium', 'Premium Plus', 'Prestige', 'SQ7'] },
      { nombre: 'Q8', subModelos: ['Premium', 'Premium Plus', 'Prestige', 'SQ8', 'RS Q8'] },
      { nombre: 'e-tron', subModelos: ['Premium', 'Premium Plus', 'Prestige', 'S', 'GT', 'RS GT'] },
    ]
  },
  {
    nombre: 'Lexus',
    modelos: [
      { nombre: 'IS', subModelos: ['IS300', 'IS350', 'IS500 F Sport'] },
      { nombre: 'ES', subModelos: ['ES250', 'ES300h', 'ES350'] },
      { nombre: 'GS', subModelos: ['GS350', 'GS F'] },
      { nombre: 'LS', subModelos: ['LS500', 'LS500h'] },
      { nombre: 'UX', subModelos: ['UX200', 'UX250h', 'UX300e'] },
      { nombre: 'NX', subModelos: ['NX250', 'NX350', 'NX350h', 'NX450h+', 'NX F Sport'] },
      { nombre: 'RX', subModelos: ['RX350', 'RX350h', 'RX450h+', 'RX500h F Sport', 'RX F Sport'] },
      { nombre: 'GX', subModelos: ['GX460', 'GX550'] },
      { nombre: 'LX', subModelos: ['LX570', 'LX600'] },
    ]
  },
  {
    nombre: 'Volkswagen',
    modelos: [
      { nombre: 'Jetta', subModelos: ['S', 'SE', 'SEL', 'GLI'] },
      { nombre: 'Passat', subModelos: ['S', 'SE', 'R-Line', 'SEL'] },
      { nombre: 'Golf', subModelos: ['S', 'SE', 'R-Line', 'GTI', 'R'] },
      { nombre: 'Tiguan', subModelos: ['S', 'SE', 'SEL', 'SEL R-Line'] },
      { nombre: 'Atlas', subModelos: ['SE', 'SEL', 'SEL R-Line', 'SEL Premium R-Line'] },
      { nombre: 'Atlas Cross Sport', subModelos: ['SE', 'SEL', 'SEL R-Line', 'SEL Premium R-Line'] },
      { nombre: 'Taos', subModelos: ['S', 'SE', 'SEL'] },
      { nombre: 'ID.4', subModelos: ['Standard', 'Pro', 'S', 'Pro S', 'GTX'] },
    ]
  },
  {
    nombre: 'Subaru',
    modelos: [
      { nombre: 'Impreza', subModelos: ['Base', 'Premium', 'Sport', 'Limited', 'WRX', 'WRX STI'] },
      { nombre: 'Legacy', subModelos: ['Base', 'Premium', 'Sport', 'Limited', 'Touring XT'] },
      { nombre: 'Outback', subModelos: ['Base', 'Premium', 'Onyx Edition', 'Limited', 'Touring', 'Wilderness'] },
      { nombre: 'Forester', subModelos: ['Base', 'Premium', 'Sport', 'Limited', 'Touring', 'Wilderness'] },
      { nombre: 'Crosstrek', subModelos: ['Base', 'Premium', 'Sport', 'Limited', 'Wilderness'] },
      { nombre: 'Ascent', subModelos: ['Base', 'Premium', 'Onyx Edition', 'Limited', 'Touring'] },
      { nombre: 'BRZ', subModelos: ['Premium', 'Limited', 'tS'] },
    ]
  },
  {
    nombre: 'Mitsubishi',
    modelos: [
      { nombre: 'Mirage', subModelos: ['ES', 'LE', 'SE', 'GT'] },
      { nombre: 'Lancer', subModelos: ['ES', 'SE', 'GT', 'Ralliart', 'Evolution'] },
      { nombre: 'Outlander', subModelos: ['ES', 'SE', 'SEL', 'GT', 'PHEV'] },
      { nombre: 'Outlander Sport', subModelos: ['ES', 'SE', 'SEL', 'GT'] },
      { nombre: 'Eclipse Cross', subModelos: ['ES', 'LE', 'SE', 'SEL'] },
      { nombre: 'Montero', subModelos: ['LS', 'XLS', 'Limited', 'Sport'] },
      { nombre: 'L200', subModelos: ['GL', 'GLS', 'GT', 'HPE'] },
    ]
  },
  {
    nombre: 'Suzuki',
    modelos: [
      { nombre: 'Swift', subModelos: ['GA', 'GL', 'GLX', 'Sport'] },
      { nombre: 'Baleno', subModelos: ['GL', 'GLX'] },
      { nombre: 'Vitara', subModelos: ['GL', 'GLX', 'GLX AllGrip', 'Sport'] },
      { nombre: 'S-Cross', subModelos: ['GL', 'GLX', 'GLX AllGrip'] },
      { nombre: 'Jimny', subModelos: ['JL', 'JX', 'Sierra'] },
      { nombre: 'Ertiga', subModelos: ['GL', 'GLX'] },
      { nombre: 'Grand Vitara', subModelos: ['JLX', 'Limited', 'Sport'] },
    ]
  },
  {
    nombre: 'Peugeot',
    modelos: [
      { nombre: '208', subModelos: ['Active', 'Allure', 'GT', 'GT Line'] },
      { nombre: '308', subModelos: ['Active', 'Allure', 'GT', 'GT Line'] },
      { nombre: '2008', subModelos: ['Active', 'Allure', 'GT', 'GT Line'] },
      { nombre: '3008', subModelos: ['Active', 'Allure', 'GT', 'GT Line'] },
      { nombre: '5008', subModelos: ['Active', 'Allure', 'GT', 'GT Line'] },
      { nombre: 'Rifter', subModelos: ['Active', 'Allure', 'GT Line'] },
      { nombre: 'Expert', subModelos: ['Combi', 'Business', 'Active'] },
    ]
  },
  {
    nombre: 'Renault',
    modelos: [
      { nombre: 'Clio', subModelos: ['Life', 'Zen', 'Intens', 'RS'] },
      { nombre: 'Sandero', subModelos: ['Life', 'Zen', 'Intens', 'RS', 'Stepway'] },
      { nombre: 'Logan', subModelos: ['Life', 'Zen', 'Intens', 'Stepway'] },
      { nombre: 'Captur', subModelos: ['Life', 'Zen', 'Intens', 'RS Line'] },
      { nombre: 'Duster', subModelos: ['Life', 'Zen', 'Intens', 'Outsider'] },
      { nombre: 'Koleos', subModelos: ['Life', 'Zen', 'Intens', 'Initiale Paris'] },
      { nombre: 'Oroch', subModelos: ['Outsider', 'Intense'] },
      { nombre: 'Alaskan', subModelos: ['Life', 'Zen', 'Intens'] },
    ]
  },
  {
    nombre: 'Dodge',
    modelos: [
      { nombre: 'Charger', subModelos: ['SXT', 'GT', 'R/T', 'Scat Pack', 'SRT Hellcat', 'SRT Hellcat Redeye'] },
      { nombre: 'Challenger', subModelos: ['SXT', 'GT', 'R/T', 'Scat Pack', 'SRT Hellcat', 'SRT Hellcat Redeye', 'SRT Demon'] },
      { nombre: 'Durango', subModelos: ['SXT', 'GT', 'R/T', 'Citadel', 'SRT', 'SRT Hellcat'] },
      { nombre: 'Journey', subModelos: ['SE', 'SXT', 'Crossroad', 'GT'] },
      { nombre: 'Ram 1500', subModelos: ['Tradesman', 'Big Horn', 'Laramie', 'Rebel', 'Limited', 'TRX'] },
      { nombre: 'Ram 2500', subModelos: ['Tradesman', 'Big Horn', 'Laramie', 'Power Wagon', 'Limited'] },
    ]
  },
  {
    nombre: 'Chrysler',
    modelos: [
      { nombre: '300', subModelos: ['Touring', 'Touring L', 'S', 'C', 'SRT'] },
      { nombre: 'Pacifica', subModelos: ['Touring', 'Touring L', 'Limited', 'Pinnacle'] },
      { nombre: 'Voyager', subModelos: ['L', 'LX'] },
    ]
  },
  {
    nombre: 'Cadillac',
    modelos: [
      { nombre: 'CT4', subModelos: ['Luxury', 'Premium Luxury', 'Sport', 'V'] },
      { nombre: 'CT5', subModelos: ['Luxury', 'Premium Luxury', 'Sport', 'V', 'V Blackwing'] },
      { nombre: 'XT4', subModelos: ['Luxury', 'Premium Luxury', 'Sport'] },
      { nombre: 'XT5', subModelos: ['Luxury', 'Premium Luxury', 'Sport', 'Platinum'] },
      { nombre: 'XT6', subModelos: ['Luxury', 'Premium Luxury', 'Sport', 'Platinum'] },
      { nombre: 'Escalade', subModelos: ['Luxury', 'Premium Luxury', 'Sport', 'Platinum', 'V'] },
    ]
  },
  {
    nombre: 'Lincoln',
    modelos: [
      { nombre: 'Corsair', subModelos: ['Standard', 'Reserve', 'Grand Touring'] },
      { nombre: 'Nautilus', subModelos: ['Standard', 'Reserve', 'Black Label'] },
      { nombre: 'Aviator', subModelos: ['Standard', 'Reserve', 'Grand Touring', 'Black Label'] },
      { nombre: 'Navigator', subModelos: ['Reserve', 'Black Label', 'L'] },
    ]
  },
  {
    nombre: 'Infiniti',
    modelos: [
      { nombre: 'Q50', subModelos: ['Pure', 'Luxe', 'Sensory', 'Red Sport 400'] },
      { nombre: 'Q60', subModelos: ['Pure', 'Luxe', 'Red Sport 400'] },
      { nombre: 'QX50', subModelos: ['Pure', 'Luxe', 'Essential', 'Sensory', 'Autograph'] },
      { nombre: 'QX55', subModelos: ['Luxe', 'Essential', 'Sensory'] },
      { nombre: 'QX60', subModelos: ['Pure', 'Luxe', 'Sensory', 'Autograph'] },
      { nombre: 'QX80', subModelos: ['Luxe', 'Premium Select', 'Sensory', 'Autograph'] },
    ]
  },
  {
    nombre: 'Acura',
    modelos: [
      { nombre: 'ILX', subModelos: ['Base', 'Premium', 'Technology', 'A-Spec'] },
      { nombre: 'TLX', subModelos: ['Base', 'Technology', 'A-Spec', 'Advance', 'Type S'] },
      { nombre: 'RDX', subModelos: ['Base', 'Technology', 'A-Spec', 'Advance'] },
      { nombre: 'MDX', subModelos: ['Base', 'Technology', 'A-Spec', 'Advance', 'Type S'] },
      { nombre: 'Integra', subModelos: ['Base', 'Technology', 'A-Spec', 'Type S'] },
    ]
  },
  {
    nombre: 'Genesis',
    modelos: [
      { nombre: 'G70', subModelos: ['2.0T', '3.3T', '2.0T Sport', '3.3T Sport'] },
      { nombre: 'G80', subModelos: ['2.5T', '3.5T', '2.5T Sport', '3.5T Sport'] },
      { nombre: 'G90', subModelos: ['3.5T', '3.5T E-SC', '5.0L'] },
      { nombre: 'GV70', subModelos: ['2.5T', '3.5T', '2.5T Sport', '3.5T Sport'] },
      { nombre: 'GV80', subModelos: ['2.5T', '3.5T', '2.5T Prestige', '3.5T Prestige'] },
    ]
  },
  {
    nombre: 'Volvo',
    modelos: [
      { nombre: 'S60', subModelos: ['Momentum', 'R-Design', 'Inscription', 'Polestar', 'Recharge'] },
      { nombre: 'S90', subModelos: ['Momentum', 'R-Design', 'Inscription', 'Recharge'] },
      { nombre: 'XC40', subModelos: ['Momentum', 'R-Design', 'Inscription', 'Recharge'] },
      { nombre: 'XC60', subModelos: ['Momentum', 'R-Design', 'Inscription', 'Recharge', 'Polestar'] },
      { nombre: 'XC90', subModelos: ['Momentum', 'R-Design', 'Inscription', 'Recharge', 'Excellence'] },
      { nombre: 'V60', subModelos: ['Momentum', 'R-Design', 'Inscription', 'Cross Country', 'Recharge'] },
      { nombre: 'V90', subModelos: ['Momentum', 'R-Design', 'Inscription', 'Cross Country', 'Recharge'] },
    ]
  },
  {
    nombre: 'Land Rover',
    modelos: [
      { nombre: 'Range Rover', subModelos: ['SE', 'HSE', 'Autobiography', 'SV', 'PHEV'] },
      { nombre: 'Range Rover Sport', subModelos: ['SE', 'HSE', 'Autobiography', 'SVR', 'PHEV'] },
      { nombre: 'Range Rover Velar', subModelos: ['S', 'R-Dynamic S', 'HSE', 'Autobiography'] },
      { nombre: 'Range Rover Evoque', subModelos: ['S', 'R-Dynamic S', 'HSE', 'Autobiography'] },
      { nombre: 'Discovery', subModelos: ['S', 'R-Dynamic S', 'HSE', 'Metropolitan'] },
      { nombre: 'Discovery Sport', subModelos: ['S', 'R-Dynamic S', 'HSE'] },
      { nombre: 'Defender', subModelos: ['90', '110', '130', 'V8', 'Carpathian Edition'] },
    ]
  },
  {
    nombre: 'Jaguar',
    modelos: [
      { nombre: 'XE', subModelos: ['S', 'R-Dynamic S', 'R-Dynamic SE', 'R-Dynamic HSE'] },
      { nombre: 'XF', subModelos: ['S', 'R-Dynamic S', 'R-Dynamic SE', 'R-Dynamic HSE'] },
      { nombre: 'F-PACE', subModelos: ['S', 'R-Dynamic S', 'R-Dynamic SE', 'R-Dynamic HSE', 'SVR'] },
      { nombre: 'E-PACE', subModelos: ['S', 'R-Dynamic S', 'R-Dynamic SE', 'R-Dynamic HSE'] },
      { nombre: 'I-PACE', subModelos: ['S', 'SE', 'HSE'] },
      { nombre: 'F-TYPE', subModelos: ['P300', 'P450', 'P575', 'R', 'SVR'] },
    ]
  },
  {
    nombre: 'Porsche',
    modelos: [
      { nombre: '911', subModelos: ['Carrera', 'Carrera S', 'Carrera GTS', 'Turbo', 'Turbo S', 'GT3', 'GT3 RS', 'GT2 RS'] },
      { nombre: 'Cayenne', subModelos: ['Base', 'S', 'GTS', 'Turbo', 'Turbo S E-Hybrid', 'Coupe'] },
      { nombre: 'Macan', subModelos: ['Base', 'S', 'GTS', 'Turbo'] },
      { nombre: 'Panamera', subModelos: ['4', '4S', 'GTS', 'Turbo', 'Turbo S', 'Turbo S E-Hybrid'] },
      { nombre: 'Taycan', subModelos: ['Base', '4S', 'GTS', 'Turbo', 'Turbo S', 'Cross Turismo'] },
      { nombre: '718', subModelos: ['Cayman', 'Boxster', 'Cayman S', 'Boxster S', 'Cayman GTS', 'Boxster GTS', 'GT4', 'Spyder'] },
    ]
  },
  {
    nombre: 'Tesla',
    modelos: [
      { nombre: 'Model 3', subModelos: ['Standard Range Plus', 'Long Range', 'Performance'] },
      { nombre: 'Model S', subModelos: ['Long Range', 'Plaid'] },
      { nombre: 'Model X', subModelos: ['Long Range', 'Plaid'] },
      { nombre: 'Model Y', subModelos: ['Long Range', 'Performance'] },
      { nombre: 'Cybertruck', subModelos: ['Rear-Wheel Drive', 'All-Wheel Drive', 'Cyberbeast'] },
    ]
  },
  {
    nombre: 'Mini',
    modelos: [
      { nombre: 'Cooper', subModelos: ['Classic', 'Signature', 'Iconic', 'S', 'John Cooper Works'] },
      { nombre: 'Cooper Clubman', subModelos: ['Classic', 'Signature', 'Iconic', 'S', 'John Cooper Works'] },
      { nombre: 'Cooper Countryman', subModelos: ['Classic', 'Signature', 'Iconic', 'S', 'John Cooper Works', 'SE'] },
      { nombre: 'Cooper Convertible', subModelos: ['Classic', 'Signature', 'Iconic', 'S', 'John Cooper Works'] },
    ]
  },
  {
    nombre: 'Fiat',
    modelos: [
      { nombre: '500', subModelos: ['Pop', 'Lounge', 'Sport', 'Abarth'] },
      { nombre: '500X', subModelos: ['Pop', 'Lounge', 'Sport', 'Trekking', 'Trekking Plus'] },
      { nombre: '500L', subModelos: ['Pop', 'Lounge', 'Trekking'] },
      { nombre: 'Tipo', subModelos: ['Easy', 'Lounge', 'Sport', 'Cross'] },
      { nombre: 'Pulse', subModelos: ['Drive', 'Audace', 'Sport', 'Turbo'] },
      { nombre: 'Fastback', subModelos: ['Drive', 'Audace', 'Sport', 'Turbo'] },
      { nombre: 'Toro', subModelos: ['Freedom', 'Volcano', 'Ranch', 'Ultra'] },
      { nombre: 'Strada', subModelos: ['Working', 'Freedom', 'Adventure', 'Ranch'] },
    ]
  },
  {
    nombre: 'Ram',
    modelos: [
      { nombre: '1500', subModelos: ['Tradesman', 'Big Horn', 'Laramie', 'Rebel', 'Limited', 'TRX', 'Longhorn'] },
      { nombre: '2500', subModelos: ['Tradesman', 'Big Horn', 'Laramie', 'Power Wagon', 'Limited', 'Longhorn'] },
      { nombre: '3500', subModelos: ['Tradesman', 'Big Horn', 'Laramie', 'Limited', 'Longhorn'] },
      { nombre: 'ProMaster', subModelos: ['1500', '2500', '3500', 'City'] },
      { nombre: 'ProMaster City', subModelos: ['Tradesman', 'SLT', 'Wagon'] },
    ]
  },
  {
    nombre: 'GMC',
    modelos: [
      { nombre: 'Sierra 1500', subModelos: ['Pro', 'SLE', 'Elevation', 'SLT', 'AT4', 'AT4X', 'Denali', 'Denali Ultimate'] },
      { nombre: 'Sierra 2500HD', subModelos: ['Pro', 'SLE', 'SLT', 'AT4', 'Denali'] },
      { nombre: 'Canyon', subModelos: ['Elevation', 'AT4', 'Denali', 'AT4X'] },
      { nombre: 'Terrain', subModelos: ['SLE', 'SLT', 'AT4', 'Denali'] },
      { nombre: 'Acadia', subModelos: ['SLE', 'SLT', 'AT4', 'Denali'] },
      { nombre: 'Yukon', subModelos: ['SLE', 'SLT', 'AT4', 'Denali', 'Denali Ultimate'] },
      { nombre: 'Hummer EV', subModelos: ['EV2', 'EV2X', 'EV3X', 'Edition 1'] },
    ]
  },
  {
    nombre: 'Hummer',
    modelos: [
      { nombre: 'H1', subModelos: ['Alpha', 'Base'] },
      { nombre: 'H2', subModelos: ['Base', 'Luxury', 'Adventure', 'SUT'] },
      { nombre: 'H3', subModelos: ['Base', 'Adventure', 'Luxury', 'Alpha'] },
      { nombre: 'EV', subModelos: ['EV2', 'EV2X', 'EV3X', 'Edition 1', 'SUV'] },
    ]
  },
  {
    nombre: 'Isuzu',
    modelos: [
      { nombre: 'D-Max', subModelos: ['LS', 'LS-M', 'LS-U', 'LS-T', 'X-Terrain'] },
      { nombre: 'MU-X', subModelos: ['LS-M', 'LS-U', 'LS-T'] },
      { nombre: 'Elf', subModelos: ['NHR', 'NKR', 'NPR', 'NQR', 'FRR', 'FVR', 'FVM', 'Giga'] },
    ]
  },
  {
    nombre: 'Great Wall',
    modelos: [
      { nombre: 'Steed', subModelos: ['Single Cab', 'Double Cab', 'Extended Cab'] },
      { nombre: 'Wingle', subModelos: ['5', '6', '7'] },
      { nombre: 'Haval H2', subModelos: ['City', 'Lux', 'Premium'] },
      { nombre: 'Haval H6', subModelos: ['Premium', 'Lux', 'Ultra'] },
      { nombre: 'Haval H9', subModelos: ['Lux', 'Ultra'] },
      { nombre: 'Poer', subModelos: ['Passenger', 'Commercial', 'Off-road'] },
      { nombre: 'Cannon', subModelos: ['L', 'X', 'Vanta'] },
    ]
  },
  {
    nombre: 'Changan',
    modelos: [
      { nombre: 'Alsvin', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'Eado', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'Raeton', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'CS15', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'CS35', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'CS55', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'CS75', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'CS95', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'Hunter', subModelos: ['Comfort', 'Elite', 'Luxury'] },
    ]
  },
  {
    nombre: 'Chery',
    modelos: [
      { nombre: 'Tiggo 2', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'Tiggo 3', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'Tiggo 4', subModelos: ['Comfort', 'Elite', 'Luxury', 'Pro'] },
      { nombre: 'Tiggo 7', subModelos: ['Comfort', 'Elite', 'Luxury', 'Pro'] },
      { nombre: 'Tiggo 8', subModelos: ['Comfort', 'Elite', 'Luxury', 'Pro'] },
      { nombre: 'Arrizo 5', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'Arrizo 6', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'Arrizo 8', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'Omoda 5', subModelos: ['Comfort', 'Elite', 'Luxury'] },
    ]
  },
  {
    nombre: 'Geely',
    modelos: [
      { nombre: 'Emgrand', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'Coolray', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'Azkarra', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'Okavango', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'Tugella', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'Monjaro', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'Atlas', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'Preface', subModelos: ['Comfort', 'Elite', 'Luxury'] },
    ]
  },
  {
    nombre: 'Jetour',
    modelos: [
      { nombre: 'X70', subModelos: ['Comfort', 'Elite', 'Luxury', 'Plus'] },
      { nombre: 'X70 Plus', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'X90', subModelos: ['Comfort', 'Elite', 'Luxury', 'Plus'] },
      { nombre: 'X90 Plus', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'Dashing', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'T2', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'T1', subModelos: ['Comfort', 'Elite', 'Luxury'] },
    ]
  },
  {
    nombre: 'KYC',
    modelos: [
      { nombre: 'X5', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'X3', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Pickup', subModelos: ['Single Cab', 'Double Cab', 'Crew Cab'] },
      { nombre: 'Van', subModelos: ['Cargo', 'Passenger', 'Combi'] },
      { nombre: 'Mini Truck', subModelos: ['Standard', 'Deluxe', 'Premium'] },
    ]
  },
  {
    nombre: 'JAC',
    modelos: [
      { nombre: 'J2', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'J4', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'J5', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'S2', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'S3', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'S4', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'S5', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'S7', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'T6', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'T8', subModelos: ['Standard', 'Deluxe', 'Premium'] },
    ]
  },
  {
    nombre: 'Daihatsu',
    modelos: [
      { nombre: 'Mira', subModelos: ['L', 'X', 'G', 'Custom'] },
      { nombre: 'Move', subModelos: ['L', 'X', 'G', 'Custom'] },
      { nombre: 'Tanto', subModelos: ['L', 'X', 'G', 'Custom'] },
      { nombre: 'Wake', subModelos: ['L', 'X', 'G', 'Custom'] },
      { nombre: 'Cast', subModelos: ['Style', 'Activa', 'Sport'] },
      { nombre: 'Copen', subModelos: ['XPLAY', 'Robe', 'Cero'] },
      { nombre: 'Boon', subModelos: ['X', 'G', 'Style'] },
      { nombre: 'Thor', subModelos: ['G', 'Custom'] },
      { nombre: 'Rocky', subModelos: ['G', 'Premium'] },
      { nombre: 'Terios', subModelos: ['X', 'R', 'Custom'] },
    ]
  },
  {
    nombre: 'Hino',
    modelos: [
      { nombre: 'Dutro', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Ranger', subModelos: ['FC', 'FD', 'FE', 'FF', 'FG', 'SG', 'SS'] },
      { nombre: 'Profia', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Liesse', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Poncho', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Selega', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Rainbow', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Melpha', subModelos: ['Standard', 'Deluxe', 'Premium'] },
    ]
  },
  {
    nombre: 'ZXAuto',
    modelos: [
      { nombre: 'GrandTiger', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Admiral', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Terralord', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'TUV', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'C3', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'C5', subModelos: ['Standard', 'Deluxe', 'Premium'] },
    ]
  },
  {
    nombre: 'Sinotruk',
    modelos: [
      { nombre: 'Howo', subModelos: ['T5G', 'T7H', 'A7', 'N7G', 'TH7', 'MAX'] },
      { nombre: 'Sitrak', subModelos: ['C7H', 'G7H', 'C9H'] },
      { nombre: 'Steyr', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Huanghe', subModelos: ['Standard', 'Deluxe', 'Premium'] },
    ]
  },
  {
    nombre: 'Shineray',
    modelos: [
      { nombre: 'X30', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'X30L', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'T30', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'T32', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'T50', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'T52', subModelos: ['Standard', 'Deluxe', 'Premium'] },
    ]
  },
  {
    nombre: 'Mountain Raise',
    modelos: [
      { nombre: 'Dumper', subModelos: ['1 Ton', '2 Ton', '3 Ton', '5 Ton', '8 Ton', '10 Ton'] },
      { nombre: 'Loader', subModelos: ['Small', 'Medium', 'Large', 'Wheel', 'Skid Steer'] },
      { nombre: 'Excavator', subModelos: ['Mini', 'Small', 'Medium', 'Large', 'Crawler', 'Wheeled'] },
      { nombre: 'Forklift', subModelos: ['1.5 Ton', '2 Ton', '3 Ton', '5 Ton', '7 Ton', '10 Ton'] },
      { nombre: 'Tractor', subModelos: ['Small', 'Medium', 'Large', '4WD', 'Crawler'] },
    ]
  },
  {
    nombre: 'Yamaha',
    modelos: [
      { nombre: 'MT-03', subModelos: ['Standard', 'ABS', 'SP'] },
      { nombre: 'MT-07', subModelos: ['Standard', 'ABS', 'SP'] },
      { nombre: 'MT-09', subModelos: ['Standard', 'SP', 'GT'] },
      { nombre: 'MT-10', subModelos: ['Standard', 'SP'] },
      { nombre: 'R3', subModelos: ['Standard', 'ABS', 'MotoGP'] },
      { nombre: 'R6', subModelos: ['Standard', 'ABS', 'Race'] },
      { nombre: 'R7', subModelos: ['Standard', 'ABS', 'World GP'] },
      { nombre: 'R1', subModelos: ['Standard', 'M', 'MotoGP'] },
      { nombre: 'FZ', subModelos: ['Standard', 'FI', 'V2.0'] },
      { nombre: 'FZ-S', subModelos: ['Standard', 'FI', 'V3.0'] },
      { nombre: 'Fazer', subModelos: ['Standard', 'FI', 'V2.0'] },
      { nombre: 'FZ-X', subModelos: ['Standard', 'Deluxe'] },
      { nombre: 'XSR700', subModelos: ['Standard', 'XTribute'] },
      { nombre: 'XSR900', subModelos: ['Standard', 'GP'] },
      { nombre: 'Tracer 7', subModelos: ['Standard', 'GT'] },
      { nombre: 'Tracer 9', subModelos: ['Standard', 'GT', 'GT+'] },
      { nombre: 'Ténéré 700', subModelos: ['Standard', 'World Raid'] },
      { nombre: 'XTZ 125', subModelos: ['Standard', 'E', 'K'] },
      { nombre: 'XTZ 150', subModelos: ['Standard', 'E', 'Z'] },
      { nombre: 'XTZ 250', subModelos: ['Standard', 'Lander', 'Ténéré'] },
      { nombre: 'XTZ 750', subModelos: ['Standard', 'Super Ténéré'] },
      { nombre: 'NMAX', subModelos: ['Standard', 'Connected', 'Turbo'] },
      { nombre: 'XMAX', subModelos: ['Standard', 'Tech MAX', 'Connected'] },
      { nombre: 'TMAX', subModelos: ['Standard', 'Tech MAX', 'DX'] },
      { nombre: 'Aerox', subModelos: ['Standard', 'Connected', 'MotoGP'] },
      { nombre: 'Ray ZR', subModelos: ['Standard', 'Street Rally', 'Hybrid'] },
      { nombre: 'Fascino', subModelos: ['Standard', 'Hybrid'] },
      { nombre: 'Vino', subModelos: ['Standard', 'Deluxe'] },
      { nombre: 'Zuma', subModelos: ['Standard', 'FX', '125'] },
      { nombre: 'BWS', subModelos: ['Standard', 'X', '125'] },
      { nombre: 'Majesty', subModelos: ['Standard', 'S', 'DX'] },
      { nombre: 'TMAX', subModelos: ['Standard', 'Tech MAX', 'DX'] },
    ]
  },
  {
    nombre: 'Harley-Davidson',
    modelos: [
      { nombre: 'Sportster S', subModelos: ['Standard', 'Special'] },
      { nombre: 'Nightster', subModelos: ['Standard', 'Special'] },
      { nombre: 'Iron 883', subModelos: ['Standard', 'Special'] },
      { nombre: 'Iron 1200', subModelos: ['Standard', 'Special'] },
      { nombre: 'Forty-Eight', subModelos: ['Standard', 'Special'] },
      { nombre: 'Roadster', subModelos: ['Standard', 'Special'] },
      { nombre: 'Softail Standard', subModelos: ['Standard', 'Special'] },
      { nombre: 'Street Bob', subModelos: ['Standard', 'Special', '114'] },
      { nombre: 'Low Rider', subModelos: ['Standard', 'S', 'ST'] },
      { nombre: 'Fat Bob', subModelos: ['Standard', '114'] },
      { nombre: 'Softail Slim', subModelos: ['Standard', 'Special'] },
      { nombre: 'Heritage Classic', subModelos: ['Standard', '114'] },
      { nombre: 'Deluxe', subModelos: ['Standard', 'Special'] },
      { nombre: 'Breakout', subModelos: ['Standard', '117'] },
      { nombre: 'Fat Boy', subModelos: ['Standard', '114', 'Lo'] },
      { nombre: 'Road King', subModelos: ['Standard', 'Special', 'Special 126'] },
      { nombre: 'Street Glide', subModelos: ['Standard', 'Special', 'ST', 'CVO'] },
      { nombre: 'Road Glide', subModelos: ['Standard', 'Special', 'ST', 'CVO'] },
      { nombre: 'Electra Glide', subModelos: ['Standard', 'Ultra Classic', 'Ultra Limited'] },
      { nombre: 'Ultra Limited', subModelos: ['Standard', 'CVO'] },
      { nombre: 'Tri Glide', subModelos: ['Standard', 'Ultra', 'CVO'] },
      { nombre: 'Freewheeler', subModelos: ['Standard', 'CVO'] },
      { nombre: 'CVO Road Glide', subModelos: ['Standard', 'ST', 'Limited'] },
      { nombre: 'CVO Street Glide', subModelos: ['Standard', 'ST', 'Limited'] },
      { nombre: 'CVO Limited', subModelos: ['Standard', 'Special'] },
      { nombre: 'Pan America', subModelos: ['Standard', 'Special', 'CVO'] },
      { nombre: 'LiveWire', subModelos: ['One', 'S2', 'Del Mar'] },
      { nombre: 'S2 Mulholland', subModelos: ['Standard', 'Special'] },
      { nombre: 'S2 Del Mar', subModelos: ['Standard', 'Special'] },
    ]
  },
  {
    nombre: 'Ducati',
    modelos: [
      { nombre: 'Panigale V2', subModelos: ['Standard', 'Bayliss', 'Anniversario'] },
      { nombre: 'Panigale V4', subModelos: ['Standard', 'S', 'R', 'SP2', 'Superleggera'] },
      { nombre: 'Streetfighter V2', subModelos: ['Standard', 'SP'] },
      { nombre: 'Streetfighter V4', subModelos: ['Standard', 'S', 'SP2'] },
      { nombre: 'Monster', subModelos: ['Standard', 'Plus', 'SP'] },
      { nombre: 'SuperSport', subModelos: ['Standard', 'S', '950'] },
      { nombre: 'Diavel', subModelos: ['Standard', '1260', 'V4', 'X'] },
      { nombre: 'XDiavel', subModelos: ['Standard', 'S', 'Black Star'] },
      { nombre: 'Hypermotard', subModelos: ['Standard', 'SP', '950', '698'] },
      { nombre: 'Multistrada V2', subModelos: ['Standard', 'S', 'Pikes Peak'] },
      { nombre: 'Multistrada V4', subModelos: ['Standard', 'S', 'Pikes Peak', 'RS'] },
      { nombre: 'Scrambler', subModelos: ['Icon', 'Full Throttle', 'Nightshift', 'Desert Sled', '1100', '1100 Pro', '1100 Sport Pro'] },
      { nombre: 'DesertX', subModelos: ['Standard', 'Rally'] },
    ]
  },
  {
    nombre: 'Triumph',
    modelos: [
      { nombre: 'Speed Triple', subModelos: ['RS', '1200 RS', '1200 RR'] },
      { nombre: 'Street Triple', subModelos: ['R', 'RS', 'Moto2'] },
      { nombre: 'Daytona', subModelos: ['660', '765', 'Moto2'] },
      { nombre: 'Tiger 660', subModelos: ['Sport', 'GT'] },
      { nombre: 'Tiger 800', subModelos: ['XRx', 'XCx', 'XCA', 'XRT', 'XCT'] },
      { nombre: 'Tiger 900', subModelos: ['GT', 'Rally', 'GT Pro', 'Rally Pro'] },
      { nombre: 'Tiger 1200', subModelos: ['GT', 'Rally', 'GT Pro', 'Rally Pro', 'GT Explorer', 'Rally Explorer'] },
      { nombre: 'Trident 660', subModelos: ['Standard', 'Triple Tribute'] },
      { nombre: 'Rocket 3', subModelos: ['R', 'GT', 'Storm R', 'Storm GT'] },
      { nombre: 'Bonneville', subModelos: ['T100', 'T120', 'Bobber', 'Speedmaster', 'Street Twin', 'Street Cup', 'Scrambler', 'Thruxton'] },
      { nombre: 'Speed Twin', subModelos: ['900', '1200', '900 RS', '1200 RS'] },
      { nombre: 'Scrambler', subModelos: ['400 X', '900', '1200', '1200 XE', '1200 XC'] },
      { nombre: 'Thruxton', subModelos: ['RS', 'Final Edition'] },
      { nombre: 'America', subModelos: ['Standard', 'LT'] },
      { nombre: 'Thunderbird', subModelos: ['Storm', 'Commander', 'LT', 'Nightstorm'] },
      { nombre: 'Adventure', subModelos: ['Standard', 'XC', 'XCA', 'XRx', 'XRT'] },
    ]
  },
  {
    nombre: 'Lamborghini',
    modelos: [
      { nombre: 'Huracán', subModelos: ['EVO', 'EVO Spyder', 'STO', 'Tecnica', 'Sterrato', 'Performante'] },
      { nombre: 'Revuelto', subModelos: ['Standard', 'Launch Edition'] },
      { nombre: 'Urus', subModelos: ['Standard', 'S', 'Performante', 'SE', 'ST-X'] },
      { nombre: 'Aventador', subModelos: ['S', 'SVJ', 'Ultimae', 'Roadster'] },
      { nombre: 'Gallardo', subModelos: ['LP 550-2', 'LP 560-4', 'LP 570-4', 'Superleggera', 'Performante'] },
      { nombre: 'Murciélago', subModelos: ['LP 640', 'LP 670-4 SV', 'Roadster'] },
      { nombre: 'Diablo', subModelos: ['VT', 'SE', 'SV', 'GT', '6.0'] },
      { nombre: 'Countach', subModelos: ['LP 500', 'LP 400', 'LP 5000', '25th Anniversary', 'LPI 800-4'] },
    ]
  },
  {
    nombre: 'Maserati',
    modelos: [
      { nombre: 'Ghibli', subModelos: ['GT', 'Modena', 'Trofeo'] },
      { nombre: 'Quattroporte', subModelos: ['GT', 'Modena', 'Trofeo'] },
      { nombre: 'Levante', subModelos: ['GT', 'Modena', 'Trofeo', 'MC Edition'] },
      { nombre: 'Grecale', subModelos: ['GT', 'Modena', 'Trofeo', 'Folgore'] },
      { nombre: 'MC20', subModelos: ['Standard', 'Cielo', 'Notte'] },
      { nombre: 'GranTurismo', subModelos: ['Modena', 'Trofeo', 'Folgore'] },
      { nombre: 'GranCabrio', subModelos: ['Modena', 'Trofeo', 'Folgore'] },
    ]
  },
  {
    nombre: 'Alfa Romeo',
    modelos: [
      { nombre: 'Giulia', subModelos: ['Sprint', 'Ti', 'Veloce', 'Quadrifoglio'] },
      { nombre: 'Stelvio', subModelos: ['Sprint', 'Ti', 'Veloce', 'Quadrifoglio'] },
      { nombre: 'Tonale', subModelos: ['Sprint', 'Ti', 'Veloce'] },
      { nombre: '4C', subModelos: ['Launch Edition', 'Spider', 'Competizione', 'Italia'] },
      { nombre: '8C', subModelos: ['Competizione', 'Spider'] },
      { nombre: 'GTV', subModelos: ['Standard', 'Quadrifoglio'] },
      { nombre: 'Spider', subModelos: ['Standard', 'Quadrifoglio'] },
    ]
  },
  {
    nombre: 'Citroen',
    modelos: [
      { nombre: 'C3', subModelos: ['Live', 'Feel', 'Shine', 'Aircross'] },
      { nombre: 'C4', subModelos: ['Live', 'Feel', 'Shine', 'Cactus', 'X'] },
      { nombre: 'C5', subModelos: ['Aircross', 'X', 'Tourer'] },
      { nombre: 'Berlingo', subModelos: ['Live', 'Feel', 'Shine', 'XTR'] },
      { nombre: 'SpaceTourer', subModelos: ['Live', 'Feel', 'Shine', 'Business'] },
      { nombre: 'Jumpy', subModelos: ['Live', 'Feel', 'Shine', 'Business'] },
      { nombre: 'Jumper', subModelos: ['Live', 'Feel', 'Shine', 'Business'] },
      { nombre: 'Ami', subModelos: ['Standard', 'Buggy', 'Cargo'] },
      { nombre: 'e-C4', subModelos: ['Live', 'Feel', 'Shine'] },
      { nombre: 'e-C4 X', subModelos: ['Live', 'Feel', 'Shine'] },
    ]
  },
  {
    nombre: 'Seat',
    modelos: [
      { nombre: 'Ibiza', subModelos: ['Reference', 'Style', 'FR', 'Cupra'] },
      { nombre: 'León', subModelos: ['Reference', 'Style', 'FR', 'Cupra', 'ST'] },
      { nombre: 'Arona', subModelos: ['Reference', 'Style', 'FR', 'Xperience'] },
      { nombre: 'Ateca', subModelos: ['Reference', 'Style', 'FR', 'Cupra'] },
      { nombre: 'Tarraco', subModelos: ['Reference', 'Style', 'FR', 'Cupra'] },
      { nombre: 'Alhambra', subModelos: ['Reference', 'Style', 'FR'] },
      { nombre: 'Born', subModelos: ['Standard', 'Plus', 'Cupra'] },
    ]
  },
  {
    nombre: 'Skoda',
    modelos: [
      { nombre: 'Fabia', subModelos: ['Active', 'Ambition', 'Style', 'Monte Carlo'] },
      { nombre: 'Scala', subModelos: ['Active', 'Ambition', 'Style', 'Monte Carlo'] },
      { nombre: 'Octavia', subModelos: ['Active', 'Ambition', 'Style', 'RS', 'Scout'] },
      { nombre: 'Superb', subModelos: ['Active', 'Ambition', 'Style', 'Sportline', 'Laurin & Klement'] },
      { nombre: 'Kamiq', subModelos: ['Active', 'Ambition', 'Style', 'Monte Carlo'] },
      { nombre: 'Karoq', subModelos: ['Active', 'Ambition', 'Style', 'Sportline', 'Scout'] },
      { nombre: 'Kodiaq', subModelos: ['Active', 'Ambition', 'Style', 'Sportline', 'RS', 'Scout'] },
      { nombre: 'Enyaq', subModelos: ['iV 60', 'iV 80', 'iV 80x', 'RS iV', 'Coupé'] },
    ]
  },
  {
    nombre: 'SsangYong',
    modelos: [
      { nombre: 'Tivoli', subModelos: ['Standard', 'Deluxe', 'Premium', 'XLV'] },
      { nombre: 'Korando', subModelos: ['Standard', 'Deluxe', 'Premium', 'Ultimate'] },
      { nombre: 'Rexton', subModelos: ['Standard', 'Deluxe', 'Premium', 'Ultimate'] },
      { nombre: 'Musso', subModelos: ['Standard', 'Deluxe', 'Premium', 'Ultimate', 'Grand'] },
      { nombre: 'Torres', subModelos: ['Standard', 'Deluxe', 'Premium', 'Ultimate'] },
      { nombre: 'Actyon', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Kyron', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Rodius', subModelos: ['Standard', 'Deluxe', 'Premium'] },
    ]
  },
  {
    nombre: 'Bestune',
    modelos: [
      { nombre: 'T33', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'T55', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'T77', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'T99', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'B70', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'B70S', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'NAT', subModelos: ['Comfort', 'Elite', 'Luxury'] },
      { nombre: 'E01', subModelos: ['Comfort', 'Elite', 'Luxury'] },
    ]
  },
  {
    nombre: 'Brilliance',
    modelos: [
      { nombre: 'H220', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'H230', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'H320', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'H330', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'H530', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'V3', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'V5', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'V6', subModelos: ['Standard', 'Deluxe', 'Premium'] },
    ]
  },
  {
    nombre: 'Buick',
    modelos: [
      { nombre: 'Encore', subModelos: ['Preferred', 'Select', 'Essence', 'GX', 'GX ST'] },
      { nombre: 'Envision', subModelos: ['Preferred', 'Select', 'Essence', 'Avenir'] },
      { nombre: 'Enclave', subModelos: ['Preferred', 'Select', 'Essence', 'Avenir'] },
      { nombre: 'Regal', subModelos: ['Preferred', 'Select', 'Essence', 'GS', 'Avenir'] },
      { nombre: 'LaCrosse', subModelos: ['Preferred', 'Select', 'Essence', 'Avenir'] },
      { nombre: 'Verano', subModelos: ['Base', 'Convenience', 'Leather', 'Premium'] },
    ]
  },
  {
    nombre: 'ForLand',
    modelos: [
      { nombre: 'Pickup', subModelos: ['Single Cab', 'Double Cab', 'Crew Cab'] },
      { nombre: 'Van', subModelos: ['Cargo', 'Passenger', 'Combi'] },
      { nombre: 'Truck', subModelos: ['Light', 'Medium', 'Heavy'] },
      { nombre: 'Bus', subModelos: ['Mini', 'Medium', 'Large'] },
    ]
  },
  {
    nombre: 'Forthing',
    modelos: [
      { nombre: 'T5', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'T5 EVO', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'S50', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'S500', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'SX6', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'CM7', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'M6', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'M7', subModelos: ['Standard', 'Deluxe', 'Premium'] },
    ]
  },
  {
    nombre: 'Gac',
    modelos: [
      { nombre: 'GS3', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'GS4', subModelos: ['Standard', 'Deluxe', 'Premium', 'Plus'] },
      { nombre: 'GS5', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'GS8', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'GA4', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'GA6', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'GA8', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'M6', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'M8', subModelos: ['Standard', 'Deluxe', 'Premium', 'Master'] },
      { nombre: 'Aion S', subModelos: ['Standard', 'Deluxe', 'Premium', 'Plus'] },
      { nombre: 'Aion Y', subModelos: ['Standard', 'Deluxe', 'Premium', 'Plus'] },
      { nombre: 'Aion V', subModelos: ['Standard', 'Deluxe', 'Premium', 'Plus'] },
      { nombre: 'Aion LX', subModelos: ['Standard', 'Deluxe', 'Premium', 'Plus'] },
    ]
  },
  {
    nombre: 'Husqvarna',
    modelos: [
      { nombre: 'Vitpilen', subModelos: ['401', '701'] },
      { nombre: 'Svartpilen', subModelos: ['125', '200', '250', '401', '701'] },
      { nombre: 'Norden', subModelos: ['901', '901 Expedition'] },
      { nombre: 'FE', subModelos: ['250', '350', '450', '501', '501s'] },
      { nombre: 'TE', subModelos: ['150', '250', '300', '300i'] },
      { nombre: 'FC', subModelos: ['250', '350', '450'] },
      { nombre: 'TC', subModelos: ['50', '65', '85', '125', '250'] },
      { nombre: 'TX', subModelos: ['300', '300i'] },
      { nombre: 'EE', subModelos: ['3', '5'] },
      { nombre: '701 Enduro', subModelos: ['Standard', 'LR'] },
      { nombre: '701 Supermoto', subModelos: ['Standard', 'LR'] },
    ]
  },
  {
    nombre: 'International',
    modelos: [
      { nombre: 'CV Series', subModelos: ['CV515', 'CV515S', 'CV610', 'CV810'] },
      { nombre: 'MV Series', subModelos: ['MV607', 'MV608', 'MV610', 'MV612', 'MV614'] },
      { nombre: 'HV Series', subModelos: ['HV507', 'HV508', 'HV510', 'HV512', 'HV514', 'HV515', 'HV607', 'HV608', 'HV610', 'HV612', 'HV614', 'HV615'] },
      { nombre: 'HX Series', subModelos: ['HX515', 'HX520', 'HX610', 'HX615', 'HX620'] },
      { nombre: 'LT Series', subModelos: ['LT625', 'LT625RH', 'LT625SH'] },
      { nombre: 'Lonestar', subModelos: ['Standard', 'High Rise', 'Day Cab'] },
      { nombre: 'Prostar', subModelos: ['Standard', 'High Rise', 'Day Cab'] },
      { nombre: 'Transtar', subModelos: ['Standard', 'High Rise', 'Day Cab'] },
      { nombre: 'Workstar', subModelos: ['Standard', 'High Rise', 'Day Cab'] },
      { nombre: 'DuraStar', subModelos: ['Standard', 'High Rise', 'Day Cab'] },
      { nombre: 'TerraStar', subModelos: ['Standard', 'High Rise', 'Day Cab'] },
    ]
  },
  {
    nombre: 'KGM',
    modelos: [
      { nombre: 'Tivoli', subModelos: ['Standard', 'Deluxe', 'Premium', 'XLV'] },
      { nombre: 'Korando', subModelos: ['Standard', 'Deluxe', 'Premium', 'Ultimate'] },
      { nombre: 'Rexton', subModelos: ['Standard', 'Deluxe', 'Premium', 'Ultimate'] },
      { nombre: 'Musso', subModelos: ['Standard', 'Deluxe', 'Premium', 'Ultimate', 'Grand'] },
      { nombre: 'Torres', subModelos: ['Standard', 'Deluxe', 'Premium', 'Ultimate'] },
    ]
  },
  {
    nombre: 'Lifan',
    modelos: [
      { nombre: '320', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: '520', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: '620', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: '720', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'X50', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'X60', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'X70', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'X80', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Myway', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Foison', subModelos: ['Standard', 'Deluxe', 'Premium'] },
    ]
  },
  {
    nombre: 'Lincoln',
    modelos: [
      { nombre: 'Corsair', subModelos: ['Standard', 'Reserve', 'Grand Touring'] },
      { nombre: 'Nautilus', subModelos: ['Standard', 'Reserve', 'Black Label'] },
      { nombre: 'Aviator', subModelos: ['Standard', 'Reserve', 'Grand Touring', 'Black Label'] },
      { nombre: 'Navigator', subModelos: ['Reserve', 'Black Label', 'L'] },
      { nombre: 'MKZ', subModelos: ['Standard', 'Reserve', 'Black Label'] },
      { nombre: 'Continental', subModelos: ['Standard', 'Reserve', 'Black Label'] },
      { nombre: 'MKT', subModelos: ['Standard', 'Reserve', 'Elite'] },
      { nombre: 'MKX', subModelos: ['Standard', 'Reserve', 'Black Label'] },
      { nombre: 'MKS', subModelos: ['Standard', 'Reserve', 'Elite'] },
    ]
  },
  {
    nombre: 'Maxus',
    modelos: [
      { nombre: 'G10', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'G20', subModelos: ['Standard', 'Deluxe', 'Premium', 'Plus'] },
      { nombre: 'G50', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'G90', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'D60', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'D90', subModelos: ['Standard', 'Deluxe', 'Premium', 'Pro'] },
      { nombre: 'T60', subModelos: ['Standard', 'Deluxe', 'Premium', 'Pro'] },
      { nombre: 'T70', subModelos: ['Standard', 'Deluxe', 'Premium', 'Pro'] },
      { nombre: 'T90', subModelos: ['Standard', 'Deluxe', 'Premium', 'Pro', 'EV'] },
      { nombre: 'V80', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'V90', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'EV30', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'EV80', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Euniq', subModelos: ['5', '6', '7'] },
      { nombre: 'Mifa', subModelos: ['9'] },
    ]
  },
  {
    nombre: 'MG',
    modelos: [
      { nombre: '3', subModelos: ['Standard', 'Excite', 'Exclusive'] },
      { nombre: '5', subModelos: ['Standard', 'Excite', 'Exclusive', 'EV'] },
      { nombre: '6', subModelos: ['Standard', 'Excite', 'Exclusive', 'EV'] },
      { nombre: 'ZS', subModelos: ['Standard', 'Excite', 'Exclusive', 'EV'] },
      { nombre: 'HS', subModelos: ['Standard', 'Excite', 'Exclusive', 'PHEV'] },
      { nombre: 'RX5', subModelos: ['Standard', 'Excite', 'Exclusive', 'Plus'] },
      { nombre: 'RX8', subModelos: ['Standard', 'Excite', 'Exclusive'] },
      { nombre: 'Marvel R', subModelos: ['Standard', 'Excite', 'Exclusive'] },
      { nombre: 'Cyberster', subModelos: ['Standard', 'Excite', 'Exclusive'] },
      { nombre: 'TF', subModelos: ['Standard', 'Excite', 'Exclusive'] },
      { nombre: 'ZR', subModelos: ['Standard', 'Excite', 'Exclusive'] },
      { nombre: 'ZT', subModelos: ['Standard', 'Excite', 'Exclusive'] },
    ]
  },
  {
    nombre: 'MINI',
    modelos: [
      { nombre: 'Cooper', subModelos: ['Classic', 'Signature', 'Iconic', 'S', 'John Cooper Works'] },
      { nombre: 'Cooper Clubman', subModelos: ['Classic', 'Signature', 'Iconic', 'S', 'John Cooper Works'] },
      { nombre: 'Cooper Countryman', subModelos: ['Classic', 'Signature', 'Iconic', 'S', 'John Cooper Works', 'SE'] },
      { nombre: 'Cooper Convertible', subModelos: ['Classic', 'Signature', 'Iconic', 'S', 'John Cooper Works'] },
      { nombre: 'Cooper Electric', subModelos: ['E', 'SE'] },
      { nombre: 'Cooper S', subModelos: ['Classic', 'Signature', 'Iconic', 'John Cooper Works'] },
      { nombre: 'John Cooper Works', subModelos: ['GP', 'Challenge', 'Pro', 'Clubman', 'Countryman', 'Convertible'] },
    ]
  },
  {
    nombre: 'Qingling',
    modelos: [
      { nombre: 'NHR', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'NKR', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'NPR', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'NQR', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'FRR', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'FVR', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'FVM', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Giga', subModelos: ['Standard', 'Deluxe', 'Premium'] },
    ]
  },
  {
    nombre: 'Samsung',
    modelos: [
      { nombre: 'SM3', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'SM5', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'SM7', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'QM3', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'QM5', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'QM6', subModelos: ['Standard', 'Deluxe', 'Premium'] },
    ]
  },
  {
    nombre: 'SWM',
    modelos: [
      { nombre: 'G01', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'G01F', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'G05', subModelos: ['Standard', 'Deluxe', 'Premium', 'Pro'] },
      { nombre: 'G05 Pro', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'X2', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'X3', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'X7', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'M7', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Tiger', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Silver', subModelos: ['Standard', 'Deluxe', 'Premium'] },
    ]
  },
  {
    nombre: 'Daewoo',
    modelos: [
      { nombre: 'Lanos', subModelos: ['S', 'SE', 'SX'] },
      { nombre: 'Nubira', subModelos: ['S', 'SE', 'SX'] },
      { nombre: 'Leganza', subModelos: ['S', 'SE', 'SX'] },
      { nombre: 'Matiz', subModelos: ['S', 'SE', 'SX'] },
      { nombre: 'Tacuma', subModelos: ['S', 'SE', 'SX'] },
      { nombre: 'Evanda', subModelos: ['S', 'SE', 'SX'] },
      { nombre: 'Magnus', subModelos: ['S', 'SE', 'SX'] },
      { nombre: 'Tosca', subModelos: ['S', 'SE', 'SX'] },
      { nombre: 'Lacetti', subModelos: ['S', 'SE', 'SX'] },
      { nombre: 'Gentra', subModelos: ['S', 'SE', 'SX'] },
      { nombre: 'Damas', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Labo', subModelos: ['Standard', 'Deluxe', 'Premium'] },
    ]
  },
  {
    nombre: 'Dongfeng',
    modelos: [
      { nombre: 'Aeolus', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'AX3', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'AX4', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'AX5', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'AX7', subModelos: ['Standard', 'Deluxe', 'Premium', 'Pro'] },
      { nombre: 'E70', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Fengshen', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'H30', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'S30', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Rich', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Captain', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Kingrun', subModelos: ['Standard', 'Deluxe', 'Premium'] },
      { nombre: 'Tianlong', subModelos: ['Standard', 'Deluxe', 'Premium'] },
    ]
  },
  {
    nombre: 'Can-Am',
    modelos: [
      { nombre: 'Maverick X3', subModelos: ['DS Turbo', 'X DS Turbo', 'X RS Turbo', 'X MR Turbo', 'X RC Turbo', 'X RS Turbo RR', 'X MR Turbo RR', 'X RC Turbo RR'] },
      { nombre: 'Maverick Sport', subModelos: ['Base', 'DPS', 'X RC', 'X MR', 'MAX DPS', 'MAX X MR'] },
      { nombre: 'Maverick Trail', subModelos: ['Base', 'DPS', 'MAX DPS'] },
      { nombre: 'Commander', subModelos: ['Dps', 'XT', 'XTP', 'MAX DPS', 'MAX XT', 'MAX XTP'] },
      { nombre: 'Defender', subModelos: ['HD5', 'HD8', 'HD10', 'XT', 'XTP', 'X MR', 'MAX HD8', 'MAX HD10', 'MAX XT', 'MAX XTP', 'MAX X MR', 'MAX Limited', '6x6 DPS', '6x6 XT'] },
      { nombre: 'Outlander', subModelos: ['450', '570', '650', '850', '1000R', 'XT', 'X MR', 'X xc', 'MAX XT', 'MAX X MR', 'MAX Limited'] },
      { nombre: 'Renegade', subModelos: ['570', '850', '1000R', 'X xc', 'X MR'] },
      { nombre: 'Spyder F3', subModelos: ['Base', 'S', 'T', 'Limited'] },
      { nombre: 'Spyder RT', subModelos: ['Base', 'Limited'] },
      { nombre: 'Ryker', subModelos: ['600', '900', 'Rally', 'Sport'] },
    ]
  },
  {
    nombre: 'Ducati',
    modelos: [
      { nombre: 'Panigale V2', subModelos: ['Standard', 'Bayliss', 'Anniversario'] },
      { nombre: 'Panigale V4', subModelos: ['Standard', 'S', 'R', 'SP2', 'Superleggera'] },
      { nombre: 'Streetfighter V2', subModelos: ['Standard', 'SP'] },
      { nombre: 'Streetfighter V4', subModelos: ['Standard', 'S', 'SP2'] },
      { nombre: 'Monster', subModelos: ['Standard', 'Plus', 'SP'] },
      { nombre: 'SuperSport', subModelos: ['Standard', 'S', '950'] },
      { nombre: 'Diavel', subModelos: ['Standard', '1260', 'V4', 'X'] },
      { nombre: 'XDiavel', subModelos: ['Standard', 'S', 'Black Star'] },
      { nombre: 'Hypermotard', subModelos: ['Standard', 'SP', '950', '698'] },
      { nombre: 'Multistrada V2', subModelos: ['Standard', 'S', 'Pikes Peak'] },
      { nombre: 'Multistrada V4', subModelos: ['Standard', 'S', 'Pikes Peak', 'RS'] },
      { nombre: 'Scrambler', subModelos: ['Icon', 'Full Throttle', 'Nightshift', 'Desert Sled', '1100', '1100 Pro', '1100 Sport Pro'] },
      { nombre: 'DesertX', subModelos: ['Standard', 'Rally'] },
    ]
  },
];

// Función para generar datos de vehículos simulados basados en rangos de precios realistas
export function generarDatosVehiculos(): Vehicle[] {
  const vehiculos: Vehicle[] = [];
  const ubicaciones = ['Santo Domingo', 'Santiago', 'La Romana', 'San Pedro de Macorís', 'Puerto Plata', 'San Cristóbal', 'La Vega', 'Moca', 'Barahona', 'Higüey'];
  
  // Precios base por marca (en USD) - rangos aproximados para vehículos usados 2015-2024
  const preciosBasePorMarca: Record<string, { min: number; max: number }> = {
    'Toyota': { min: 8000, max: 120000 },
    'Honda': { min: 7000, max: 90000 },
    'Hyundai': { min: 6000, max: 70000 },
    'Kia': { min: 5500, max: 65000 },
    'Nissan': { min: 6000, max: 85000 },
    'Ford': { min: 7000, max: 110000 },
    'Chevrolet': { min: 6000, max: 100000 },
    'Jeep': { min: 8000, max: 130000 },
    'Mazda': { min: 7000, max: 75000 },
    'BMW': { min: 12000, max: 200000 },
    'Mercedes-Benz': { min: 15000, max: 250000 },
    'Audi': { min: 13000, max: 180000 },
    'Lexus': { min: 15000, max: 150000 },
    'Volkswagen': { min: 7000, max: 80000 },
    'Subaru': { min: 8000, max: 70000 },
    'Mitsubishi': { min: 5000, max: 60000 },
    'Suzuki': { min: 4000, max: 45000 },
    'Peugeot': { min: 5000, max: 55000 },
    'Renault': { min: 4500, max: 50000 },
    'Dodge': { min: 8000, max: 120000 },
    'Chrysler': { min: 7000, max: 70000 },
    'Cadillac': { min: 12000, max: 140000 },
    'Lincoln': { min: 15000, max: 130000 },
    'Infiniti': { min: 10000, max: 90000 },
    'Acura': { min: 9000, max: 80000 },
    'Genesis': { min: 20000, max: 110000 },
    'Volvo': { min: 15000, max: 100000 },
    'Land Rover': { min: 20000, max: 250000 },
    'Jaguar': { min: 15000, max: 180000 },
    'Porsche': { min: 30000, max: 350000 },
    'Tesla': { min: 25000, max: 180000 },
    'Mini': { min: 8000, max: 60000 },
    'Fiat': { min: 4000, max: 40000 },
    'Ram': { min: 10000, max: 130000 },
    'GMC': { min: 12000, max: 140000 },
    'Hummer': { min: 15000, max: 200000 },
    'Isuzu': { min: 8000, max: 70000 },
    'Great Wall': { min: 6000, max: 50000 },
    'Changan': { min: 5000, max: 45000 },
    'Chery': { min: 4000, max: 40000 },
    'Geely': { min: 5000, max: 45000 },
    'Jetour': { min: 6000, max: 50000 },
    'KYC': { min: 3000, max: 25000 },
    'JAC': { min: 4000, max: 35000 },
    'Daihatsu': { min: 3000, max: 20000 },
    'Hino': { min: 15000, max: 120000 },
    'ZXAuto': { min: 5000, max: 40000 },
    'Sinotruk': { min: 20000, max: 180000 },
    'Shineray': { min: 4000, max: 30000 },
    'Mountain Raise': { min: 8000, max: 60000 },
    'Yamaha': { min: 2000, max: 35000 },
    'Harley-Davidson': { min: 8000, max: 60000 },
    'Ducati': { min: 10000, max: 80000 },
    'Triumph': { min: 7000, max: 50000 },
    'Lamborghini': { min: 150000, max: 600000 },
    'Maserati': { min: 40000, max: 250000 },
    'Alfa Romeo': { min: 15000, max: 120000 },
    'Citroen': { min: 4000, max: 35000 },
    'Seat': { min: 5000, max: 45000 },
    'Skoda': { min: 6000, max: 55000 },
    'SsangYong': { min: 5000, max: 45000 },
    'Bestune': { min: 5000, max: 40000 },
    'Brilliance': { min: 4000, max: 30000 },
    'Buick': { min: 7000, max: 60000 },
    'ForLand': { min: 8000, max: 70000 },
    'Forthing': { min: 5000, max: 40000 },
    'Gac': { min: 6000, max: 55000 },
    'Husqvarna': { min: 5000, max: 25000 },
    'International': { min: 30000, max: 250000 },
    'KGM': { min: 5000, max: 45000 },
    'Lifan': { min: 3000, max: 25000 },
    'MG': { min: 6000, max: 50000 },
    'MINI': { min: 8000, max: 60000 },
    'Qingling': { min: 15000, max: 120000 },
    'Samsung': { min: 5000, max: 40000 },
    'SWM': { min: 4000, max: 35000 },
    'Daewoo': { min: 2000, max: 15000 },
    'Dongfeng': { min: 5000, max: 45000 },
    'Can-Am': { min: 8000, max: 50000 },
  };

  let idCounter = 1;

  // Generar vehículos para cada marca, modelo, submodelo y año
  marcas.forEach((marca) => {
    const precioBase = preciosBasePorMarca[marca.nombre] || { min: 5000, max: 50000 };
    
    marca.modelos.forEach((modelo) => {
      modelo.subModelos.forEach((subModelo) => {
        // Generar vehículos para años 2015-2024
        for (let año = 2015; año <= 2024; año++) {
          // Generar entre 2 y 5 vehículos por combinación
          const cantidad = Math.floor(Math.random() * 4) + 2;
          
          for (let i = 0; i < cantidad; i++) {
            // Calcular factor de depreciación basado en el año
            const edad = 2024 - año;
            const factorDepreciacion = Math.max(0.3, 1 - (edad * 0.08));
            
            // Variación de precio según submodelo (más equipado = más caro)
            const factorSubModelo = subModelo.toLowerCase().includes('limited') || 
                                   subModelo.toLowerCase().includes('premium') ||
                                   subModelo.toLowerCase().includes('luxury') ||
                                   subModelo.toLowerCase().includes('platinum') ||
                                   subModelo.toLowerCase().includes('denali') ||
                                   subModelo.toLowerCase().includes('amg') ||
                                   subModelo.toLowerCase().includes('m ') ||
                                   subModelo.toLowerCase().includes('rs') ||
                                   subModelo.toLowerCase().includes('turbo') ||
                                   subModelo.toLowerCase().includes('sport') ? 1.3 : 
                                   subModelo.toLowerCase().includes('se') || 
                                   subModelo.toLowerCase().includes('sel') ||
                                   subModelo.toLowerCase().includes('xle') ||
                                   subModelo.toLowerCase().includes('ex') ||
                                   subModelo.toLowerCase().includes('advance') ? 1.15 : 1;
            
            // Precio base aleatorio dentro del rango de la marca
            const precioBaseAleatorio = precioBase.min + Math.random() * (precioBase.max - precioBase.min);
            
            // Precio final con depreciación y factor de submodelo
            const precioFinal = Math.round(precioBaseAleatorio * factorDepreciacion * factorSubModelo);
            
            // Kilometraje basado en edad
            const kilometrajeBase = edad * 15000;
            const kilometrajeVariacion = (Math.random() - 0.5) * 20000;
            const kilometraje = Math.max(0, Math.round(kilometrajeBase + kilometrajeVariacion));
            
            // Condición basada en año
            const condicion: 'Nuevo' | 'Usado' = año >= 2023 ? (Math.random() > 0.7 ? 'Nuevo' : 'Usado') : 'Usado';
            
            // Ubicación aleatoria
            const ubicacion = ubicaciones[Math.floor(Math.random() * ubicaciones.length)];
            
            vehiculos.push({
              id: `veh-${idCounter++}`,
              marca: marca.nombre,
              modelo: modelo.nombre,
              subModelo: subModelo,
              año: año,
              precio: precioFinal,
              moneda: 'USD',
              condicion: condicion,
              kilometraje: kilometraje,
              ubicacion: ubicacion,
            });
          }
        }
      });
    });
  });

  return vehiculos;
}

// Datos de vehículos generados
export const vehiculosDB = generarDatosVehiculos();

// Función para calcular el precio promedio
export function calcularPrecioPromedio(
  vehiculos: Vehicle[],
  marca?: string,
  modelo?: string,
  subModelo?: string,
  añoDesde?: number,
  añoHasta?: number
): { promedio: number; minimo: number; maximo: number; cantidad: number; vehiculos: Vehicle[] } {
  let filtrados = [...vehiculos];
  
  if (marca) {
    filtrados = filtrados.filter(v => v.marca === marca);
  }
  
  if (modelo) {
    filtrados = filtrados.filter(v => v.modelo === modelo);
  }
  
  if (subModelo) {
    filtrados = filtrados.filter(v => v.subModelo === subModelo);
  }
  
  if (añoDesde) {
    filtrados = filtrados.filter(v => v.año >= añoDesde);
  }
  
  if (añoHasta) {
    filtrados = filtrados.filter(v => v.año <= añoHasta);
  }
  
  if (filtrados.length === 0) {
    return { promedio: 0, minimo: 0, maximo: 0, cantidad: 0, vehiculos: [] };
  }
  
  const precios = filtrados.map(v => v.precio);
  const promedio = Math.round(precios.reduce((a, b) => a + b, 0) / precios.length);
  const minimo = Math.min(...precios);
  const maximo = Math.max(...precios);
  
  return { promedio, minimo, maximo, cantidad: filtrados.length, vehiculos: filtrados };
}

// Función para obtener modelos por marca
export function getModelosPorMarca(marcaNombre: string): Modelo[] {
  const marca = marcas.find(m => m.nombre === marcaNombre);
  return marca ? marca.modelos : [];
}

// Función para obtener submodelos por modelo
export function getSubModelosPorModelo(marcaNombre: string, modeloNombre: string): string[] {
  const marca = marcas.find(m => m.nombre === marcaNombre);
  if (!marca) return [];
  const modelo = marca.modelos.find(m => m.nombre === modeloNombre);
  return modelo ? modelo.subModelos : [];
}
