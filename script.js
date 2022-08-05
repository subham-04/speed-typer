const word = document.getElementById('word');
const text = document.getElementById('text');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const endEl = document.getElementById('end-game-container');
const settings = document.getElementById('settings');
const settingsBtn = document.getElementById('settings-btn');
const difficultyEl = document.getElementById('difficulty');
const settingsForm = document.getElementById('settings-form');


const words =[
    "acajous","acalculia","acalculias","acaleph","acalephae","acalephan","acalephans","acalephe","acalephes","acalephs","acanaceous","acanth"," acantha","acanthaceous","acanthae","acanthas","acanthi","acanthin","acanthine","acanthins","conferencing","conferencings","conferential","conferment","conferments","conferrable","conferral","conferrals","conferred","conferree","conferrees","conferrence","conferrences","conferrer","conferrers","conferring","confers","conferva","confervae","conferval","confervas","confess","confessable","confessed","confessedly","confesses","confessing","confession","confessional","confessionalism","confessionalist","confessionally","confessionals","confessions","confessor","confessors","confetti","confetto","confidant","confidante","confidantes","confidants","confide","confided","confidence","confidences","confident","confidential","confidentiality","confidentially","confidently","confider","confiders","confides","confiding","confidingly","confidingness","confidingnesses","configuration","configurational","configurations","configurative","configure","configured","configures","configuring","confine","confined","confinement","confinements","confiner","confiners","confines","confining","confirm","confirmability","confirmable","confirmand","confirmands","confirmation","confirmational","confirmations","confirmatory","confirmed","confirmedly","confirmedness","confirmednesses","confirmer","confirmers","confirming","confirms","confiscable","confiscatable","confiscate","confiscated","confiscates","confiscating","confiscation","confiscations","confiscator","confiscators","confiscatory","confit","confiteor","confiteors","confits","confiture","confitures","conflagrant","conflagration","conflagrations","conflate","conflated","conflates","conflating","conflation","conflations","conflict","conflicted","acanthocephalan","acanthocephalans","acanthoid","acanthous","acanths ","acanthus","acanthuses","acapnia","acapnias","acarbose","acarboses","acari","acarian","acariases","acariasis","acaricidal","acaricide","acaricides","acarid" ,"acaridan","acaridans","acaridean","acarideans","acaridian","acaridians","acaridomatia","accessorii","accessorily","accessoriness","accessorinesses","accessorise","accessorised","accessorises","accessorising","accessorius"," accessorize","accessorized","accessorizes","accessorizing","accessory","accessory","accidental" ,"accidentology","accidents","accidia","accidias","accidie","accidies","accinge","accinged","accinges","accinging","accipiter","accipiters"," accipitral","accipitrine","accipitrines","accite","accited","accites","acciting","acclaim","acclaimed","acclaimer","acclaimers","acclaiming","acclamations" ,"acclimatisable","acclimatisation","acclimatise","acclimatised","acclimatiser","acclimatisers","acclimatises","acclimatising","acclimatizable","acclimatization","acclimatizations","acclimatize"," acclimatized","acclimatizer","acclimatizers","acclimatizes","acclimatizing","acclivities","acclivitous","acclivity","acclivous","accloy","accloyed","accloying","accloys","accoast","accoasted","accoasting","accoasts","accoied","accoil","accoils","accolade","accoladed","accolades ","accolading","accommodating","accommodates","accommodates","accommodates","accommodatingly","accommodation","accommodational","accommodationist","accommodationists","accommodations", "Accommodative","accompaniments","accompanist","accompanists","accompany","accompanying","accompanyist","accompanyists","accomplice","accomplices","accomplish","accomplishable","accomplished","accomplisher" ,"wholesales","wholesaling","wholesome","wholesomely","wholesomeness","wholesomenesses","wholesomer","wholesomest","wholism","wholisms","wholistic","wholly","whom","whomever","whomp","whomped","whomping","whomps","whomso","whomsoever","whoof","whoofed","whoofing","whoofs","whoop","whooped","whoopee","whoopees","whooper","whoopers","whoopie","whoopies","whooping","whoopla","whooplas","whoops","whoosh","whooshed","whooshes","whooshing","whoosis","whoosises","whop","whopped","whopper","whoppers","whopping","whops","whored","whoredom","whoredoms","whorehouse","whorehouses","whoremaster","whoremasters","whoremonger","whoremongers","whores","whoreson","whoresons","whoring","whorish","whorishly","whorl","whorled","whorls","whort","whortle","whortleberries","upswells","upswept","upswing","upswinging","upswings","upswollen","upswung","uptake","uptakes","uptalk","uptalked","uptalking","uptalks","uptear","uptearing","uptears","uptempo","uptempos","upthrew","upthrow","upthrowing","upthrown","upthrows","upthrust","upthrusted","upthrusting","upthrusts","uptick","upticks","uptight","uptightness","uptightnesses","uptilt","uptilted","uptilting","uptilts","uptime","uptimes","uptore","uptorn","uptoss","uptossed","uptosses","uptossing","uptown","uptowner","uptowners","uptowns","uptrend","uptrends","upturn","upturned","upturning","upturns","upwaft","upwafted","upwafting","upwafts","upward","upwardly","upwardness","upwardnesses","upwards","upwell","upwelled","upwelling","upwellings","upwells","upwind","upwinds","uracil","uracils","uraei","uraemia","uraemias","uraemic","uraeus","uraeuses","uralite","uralites","uralitic","urania","uranias","uranic","uranide","uranides","uraninite","uraninites","uranism","uranisms","uranite","uranites","uranitic","uranium","uraniums","uranographies","uranography","uranologies","uranology","uranous","uranyl","uranylic","uranyls","urare","urares","urari","uraris","urase","urases","urate","urates","uratic","urb","urban","urbane","urbanely","urbaner","urbanest","urbanisation","urbanisations","urbanise","urbanised","urbanises","urbanising","urbanism","urbanisms","urbanist","urbanistic","urbanistically","urbanists","urbanite","urbanites","urbanities","urbanity","urbanization","urbanizations","urbanize","urbanized","urbanizes","urbanizing","urbanologies","urbanologist","urbanologists","urbanology","urbia","urbias","urbs","urceolate","urchin","urchins","urd","urds","urea","ureal","ureas","urease","ureases","uredia","uredial","uredinia","uredinial","urediniospore","urediniospores","uredinium","urediospore","urediospores","uredium","uredo","uredos","uredospore","uredospores","ureic","ureide","ureides","uremia","uremias","uremic","ureotelic","ureotelism","ureotelisms","ureter","ureteral","ureteric","ureters","urethan","urethane","urethanes","urethans","urethra","urethrae","urethral","urethras","urethritis","yokelish","yokels","yokemate","yokemates","yokes","yoking","yokozuna","yokozunas","yoks","yolk","yolked","yolkier","yolkiest","yolks","yolky","yom","yomim","yon","yond","yonder","yoni","yonic","yonis","yonker","yonkers","yore","yores","yottabyte","yottabytes","you","young","youngberries","youngberry","younger","youngers","youngest","youngish","youngling","younglings","youngness","youngnesses","youngs","youngster","youngsters","younker","younkers","youpon","youpons","your","yourn","yours","yourself","yourselves","yous","youse","youth","youthen","youthened","youthening","youthens","youthful","youthfully","youthfulness","youthfulnesses","youthquake","youthquakes","youths","yow","yowe","yowed","yowes","yowie","yowies","yowing","yowl","yowled","yowler","yowlers","yowling","yowls","yows","yperite","yperites","ytterbia","ytterbias","ytterbic","ytterbium","ytterbiums","ytterbous","yttria","yttrias","yttric","yttrium","yttriums","yuan","yuans","yuca","yucas","yucca","yuccas","yucch","yuch","yuck","yucked","yuckier","yuckiest","yuckiness","yuckinesses","yucking","yucks","yucky","yuga","yugas","yuk","yukked","yukkier","yukkiest","yukking","yukky","yuks","yulan","yulans","yule","yules","yuletide","yuletides","yum","yummier","yummies","yummiest","yumminess","yumminesses","yummy","yup","yupon","yupons","yuppie","yuppiedom","yuppiedoms","yuppieish","yuppies","yuppified","yuppifies","yuppify","yuppifying","yuppy","yups","yurt","yurta","yurts","yutz","yutzes","ywis","za","zabaglione","zabagliones","zabaione","zabaiones","zabajone","zabajones","zacaton","zacatons","zaddick","zaddik","zaddikim","zaffar","zaffars","zaffer","zaffers","zaffir","zaffirs","zaffre","zaffres","zaftig","zag","zagged","zagging","zags","zaibatsu","zaikai","zaikais","zaire","zaires","zamarra","zamarras","zamarro","zamarros","zamia","zamias","zamindar","zamindari","zamindaris","zamindars","zanana","zananas","zander","zanders","zanier","zanies","zaniest","zanily","zaniness","zaninesses","zany","zanyish","zanza","zanzas","zap","zapateado","zapateados","zapateo","zapateos","zapped","zapper","zappers","zappier","zappiest","zapping","zappy","zaps","zaptiah","zaptiahs","zaptieh","zaptiehs","zaratite","mouchoirs","moue","moues","moufflon","moufflons","mouflon","mouflons","mouille","moujik","moujiks","moulage","moulages","mould","moulded","moulder","mouldered","mouldering","moulders","mouldier","mouldiest","moulding","mouldings","moulds","mouldy","moulin","moulins","moult","moulted","moulter","moulters","moulting","moults","mound","moundbird","moundbirds","mounded","mounding","mounds","mount","mountable","mountain","mountaineer","mountaineering","mountaineerings","mountaineers","mountainous","mountainously","mountainousness","mountains","mountainside","mountainsides","mountaintop","mountaintops","mountainy","mountebank","mountebanked","mountebankeries","mountebankery","mountebanking","mountebanks","mounted","mounter","mounters","mounting","mountings","mounts","mourn","mourned","mourner","mourners","mournful","mournfuller","mournfullest","mournfully","mournfulness","mournfulnesses","mourning","mourningly","mournings","mourns","mousaka","mousakas","mouse","mousebird","mousebirds","moused","mouselike","mousepad","mousepads","mouser","mousers","mouses","mousetail","mousetails","mousetrap","mousetrapped","mousetrapping","mousetraps","mousey","mousier","mousiest","mousily","mousiness","mousinesses","mousing","mousings","moussaka","moussakas","mousse","moussed","mousseline","mousselines","mousses","moussing","moustache","moustaches","moustachio","moustachios","mousy","mouth","mouthbreeder","mouthbreeders","mouthed","mouther","mouthers","mouthfeel","mouthfeels","mouthful","mouthfuls","mouthier","mouthiest","mouthily","mouthing","mouthless","mouthlike","mouthpart","mouthparts","mouthpiece","mouthpieces","mouths","mouthwash","mouthwashes","mouthwatering","zaratites","zareba","zarebas","zareeba","zareebas","zarf","zarfs","zariba","zaribas","zarzuela","zarzuelas","zas","zastruga","zastrugi","zax","zaxes","zayin","zayins","zazen","zazens","zeal","zealot","zealotries","whortleberry","whortles","whorts","accomplishers","accomplishes","accomplishing","accomplishment","accomplishments","accompt","accomptable","accomptant","accomptants","accompted","accompting","accompts"," accorage","accoraged","accorages","accoraging","accord","accordable","accordance","accordances","accordances","accordancy","accordant","accordantly","accorded","accorder","accorders","accordingly","accordingly","accordion","accordionist","accordionists","accordions","accords","accost","accostable" ,"accosted","accosting","accosts","accouchement","accouchements","accoucheur","accoucheurs","ventriloquizes","ventriloquizing","ventriloquy","ventrolateral","ventromedial","vents","venture","ventured","venturer","venturers","ventures","venturesome","venturesomely","venturesomeness","venturi","venturing","venturis","venturous","venturously","venturousness","venturousnesses","venue","venues","venular","venule","venules","venulose","venulous","venus","venuses","vera","zirconias","zirconic","zirconium","zirconiums","zircons","zit","zither","zitherist","zitherists","zithern","zitherns","zithers","ziti","zitis","zits","zizit","zizith","zizzle","zizzled","zizzles","zizzling","zlote","zloties","zloty","zlotych","zlotys","zoa","zoantharian","zoantharians","zoaria","zoarial","zoarium","zocalo","zocalos","zodiac","zodiacal","zodiacs","zoea","zoeae","zoeal","zoeas","zoecia","zoecium","zoftig","zoic","zoisite","zoisites","zombi","zombie","zombielike","zombies","zombification","zombifications","zombified","zombifies","zombify","zombifying","zombiism","zombiisms","zombis","zona","zonae","nectarean","nectarial","nectaried","nectaries","nectarine","nectarines","nectarous","nectars","nectary","neddies","neddy","nee","need","needed","needer","needers","needful","needfully","needfulness","needfulnesses","needfuls","needier","neediest","needily","neediness","needinesses","needing","needle","needled","needlefish","needlefishes","needlelike","needlepoint","needlepoints","needler","needlers","needles","needless","needlessly","needlessness","needlessnesses","needlewoman","needlewomen","needlework","needleworker","needleworkers","needleworks","needling","needlings","needs","needy","neem","neems","neep","neeps","nefarious","nefariously","neg","negate","negated","negater","negaters","negates","negating","negation","negational","negations","negative","negatived","negatively","negativeness","negativenesses","negatives","negativing","negativism","negativisms","negativist","negativistic","negativists","negativities","negativity","negaton","negatons","negator","negators","negatron","negatrons","neglect","neglected","neglecter","neglecters","neglectful","zonal","zonally","zonary","zonate","zonated","zonation","zonations","zone","zoned","zoneless","zoner","zoners","zones","zonetime","zonetimes","zoning","zonk","zonked","zonking","zonks","veracious","veraciously","veraciousness","veraciousnesses","veracities","veracity","veranda","verandaed","verandah","verandahed","verandahs","verandas","verapamil","verapamils","veratria","veratrias","veratridine","veratridines","veratrin","veratrine","veratrines","veratrins","veratrum","veratrums","verb","verbal","verbalism","verbalisms","verbalist","verbalistic","verbalists","verbalization","verbalizations","verbalize","verbalized","verbalizer","verbalizers","verbalizes","verbalizing","verbally","verbals","verbatim","verbena","verbenas","verbiage","verbiages","verbicide","verbicides","verbid","verbids","verbified","verbifies","verbify","verbifying","verbigeration","accoucheuse","accoucheuses","account","accountabilities","accountability"," accountable","accountableness","accountablenesses","accountably","accountancies","accountancy","accountant","accountants","accountantship","accountantships","accounted","accounting","accountings","accounts","accouplement","accouplements","accourage","accouraged","accourages","accouraging","accourt","accourted","accourting","accourts" ,"accoustrement","accoustrements","accouter","accoutered","accoutering","accouterment","accouterments","accouters","accoutre","accoutred","accoutrement","accoutrements"," accoutres","accoutring","accoy","accoed","accoying","accoyld","accoys","dimerization","dimerizations","dimerize","dimerized","dimerizes","dimerizing","dimerous","dimers","dimes ","dimeter","dimeters","dimethoate","dimethoates","dimethyl","dimethylamine","dimethylamines","dimethylaniline","dimethylhydrazine","dimethylhydrazines","dimethylnitrosamine","dimethylnitrosamines", "dimethyls","dimethyltryptamine","dimethyltryptamines","dimetric","dimidate","dimidiated","dimidiates","dimidiating","dimidiation","dimidiations","diminish","diminishable","diminished","diminishes","diminishingly","diminishingly","diminishing","diminishment","diminishments","diminuendo","diminuendoes","diminuendos","diminution" ,"diminutions","diminutival","diminutive","diminutive","diminutiveness","diminutivenesses","diminutives","dimissory","dimities","dimity","dimly","dimmable"," dimmed","dimmer","dimmers","dimmest","dimming","dimmings","dimmish","dimness","dimnesses","dimorph","dimorphic","dimorphism","dimorphisms" ,"dimorphous","dimorphs","dimout","dimouts","dimp","dimple","dimpled","dimplement","dimplements","dimples","dimplier","dimpliest","dimpling" ,"dimply","dimps","dimpsies","dimpsy","dims","dimwit","dimwits","dimwitted","dimyarian","din","dinanderie","dinanderies"," dinar","dinarchies","dinarchy","dinars","dindle","dindled","dindles","dindling","dine","dined","diner","dineric","dinero" ,"dineros","diners","dines","dinette","dinettes","dinful","ding","dingbat","dingbats","dingdong","dingdonged","dingdonging","dingdongs","dinge","dinged","dinger","dingers","dinges ","dingeses","dingey","dingeys","dinghies","dinghy","dingied","dingier","dingies","dingiest","dingily","dinginess","dinginesses", "dinging","dingle","dingleberries","dingleberry","dingles","dingo","dingoed","dingoes","dingoing","dings","dingus","dinguses","dingy ","dingying","dinic","dinics","dining","dinitro","dinitrobenzene","dinitrobenzenes","dinitrogen","dinitrophenol","dinitrophenols","dink","dinked","dinker","dinkest","dinkey","dinkeys","dinkie" ,"dinkier","dinkies","dinkiest","dinking","dinkly","dinks","dinkum","dinkums","dinky","dinmont","dinmonts","dinna"," dinnae","dinned","dinner","dinnered","dinnering","dinnerless","dinners","dinnertime","dinnertimes","dinnerware","dinnerwares","dinner","dinnle" ,"dinnled","dinnles","dinnling","dino","dinoceras","dinocerases","dinoflagellate","dinoflagellates","dinomania","dinomanias","dinos","dinosaur","dinosaurian","dinosauric","dinosaurs","dinothere" ,"dinotheres","dinotherium","dinotheriums","dinoturbation","dinoturbations","dins","dint","dinted","dinting","dintless","dints","dinucleotide","epicism","epicisms","epicist","epicists","epicleses","epiclesis","epiclike","epicondyle","epicondyles","epicondylitis","epicondylitises","epicontinental"," epicormic","epicotyl","epicotyls","epicrania","epicranium","epicrises","epicrisis","epicritic","epics","epicure","epicurean","epicureanism","epicureanisms","epicureans","epicures","epicurise","epicurised","epicurises","epicurising","epicurism","epicurisms","epicurize","epicurized","epicurizes","epicurizing"," epicuticle","epicuticles","epicuticular","epicycle","epicycles","epicyclic","epicyclical","epicycloid","epicycloidal","epicycloids","epideictic","epideictical","epidemic" ,"epidemic","epidemically","epidemicities","epidemicity","epidemics","epidemiologic","epidemiological","epidemiologically","epidemiologies","epidemiologist","epidemiologists","epidemiology","epidendrone","epidendrones","epidendrum","epidendrums","epiderm","epidermal","epidermic","epidermis","hideosities","hideosity","hideous","hideously","hideousness" ,"hideousnesses","hideout","hideouts","hider","hiders","hides","hiding","hidings","hidling","hidlings","hidlins","hidroses"," hidrosis","hidrotic","hidrotics","hie","hied","hieing","hieleman","hielamans","hieland","hiemal","hiems","hieracium","hieraciums" ,"hieracosphinges","hieracosphinx","knavishness","knavishnesses","knawe","knawel","knawels","knawes","knead","kneadable","kneaded","kneader","kneaders","kneading","kneads","knee","kneecap","kneecapped","kneecapping" ,"kneecappings","kneecaps","kneed","kneehole","kneeholes","kneeing","kneejerk","kneel","kneeled","kneeler","kneelers","kneeling"," kneels","kneepad","kneepads","kneepan","kneepans","kneepiece","kneepieces","knees","kneesies","kneesock","kneesocks","kneidel","kneidels" ,"kneidlach","knell","knelled","knelling","knells","knelt","knesset","knessets","knevell","knevelled","knevelling","knevells","knew","knicker","lamp","lampad","lampadaries","lampadary","lampadedromies","lampadedromy","lampadephoria","lampadephorias","lampadist","lampadists","lampadomancies","lampadomancy","lampads","lampas","lampases" ,"lampasse","lampasses","lampblack","lampblacks","lampbrush","lamped","lamper","lampern","lamperns","lampers","lamperses","lampholder"," lampholders","lamphole","lampholes","lamping","lampings","lampion","lampions","lamplight","lamplighter","lamplighters","lamplights","lamplit","lampoon", "lampooned","lampooner","lampooneries","lampooners","lampoonery","lampooning","lampoonist","lampoonists","lampoons","lamppost","lampposts","lamprey","lampreys"," lamprophyre","lamprophyres","lamprophyric","lamps","lampshade","lampshades","lampshell","lampshells","lampuka","lampukas","lampuki","lampukis","lampyrid" ,"murrin","murrine","murrines","murrins","murrion","murrions","murris","murrs","murry","murther","murthered","murtherer","murtherers","murthering","murthers","murti","murtis","murva","murvas","mus","musaceous","musang","musangs","musar","musars","musca","muscadel","muscadelle","muscadelles","muscadels","muscadet","muscadets","muscadin","muscadine","muscadines","muscadins","muscae","muscardine","muscardines","muscarine","muscarines","muscarinic","muscat","muscatel","muscatels","muscatoria","muscatorium","muscats","muscavado","muscavados","muscid","muscids","muscle","musclebound","muscled","muscleman","musclemen","muscles","musclier","muscliest","muscling","musclings","muscly","muscoid","muscologies","muscology","muscone","muscones","muscose","muscovado" ,"muscovados","muscovite","muscovites","muscovy","muscular","muscularities","muscularity","muscularly","musculation","musculations","musculature","musculatures"," musculoskeletal","musculous","muse","mused","museful","musefully","museological","museologies","museologist","museologists","museology","muser","musers" ,"nonfulfillment","nonfulfillments","nonfunctional","nonfunctioning" ,"nonfunded","nong","nongame","nongaseous","nongay","nongays","nongenetic","nongenital","nongeometrical","nonghetto","nonglamorous","nonglare"," nonglares","nonglazed","nonglossy","nongolfer","nongolfers","nongonococcal","nongovernment","nongovernmental","nongovernments","nongraded","nongraduate","nongraduates","nongrammatical","nongranular","nongravitational","nongreasy","nongreen","nongregarious","nongrowing","nongrowth","nongs","nonguest","nonguests","nonguilt" ,"nonguilts","nonhalogenated","nonhandicapped","nonhappening","nonhappenings","nonhardy","nonharmonic","nonhazardous","nonheme","nonhemolytic","nonhereditary","nonhero"," nonheroes","nonheroic","nonhierarchical","nonhistone","nonhistorical","nonhome","nonhomogeneous","nonhomologous","nonhomosexual","nonhomosexuals","nonhormonal","nonhospital","nonhospitalised","nonhospitalized","nonhospitals","nonhostile","nonhousing","nonhousings","nonhuman","resensitizes","resensitizing","resent","resented","resentence","resentenced","resentences","resentencing","resenter","resenters","resentful","resentfully","resentfulness ","resentfulnesses","resenting","resentingly","resentive","resentment","resentments","resents","reserpine","reserpines","reservable","reservation","reservationist", "reservationists","reservations","reservatories","reservatory","reserve","reservedly","reservedness","reservednesses","reserver","reservers","reserves","reservice","reserviced","reservices","reservicing","reserving","reservist","reservists","reservoir","reservoiring","reservoirs","reses" ,"reset","resets","resettable","resetted","resetter","resetters","resetting","resettle","resettled","resettlement","resettlements","resettles","tapuing","tapus","taqueria","taquerias","tar","tara","taradiddle","taradiddles","taraire","taraires","tarakihi","tarakihis"," tarama","taramas","taramasalata","taramasalatas","taramea","tarameas","tarand","tarands","tarantara","tarantaraed","tarantaraing","tarantaras","tarantas" ,"tarantases","tarantass","tarantasses","tarantella","tarantellas","tarantism","tarantisms","tarantist","tarantists","tarantula","tarantulae","tarantulas","taras","taratantara","taratantaraed" ,"taratantaraing","taratantaras","taraxacum","taraxacums","tarboggin","tarboggined","tarboggining","tarboggins","tarboosh","tarbooshes","tarbouche","tarbouches"," tarboush","tarboushes","tarboy","tarboys","tarbush","tarbushes","tarcel","tarcels","tardied","tardier","tardies","tardiest","tardigrade" ,"tardigrades","tardily","tardiness","tardinesses","tardive","tardo","tardy","tardying","tardyon","tardyons","tare","tared","tares","targa","targe","targed","targes","target","targetable","targeted","targeteer","targeteers","targeting","targetitis","targetitises","targetless","targets","targing","tariff","tariffed","tariffication","tariffications","tariffing","tariffless","tariffs","taring","tarings","tarlatan","tarlatans","tarletan","tarletans","tarmac","tarmacadam","tarmacadams","tarmacked","tarmacking","tarmacs","tarn","tarnal","tarnally","tarnation","tarnations","tarnish","tarnishable","tarnished","tarnisher","tarnishers","tarnishes","tarnishing","tarns","taro","taroc","tarocs","tarok","tarriest","tarriness","tarrinesses","tarring","tarrings","tarrock","tarrocks","tarrow","tarrowed","tarrowing","tarrows","tarry"," tarrying","tars","tarsal","tarsalgia","tarsalgias","tarsals","tarseal","tarseals","tarsel","tarsels","tarsi","tarsia"
];

// Focus on text on start
text.focus();

let randomword;
let actualTime;
let difficulty= localStorage.getItem('difficulty') !== null? localStorage.getItem('difficulty'):'medium';
difficultyEl.value = localStorage.getItem('difficulty') !== null? localStorage.getItem('difficulty'):'medium';

let score =0;
let time = 60;
let check =0;

let timeInterval;
if(difficulty === 'hard'){
    time=20;
    actualTime=time;
    

}else if(difficulty === 'medium'){
    time=30;
    actualTime=time;
    

}else{
    time=60;
    actualTime=time;
    

}

timeEl.innerText = time+'s';

function updateDuration(){
    if(difficulty === 'hard'){
        time=20;
        actualTime=time;
        updateTime();
    
    }else if(difficulty === 'medium'){
        time=30;
        actualTime=time;
        updateTime();
        
    
    }else{
        time=60;
        actualTime=time;
        updateTime();
        
    
    }
}

function updateTime(){
    
    
    
    // timeEl.innerText = time+'s';
    time--;
    timeEl.innerText = time+'s';
    if(time === 0){
        clearInterval(timeInterval);
        check=0;
        gameOver();
    }
}



function gameOver(){
    endEl.innerHTML=`
    <h2>Time ran out</h2>
    <p class="m-t-15">You typed ${score} words in ${actualTime} seconds</p>
    <button class="default-btn" onclick="location.reload()">Test again</button>
    `
    endEl.style.display='flex';
    endEl.style.flexDirection='column';
}

function getRandomWord(){
    return words[Math.floor(Math.random()*words.length)]
}

function updateScore(){
    score++;
    scoreEl.innerText=score;

}

function addWordToDOM(){
    randomword=getRandomWord();
    word.innerText=randomword;
}

addWordToDOM();

text.addEventListener('input',e=>{
    check++;
    if(check>0 && check<2){
        timeInterval = setInterval(updateTime,1000);


    }

    

    word.style.color='#eeeeee';
   
    const insertedText = e.target.value;
    word.style.color='#da3633';
    if(insertedText === randomword){
        word.style.color='#49bb78';

        addWordToDOM();
        word.style.color='#eeeeee';
        updateScore();
        e.target.value='';
        
    }
});

settingsBtn.addEventListener('click',()=>{
    settings.classList.toggle('hide');
});

settingsForm.addEventListener('change',e=>{
    difficulty=e.target.value;
    console.log(difficulty);
    localStorage.setItem('difficulty',difficulty);
    updateDuration();

});