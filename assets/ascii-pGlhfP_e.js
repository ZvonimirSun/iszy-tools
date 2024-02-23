import{F as r,aE as d,J as b,K as a,X as e,a1 as o,ar as l,u as n,T as p}from"./index-VsbXgykr.js";import{E as C}from"./el-divider-DcZ9x_9i.js";import{E as x,a as y}from"./el-table-column-antv57HX.js";import"./el-checkbox--KDTocgy.js";import{b as L}from"./Router-AkhDy5Vm.js";import"./el-scrollbar-Ubo3lGZq.js";import"./el-tag-421S3ieG.js";import"./map-dKxZdecQ.js";import"./_baseEach-FWjqHUbw.js";import"./raf-UNYsODd8.js";import"./hasIn-G8YSCUeT.js";const T=r({__name:"ascii",setup(u){const s=d([{dec:"0",oct:"000",hex:"00",bin:"00000000",symbol:"NUL",htmlCode:"&#000;",description:"Null char"},{dec:"1",oct:"001",hex:"01",bin:"00000001",symbol:"SOH",htmlCode:"&#001;",description:"Start of Heading"},{dec:"2",oct:"002",hex:"02",bin:"00000010",symbol:"STX",htmlCode:"&#002;",description:"Start of Text"},{dec:"3",oct:"003",hex:"03",bin:"00000011",symbol:"ETX",htmlCode:"&#003;",description:"End of Text"},{dec:"4",oct:"004",hex:"04",bin:"00000100",symbol:"EOT",htmlCode:"&#004;",description:"End of Transmission"},{dec:"5",oct:"005",hex:"05",bin:"00000101",symbol:"ENQ",htmlCode:"&#005;",description:"Enquiry"},{dec:"6",oct:"006",hex:"06",bin:"00000110",symbol:"ACK",htmlCode:"&#006;",description:"Acknowledgment"},{dec:"7",oct:"007",hex:"07",bin:"00000111",symbol:"BEL",htmlCode:"&#007;",description:"Bell"},{dec:"8",oct:"010",hex:"08",bin:"00001000",symbol:"BS",htmlCode:"&#008;",description:"Back Space"},{dec:"9",oct:"011",hex:"09",bin:"00001001",symbol:"HT",htmlCode:"&#009;",description:"Horizontal Tab"},{dec:"10",oct:"012",hex:"0A",bin:"00001010",symbol:"LF",htmlCode:"&#010;",description:"Line Feed"},{dec:"11",oct:"013",hex:"0B",bin:"00001011",symbol:"VT",htmlCode:"&#011;",description:"Vertical Tab"},{dec:"12",oct:"014",hex:"0C",bin:"00001100",symbol:"FF",htmlCode:"&#012;",description:"Form Feed"},{dec:"13",oct:"015",hex:"0D",bin:"00001101",symbol:"CR",htmlCode:"&#013;",description:"Carriage Return"},{dec:"14",oct:"016",hex:"0E",bin:"00001110",symbol:"SO",htmlCode:"&#014;",description:"Shift Out / X-On"},{dec:"15",oct:"017",hex:"0F",bin:"00001111",symbol:"SI",htmlCode:"&#015;",description:"Shift In / X-Off"},{dec:"16",oct:"020",hex:"10",bin:"00010000",symbol:"DLE",htmlCode:"&#016;",description:"Data Line Escape"},{dec:"17",oct:"021",hex:"11",bin:"00010001",symbol:"DC1",htmlCode:"&#017;",description:"Device Control 1 (oft. XON)"},{dec:"18",oct:"022",hex:"12",bin:"00010010",symbol:"DC2",htmlCode:"&#018;",description:"Device Control 2"},{dec:"19",oct:"023",hex:"13",bin:"00010011",symbol:"DC3",htmlCode:"&#019;",description:"Device Control 3 (oft. XOFF)"},{dec:"20",oct:"024",hex:"14",bin:"00010100",symbol:"DC4",htmlCode:"&#020;",description:"Device Control 4"},{dec:"21",oct:"025",hex:"15",bin:"00010101",symbol:"NAK",htmlCode:"&#021;",description:"Negative Acknowledgement"},{dec:"22",oct:"026",hex:"16",bin:"00010110",symbol:"SYN",htmlCode:"&#022;",description:"Synchronous Idle"},{dec:"23",oct:"027",hex:"17",bin:"00010111",symbol:"ETB",htmlCode:"&#023;",description:"End of Transmit Block"},{dec:"24",oct:"030",hex:"18",bin:"00011000",symbol:"CAN",htmlCode:"&#024;",description:"Cancel"},{dec:"25",oct:"031",hex:"19",bin:"00011001",symbol:"EM",htmlCode:"&#025;",description:"End of Medium"},{dec:"26",oct:"032",hex:"1A",bin:"00011010",symbol:"SUB",htmlCode:"&#026;",description:"Substitute"},{dec:"27",oct:"033",hex:"1B",bin:"00011011",symbol:"ESC",htmlCode:"&#027;",description:"Escape"},{dec:"28",oct:"034",hex:"1C",bin:"00011100",symbol:"FS",htmlCode:"&#028;",description:"File Separator"},{dec:"29",oct:"035",hex:"1D",bin:"00011101",symbol:"GS",htmlCode:"&#029;",description:"Group Separator"},{dec:"30",oct:"036",hex:"1E",bin:"00011110",symbol:"RS",htmlCode:"&#030;",description:"Record Separator"},{dec:"31",oct:"037",hex:"1F",bin:"00011111",symbol:"US",htmlCode:"&#031;",description:"Unit Separator"},{dec:"32",oct:"040",hex:"20",bin:"00100000",symbol:"",htmlCode:"&#32;",description:"Space"},{dec:"33",oct:"041",hex:"21",bin:"00100001",symbol:"!",htmlCode:"&#33;",description:"Exclamation mark"},{dec:"34",oct:"042",hex:"22",bin:"00100010",symbol:'"',htmlCode:"&#34;",description:"Double quotes"},{dec:"35",oct:"043",hex:"23",bin:"00100011",symbol:"#",htmlCode:"&#35;",description:"Number"},{dec:"36",oct:"044",hex:"24",bin:"00100100",symbol:"$",htmlCode:"&#36;",description:"Dollar"},{dec:"37",oct:"045",hex:"25",bin:"00100101",symbol:"%",htmlCode:"&#37;",description:"Procenttecken"},{dec:"38",oct:"046",hex:"26",bin:"00100110",symbol:"&",htmlCode:"&#38;",description:"Ampersand"},{dec:"39",oct:"047",hex:"27",bin:"00100111",symbol:"'",htmlCode:"&#39;",description:"Single quote"},{dec:"40",oct:"050",hex:"28",bin:"00101000",symbol:"(",htmlCode:"&#40;",description:"Open parenthesis"},{dec:"41",oct:"051",hex:"29",bin:"00101001",symbol:")",htmlCode:"&#41;",description:"Close parenthesis"},{dec:"42",oct:"052",hex:"2A",bin:"00101010",symbol:"*",htmlCode:"&#42;",description:"Asterisk"},{dec:"43",oct:"053",hex:"2B",bin:"00101011",symbol:"+",htmlCode:"&#43;",description:"Plus"},{dec:"44",oct:"054",hex:"2C",bin:"00101100",symbol:",",htmlCode:"&#44;",description:"Comma"},{dec:"45",oct:"055",hex:"2D",bin:"00101101",symbol:"-",htmlCode:"&#45;",description:"Hyphen"},{dec:"46",oct:"056",hex:"2E",bin:"00101110",symbol:".",htmlCode:"&#46;",description:"Period, dot or full stop"},{dec:"47",oct:"057",hex:"2F",bin:"00101111",symbol:"/",htmlCode:"&#47;",description:"Slash or divide"},{dec:"48",oct:"060",hex:"30",bin:"00110000",symbol:"0",htmlCode:"&#48;",description:"Zero"},{dec:"49",oct:"061",hex:"31",bin:"00110001",symbol:"1",htmlCode:"&#49;",description:"One"},{dec:"50",oct:"062",hex:"32",bin:"00110010",symbol:"2",htmlCode:"&#50;",description:"Two"},{dec:"51",oct:"063",hex:"33",bin:"00110011",symbol:"3",htmlCode:"&#51;",description:"Three"},{dec:"52",oct:"064",hex:"34",bin:"00110100",symbol:"4",htmlCode:"&#52;",description:"Four"},{dec:"53",oct:"065",hex:"35",bin:"00110101",symbol:"5",htmlCode:"&#53;",description:"Five"},{dec:"54",oct:"066",hex:"36",bin:"00110110",symbol:"6",htmlCode:"&#54;",description:"Six"},{dec:"55",oct:"067",hex:"37",bin:"00110111",symbol:"7",htmlCode:"&#55;",description:"Seven"},{dec:"56",oct:"070",hex:"38",bin:"00111000",symbol:"8",htmlCode:"&#56;",description:"Eight"},{dec:"57",oct:"071",hex:"39",bin:"00111001",symbol:"9",htmlCode:"&#57;",description:"Nine"},{dec:"58",oct:"072",hex:"3A",bin:"00111010",symbol:":",htmlCode:"&#58;",description:"Colon"},{dec:"59",oct:"073",hex:"3B",bin:"00111011",symbol:";",htmlCode:"&#59;",description:"Semicolon"},{dec:"60",oct:"074",hex:"3C",bin:"00111100",symbol:"<",htmlCode:"&#60;",description:"Less than"},{dec:"61",oct:"075",hex:"3D",bin:"00111101",symbol:"=",htmlCode:"&#61;",description:"Equals"},{dec:"62",oct:"076",hex:"3E",bin:"00111110",symbol:">",htmlCode:"&#62;",description:"Greater than"},{dec:"63",oct:"077",hex:"3F",bin:"00111111",symbol:"?",htmlCode:"&#63;",description:"Question mark"},{dec:"64",oct:"100",hex:"40",bin:"01000000",symbol:"@",htmlCode:"&#64;",description:"At symbol"},{dec:"65",oct:"101",hex:"41",bin:"01000001",symbol:"A",htmlCode:"&#65;",description:"Uppercase A"},{dec:"66",oct:"102",hex:"42",bin:"01000010",symbol:"B",htmlCode:"&#66;",description:"Uppercase B"},{dec:"67",oct:"103",hex:"43",bin:"01000011",symbol:"C",htmlCode:"&#67;",description:"Uppercase C"},{dec:"68",oct:"104",hex:"44",bin:"01000100",symbol:"D",htmlCode:"&#68;",description:"Uppercase D"},{dec:"69",oct:"105",hex:"45",bin:"01000101",symbol:"E",htmlCode:"&#69;",description:"Uppercase E"},{dec:"70",oct:"106",hex:"46",bin:"01000110",symbol:"F",htmlCode:"&#70;",description:"Uppercase F"},{dec:"71",oct:"107",hex:"47",bin:"01000111",symbol:"G",htmlCode:"&#71;",description:"Uppercase G"},{dec:"72",oct:"110",hex:"48",bin:"01001000",symbol:"H",htmlCode:"&#72;",description:"Uppercase H"},{dec:"73",oct:"111",hex:"49",bin:"01001001",symbol:"I",htmlCode:"&#73;",description:"Uppercase I"},{dec:"74",oct:"112",hex:"4A",bin:"01001010",symbol:"J",htmlCode:"&#74;",description:"Uppercase J"},{dec:"75",oct:"113",hex:"4B",bin:"01001011",symbol:"K",htmlCode:"&#75;",description:"Uppercase K"},{dec:"76",oct:"114",hex:"4C",bin:"01001100",symbol:"L",htmlCode:"&#76;",description:"Uppercase L"},{dec:"77",oct:"115",hex:"4D",bin:"01001101",symbol:"M",htmlCode:"&#77;",description:"Uppercase M"},{dec:"78",oct:"116",hex:"4E",bin:"01001110",symbol:"N",htmlCode:"&#78;",description:"Uppercase N"},{dec:"79",oct:"117",hex:"4F",bin:"01001111",symbol:"O",htmlCode:"&#79;",description:"Uppercase O"},{dec:"80",oct:"120",hex:"50",bin:"01010000",symbol:"P",htmlCode:"&#80;",description:"Uppercase P"},{dec:"81",oct:"121",hex:"51",bin:"01010001",symbol:"Q",htmlCode:"&#81;",description:"Uppercase Q"},{dec:"82",oct:"122",hex:"52",bin:"01010010",symbol:"R",htmlCode:"&#82;",description:"Uppercase R"},{dec:"83",oct:"123",hex:"53",bin:"01010011",symbol:"S",htmlCode:"&#83;",description:"Uppercase S"},{dec:"84",oct:"124",hex:"54",bin:"01010100",symbol:"T",htmlCode:"&#84;",description:"Uppercase T"},{dec:"85",oct:"125",hex:"55",bin:"01010101",symbol:"U",htmlCode:"&#85;",description:"Uppercase U"},{dec:"86",oct:"126",hex:"56",bin:"01010110",symbol:"V",htmlCode:"&#86;",description:"Uppercase V"},{dec:"87",oct:"127",hex:"57",bin:"01010111",symbol:"W",htmlCode:"&#87;",description:"Uppercase W"},{dec:"88",oct:"130",hex:"58",bin:"01011000",symbol:"X",htmlCode:"&#88;",description:"Uppercase X"},{dec:"89",oct:"131",hex:"59",bin:"01011001",symbol:"Y",htmlCode:"&#89;",description:"Uppercase Y"},{dec:"90",oct:"132",hex:"5A",bin:"01011010",symbol:"Z",htmlCode:"&#90;",description:"Uppercase Z"},{dec:"91",oct:"133",hex:"5B",bin:"01011011",symbol:"[",htmlCode:"&#91;",description:"Opening bracket"},{dec:"92",oct:"134",hex:"5C",bin:"01011100",symbol:"\\",htmlCode:"&#92;",description:"Backslash"},{dec:"93",oct:"135",hex:"5D",bin:"01011101",symbol:"]",htmlCode:"&#93;",description:"Closing bracket"},{dec:"94",oct:"136",hex:"5E",bin:"01011110",symbol:"^",htmlCode:"&#94;",description:"Caret - circumflex"},{dec:"95",oct:"137",hex:"5F",bin:"01011111",symbol:"_",htmlCode:"&#95;",description:"Underscore"},{dec:"96",oct:"140",hex:"60",bin:"01100000",symbol:"`",htmlCode:"&#96;",description:"Grave accent"},{dec:"97",oct:"141",hex:"61",bin:"01100001",symbol:"a",htmlCode:"&#97;",description:"Lowercase a"},{dec:"98",oct:"142",hex:"62",bin:"01100010",symbol:"b",htmlCode:"&#98;",description:"Lowercase b"},{dec:"99",oct:"143",hex:"63",bin:"01100011",symbol:"c",htmlCode:"&#99;",description:"Lowercase c"},{dec:"100",oct:"144",hex:"64",bin:"01100100",symbol:"d",htmlCode:"&#100;",description:"Lowercase d"},{dec:"101",oct:"145",hex:"65",bin:"01100101",symbol:"e",htmlCode:"&#101;",description:"Lowercase e"},{dec:"102",oct:"146",hex:"66",bin:"01100110",symbol:"f",htmlCode:"&#102;",description:"Lowercase f"},{dec:"103",oct:"147",hex:"67",bin:"01100111",symbol:"g",htmlCode:"&#103;",description:"Lowercase g"},{dec:"104",oct:"150",hex:"68",bin:"01101000",symbol:"h",htmlCode:"&#104;",description:"Lowercase h"},{dec:"105",oct:"151",hex:"69",bin:"01101001",symbol:"i",htmlCode:"&#105;",description:"Lowercase i"},{dec:"106",oct:"152",hex:"6A",bin:"01101010",symbol:"j",htmlCode:"&#106;",description:"Lowercase j"},{dec:"107",oct:"153",hex:"6B",bin:"01101011",symbol:"k",htmlCode:"&#107;",description:"Lowercase k"},{dec:"108",oct:"154",hex:"6C",bin:"01101100",symbol:"l",htmlCode:"&#108;",description:"Lowercase l"},{dec:"109",oct:"155",hex:"6D",bin:"01101101",symbol:"m",htmlCode:"&#109;",description:"Lowercase m"},{dec:"110",oct:"156",hex:"6E",bin:"01101110",symbol:"n",htmlCode:"&#110;",description:"Lowercase n"},{dec:"111",oct:"157",hex:"6F",bin:"01101111",symbol:"o",htmlCode:"&#111;",description:"Lowercase o"},{dec:"112",oct:"160",hex:"70",bin:"01110000",symbol:"p",htmlCode:"&#112;",description:"Lowercase p"},{dec:"113",oct:"161",hex:"71",bin:"01110001",symbol:"q",htmlCode:"&#113;",description:"Lowercase q"},{dec:"114",oct:"162",hex:"72",bin:"01110010",symbol:"r",htmlCode:"&#114;",description:"Lowercase r"},{dec:"115",oct:"163",hex:"73",bin:"01110011",symbol:"s",htmlCode:"&#115;",description:"Lowercase s"},{dec:"116",oct:"164",hex:"74",bin:"01110100",symbol:"t",htmlCode:"&#116;",description:"Lowercase t"},{dec:"117",oct:"165",hex:"75",bin:"01110101",symbol:"u",htmlCode:"&#117;",description:"Lowercase u"},{dec:"118",oct:"166",hex:"76",bin:"01110110",symbol:"v",htmlCode:"&#118;",description:"Lowercase v"},{dec:"119",oct:"167",hex:"77",bin:"01110111",symbol:"w",htmlCode:"&#119;",description:"Lowercase w"},{dec:"120",oct:"170",hex:"78",bin:"01111000",symbol:"x",htmlCode:"&#120;",description:"Lowercase x"},{dec:"121",oct:"171",hex:"79",bin:"01111001",symbol:"y",htmlCode:"&#121;",description:"Lowercase y"},{dec:"122",oct:"172",hex:"7A",bin:"01111010",symbol:"z",htmlCode:"&#122;",description:"Lowercase z"},{dec:"123",oct:"173",hex:"7B",bin:"01111011",symbol:"{",htmlCode:"&#123;",description:"Opening brace"},{dec:"124",oct:"174",hex:"7C",bin:"01111100",symbol:"|",htmlCode:"&#124;",description:"Vertical bar"},{dec:"125",oct:"175",hex:"7D",bin:"01111101",symbol:"}",htmlCode:"&#125;",description:"Closing brace"},{dec:"126",oct:"176",hex:"7E",bin:"01111110",symbol:"~",htmlCode:"&#126;",description:"Equivalency sign (tilde)"},{dec:"127",oct:"177",hex:"7F",bin:"01111111",symbol:"",htmlCode:"&#127;",description:"Delete"}]),m=d([{dec:"128",oct:"200",hex:"80",bin:"10000000",symbol:"€",htmlCode:"&#128;",description:"Euro sign"},{dec:"129",oct:"201",hex:"81",bin:"10000001",symbol:"",htmlCode:"",description:""},{dec:"130",oct:"202",hex:"82",bin:"10000010",symbol:"‚",htmlCode:"&#130;",description:"Single low-9 quotation mark"},{dec:"131",oct:"203",hex:"83",bin:"10000011",symbol:"ƒ",htmlCode:"&#131;",description:"Latin small letter f with hook"},{dec:"132",oct:"204",hex:"84",bin:"10000100",symbol:"„",htmlCode:"&#132;",description:"Double low-9 quotation mark"},{dec:"133",oct:"205",hex:"85",bin:"10000101",symbol:"…",htmlCode:"&#133;",description:"Horizontal ellipsis"},{dec:"134",oct:"206",hex:"86",bin:"10000110",symbol:"†",htmlCode:"&#134;",description:"Dagger"},{dec:"135",oct:"207",hex:"87",bin:"10000111",symbol:"‡",htmlCode:"&#135;",description:"Double dagger"},{dec:"136",oct:"210",hex:"88",bin:"10001000",symbol:"ˆ",htmlCode:"&#136;",description:"Modifier letter circumflex accent"},{dec:"137",oct:"211",hex:"89",bin:"10001001",symbol:"‰",htmlCode:"&#137;",description:"Per mille sign"},{dec:"138",oct:"212",hex:"8A",bin:"10001010",symbol:"Š",htmlCode:"&#138;",description:"Latin capital letter S with caron"},{dec:"139",oct:"213",hex:"8B",bin:"10001011",symbol:"‹",htmlCode:"&#139;",description:"Single left-pointing angle quotation"},{dec:"140",oct:"214",hex:"8C",bin:"10001100",symbol:"Œ",htmlCode:"&#140;",description:"Latin capital ligature OE"},{dec:"141",oct:"215",hex:"8D",bin:"10001101",symbol:"",htmlCode:"",description:""},{dec:"142",oct:"216",hex:"8E",bin:"10001110",symbol:"Ž",htmlCode:"&#142;",description:"Latin capital letter Z with caron"},{dec:"143",oct:"217",hex:"8F",bin:"10001111",symbol:"",htmlCode:"",description:""},{dec:"144",oct:"220",hex:"90",bin:"10010000",symbol:"",htmlCode:"",description:""},{dec:"145",oct:"221",hex:"91",bin:"10010001",symbol:"‘",htmlCode:"&#145;",description:"Left single quotation mark"},{dec:"146",oct:"222",hex:"92",bin:"10010010",symbol:"’",htmlCode:"&#146;",description:"Right single quotation mark"},{dec:"147",oct:"223",hex:"93",bin:"10010011",symbol:"“",htmlCode:"&#147;",description:"Left double quotation mark"},{dec:"148",oct:"224",hex:"94",bin:"10010100",symbol:"”",htmlCode:"&#148;",description:"Right double quotation mark"},{dec:"149",oct:"225",hex:"95",bin:"10010101",symbol:"•",htmlCode:"&#149;",description:"Bullet"},{dec:"150",oct:"226",hex:"96",bin:"10010110",symbol:"–",htmlCode:"&#150;",description:"En dash"},{dec:"151",oct:"227",hex:"97",bin:"10010111",symbol:"—",htmlCode:"&#151;",description:"Em dash"},{dec:"152",oct:"230",hex:"98",bin:"10011000",symbol:"˜",htmlCode:"&#152;",description:"Small tilde"},{dec:"153",oct:"231",hex:"99",bin:"10011001",symbol:"™",htmlCode:"&#153;",description:"Trade mark sign"},{dec:"154",oct:"232",hex:"9A",bin:"10011010",symbol:"š",htmlCode:"&#154;",description:"Latin small letter S with caron"},{dec:"155",oct:"233",hex:"9B",bin:"10011011",symbol:"›",htmlCode:"&#155;",description:"Single right-pointing angle quotation mark"},{dec:"156",oct:"234",hex:"9C",bin:"10011100",symbol:"œ",htmlCode:"&#156;",description:"Latin small ligature oe"},{dec:"157",oct:"235",hex:"9D",bin:"10011101",symbol:"",htmlCode:"",description:""},{dec:"158",oct:"236",hex:"9E",bin:"10011110",symbol:"ž",htmlCode:"&#158;",description:"Latin small letter z with caron"},{dec:"159",oct:"237",hex:"9F",bin:"10011111",symbol:"Ÿ",htmlCode:"&#159;",description:"Latin capital letter Y with diaeresis"},{dec:"160",oct:"240",hex:"A0",bin:"10100000",symbol:"",htmlCode:"&#160;",description:"Non-breaking space"},{dec:"161",oct:"241",hex:"A1",bin:"10100001",symbol:"¡",htmlCode:"&#161;",description:"Inverted exclamation mark"},{dec:"162",oct:"242",hex:"A2",bin:"10100010",symbol:"¢",htmlCode:"&#162;",description:"Cent sign"},{dec:"163",oct:"243",hex:"A3",bin:"10100011",symbol:"£",htmlCode:"&#163;",description:"Pound sign"},{dec:"164",oct:"244",hex:"A4",bin:"10100100",symbol:"¤",htmlCode:"&#164;",description:"Currency sign"},{dec:"165",oct:"245",hex:"A5",bin:"10100101",symbol:"¥",htmlCode:"&#165;",description:"Yen sign"},{dec:"166",oct:"246",hex:"A6",bin:"10100110",symbol:"¦",htmlCode:"&#166;",description:"Pipe, Broken vertical bar"},{dec:"167",oct:"247",hex:"A7",bin:"10100111",symbol:"§",htmlCode:"&#167;",description:"Section sign"},{dec:"168",oct:"250",hex:"A8",bin:"10101000",symbol:"¨",htmlCode:"&#168;",description:"Spacing diaeresis - umlaut"},{dec:"169",oct:"251",hex:"A9",bin:"10101001",symbol:"©",htmlCode:"&#169;",description:"Copyright sign"},{dec:"170",oct:"252",hex:"AA",bin:"10101010",symbol:"ª",htmlCode:"&#170;",description:"Feminine ordinal indicator"},{dec:"171",oct:"253",hex:"AB",bin:"10101011",symbol:"«",htmlCode:"&#171;",description:"Left double angle quotes"},{dec:"172",oct:"254",hex:"AC",bin:"10101100",symbol:"¬",htmlCode:"&#172;",description:"Not sign"},{dec:"173",oct:"255",hex:"AD",bin:"10101101",symbol:"­",htmlCode:"&#173;",description:"Soft hyphen"},{dec:"174",oct:"256",hex:"AE",bin:"10101110",symbol:"®",htmlCode:"&#174;",description:"Registered trade mark sign"},{dec:"175",oct:"257",hex:"AF",bin:"10101111",symbol:"¯",htmlCode:"&#175;",description:"Spacing macron - overline"},{dec:"176",oct:"260",hex:"B0",bin:"10110000",symbol:"°",htmlCode:"&#176;",description:"Degree sign"},{dec:"177",oct:"261",hex:"B1",bin:"10110001",symbol:"±",htmlCode:"&#177;",description:"Plus-or-minus sign"},{dec:"178",oct:"262",hex:"B2",bin:"10110010",symbol:"²",htmlCode:"&#178;",description:"Superscript two - squared"},{dec:"179",oct:"263",hex:"B3",bin:"10110011",symbol:"³",htmlCode:"&#179;",description:"Superscript three - cubed"},{dec:"180",oct:"264",hex:"B4",bin:"10110100",symbol:"´",htmlCode:"&#180;",description:"Acute accent - spacing acute"},{dec:"181",oct:"265",hex:"B5",bin:"10110101",symbol:"µ",htmlCode:"&#181;",description:"Micro sign"},{dec:"182",oct:"266",hex:"B6",bin:"10110110",symbol:"¶",htmlCode:"&#182;",description:"Pilcrow sign - paragraph sign"},{dec:"183",oct:"267",hex:"B7",bin:"10110111",symbol:"·",htmlCode:"&#183;",description:"Middle dot - Georgian comma"},{dec:"184",oct:"270",hex:"B8",bin:"10111000",symbol:"¸",htmlCode:"&#184;",description:"Spacing cedilla"},{dec:"185",oct:"271",hex:"B9",bin:"10111001",symbol:"¹",htmlCode:"&#185;",description:"Superscript one"},{dec:"186",oct:"272",hex:"BA",bin:"10111010",symbol:"º",htmlCode:"&#186;",description:"Masculine ordinal indicator"},{dec:"187",oct:"273",hex:"BB",bin:"10111011",symbol:"»",htmlCode:"&#187;",description:"Right double angle quotes"},{dec:"188",oct:"274",hex:"BC",bin:"10111100",symbol:"¼",htmlCode:"&#188;",description:"Fraction one quarter"},{dec:"189",oct:"275",hex:"BD",bin:"10111101",symbol:"½",htmlCode:"&#189;",description:"Fraction one half"},{dec:"190",oct:"276",hex:"BE",bin:"10111110",symbol:"¾",htmlCode:"&#190;",description:"Fraction three quarters"},{dec:"191",oct:"277",hex:"BF",bin:"10111111",symbol:"¿",htmlCode:"&#191;",description:"Inverted question mark"},{dec:"192",oct:"300",hex:"C0",bin:"11000000",symbol:"À",htmlCode:"&#192;",description:"Latin capital letter A with grave"},{dec:"193",oct:"301",hex:"C1",bin:"11000001",symbol:"Á",htmlCode:"&#193;",description:"Latin capital letter A with acute"},{dec:"194",oct:"302",hex:"C2",bin:"11000010",symbol:"Â",htmlCode:"&#194;",description:"Latin capital letter A with circumflex"},{dec:"195",oct:"303",hex:"C3",bin:"11000011",symbol:"Ã",htmlCode:"&#195;",description:"Latin capital letter A with tilde"},{dec:"196",oct:"304",hex:"C4",bin:"11000100",symbol:"Ä",htmlCode:"&#196;",description:"Latin capital letter A with diaeresis"},{dec:"197",oct:"305",hex:"C5",bin:"11000101",symbol:"Å",htmlCode:"&#197;",description:"Latin capital letter A with ring above"},{dec:"198",oct:"306",hex:"C6",bin:"11000110",symbol:"Æ",htmlCode:"&#198;",description:"Latin capital letter AE"},{dec:"199",oct:"307",hex:"C7",bin:"11000111",symbol:"Ç",htmlCode:"&#199;",description:"Latin capital letter C with cedilla"},{dec:"200",oct:"310",hex:"C8",bin:"11001000",symbol:"È",htmlCode:"&#200;",description:"Latin capital letter E with grave"},{dec:"201",oct:"311",hex:"C9",bin:"11001001",symbol:"É",htmlCode:"&#201;",description:"Latin capital letter E with acute"},{dec:"202",oct:"312",hex:"CA",bin:"11001010",symbol:"Ê",htmlCode:"&#202;",description:"Latin capital letter E with circumflex"},{dec:"203",oct:"313",hex:"CB",bin:"11001011",symbol:"Ë",htmlCode:"&#203;",description:"Latin capital letter E with diaeresis"},{dec:"204",oct:"314",hex:"CC",bin:"11001100",symbol:"Ì",htmlCode:"&#204;",description:"Latin capital letter I with grave"},{dec:"205",oct:"315",hex:"CD",bin:"11001101",symbol:"Í",htmlCode:"&#205;",description:"Latin capital letter I with acute"},{dec:"206",oct:"316",hex:"CE",bin:"11001110",symbol:"Î",htmlCode:"&#206;",description:"Latin capital letter I with circumflex"},{dec:"207",oct:"317",hex:"CF",bin:"11001111",symbol:"Ï",htmlCode:"&#207;",description:"Latin capital letter I with diaeresis"},{dec:"208",oct:"320",hex:"D0",bin:"11010000",symbol:"Ð",htmlCode:"&#208;",description:"Latin capital letter ETH"},{dec:"209",oct:"321",hex:"D1",bin:"11010001",symbol:"Ñ",htmlCode:"&#209;",description:"Latin capital letter N with tilde"},{dec:"210",oct:"322",hex:"D2",bin:"11010010",symbol:"Ò",htmlCode:"&#210;",description:"Latin capital letter O with grave"},{dec:"211",oct:"323",hex:"D3",bin:"11010011",symbol:"Ó",htmlCode:"&#211;",description:"Latin capital letter O with acute"},{dec:"212",oct:"324",hex:"D4",bin:"11010100",symbol:"Ô",htmlCode:"&#212;",description:"Latin capital letter O with circumflex"},{dec:"213",oct:"325",hex:"D5",bin:"11010101",symbol:"Õ",htmlCode:"&#213;",description:"Latin capital letter O with tilde"},{dec:"214",oct:"326",hex:"D6",bin:"11010110",symbol:"Ö",htmlCode:"&#214;",description:"Latin capital letter O with diaeresis"},{dec:"215",oct:"327",hex:"D7",bin:"11010111",symbol:"×",htmlCode:"&#215;",description:"Multiplication sign"},{dec:"216",oct:"330",hex:"D8",bin:"11011000",symbol:"Ø",htmlCode:"&#216;",description:"Latin capital letter O with slash"},{dec:"217",oct:"331",hex:"D9",bin:"11011001",symbol:"Ù",htmlCode:"&#217;",description:"Latin capital letter U with grave"},{dec:"218",oct:"332",hex:"DA",bin:"11011010",symbol:"Ú",htmlCode:"&#218;",description:"Latin capital letter U with acute"},{dec:"219",oct:"333",hex:"DB",bin:"11011011",symbol:"Û",htmlCode:"&#219;",description:"Latin capital letter U with circumflex"},{dec:"220",oct:"334",hex:"DC",bin:"11011100",symbol:"Ü",htmlCode:"&#220;",description:"Latin capital letter U with diaeresis"},{dec:"221",oct:"335",hex:"DD",bin:"11011101",symbol:"Ý",htmlCode:"&#221;",description:"Latin capital letter Y with acute"},{dec:"222",oct:"336",hex:"DE",bin:"11011110",symbol:"Þ",htmlCode:"&#222;",description:"Latin capital letter THORN"},{dec:"223",oct:"337",hex:"DF",bin:"11011111",symbol:"ß",htmlCode:"&#223;",description:"Latin small letter sharp s - ess-zed"},{dec:"224",oct:"340",hex:"E0",bin:"11100000",symbol:"à",htmlCode:"&#224;",description:"Latin small letter a with grave"},{dec:"225",oct:"341",hex:"E1",bin:"11100001",symbol:"á",htmlCode:"&#225;",description:"Latin small letter a with acute"},{dec:"226",oct:"342",hex:"E2",bin:"11100010",symbol:"â",htmlCode:"&#226;",description:"Latin small letter a with circumflex"},{dec:"227",oct:"343",hex:"E3",bin:"11100011",symbol:"ã",htmlCode:"&#227;",description:"Latin small letter a with tilde"},{dec:"228",oct:"344",hex:"E4",bin:"11100100",symbol:"ä",htmlCode:"&#228;",description:"Latin small letter a with diaeresis"},{dec:"229",oct:"345",hex:"E5",bin:"11100101",symbol:"å",htmlCode:"&#229;",description:"Latin small letter a with ring above"},{dec:"230",oct:"346",hex:"E6",bin:"11100110",symbol:"æ",htmlCode:"&#230;",description:"Latin small letter ae"},{dec:"231",oct:"347",hex:"E7",bin:"11100111",symbol:"ç",htmlCode:"&#231;",description:"Latin small letter c with cedilla"},{dec:"232",oct:"350",hex:"E8",bin:"11101000",symbol:"è",htmlCode:"&#232;",description:"Latin small letter e with grave"},{dec:"233",oct:"351",hex:"E9",bin:"11101001",symbol:"é",htmlCode:"&#233;",description:"Latin small letter e with acute"},{dec:"234",oct:"352",hex:"EA",bin:"11101010",symbol:"ê",htmlCode:"&#234;",description:"Latin small letter e with circumflex"},{dec:"235",oct:"353",hex:"EB",bin:"11101011",symbol:"ë",htmlCode:"&#235;",description:"Latin small letter e with diaeresis"},{dec:"236",oct:"354",hex:"EC",bin:"11101100",symbol:"ì",htmlCode:"&#236;",description:"Latin small letter i with grave"},{dec:"237",oct:"355",hex:"ED",bin:"11101101",symbol:"í",htmlCode:"&#237;",description:"Latin small letter i with acute"},{dec:"238",oct:"356",hex:"EE",bin:"11101110",symbol:"î",htmlCode:"&#238;",description:"Latin small letter i with circumflex"},{dec:"239",oct:"357",hex:"EF",bin:"11101111",symbol:"ï",htmlCode:"&#239;",description:"Latin small letter i with diaeresis"},{dec:"240",oct:"360",hex:"F0",bin:"11110000",symbol:"ð",htmlCode:"&#240;",description:"Latin small letter eth"},{dec:"241",oct:"361",hex:"F1",bin:"11110001",symbol:"ñ",htmlCode:"&#241;",description:"Latin small letter n with tilde"},{dec:"242",oct:"362",hex:"F2",bin:"11110010",symbol:"ò",htmlCode:"&#242;",description:"Latin small letter o with grave"},{dec:"243",oct:"363",hex:"F3",bin:"11110011",symbol:"ó",htmlCode:"&#243;",description:"Latin small letter o with acute"},{dec:"244",oct:"364",hex:"F4",bin:"11110100",symbol:"ô",htmlCode:"&#244;",description:"Latin small letter o with circumflex"},{dec:"245",oct:"365",hex:"F5",bin:"11110101",symbol:"õ",htmlCode:"&#245;",description:"Latin small letter o with tilde"},{dec:"246",oct:"366",hex:"F6",bin:"11110110",symbol:"ö",htmlCode:"&#246;",description:"Latin small letter o with diaeresis"},{dec:"247",oct:"367",hex:"F7",bin:"11110111",symbol:"÷",htmlCode:"&#247;",description:"Division sign"},{dec:"248",oct:"370",hex:"F8",bin:"11111000",symbol:"ø",htmlCode:"&#248;",description:"Latin small letter o with slash"},{dec:"249",oct:"371",hex:"F9",bin:"11111001",symbol:"ù",htmlCode:"&#249;",description:"Latin small letter u with grave"},{dec:"250",oct:"372",hex:"FA",bin:"11111010",symbol:"ú",htmlCode:"&#250;",description:"Latin small letter u with acute"},{dec:"251",oct:"373",hex:"FB",bin:"11111011",symbol:"û",htmlCode:"&#251;",description:"Latin small letter u with circumflex"},{dec:"252",oct:"374",hex:"FC",bin:"11111100",symbol:"ü",htmlCode:"&#252;",description:"Latin small letter u with diaeresis"},{dec:"253",oct:"375",hex:"FD",bin:"11111101",symbol:"ý",htmlCode:"&#253;",description:"Latin small letter y with acute"},{dec:"254",oct:"376",hex:"FE",bin:"11111110",symbol:"þ",htmlCode:"&#254;",description:"Latin small letter thorn"},{dec:"255",oct:"377",hex:"FF",bin:"11111111",symbol:"ÿ",htmlCode:"&#255;",description:"Latin small letter y with diaeresis"}]);return(w,g)=>{const i=L,t=x,c=y,h=C;return b(),a(p,null,[e(i,{level:3},{default:o(()=>[l(" 7 Bit ASCII Codes ")]),_:1}),e(c,{data:n(s),"row-key":"dec"},{default:o(()=>[e(t,{prop:"dec",label:"DEC"}),e(t,{prop:"oct",label:"OCT"}),e(t,{prop:"hex",label:"HEX"}),e(t,{prop:"bin",label:"BIN"}),e(t,{prop:"symbol",label:"Symbol"}),e(t,{prop:"htmlCode",label:"HTML Code"}),e(t,{prop:"description",label:"Description"})]),_:1},8,["data"]),e(h),e(i,{level:3},{default:o(()=>[l(" Extended ASCII Codes ")]),_:1}),e(c,{data:n(m),"row-key":"dec"},{default:o(()=>[e(t,{prop:"dec",label:"DEC"}),e(t,{prop:"oct",label:"OCT"}),e(t,{prop:"hex",label:"HEX"}),e(t,{prop:"bin",label:"BIN"}),e(t,{prop:"symbol",label:"Symbol"}),e(t,{prop:"htmlCode",label:"HTML Code"}),e(t,{prop:"description",label:"Description"})]),_:1},8,["data"])],64)}}});export{T as default};
