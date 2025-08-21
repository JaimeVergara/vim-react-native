export function VinPaisFabrica(vin) {
    const fabricaVIN = {
        // ===== AMÉRICA DEL NORTE =====
        "1": "Estados Unidos",
        "4": "Estados Unidos",
        "5": "Estados Unidos",
        "2": "Canadá",
        "3A": "México", "3B": "México", "3C": "México", "3D": "México", "3E": "México",
        "3F": "México", "3G": "México", "3H": "México", "3I": "México", "3J": "México",
        "3K": "México", "3L": "México", "3M": "México", "3N": "México", "3O": "México",
        "3P": "México", "3Q": "México", "3R": "México", "3S": "México", "3T": "México",
        "3U": "México", "3V": "México", "3W": "México",
      
        // ===== AMÉRICA DEL SUR =====
        "8A": "Argentina","8B": "Argentina","8C": "Argentina","8D": "Argentina","8E": "Argentina",
        "8F": "Chile","8G": "Chile","8H": "Chile","8I": "Chile","8J": "Chile","8K": "Chile",
        "8L": "Ecuador","8M": "Ecuador","8N": "Ecuador","8O": "Ecuador","8P": "Ecuador","8Q": "Ecuador","8R": "Ecuador",
        "8S": "Perú","8T": "Perú","8U": "Perú","8V": "Perú","8W": "Perú",
        "8X": "Venezuela","8Y": "Venezuela","8Z": "Venezuela","82": "Venezuela",
        "9A": "Brasil","9B": "Brasil","9C": "Brasil","9D": "Brasil","9E": "Brasil",
        "93": "Brasil","94": "Brasil","95": "Brasil","96": "Brasil","97": "Brasil","98": "Brasil","99": "Brasil",
        "9F": "Colombia","9G": "Colombia","9H": "Colombia","9I": "Colombia","9J": "Colombia","9K": "Colombia",
        "9L": "Paraguay","9M": "Paraguay","9N": "Paraguay","9O": "Paraguay","9P": "Paraguay","9Q": "Paraguay","9R": "Paraguay",
        "9S": "Uruguay","9T": "Uruguay","9U": "Uruguay","9V": "Uruguay","9W": "Uruguay",
      
        // ===== OCEANÍA =====
        "6A": "Australia","6B": "Australia","6C": "Australia","6D": "Australia","6E": "Australia","6F": "Australia","6G": "Australia","6H": "Australia",
        "6J": "Australia","6K": "Australia","6L": "Australia","6M": "Australia","6N": "Australia","6O": "Australia","6P": "Australia","6Q": "Australia",
        "6R": "Australia","6S": "Australia","6T": "Australia","6U": "Australia","6V": "Australia","6W": "Australia",
        "7A": "Nueva Zelanda","7B": "Nueva Zelanda","7C": "Nueva Zelanda","7D": "Nueva Zelanda","7E": "Nueva Zelanda",
      
        // ===== ASIA =====
        "J": "Japón",
        "JA": "Japón","JB": "Japón","JC": "Japón","JD": "Japón","JE": "Japón","JF": "Japón","JG": "Japón","JH": "Japón",
        "JI": "Japón","JJ": "Japón","JK": "Japón","JL": "Japón","JM": "Japón","JN": "Japón","JO": "Japón","JP": "Japón",
        "JQ": "Japón","JR": "Japón","JS": "Japón","JT": "Japón",
      
        "KL": "Corea del Sur","KM": "Corea del Sur","KN": "Corea del Sur","KO": "Corea del Sur","KP": "Corea del Sur","KQ": "Corea del Sur","KR": "Corea del Sur",
      
        "L": "China",
        "LA": "China","LB": "China","LC": "China","LD": "China","LE": "China","LF": "China","LG": "China","LH": "China",
        "LI": "China","LJ": "China","LK": "China","LL": "China","LM": "China","LN": "China","LO": "China","LP": "China",
        "LQ": "China","LR": "China","LS": "China","LT": "China","LU": "China","LV": "China","LW": "China","LX": "China",
        "LY": "China","LZ": "China","L0": "China",
      
        "MA": "India","MB": "India","MC": "India","MD": "India","ME": "India",
        "MF": "Indonesia","MG": "Indonesia","MH": "Indonesia","MI": "Indonesia","MJ": "Indonesia","MK": "Indonesia",
        "ML": "Tailandia","MM": "Tailandia","MN": "Tailandia","MO": "Tailandia","MP": "Tailandia","MQ": "Tailandia","MR": "Tailandia",
      
        // ===== EUROPA =====
        "S": "Reino Unido",
        "SA": "Reino Unido","SB": "Reino Unido","SC": "Reino Unido","SD": "Reino Unido","SE": "Reino Unido","SF": "Reino Unido","SG": "Reino Unido","SH": "Reino Unido",
        "SI": "Reino Unido","SJ": "Reino Unido","SK": "Reino Unido","SL": "Reino Unido","SM": "Reino Unido",
        "SN": "Alemania","SO": "Alemania","SP": "Alemania","SQ": "Alemania","SR": "Alemania","SS": "Alemania","ST": "Alemania",
        "SU": "Polonia","SV": "Polonia","SW": "Polonia","SX": "Polonia","SY": "Polonia","SZ": "Polonia",
      
        "U": "Francia",
        "UA": "Francia","UB": "Francia","UC": "Francia","UD": "Francia","UE": "Francia","UF": "Francia","UG": "Francia",
      
        "V": "Austria",
        "VA": "Austria","VB": "Austria","VC": "Austria","VD": "Austria","VE": "Austria",
        "VF": "Francia","VG": "Francia","VH": "Francia","VI": "Francia","VJ": "Francia","VK": "Francia","VL": "Francia","VM": "Francia",
        "VN": "Francia","VO": "Francia","VP": "Francia","VQ": "Francia","VR": "Francia",
      
        "VS": "España","VT": "España","VU": "España","VV": "España","VW": "España",
      
        "W": "Alemania",
        "WA": "Alemania","WB": "Alemania","WC": "Alemania","WD": "Alemania","WE": "Alemania","WF": "Alemania","WG": "Alemania","WH": "Alemania",
        "WI": "Alemania","WJ": "Alemania","WK": "Alemania","WL": "Alemania","WM": "Alemania","WN": "Alemania","WO": "Alemania","WP": "Alemania",
        "WQ": "Alemania","WR": "Alemania","WS": "Alemania","WT": "Alemania","WU": "Alemania","WV": "Alemania","WW": "Alemania","WX": "Alemania",
        "WY": "Alemania","WZ": "Alemania","W0": "Alemania",
      
        "X": "Rusia",
        "XL": "Países Bajos","XM": "Países Bajos","XN": "Países Bajos","XO": "Países Bajos","XP": "Países Bajos","XQ": "Países Bajos","XR": "Países Bajos",
      
        "Y": "Suecia",
        "YA": "Noruega","YB": "Noruega","YC": "Noruega","YD": "Noruega","YE": "Noruega",
        "YF": "Finlandia","YG": "Finlandia","YH": "Finlandia","YI": "Finlandia","YJ": "Finlandia","YK": "Finlandia",
        "YS": "Suecia","YT": "Suecia","YU": "Suecia","YV": "Suecia","YW": "Suecia",
      
        "Z": "Italia",
        "ZA": "Italia","ZB": "Italia","ZC": "Italia","ZD": "Italia","ZE": "Italia","ZF": "Italia","ZG": "Italia","ZH": "Italia",
        "ZI": "Italia","ZJ": "Italia","ZK": "Italia","ZL": "Italia","ZM": "Italia","ZN": "Italia","ZO": "Italia","ZP": "Italia",
        "ZQ": "Italia","ZR": "Italia"
    };
    const vinF = vin.slice(0,2).toUpperCase();

    const fabricaV = fabricaVIN[vinF];
         
    return fabricaV;     
}