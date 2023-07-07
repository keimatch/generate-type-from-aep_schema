export interface Schema {
    _ags731?:               Ags731;
    _experience?:           SchemaExperience;
    _id?:                   string;
    advertising?:           Advertising;
    application?:           Application;
    channel?:               Channel;
    commerce?:              Commerce;
    dataSource?:            DataSource;
    device?:                Device;
    directMarketing?:       DirectMarketing;
    endUserIDs?:            EndUserIDs;
    environment?:           SchemaEnvironment;
    eventMergeId?:          string;
    eventType?:             string;
    identityMap?:           any;
    implementationDetails?: SchemaImplementationDetails;
    marketing?:             Marketing;
    media?:                 Media;
    placeContext?:          PlaceContext;
    producedBy?:            string;
    productListItems?:      ProductListItem[];
    profileStitch?:         ProfileStitch[];
    receivedTimestamp?:     any;
    search?:                SchemaSearch;
    segmentMembership?:     any;
    timestamp?:             any;
    userActivityRegion?:    UserActivityRegion;
    web?:                   SchemaWeb;
    [property: string]: any;
}

export interface Ags731 {
    actionInfo?: ActionInfo;
    pageInfo?:   PageInfo;
    searchInfo?: SearchInfo;
    userInfo?:   UserInfo;
    [property: string]: any;
}

export interface ActionInfo {
    events?: Events;
    [property: string]: any;
}

export interface Events {
    addFavorite?:    AddFavorite;
    internalSearch?: InternalSearch;
    signUp?:         SignUp;
    [property: string]: any;
}

export interface AddFavorite {
    value?: number;
    [property: string]: any;
}

export interface InternalSearch {
    value?: number;
    [property: string]: any;
}

export interface SignUp {
    value?: number;
    [property: string]: any;
}

export interface PageInfo {
    pageTitle?:         string;
    previousPageName?:  string;
    siteSectionLevel1?: string;
    siteSectionLevel2?: string;
    siteSectionLevel3?: string;
    urlWithNoParam?:    string;
    [property: string]: any;
}

export interface SearchInfo {
    searchCategory?: string;
    searchKeyWord?:  string;
    searchSortBy?:   string;
    [property: string]: any;
}

export interface UserInfo {
    crmid?: string;
    ecid?:  string;
    [property: string]: any;
}

export interface SchemaExperience {
    analytics?:       PurpleAnalytics;
    decisioning?:     PurpleDecisioning;
    implementations?: Implementations;
    profile?:         Profile;
    target?:          FluffyTarget;
    [property: string]: any;
}

export interface PurpleAnalytics {
    customDimensions?: PurpleCustomDimensions;
    endUser?:          EndUser;
    environment?:      AnalyticsEnvironment;
    event101to200?:    PurpleEvent101To200;
    event1to100?:      PurpleEvent1To100;
    event201to300?:    PurpleEvent201To300;
    event301to400?:    PurpleEvent301To400;
    event401to500?:    PurpleEvent401To500;
    event501to600?:    PurpleEvent501To600;
    event601to700?:    PurpleEvent601To700;
    event701to800?:    PurpleEvent701To800;
    event801to900?:    PurpleEvent801To900;
    event901to1000?:   PurpleEvent901To1000;
    session?:          Session;
    [property: string]: any;
}

export interface PurpleCustomDimensions {
    eVars?:         PurpleEVars;
    hierarchies?:   Hierarchies;
    listProps?:     ListProps;
    lists?:         Lists;
    postalCode?:    string;
    props?:         Props;
    stateProvince?: string;
    [property: string]: any;
}

export interface PurpleEVars {
    eVar1?:   string;
    eVar10?:  string;
    eVar100?: string;
    eVar101?: string;
    eVar102?: string;
    eVar103?: string;
    eVar104?: string;
    eVar105?: string;
    eVar106?: string;
    eVar107?: string;
    eVar108?: string;
    eVar109?: string;
    eVar11?:  string;
    eVar110?: string;
    eVar111?: string;
    eVar112?: string;
    eVar113?: string;
    eVar114?: string;
    eVar115?: string;
    eVar116?: string;
    eVar117?: string;
    eVar118?: string;
    eVar119?: string;
    eVar12?:  string;
    eVar120?: string;
    eVar121?: string;
    eVar122?: string;
    eVar123?: string;
    eVar124?: string;
    eVar125?: string;
    eVar126?: string;
    eVar127?: string;
    eVar128?: string;
    eVar129?: string;
    eVar13?:  string;
    eVar130?: string;
    eVar131?: string;
    eVar132?: string;
    eVar133?: string;
    eVar134?: string;
    eVar135?: string;
    eVar136?: string;
    eVar137?: string;
    eVar138?: string;
    eVar139?: string;
    eVar14?:  string;
    eVar140?: string;
    eVar141?: string;
    eVar142?: string;
    eVar143?: string;
    eVar144?: string;
    eVar145?: string;
    eVar146?: string;
    eVar147?: string;
    eVar148?: string;
    eVar149?: string;
    eVar15?:  string;
    eVar150?: string;
    eVar151?: string;
    eVar152?: string;
    eVar153?: string;
    eVar154?: string;
    eVar155?: string;
    eVar156?: string;
    eVar157?: string;
    eVar158?: string;
    eVar159?: string;
    eVar16?:  string;
    eVar160?: string;
    eVar161?: string;
    eVar162?: string;
    eVar163?: string;
    eVar164?: string;
    eVar165?: string;
    eVar166?: string;
    eVar167?: string;
    eVar168?: string;
    eVar169?: string;
    eVar17?:  string;
    eVar170?: string;
    eVar171?: string;
    eVar172?: string;
    eVar173?: string;
    eVar174?: string;
    eVar175?: string;
    eVar176?: string;
    eVar177?: string;
    eVar178?: string;
    eVar179?: string;
    eVar18?:  string;
    eVar180?: string;
    eVar181?: string;
    eVar182?: string;
    eVar183?: string;
    eVar184?: string;
    eVar185?: string;
    eVar186?: string;
    eVar187?: string;
    eVar188?: string;
    eVar189?: string;
    eVar19?:  string;
    eVar190?: string;
    eVar191?: string;
    eVar192?: string;
    eVar193?: string;
    eVar194?: string;
    eVar195?: string;
    eVar196?: string;
    eVar197?: string;
    eVar198?: string;
    eVar199?: string;
    eVar2?:   string;
    eVar20?:  string;
    eVar200?: string;
    eVar201?: string;
    eVar202?: string;
    eVar203?: string;
    eVar204?: string;
    eVar205?: string;
    eVar206?: string;
    eVar207?: string;
    eVar208?: string;
    eVar209?: string;
    eVar21?:  string;
    eVar210?: string;
    eVar211?: string;
    eVar212?: string;
    eVar213?: string;
    eVar214?: string;
    eVar215?: string;
    eVar216?: string;
    eVar217?: string;
    eVar218?: string;
    eVar219?: string;
    eVar22?:  string;
    eVar220?: string;
    eVar221?: string;
    eVar222?: string;
    eVar223?: string;
    eVar224?: string;
    eVar225?: string;
    eVar226?: string;
    eVar227?: string;
    eVar228?: string;
    eVar229?: string;
    eVar23?:  string;
    eVar230?: string;
    eVar231?: string;
    eVar232?: string;
    eVar233?: string;
    eVar234?: string;
    eVar235?: string;
    eVar236?: string;
    eVar237?: string;
    eVar238?: string;
    eVar239?: string;
    eVar24?:  string;
    eVar240?: string;
    eVar241?: string;
    eVar242?: string;
    eVar243?: string;
    eVar244?: string;
    eVar245?: string;
    eVar246?: string;
    eVar247?: string;
    eVar248?: string;
    eVar249?: string;
    eVar25?:  string;
    eVar250?: string;
    eVar26?:  string;
    eVar27?:  string;
    eVar28?:  string;
    eVar29?:  string;
    eVar3?:   string;
    eVar30?:  string;
    eVar31?:  string;
    eVar32?:  string;
    eVar33?:  string;
    eVar34?:  string;
    eVar35?:  string;
    eVar36?:  string;
    eVar37?:  string;
    eVar38?:  string;
    eVar39?:  string;
    eVar4?:   string;
    eVar40?:  string;
    eVar41?:  string;
    eVar42?:  string;
    eVar43?:  string;
    eVar44?:  string;
    eVar45?:  string;
    eVar46?:  string;
    eVar47?:  string;
    eVar48?:  string;
    eVar49?:  string;
    eVar5?:   string;
    eVar50?:  string;
    eVar51?:  string;
    eVar52?:  string;
    eVar53?:  string;
    eVar54?:  string;
    eVar55?:  string;
    eVar56?:  string;
    eVar57?:  string;
    eVar58?:  string;
    eVar59?:  string;
    eVar6?:   string;
    eVar60?:  string;
    eVar61?:  string;
    eVar62?:  string;
    eVar63?:  string;
    eVar64?:  string;
    eVar65?:  string;
    eVar66?:  string;
    eVar67?:  string;
    eVar68?:  string;
    eVar69?:  string;
    eVar7?:   string;
    eVar70?:  string;
    eVar71?:  string;
    eVar72?:  string;
    eVar73?:  string;
    eVar74?:  string;
    eVar75?:  string;
    eVar76?:  string;
    eVar77?:  string;
    eVar78?:  string;
    eVar79?:  string;
    eVar8?:   string;
    eVar80?:  string;
    eVar81?:  string;
    eVar82?:  string;
    eVar83?:  string;
    eVar84?:  string;
    eVar85?:  string;
    eVar86?:  string;
    eVar87?:  string;
    eVar88?:  string;
    eVar89?:  string;
    eVar9?:   string;
    eVar90?:  string;
    eVar91?:  string;
    eVar92?:  string;
    eVar93?:  string;
    eVar94?:  string;
    eVar95?:  string;
    eVar96?:  string;
    eVar97?:  string;
    eVar98?:  string;
    eVar99?:  string;
    [property: string]: any;
}

export interface Hierarchies {
    hier1?: Hier1;
    hier2?: Hier2;
    hier3?: Hier3;
    hier4?: Hier4;
    hier5?: Hier5;
    [property: string]: any;
}

export interface Hier1 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Hier2 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Hier3 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Hier4 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Hier5 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface ListProps {
    prop1?:  Prop1;
    prop10?: Prop10;
    prop11?: Prop11;
    prop12?: Prop12;
    prop13?: Prop13;
    prop14?: Prop14;
    prop15?: Prop15;
    prop16?: Prop16;
    prop17?: Prop17;
    prop18?: Prop18;
    prop19?: Prop19;
    prop2?:  Prop2;
    prop20?: Prop20;
    prop21?: Prop21;
    prop22?: Prop22;
    prop23?: Prop23;
    prop24?: Prop24;
    prop25?: Prop25;
    prop26?: Prop26;
    prop27?: Prop27;
    prop28?: Prop28;
    prop29?: Prop29;
    prop3?:  Prop3;
    prop30?: Prop30;
    prop31?: Prop31;
    prop32?: Prop32;
    prop33?: Prop33;
    prop34?: Prop34;
    prop35?: Prop35;
    prop36?: Prop36;
    prop37?: Prop37;
    prop38?: Prop38;
    prop39?: Prop39;
    prop4?:  Prop4;
    prop40?: Prop40;
    prop41?: Prop41;
    prop42?: Prop42;
    prop43?: Prop43;
    prop44?: Prop44;
    prop45?: Prop45;
    prop46?: Prop46;
    prop47?: Prop47;
    prop48?: Prop48;
    prop49?: Prop49;
    prop5?:  Prop5;
    prop50?: Prop50;
    prop51?: Prop51;
    prop52?: Prop52;
    prop53?: Prop53;
    prop54?: Prop54;
    prop55?: Prop55;
    prop56?: Prop56;
    prop57?: Prop57;
    prop58?: Prop58;
    prop59?: Prop59;
    prop6?:  Prop6;
    prop60?: Prop60;
    prop61?: Prop61;
    prop62?: Prop62;
    prop63?: Prop63;
    prop64?: Prop64;
    prop65?: Prop65;
    prop66?: Prop66;
    prop67?: Prop67;
    prop68?: Prop68;
    prop69?: Prop69;
    prop7?:  Prop7;
    prop70?: Prop70;
    prop71?: Prop71;
    prop72?: Prop72;
    prop73?: Prop73;
    prop74?: Prop74;
    prop75?: Prop75;
    prop8?:  Prop8;
    prop9?:  Prop9;
    [property: string]: any;
}

export interface Prop1 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop10 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop11 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop12 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop13 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop14 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop15 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop16 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop17 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop18 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop19 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop2 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop20 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop21 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop22 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop23 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop24 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop25 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop26 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop27 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop28 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop29 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop3 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop30 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop31 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop32 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop33 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop34 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop35 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop36 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop37 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop38 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop39 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop4 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop40 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop41 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop42 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop43 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop44 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop45 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop46 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop47 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop48 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop49 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop5 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop50 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop51 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop52 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop53 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop54 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop55 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop56 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop57 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop58 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop59 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop6 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop60 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop61 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop62 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop63 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop64 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop65 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop66 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop67 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop68 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop69 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop7 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop70 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop71 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop72 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop73 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop74 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop75 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop8 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Prop9 {
    delimiter?: string;
    values?:    any;
    [property: string]: any;
}

export interface Lists {
    list1?: List1;
    list2?: List2;
    list3?: List3;
    [property: string]: any;
}

export interface List1 {
    list?: List1List[];
    [property: string]: any;
}

export interface List1List {
    key?:   string;
    value?: string;
    [property: string]: any;
}

export interface List2 {
    list?: List2List[];
    [property: string]: any;
}

export interface List2List {
    key?:   string;
    value?: string;
    [property: string]: any;
}

export interface List3 {
    list?: List3List[];
    [property: string]: any;
}

export interface List3List {
    key?:   string;
    value?: string;
    [property: string]: any;
}

export interface Props {
    prop1?:  string;
    prop10?: string;
    prop11?: string;
    prop12?: string;
    prop13?: string;
    prop14?: string;
    prop15?: string;
    prop16?: string;
    prop17?: string;
    prop18?: string;
    prop19?: string;
    prop2?:  string;
    prop20?: string;
    prop21?: string;
    prop22?: string;
    prop23?: string;
    prop24?: string;
    prop25?: string;
    prop26?: string;
    prop27?: string;
    prop28?: string;
    prop29?: string;
    prop3?:  string;
    prop30?: string;
    prop31?: string;
    prop32?: string;
    prop33?: string;
    prop34?: string;
    prop35?: string;
    prop36?: string;
    prop37?: string;
    prop38?: string;
    prop39?: string;
    prop4?:  string;
    prop40?: string;
    prop41?: string;
    prop42?: string;
    prop43?: string;
    prop44?: string;
    prop45?: string;
    prop46?: string;
    prop47?: string;
    prop48?: string;
    prop49?: string;
    prop5?:  string;
    prop50?: string;
    prop51?: string;
    prop52?: string;
    prop53?: string;
    prop54?: string;
    prop55?: string;
    prop56?: string;
    prop57?: string;
    prop58?: string;
    prop59?: string;
    prop6?:  string;
    prop60?: string;
    prop61?: string;
    prop62?: string;
    prop63?: string;
    prop64?: string;
    prop65?: string;
    prop66?: string;
    prop67?: string;
    prop68?: string;
    prop69?: string;
    prop7?:  string;
    prop70?: string;
    prop71?: string;
    prop72?: string;
    prop73?: string;
    prop74?: string;
    prop75?: string;
    prop8?:  string;
    prop9?:  string;
    [property: string]: any;
}

export interface EndUser {
    firstTimestamp?: any;
    firstWeb?:       FirstWeb;
    [property: string]: any;
}

export interface FirstWeb {
    webInteraction?: FirstWebWebInteraction;
    webPageDetails?: FirstWebWebPageDetails;
    webReferrer?:    FirstWebWebReferrer;
    [property: string]: any;
}

export interface FirstWebWebInteraction {
    linkClicks?: PurpleLinkClicks;
    name?:       string;
    region?:     string;
    type?:       string;
    URL?:        string;
    [property: string]: any;
}

export interface PurpleLinkClicks {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FirstWebWebPageDetails {
    isErrorPage?: boolean;
    isHomePage?:  boolean;
    name?:        string;
    pageViews?:   PurplePageViews;
    server?:      string;
    siteSection?: string;
    URL?:         string;
    viewName?:    string;
    [property: string]: any;
}

export interface PurplePageViews {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FirstWebWebReferrer {
    type?: string;
    URL?:  string;
    [property: string]: any;
}

export interface AnalyticsEnvironment {
    browserIDStr?:         string;
    operatingSystemIDStr?: string;
    [property: string]: any;
}

export interface PurpleEvent101To200 {
    event101?: PurpleEvent101;
    event102?: PurpleEvent102;
    event103?: PurpleEvent103;
    event104?: PurpleEvent104;
    event105?: PurpleEvent105;
    event106?: PurpleEvent106;
    event107?: PurpleEvent107;
    event108?: PurpleEvent108;
    event109?: PurpleEvent109;
    event110?: PurpleEvent110;
    event111?: PurpleEvent111;
    event112?: PurpleEvent112;
    event113?: PurpleEvent113;
    event114?: PurpleEvent114;
    event115?: PurpleEvent115;
    event116?: PurpleEvent116;
    event117?: PurpleEvent117;
    event118?: PurpleEvent118;
    event119?: PurpleEvent119;
    event120?: PurpleEvent120;
    event121?: PurpleEvent121;
    event122?: PurpleEvent122;
    event123?: PurpleEvent123;
    event124?: PurpleEvent124;
    event125?: PurpleEvent125;
    event126?: PurpleEvent126;
    event127?: PurpleEvent127;
    event128?: PurpleEvent128;
    event129?: PurpleEvent129;
    event130?: PurpleEvent130;
    event131?: PurpleEvent131;
    event132?: PurpleEvent132;
    event133?: PurpleEvent133;
    event134?: PurpleEvent134;
    event135?: PurpleEvent135;
    event136?: PurpleEvent136;
    event137?: PurpleEvent137;
    event138?: PurpleEvent138;
    event139?: PurpleEvent139;
    event140?: PurpleEvent140;
    event141?: PurpleEvent141;
    event142?: PurpleEvent142;
    event143?: PurpleEvent143;
    event144?: PurpleEvent144;
    event145?: PurpleEvent145;
    event146?: PurpleEvent146;
    event147?: PurpleEvent147;
    event148?: PurpleEvent148;
    event149?: PurpleEvent149;
    event150?: PurpleEvent150;
    event151?: PurpleEvent151;
    event152?: PurpleEvent152;
    event153?: PurpleEvent153;
    event154?: PurpleEvent154;
    event155?: PurpleEvent155;
    event156?: PurpleEvent156;
    event157?: PurpleEvent157;
    event158?: PurpleEvent158;
    event159?: PurpleEvent159;
    event160?: PurpleEvent160;
    event161?: PurpleEvent161;
    event162?: PurpleEvent162;
    event163?: PurpleEvent163;
    event164?: PurpleEvent164;
    event165?: PurpleEvent165;
    event166?: PurpleEvent166;
    event167?: PurpleEvent167;
    event168?: PurpleEvent168;
    event169?: PurpleEvent169;
    event170?: PurpleEvent170;
    event171?: PurpleEvent171;
    event172?: PurpleEvent172;
    event173?: PurpleEvent173;
    event174?: PurpleEvent174;
    event175?: PurpleEvent175;
    event176?: PurpleEvent176;
    event177?: PurpleEvent177;
    event178?: PurpleEvent178;
    event179?: PurpleEvent179;
    event180?: PurpleEvent180;
    event181?: PurpleEvent181;
    event182?: PurpleEvent182;
    event183?: PurpleEvent183;
    event184?: PurpleEvent184;
    event185?: PurpleEvent185;
    event186?: PurpleEvent186;
    event187?: PurpleEvent187;
    event188?: PurpleEvent188;
    event189?: PurpleEvent189;
    event190?: PurpleEvent190;
    event191?: PurpleEvent191;
    event192?: PurpleEvent192;
    event193?: PurpleEvent193;
    event194?: PurpleEvent194;
    event195?: PurpleEvent195;
    event196?: PurpleEvent196;
    event197?: PurpleEvent197;
    event198?: PurpleEvent198;
    event199?: PurpleEvent199;
    event200?: PurpleEvent200;
    [property: string]: any;
}

export interface PurpleEvent101 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent102 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent103 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent104 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent105 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent106 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent107 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent108 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent109 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent110 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent111 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent112 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent113 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent114 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent115 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent116 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent117 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent118 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent119 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent120 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent121 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent122 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent123 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent124 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent125 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent126 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent127 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent128 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent129 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent130 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent131 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent132 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent133 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent134 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent135 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent136 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent137 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent138 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent139 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent140 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent141 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent142 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent143 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent144 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent145 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent146 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent147 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent148 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent149 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent150 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent151 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent152 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent153 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent154 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent155 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent156 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent157 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent158 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent159 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent160 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent161 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent162 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent163 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent164 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent165 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent166 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent167 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent168 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent169 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent170 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent171 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent172 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent173 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent174 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent175 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent176 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent177 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent178 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent179 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent180 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent181 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent182 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent183 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent184 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent185 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent186 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent187 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent188 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent189 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent190 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent191 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent192 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent193 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent194 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent195 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent196 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent197 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent198 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent199 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent200 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent1To100 {
    event1?:   PurpleEvent1;
    event10?:  PurpleEvent10;
    event100?: PurpleEvent100;
    event11?:  PurpleEvent11;
    event12?:  PurpleEvent12;
    event13?:  PurpleEvent13;
    event14?:  PurpleEvent14;
    event15?:  PurpleEvent15;
    event16?:  PurpleEvent16;
    event17?:  PurpleEvent17;
    event18?:  PurpleEvent18;
    event19?:  PurpleEvent19;
    event2?:   PurpleEvent2;
    event20?:  PurpleEvent20;
    event21?:  PurpleEvent21;
    event22?:  PurpleEvent22;
    event23?:  PurpleEvent23;
    event24?:  PurpleEvent24;
    event25?:  PurpleEvent25;
    event26?:  PurpleEvent26;
    event27?:  PurpleEvent27;
    event28?:  PurpleEvent28;
    event29?:  PurpleEvent29;
    event3?:   PurpleEvent3;
    event30?:  PurpleEvent30;
    event31?:  PurpleEvent31;
    event32?:  PurpleEvent32;
    event33?:  PurpleEvent33;
    event34?:  PurpleEvent34;
    event35?:  PurpleEvent35;
    event36?:  PurpleEvent36;
    event37?:  PurpleEvent37;
    event38?:  PurpleEvent38;
    event39?:  PurpleEvent39;
    event4?:   PurpleEvent4;
    event40?:  PurpleEvent40;
    event41?:  PurpleEvent41;
    event42?:  PurpleEvent42;
    event43?:  PurpleEvent43;
    event44?:  PurpleEvent44;
    event45?:  PurpleEvent45;
    event46?:  PurpleEvent46;
    event47?:  PurpleEvent47;
    event48?:  PurpleEvent48;
    event49?:  PurpleEvent49;
    event5?:   PurpleEvent5;
    event50?:  PurpleEvent50;
    event51?:  PurpleEvent51;
    event52?:  PurpleEvent52;
    event53?:  PurpleEvent53;
    event54?:  PurpleEvent54;
    event55?:  PurpleEvent55;
    event56?:  PurpleEvent56;
    event57?:  PurpleEvent57;
    event58?:  PurpleEvent58;
    event59?:  PurpleEvent59;
    event6?:   PurpleEvent6;
    event60?:  PurpleEvent60;
    event61?:  PurpleEvent61;
    event62?:  PurpleEvent62;
    event63?:  PurpleEvent63;
    event64?:  PurpleEvent64;
    event65?:  PurpleEvent65;
    event66?:  PurpleEvent66;
    event67?:  PurpleEvent67;
    event68?:  PurpleEvent68;
    event69?:  PurpleEvent69;
    event7?:   PurpleEvent7;
    event70?:  PurpleEvent70;
    event71?:  PurpleEvent71;
    event72?:  PurpleEvent72;
    event73?:  PurpleEvent73;
    event74?:  PurpleEvent74;
    event75?:  PurpleEvent75;
    event76?:  PurpleEvent76;
    event77?:  PurpleEvent77;
    event78?:  PurpleEvent78;
    event79?:  PurpleEvent79;
    event8?:   PurpleEvent8;
    event80?:  PurpleEvent80;
    event81?:  PurpleEvent81;
    event82?:  PurpleEvent82;
    event83?:  PurpleEvent83;
    event84?:  PurpleEvent84;
    event85?:  PurpleEvent85;
    event86?:  PurpleEvent86;
    event87?:  PurpleEvent87;
    event88?:  PurpleEvent88;
    event89?:  PurpleEvent89;
    event9?:   PurpleEvent9;
    event90?:  PurpleEvent90;
    event91?:  PurpleEvent91;
    event92?:  PurpleEvent92;
    event93?:  PurpleEvent93;
    event94?:  PurpleEvent94;
    event95?:  PurpleEvent95;
    event96?:  PurpleEvent96;
    event97?:  PurpleEvent97;
    event98?:  PurpleEvent98;
    event99?:  PurpleEvent99;
    [property: string]: any;
}

export interface PurpleEvent1 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent10 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent100 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent11 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent12 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent13 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent14 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent15 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent16 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent17 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent18 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent19 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent2 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent20 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent21 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent22 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent23 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent24 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent25 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent26 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent27 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent28 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent29 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent3 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent30 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent31 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent32 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent33 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent34 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent35 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent36 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent37 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent38 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent39 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent4 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent40 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent41 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent42 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent43 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent44 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent45 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent46 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent47 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent48 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent49 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent5 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent50 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent51 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent52 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent53 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent54 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent55 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent56 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent57 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent58 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent59 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent6 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent60 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent61 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent62 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent63 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent64 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent65 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent66 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent67 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent68 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent69 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent7 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent70 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent71 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent72 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent73 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent74 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent75 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent76 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent77 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent78 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent79 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent8 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent80 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent81 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent82 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent83 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent84 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent85 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent86 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent87 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent88 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent89 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent9 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent90 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent91 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent92 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent93 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent94 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent95 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent96 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent97 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent98 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent99 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent201To300 {
    event201?: PurpleEvent201;
    event202?: PurpleEvent202;
    event203?: PurpleEvent203;
    event204?: PurpleEvent204;
    event205?: PurpleEvent205;
    event206?: PurpleEvent206;
    event207?: PurpleEvent207;
    event208?: PurpleEvent208;
    event209?: PurpleEvent209;
    event210?: PurpleEvent210;
    event211?: PurpleEvent211;
    event212?: PurpleEvent212;
    event213?: PurpleEvent213;
    event214?: PurpleEvent214;
    event215?: PurpleEvent215;
    event216?: PurpleEvent216;
    event217?: PurpleEvent217;
    event218?: PurpleEvent218;
    event219?: PurpleEvent219;
    event220?: PurpleEvent220;
    event221?: PurpleEvent221;
    event222?: PurpleEvent222;
    event223?: PurpleEvent223;
    event224?: PurpleEvent224;
    event225?: PurpleEvent225;
    event226?: PurpleEvent226;
    event227?: PurpleEvent227;
    event228?: PurpleEvent228;
    event229?: PurpleEvent229;
    event230?: PurpleEvent230;
    event231?: PurpleEvent231;
    event232?: PurpleEvent232;
    event233?: PurpleEvent233;
    event234?: PurpleEvent234;
    event235?: PurpleEvent235;
    event236?: PurpleEvent236;
    event237?: PurpleEvent237;
    event238?: PurpleEvent238;
    event239?: PurpleEvent239;
    event240?: PurpleEvent240;
    event241?: PurpleEvent241;
    event242?: PurpleEvent242;
    event243?: PurpleEvent243;
    event244?: PurpleEvent244;
    event245?: PurpleEvent245;
    event246?: PurpleEvent246;
    event247?: PurpleEvent247;
    event248?: PurpleEvent248;
    event249?: PurpleEvent249;
    event250?: PurpleEvent250;
    event251?: PurpleEvent251;
    event252?: PurpleEvent252;
    event253?: PurpleEvent253;
    event254?: PurpleEvent254;
    event255?: PurpleEvent255;
    event256?: PurpleEvent256;
    event257?: PurpleEvent257;
    event258?: PurpleEvent258;
    event259?: PurpleEvent259;
    event260?: PurpleEvent260;
    event261?: PurpleEvent261;
    event262?: PurpleEvent262;
    event263?: PurpleEvent263;
    event264?: PurpleEvent264;
    event265?: PurpleEvent265;
    event266?: PurpleEvent266;
    event267?: PurpleEvent267;
    event268?: PurpleEvent268;
    event269?: PurpleEvent269;
    event270?: PurpleEvent270;
    event271?: PurpleEvent271;
    event272?: PurpleEvent272;
    event273?: PurpleEvent273;
    event274?: PurpleEvent274;
    event275?: PurpleEvent275;
    event276?: PurpleEvent276;
    event277?: PurpleEvent277;
    event278?: PurpleEvent278;
    event279?: PurpleEvent279;
    event280?: PurpleEvent280;
    event281?: PurpleEvent281;
    event282?: PurpleEvent282;
    event283?: PurpleEvent283;
    event284?: PurpleEvent284;
    event285?: PurpleEvent285;
    event286?: PurpleEvent286;
    event287?: PurpleEvent287;
    event288?: PurpleEvent288;
    event289?: PurpleEvent289;
    event290?: PurpleEvent290;
    event291?: PurpleEvent291;
    event292?: PurpleEvent292;
    event293?: PurpleEvent293;
    event294?: PurpleEvent294;
    event295?: PurpleEvent295;
    event296?: PurpleEvent296;
    event297?: PurpleEvent297;
    event298?: PurpleEvent298;
    event299?: PurpleEvent299;
    event300?: PurpleEvent300;
    [property: string]: any;
}

export interface PurpleEvent201 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent202 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent203 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent204 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent205 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent206 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent207 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent208 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent209 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent210 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent211 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent212 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent213 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent214 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent215 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent216 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent217 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent218 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent219 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent220 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent221 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent222 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent223 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent224 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent225 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent226 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent227 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent228 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent229 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent230 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent231 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent232 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent233 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent234 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent235 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent236 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent237 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent238 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent239 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent240 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent241 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent242 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent243 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent244 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent245 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent246 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent247 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent248 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent249 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent250 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent251 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent252 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent253 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent254 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent255 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent256 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent257 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent258 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent259 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent260 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent261 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent262 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent263 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent264 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent265 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent266 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent267 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent268 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent269 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent270 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent271 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent272 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent273 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent274 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent275 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent276 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent277 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent278 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent279 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent280 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent281 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent282 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent283 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent284 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent285 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent286 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent287 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent288 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent289 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent290 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent291 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent292 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent293 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent294 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent295 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent296 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent297 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent298 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent299 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent300 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent301To400 {
    event301?: PurpleEvent301;
    event302?: PurpleEvent302;
    event303?: PurpleEvent303;
    event304?: PurpleEvent304;
    event305?: PurpleEvent305;
    event306?: PurpleEvent306;
    event307?: PurpleEvent307;
    event308?: PurpleEvent308;
    event309?: PurpleEvent309;
    event310?: PurpleEvent310;
    event311?: PurpleEvent311;
    event312?: PurpleEvent312;
    event313?: PurpleEvent313;
    event314?: PurpleEvent314;
    event315?: PurpleEvent315;
    event316?: PurpleEvent316;
    event317?: PurpleEvent317;
    event318?: PurpleEvent318;
    event319?: PurpleEvent319;
    event320?: PurpleEvent320;
    event321?: PurpleEvent321;
    event322?: PurpleEvent322;
    event323?: PurpleEvent323;
    event324?: PurpleEvent324;
    event325?: PurpleEvent325;
    event326?: PurpleEvent326;
    event327?: PurpleEvent327;
    event328?: PurpleEvent328;
    event329?: PurpleEvent329;
    event330?: PurpleEvent330;
    event331?: PurpleEvent331;
    event332?: PurpleEvent332;
    event333?: PurpleEvent333;
    event334?: PurpleEvent334;
    event335?: PurpleEvent335;
    event336?: PurpleEvent336;
    event337?: PurpleEvent337;
    event338?: PurpleEvent338;
    event339?: PurpleEvent339;
    event340?: PurpleEvent340;
    event341?: PurpleEvent341;
    event342?: PurpleEvent342;
    event343?: PurpleEvent343;
    event344?: PurpleEvent344;
    event345?: PurpleEvent345;
    event346?: PurpleEvent346;
    event347?: PurpleEvent347;
    event348?: PurpleEvent348;
    event349?: PurpleEvent349;
    event350?: PurpleEvent350;
    event351?: PurpleEvent351;
    event352?: PurpleEvent352;
    event353?: PurpleEvent353;
    event354?: PurpleEvent354;
    event355?: PurpleEvent355;
    event356?: PurpleEvent356;
    event357?: PurpleEvent357;
    event358?: PurpleEvent358;
    event359?: PurpleEvent359;
    event360?: PurpleEvent360;
    event361?: PurpleEvent361;
    event362?: PurpleEvent362;
    event363?: PurpleEvent363;
    event364?: PurpleEvent364;
    event365?: PurpleEvent365;
    event366?: PurpleEvent366;
    event367?: PurpleEvent367;
    event368?: PurpleEvent368;
    event369?: PurpleEvent369;
    event370?: PurpleEvent370;
    event371?: PurpleEvent371;
    event372?: PurpleEvent372;
    event373?: PurpleEvent373;
    event374?: PurpleEvent374;
    event375?: PurpleEvent375;
    event376?: PurpleEvent376;
    event377?: PurpleEvent377;
    event378?: PurpleEvent378;
    event379?: PurpleEvent379;
    event380?: PurpleEvent380;
    event381?: PurpleEvent381;
    event382?: PurpleEvent382;
    event383?: PurpleEvent383;
    event384?: PurpleEvent384;
    event385?: PurpleEvent385;
    event386?: PurpleEvent386;
    event387?: PurpleEvent387;
    event388?: PurpleEvent388;
    event389?: PurpleEvent389;
    event390?: PurpleEvent390;
    event391?: PurpleEvent391;
    event392?: PurpleEvent392;
    event393?: PurpleEvent393;
    event394?: PurpleEvent394;
    event395?: PurpleEvent395;
    event396?: PurpleEvent396;
    event397?: PurpleEvent397;
    event398?: PurpleEvent398;
    event399?: PurpleEvent399;
    event400?: PurpleEvent400;
    [property: string]: any;
}

export interface PurpleEvent301 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent302 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent303 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent304 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent305 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent306 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent307 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent308 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent309 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent310 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent311 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent312 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent313 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent314 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent315 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent316 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent317 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent318 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent319 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent320 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent321 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent322 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent323 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent324 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent325 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent326 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent327 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent328 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent329 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent330 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent331 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent332 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent333 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent334 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent335 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent336 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent337 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent338 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent339 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent340 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent341 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent342 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent343 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent344 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent345 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent346 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent347 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent348 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent349 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent350 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent351 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent352 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent353 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent354 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent355 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent356 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent357 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent358 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent359 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent360 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent361 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent362 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent363 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent364 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent365 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent366 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent367 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent368 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent369 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent370 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent371 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent372 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent373 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent374 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent375 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent376 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent377 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent378 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent379 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent380 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent381 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent382 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent383 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent384 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent385 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent386 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent387 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent388 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent389 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent390 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent391 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent392 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent393 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent394 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent395 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent396 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent397 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent398 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent399 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent400 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent401To500 {
    event401?: PurpleEvent401;
    event402?: PurpleEvent402;
    event403?: PurpleEvent403;
    event404?: PurpleEvent404;
    event405?: PurpleEvent405;
    event406?: PurpleEvent406;
    event407?: PurpleEvent407;
    event408?: PurpleEvent408;
    event409?: PurpleEvent409;
    event410?: PurpleEvent410;
    event411?: PurpleEvent411;
    event412?: PurpleEvent412;
    event413?: PurpleEvent413;
    event414?: PurpleEvent414;
    event415?: PurpleEvent415;
    event416?: PurpleEvent416;
    event417?: PurpleEvent417;
    event418?: PurpleEvent418;
    event419?: PurpleEvent419;
    event420?: PurpleEvent420;
    event421?: PurpleEvent421;
    event422?: PurpleEvent422;
    event423?: PurpleEvent423;
    event424?: PurpleEvent424;
    event425?: PurpleEvent425;
    event426?: PurpleEvent426;
    event427?: PurpleEvent427;
    event428?: PurpleEvent428;
    event429?: PurpleEvent429;
    event430?: PurpleEvent430;
    event431?: PurpleEvent431;
    event432?: PurpleEvent432;
    event433?: PurpleEvent433;
    event434?: PurpleEvent434;
    event435?: PurpleEvent435;
    event436?: PurpleEvent436;
    event437?: PurpleEvent437;
    event438?: PurpleEvent438;
    event439?: PurpleEvent439;
    event440?: PurpleEvent440;
    event441?: PurpleEvent441;
    event442?: PurpleEvent442;
    event443?: PurpleEvent443;
    event444?: PurpleEvent444;
    event445?: PurpleEvent445;
    event446?: PurpleEvent446;
    event447?: PurpleEvent447;
    event448?: PurpleEvent448;
    event449?: PurpleEvent449;
    event450?: PurpleEvent450;
    event451?: PurpleEvent451;
    event452?: PurpleEvent452;
    event453?: PurpleEvent453;
    event454?: PurpleEvent454;
    event455?: PurpleEvent455;
    event456?: PurpleEvent456;
    event457?: PurpleEvent457;
    event458?: PurpleEvent458;
    event459?: PurpleEvent459;
    event460?: PurpleEvent460;
    event461?: PurpleEvent461;
    event462?: PurpleEvent462;
    event463?: PurpleEvent463;
    event464?: PurpleEvent464;
    event465?: PurpleEvent465;
    event466?: PurpleEvent466;
    event467?: PurpleEvent467;
    event468?: PurpleEvent468;
    event469?: PurpleEvent469;
    event470?: PurpleEvent470;
    event471?: PurpleEvent471;
    event472?: PurpleEvent472;
    event473?: PurpleEvent473;
    event474?: PurpleEvent474;
    event475?: PurpleEvent475;
    event476?: PurpleEvent476;
    event477?: PurpleEvent477;
    event478?: PurpleEvent478;
    event479?: PurpleEvent479;
    event480?: PurpleEvent480;
    event481?: PurpleEvent481;
    event482?: PurpleEvent482;
    event483?: PurpleEvent483;
    event484?: PurpleEvent484;
    event485?: PurpleEvent485;
    event486?: PurpleEvent486;
    event487?: PurpleEvent487;
    event488?: PurpleEvent488;
    event489?: PurpleEvent489;
    event490?: PurpleEvent490;
    event491?: PurpleEvent491;
    event492?: PurpleEvent492;
    event493?: PurpleEvent493;
    event494?: PurpleEvent494;
    event495?: PurpleEvent495;
    event496?: PurpleEvent496;
    event497?: PurpleEvent497;
    event498?: PurpleEvent498;
    event499?: PurpleEvent499;
    event500?: PurpleEvent500;
    [property: string]: any;
}

export interface PurpleEvent401 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent402 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent403 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent404 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent405 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent406 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent407 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent408 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent409 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent410 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent411 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent412 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent413 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent414 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent415 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent416 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent417 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent418 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent419 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent420 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent421 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent422 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent423 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent424 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent425 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent426 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent427 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent428 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent429 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent430 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent431 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent432 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent433 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent434 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent435 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent436 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent437 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent438 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent439 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent440 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent441 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent442 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent443 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent444 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent445 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent446 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent447 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent448 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent449 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent450 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent451 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent452 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent453 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent454 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent455 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent456 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent457 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent458 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent459 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent460 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent461 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent462 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent463 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent464 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent465 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent466 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent467 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent468 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent469 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent470 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent471 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent472 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent473 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent474 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent475 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent476 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent477 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent478 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent479 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent480 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent481 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent482 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent483 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent484 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent485 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent486 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent487 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent488 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent489 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent490 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent491 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent492 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent493 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent494 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent495 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent496 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent497 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent498 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent499 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent500 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent501To600 {
    event501?: PurpleEvent501;
    event502?: PurpleEvent502;
    event503?: PurpleEvent503;
    event504?: PurpleEvent504;
    event505?: PurpleEvent505;
    event506?: PurpleEvent506;
    event507?: PurpleEvent507;
    event508?: PurpleEvent508;
    event509?: PurpleEvent509;
    event510?: PurpleEvent510;
    event511?: PurpleEvent511;
    event512?: PurpleEvent512;
    event513?: PurpleEvent513;
    event514?: PurpleEvent514;
    event515?: PurpleEvent515;
    event516?: PurpleEvent516;
    event517?: PurpleEvent517;
    event518?: PurpleEvent518;
    event519?: PurpleEvent519;
    event520?: PurpleEvent520;
    event521?: PurpleEvent521;
    event522?: PurpleEvent522;
    event523?: PurpleEvent523;
    event524?: PurpleEvent524;
    event525?: PurpleEvent525;
    event526?: PurpleEvent526;
    event527?: PurpleEvent527;
    event528?: PurpleEvent528;
    event529?: PurpleEvent529;
    event530?: PurpleEvent530;
    event531?: PurpleEvent531;
    event532?: PurpleEvent532;
    event533?: PurpleEvent533;
    event534?: PurpleEvent534;
    event535?: PurpleEvent535;
    event536?: PurpleEvent536;
    event537?: PurpleEvent537;
    event538?: PurpleEvent538;
    event539?: PurpleEvent539;
    event540?: PurpleEvent540;
    event541?: PurpleEvent541;
    event542?: PurpleEvent542;
    event543?: PurpleEvent543;
    event544?: PurpleEvent544;
    event545?: PurpleEvent545;
    event546?: PurpleEvent546;
    event547?: PurpleEvent547;
    event548?: PurpleEvent548;
    event549?: PurpleEvent549;
    event550?: PurpleEvent550;
    event551?: PurpleEvent551;
    event552?: PurpleEvent552;
    event553?: PurpleEvent553;
    event554?: PurpleEvent554;
    event555?: PurpleEvent555;
    event556?: PurpleEvent556;
    event557?: PurpleEvent557;
    event558?: PurpleEvent558;
    event559?: PurpleEvent559;
    event560?: PurpleEvent560;
    event561?: PurpleEvent561;
    event562?: PurpleEvent562;
    event563?: PurpleEvent563;
    event564?: PurpleEvent564;
    event565?: PurpleEvent565;
    event566?: PurpleEvent566;
    event567?: PurpleEvent567;
    event568?: PurpleEvent568;
    event569?: PurpleEvent569;
    event570?: PurpleEvent570;
    event571?: PurpleEvent571;
    event572?: PurpleEvent572;
    event573?: PurpleEvent573;
    event574?: PurpleEvent574;
    event575?: PurpleEvent575;
    event576?: PurpleEvent576;
    event577?: PurpleEvent577;
    event578?: PurpleEvent578;
    event579?: PurpleEvent579;
    event580?: PurpleEvent580;
    event581?: PurpleEvent581;
    event582?: PurpleEvent582;
    event583?: PurpleEvent583;
    event584?: PurpleEvent584;
    event585?: PurpleEvent585;
    event586?: PurpleEvent586;
    event587?: PurpleEvent587;
    event588?: PurpleEvent588;
    event589?: PurpleEvent589;
    event590?: PurpleEvent590;
    event591?: PurpleEvent591;
    event592?: PurpleEvent592;
    event593?: PurpleEvent593;
    event594?: PurpleEvent594;
    event595?: PurpleEvent595;
    event596?: PurpleEvent596;
    event597?: PurpleEvent597;
    event598?: PurpleEvent598;
    event599?: PurpleEvent599;
    event600?: PurpleEvent600;
    [property: string]: any;
}

export interface PurpleEvent501 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent502 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent503 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent504 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent505 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent506 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent507 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent508 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent509 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent510 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent511 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent512 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent513 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent514 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent515 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent516 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent517 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent518 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent519 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent520 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent521 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent522 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent523 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent524 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent525 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent526 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent527 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent528 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent529 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent530 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent531 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent532 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent533 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent534 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent535 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent536 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent537 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent538 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent539 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent540 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent541 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent542 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent543 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent544 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent545 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent546 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent547 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent548 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent549 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent550 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent551 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent552 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent553 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent554 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent555 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent556 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent557 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent558 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent559 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent560 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent561 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent562 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent563 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent564 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent565 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent566 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent567 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent568 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent569 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent570 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent571 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent572 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent573 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent574 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent575 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent576 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent577 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent578 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent579 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent580 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent581 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent582 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent583 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent584 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent585 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent586 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent587 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent588 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent589 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent590 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent591 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent592 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent593 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent594 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent595 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent596 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent597 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent598 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent599 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent600 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent601To700 {
    event601?: PurpleEvent601;
    event602?: PurpleEvent602;
    event603?: PurpleEvent603;
    event604?: PurpleEvent604;
    event605?: PurpleEvent605;
    event606?: PurpleEvent606;
    event607?: PurpleEvent607;
    event608?: PurpleEvent608;
    event609?: PurpleEvent609;
    event610?: PurpleEvent610;
    event611?: PurpleEvent611;
    event612?: PurpleEvent612;
    event613?: PurpleEvent613;
    event614?: PurpleEvent614;
    event615?: PurpleEvent615;
    event616?: PurpleEvent616;
    event617?: PurpleEvent617;
    event618?: PurpleEvent618;
    event619?: PurpleEvent619;
    event620?: PurpleEvent620;
    event621?: PurpleEvent621;
    event622?: PurpleEvent622;
    event623?: PurpleEvent623;
    event624?: PurpleEvent624;
    event625?: PurpleEvent625;
    event626?: PurpleEvent626;
    event627?: PurpleEvent627;
    event628?: PurpleEvent628;
    event629?: PurpleEvent629;
    event630?: PurpleEvent630;
    event631?: PurpleEvent631;
    event632?: PurpleEvent632;
    event633?: PurpleEvent633;
    event634?: PurpleEvent634;
    event635?: PurpleEvent635;
    event636?: PurpleEvent636;
    event637?: PurpleEvent637;
    event638?: PurpleEvent638;
    event639?: PurpleEvent639;
    event640?: PurpleEvent640;
    event641?: PurpleEvent641;
    event642?: PurpleEvent642;
    event643?: PurpleEvent643;
    event644?: PurpleEvent644;
    event645?: PurpleEvent645;
    event646?: PurpleEvent646;
    event647?: PurpleEvent647;
    event648?: PurpleEvent648;
    event649?: PurpleEvent649;
    event650?: PurpleEvent650;
    event651?: PurpleEvent651;
    event652?: PurpleEvent652;
    event653?: PurpleEvent653;
    event654?: PurpleEvent654;
    event655?: PurpleEvent655;
    event656?: PurpleEvent656;
    event657?: PurpleEvent657;
    event658?: PurpleEvent658;
    event659?: PurpleEvent659;
    event660?: PurpleEvent660;
    event661?: PurpleEvent661;
    event662?: PurpleEvent662;
    event663?: PurpleEvent663;
    event664?: PurpleEvent664;
    event665?: PurpleEvent665;
    event666?: PurpleEvent666;
    event667?: PurpleEvent667;
    event668?: PurpleEvent668;
    event669?: PurpleEvent669;
    event670?: PurpleEvent670;
    event671?: PurpleEvent671;
    event672?: PurpleEvent672;
    event673?: PurpleEvent673;
    event674?: PurpleEvent674;
    event675?: PurpleEvent675;
    event676?: PurpleEvent676;
    event677?: PurpleEvent677;
    event678?: PurpleEvent678;
    event679?: PurpleEvent679;
    event680?: PurpleEvent680;
    event681?: PurpleEvent681;
    event682?: PurpleEvent682;
    event683?: PurpleEvent683;
    event684?: PurpleEvent684;
    event685?: PurpleEvent685;
    event686?: PurpleEvent686;
    event687?: PurpleEvent687;
    event688?: PurpleEvent688;
    event689?: PurpleEvent689;
    event690?: PurpleEvent690;
    event691?: PurpleEvent691;
    event692?: PurpleEvent692;
    event693?: PurpleEvent693;
    event694?: PurpleEvent694;
    event695?: PurpleEvent695;
    event696?: PurpleEvent696;
    event697?: PurpleEvent697;
    event698?: PurpleEvent698;
    event699?: PurpleEvent699;
    event700?: PurpleEvent700;
    [property: string]: any;
}

export interface PurpleEvent601 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent602 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent603 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent604 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent605 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent606 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent607 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent608 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent609 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent610 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent611 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent612 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent613 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent614 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent615 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent616 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent617 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent618 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent619 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent620 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent621 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent622 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent623 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent624 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent625 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent626 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent627 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent628 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent629 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent630 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent631 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent632 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent633 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent634 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent635 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent636 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent637 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent638 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent639 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent640 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent641 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent642 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent643 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent644 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent645 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent646 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent647 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent648 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent649 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent650 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent651 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent652 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent653 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent654 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent655 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent656 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent657 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent658 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent659 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent660 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent661 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent662 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent663 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent664 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent665 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent666 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent667 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent668 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent669 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent670 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent671 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent672 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent673 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent674 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent675 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent676 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent677 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent678 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent679 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent680 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent681 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent682 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent683 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent684 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent685 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent686 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent687 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent688 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent689 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent690 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent691 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent692 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent693 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent694 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent695 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent696 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent697 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent698 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent699 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent700 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent701To800 {
    event701?: PurpleEvent701;
    event702?: PurpleEvent702;
    event703?: PurpleEvent703;
    event704?: PurpleEvent704;
    event705?: PurpleEvent705;
    event706?: PurpleEvent706;
    event707?: PurpleEvent707;
    event708?: PurpleEvent708;
    event709?: PurpleEvent709;
    event710?: PurpleEvent710;
    event711?: PurpleEvent711;
    event712?: PurpleEvent712;
    event713?: PurpleEvent713;
    event714?: PurpleEvent714;
    event715?: PurpleEvent715;
    event716?: PurpleEvent716;
    event717?: PurpleEvent717;
    event718?: PurpleEvent718;
    event719?: PurpleEvent719;
    event720?: PurpleEvent720;
    event721?: PurpleEvent721;
    event722?: PurpleEvent722;
    event723?: PurpleEvent723;
    event724?: PurpleEvent724;
    event725?: PurpleEvent725;
    event726?: PurpleEvent726;
    event727?: PurpleEvent727;
    event728?: PurpleEvent728;
    event729?: PurpleEvent729;
    event730?: PurpleEvent730;
    event731?: PurpleEvent731;
    event732?: PurpleEvent732;
    event733?: PurpleEvent733;
    event734?: PurpleEvent734;
    event735?: PurpleEvent735;
    event736?: PurpleEvent736;
    event737?: PurpleEvent737;
    event738?: PurpleEvent738;
    event739?: PurpleEvent739;
    event740?: PurpleEvent740;
    event741?: PurpleEvent741;
    event742?: PurpleEvent742;
    event743?: PurpleEvent743;
    event744?: PurpleEvent744;
    event745?: PurpleEvent745;
    event746?: PurpleEvent746;
    event747?: PurpleEvent747;
    event748?: PurpleEvent748;
    event749?: PurpleEvent749;
    event750?: PurpleEvent750;
    event751?: PurpleEvent751;
    event752?: PurpleEvent752;
    event753?: PurpleEvent753;
    event754?: PurpleEvent754;
    event755?: PurpleEvent755;
    event756?: PurpleEvent756;
    event757?: PurpleEvent757;
    event758?: PurpleEvent758;
    event759?: PurpleEvent759;
    event760?: PurpleEvent760;
    event761?: PurpleEvent761;
    event762?: PurpleEvent762;
    event763?: PurpleEvent763;
    event764?: PurpleEvent764;
    event765?: PurpleEvent765;
    event766?: PurpleEvent766;
    event767?: PurpleEvent767;
    event768?: PurpleEvent768;
    event769?: PurpleEvent769;
    event770?: PurpleEvent770;
    event771?: PurpleEvent771;
    event772?: PurpleEvent772;
    event773?: PurpleEvent773;
    event774?: PurpleEvent774;
    event775?: PurpleEvent775;
    event776?: PurpleEvent776;
    event777?: PurpleEvent777;
    event778?: PurpleEvent778;
    event779?: PurpleEvent779;
    event780?: PurpleEvent780;
    event781?: PurpleEvent781;
    event782?: PurpleEvent782;
    event783?: PurpleEvent783;
    event784?: PurpleEvent784;
    event785?: PurpleEvent785;
    event786?: PurpleEvent786;
    event787?: PurpleEvent787;
    event788?: PurpleEvent788;
    event789?: PurpleEvent789;
    event790?: PurpleEvent790;
    event791?: PurpleEvent791;
    event792?: PurpleEvent792;
    event793?: PurpleEvent793;
    event794?: PurpleEvent794;
    event795?: PurpleEvent795;
    event796?: PurpleEvent796;
    event797?: PurpleEvent797;
    event798?: PurpleEvent798;
    event799?: PurpleEvent799;
    event800?: PurpleEvent800;
    [property: string]: any;
}

export interface PurpleEvent701 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent702 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent703 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent704 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent705 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent706 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent707 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent708 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent709 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent710 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent711 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent712 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent713 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent714 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent715 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent716 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent717 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent718 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent719 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent720 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent721 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent722 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent723 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent724 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent725 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent726 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent727 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent728 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent729 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent730 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent731 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent732 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent733 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent734 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent735 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent736 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent737 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent738 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent739 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent740 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent741 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent742 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent743 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent744 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent745 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent746 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent747 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent748 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent749 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent750 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent751 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent752 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent753 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent754 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent755 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent756 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent757 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent758 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent759 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent760 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent761 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent762 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent763 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent764 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent765 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent766 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent767 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent768 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent769 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent770 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent771 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent772 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent773 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent774 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent775 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent776 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent777 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent778 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent779 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent780 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent781 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent782 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent783 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent784 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent785 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent786 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent787 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent788 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent789 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent790 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent791 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent792 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent793 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent794 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent795 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent796 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent797 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent798 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent799 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent800 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent801To900 {
    event801?: PurpleEvent801;
    event802?: PurpleEvent802;
    event803?: PurpleEvent803;
    event804?: PurpleEvent804;
    event805?: PurpleEvent805;
    event806?: PurpleEvent806;
    event807?: PurpleEvent807;
    event808?: PurpleEvent808;
    event809?: PurpleEvent809;
    event810?: PurpleEvent810;
    event811?: PurpleEvent811;
    event812?: PurpleEvent812;
    event813?: PurpleEvent813;
    event814?: PurpleEvent814;
    event815?: PurpleEvent815;
    event816?: PurpleEvent816;
    event817?: PurpleEvent817;
    event818?: PurpleEvent818;
    event819?: PurpleEvent819;
    event820?: PurpleEvent820;
    event821?: PurpleEvent821;
    event822?: PurpleEvent822;
    event823?: PurpleEvent823;
    event824?: PurpleEvent824;
    event825?: PurpleEvent825;
    event826?: PurpleEvent826;
    event827?: PurpleEvent827;
    event828?: PurpleEvent828;
    event829?: PurpleEvent829;
    event830?: PurpleEvent830;
    event831?: PurpleEvent831;
    event832?: PurpleEvent832;
    event833?: PurpleEvent833;
    event834?: PurpleEvent834;
    event835?: PurpleEvent835;
    event836?: PurpleEvent836;
    event837?: PurpleEvent837;
    event838?: PurpleEvent838;
    event839?: PurpleEvent839;
    event840?: PurpleEvent840;
    event841?: PurpleEvent841;
    event842?: PurpleEvent842;
    event843?: PurpleEvent843;
    event844?: PurpleEvent844;
    event845?: PurpleEvent845;
    event846?: PurpleEvent846;
    event847?: PurpleEvent847;
    event848?: PurpleEvent848;
    event849?: PurpleEvent849;
    event850?: PurpleEvent850;
    event851?: PurpleEvent851;
    event852?: PurpleEvent852;
    event853?: PurpleEvent853;
    event854?: PurpleEvent854;
    event855?: PurpleEvent855;
    event856?: PurpleEvent856;
    event857?: PurpleEvent857;
    event858?: PurpleEvent858;
    event859?: PurpleEvent859;
    event860?: PurpleEvent860;
    event861?: PurpleEvent861;
    event862?: PurpleEvent862;
    event863?: PurpleEvent863;
    event864?: PurpleEvent864;
    event865?: PurpleEvent865;
    event866?: PurpleEvent866;
    event867?: PurpleEvent867;
    event868?: PurpleEvent868;
    event869?: PurpleEvent869;
    event870?: PurpleEvent870;
    event871?: PurpleEvent871;
    event872?: PurpleEvent872;
    event873?: PurpleEvent873;
    event874?: PurpleEvent874;
    event875?: PurpleEvent875;
    event876?: PurpleEvent876;
    event877?: PurpleEvent877;
    event878?: PurpleEvent878;
    event879?: PurpleEvent879;
    event880?: PurpleEvent880;
    event881?: PurpleEvent881;
    event882?: PurpleEvent882;
    event883?: PurpleEvent883;
    event884?: PurpleEvent884;
    event885?: PurpleEvent885;
    event886?: PurpleEvent886;
    event887?: PurpleEvent887;
    event888?: PurpleEvent888;
    event889?: PurpleEvent889;
    event890?: PurpleEvent890;
    event891?: PurpleEvent891;
    event892?: PurpleEvent892;
    event893?: PurpleEvent893;
    event894?: PurpleEvent894;
    event895?: PurpleEvent895;
    event896?: PurpleEvent896;
    event897?: PurpleEvent897;
    event898?: PurpleEvent898;
    event899?: PurpleEvent899;
    event900?: PurpleEvent900;
    [property: string]: any;
}

export interface PurpleEvent801 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent802 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent803 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent804 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent805 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent806 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent807 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent808 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent809 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent810 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent811 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent812 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent813 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent814 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent815 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent816 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent817 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent818 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent819 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent820 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent821 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent822 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent823 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent824 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent825 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent826 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent827 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent828 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent829 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent830 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent831 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent832 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent833 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent834 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent835 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent836 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent837 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent838 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent839 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent840 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent841 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent842 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent843 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent844 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent845 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent846 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent847 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent848 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent849 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent850 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent851 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent852 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent853 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent854 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent855 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent856 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent857 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent858 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent859 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent860 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent861 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent862 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent863 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent864 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent865 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent866 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent867 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent868 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent869 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent870 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent871 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent872 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent873 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent874 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent875 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent876 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent877 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent878 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent879 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent880 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent881 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent882 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent883 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent884 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent885 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent886 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent887 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent888 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent889 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent890 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent891 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent892 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent893 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent894 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent895 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent896 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent897 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent898 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent899 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent900 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent901To1000 {
    event1000?: PurpleEvent1000;
    event901?:  PurpleEvent901;
    event902?:  PurpleEvent902;
    event903?:  PurpleEvent903;
    event904?:  PurpleEvent904;
    event905?:  PurpleEvent905;
    event906?:  PurpleEvent906;
    event907?:  PurpleEvent907;
    event908?:  PurpleEvent908;
    event909?:  PurpleEvent909;
    event910?:  PurpleEvent910;
    event911?:  PurpleEvent911;
    event912?:  PurpleEvent912;
    event913?:  PurpleEvent913;
    event914?:  PurpleEvent914;
    event915?:  PurpleEvent915;
    event916?:  PurpleEvent916;
    event917?:  PurpleEvent917;
    event918?:  PurpleEvent918;
    event919?:  PurpleEvent919;
    event920?:  PurpleEvent920;
    event921?:  PurpleEvent921;
    event922?:  PurpleEvent922;
    event923?:  PurpleEvent923;
    event924?:  PurpleEvent924;
    event925?:  PurpleEvent925;
    event926?:  PurpleEvent926;
    event927?:  PurpleEvent927;
    event928?:  PurpleEvent928;
    event929?:  PurpleEvent929;
    event930?:  PurpleEvent930;
    event931?:  PurpleEvent931;
    event932?:  PurpleEvent932;
    event933?:  PurpleEvent933;
    event934?:  PurpleEvent934;
    event935?:  PurpleEvent935;
    event936?:  PurpleEvent936;
    event937?:  PurpleEvent937;
    event938?:  PurpleEvent938;
    event939?:  PurpleEvent939;
    event940?:  PurpleEvent940;
    event941?:  PurpleEvent941;
    event942?:  PurpleEvent942;
    event943?:  PurpleEvent943;
    event944?:  PurpleEvent944;
    event945?:  PurpleEvent945;
    event946?:  PurpleEvent946;
    event947?:  PurpleEvent947;
    event948?:  PurpleEvent948;
    event949?:  PurpleEvent949;
    event950?:  PurpleEvent950;
    event951?:  PurpleEvent951;
    event952?:  PurpleEvent952;
    event953?:  PurpleEvent953;
    event954?:  PurpleEvent954;
    event955?:  PurpleEvent955;
    event956?:  PurpleEvent956;
    event957?:  PurpleEvent957;
    event958?:  PurpleEvent958;
    event959?:  PurpleEvent959;
    event960?:  PurpleEvent960;
    event961?:  PurpleEvent961;
    event962?:  PurpleEvent962;
    event963?:  PurpleEvent963;
    event964?:  PurpleEvent964;
    event965?:  PurpleEvent965;
    event966?:  PurpleEvent966;
    event967?:  PurpleEvent967;
    event968?:  PurpleEvent968;
    event969?:  PurpleEvent969;
    event970?:  PurpleEvent970;
    event971?:  PurpleEvent971;
    event972?:  PurpleEvent972;
    event973?:  PurpleEvent973;
    event974?:  PurpleEvent974;
    event975?:  PurpleEvent975;
    event976?:  PurpleEvent976;
    event977?:  PurpleEvent977;
    event978?:  PurpleEvent978;
    event979?:  PurpleEvent979;
    event980?:  PurpleEvent980;
    event981?:  PurpleEvent981;
    event982?:  PurpleEvent982;
    event983?:  PurpleEvent983;
    event984?:  PurpleEvent984;
    event985?:  PurpleEvent985;
    event986?:  PurpleEvent986;
    event987?:  PurpleEvent987;
    event988?:  PurpleEvent988;
    event989?:  PurpleEvent989;
    event990?:  PurpleEvent990;
    event991?:  PurpleEvent991;
    event992?:  PurpleEvent992;
    event993?:  PurpleEvent993;
    event994?:  PurpleEvent994;
    event995?:  PurpleEvent995;
    event996?:  PurpleEvent996;
    event997?:  PurpleEvent997;
    event998?:  PurpleEvent998;
    event999?:  PurpleEvent999;
    [property: string]: any;
}

export interface PurpleEvent1000 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent901 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent902 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent903 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent904 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent905 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent906 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent907 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent908 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent909 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent910 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent911 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent912 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent913 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent914 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent915 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent916 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent917 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent918 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent919 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent920 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent921 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent922 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent923 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent924 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent925 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent926 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent927 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent928 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent929 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent930 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent931 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent932 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent933 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent934 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent935 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent936 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent937 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent938 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent939 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent940 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent941 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent942 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent943 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent944 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent945 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent946 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent947 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent948 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent949 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent950 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent951 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent952 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent953 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent954 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent955 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent956 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent957 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent958 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent959 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent960 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent961 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent962 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent963 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent964 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent965 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent966 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent967 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent968 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent969 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent970 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent971 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent972 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent973 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent974 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent975 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent976 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent977 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent978 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent979 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent980 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent981 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent982 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent983 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent984 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent985 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent986 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent987 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent988 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent989 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent990 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent991 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent992 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent993 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent994 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent995 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent996 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent997 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent998 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleEvent999 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Session {
    depth?:     any;
    num?:       any;
    search?:    SessionSearch;
    timestamp?: any;
    web?:       SessionWeb;
    [property: string]: any;
}

export interface SessionSearch {
    isPaid?:         boolean;
    keywords?:       string;
    pageDepth?:      any;
    position?:       any;
    searchEngine?:   string;
    searchEngineID?: string;
    slot?:           string;
    [property: string]: any;
}

export interface SessionWeb {
    webInteraction?: PurpleWebInteraction;
    webPageDetails?: PurpleWebPageDetails;
    webReferrer?:    PurpleWebReferrer;
    [property: string]: any;
}

export interface PurpleWebInteraction {
    linkClicks?: FluffyLinkClicks;
    name?:       string;
    region?:     string;
    type?:       string;
    URL?:        string;
    [property: string]: any;
}

export interface FluffyLinkClicks {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleWebPageDetails {
    isErrorPage?: boolean;
    isHomePage?:  boolean;
    name?:        string;
    pageViews?:   FluffyPageViews;
    server?:      string;
    siteSection?: string;
    URL?:         string;
    viewName?:    string;
    [property: string]: any;
}

export interface FluffyPageViews {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PurpleWebReferrer {
    type?: string;
    URL?:  string;
    [property: string]: any;
}

export interface PurpleDecisioning {
    propositionAction?:    PropositionAction;
    propositionEventType?: PropositionEventType;
    propositions?:         Proposition[];
    [property: string]: any;
}

export interface PropositionAction {
    id?:    string;
    label?: string;
    [property: string]: any;
}

export interface PropositionEventType {
    dismiss?:     any;
    display?:     any;
    interact?:    any;
    send?:        any;
    trigger?:     any;
    unsubscribe?: any;
    [property: string]: any;
}

export interface Proposition {
    id?:           string;
    items?:        Item[];
    scope?:        string;
    scopeDetails?: ScopeDetails;
    [property: string]: any;
}

export interface Item {
    _experience?:     ItemExperience;
    _repo?:           ItemRepo;
    characteristics?: any;
    id?:              string;
    name?:            string;
    optionContent?:   OptionContent;
    score?:           number;
    tags?:            any;
    [property: string]: any;
}

export interface ItemExperience {
    decisioning?: FluffyDecisioning;
    [property: string]: any;
}

export interface FluffyDecisioning {
    propositionsProfile?: PropositionsProfile;
    propositionsTotal?:   PropositionsTotal;
    [property: string]: any;
}

export interface PropositionsProfile {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PropositionsTotal {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface ItemRepo {
    etag?: string;
    [property: string]: any;
}

export interface OptionContent {
    _dc?:         OptionContentDc;
    _repo?:       OptionContentRepo;
    _type?:       string;
    content?:     string;
    deliveryURL?: string;
    linkURL?:     string;
    [property: string]: any;
}

export interface OptionContentDc {
    format?:   string;
    language?: any;
    [property: string]: any;
}

export interface OptionContentRepo {
    id?:           string;
    name?:         string;
    repositoryID?: string;
    resolveURL?:   string;
    [property: string]: any;
}

export interface ScopeDetails {
    activity?:                Activity;
    characteristics?:         any;
    correlationID?:           string;
    decisionProvider?:        string;
    experience?:              Experience;
    id?:                      string;
    interactionMeasurements?: InteractionMeasurement[];
    placement?:               Placement;
    strategies?:              Strategy[];
    [property: string]: any;
}

export interface Activity {
    _repo?:     ActivityRepo;
    endTime?:   any;
    fallback?:  string;
    id?:        string;
    name?:      string;
    startTime?: any;
    [property: string]: any;
}

export interface ActivityRepo {
    etag?: string;
    [property: string]: any;
}

export interface Experience {
    id?: string;
    [property: string]: any;
}

export interface InteractionMeasurement {
    observation?: Observation;
    outcome?:     Outcome;
    [property: string]: any;
}

export interface Observation {
    field?:   string;
    mapping?: string;
    value?:   string;
    [property: string]: any;
}

export interface Outcome {
    _id?:   string;
    field?: string;
    [property: string]: any;
}

export interface Placement {
    _repo?:     PlacementRepo;
    channelID?: string;
    id?:        string;
    name?:      string;
    [property: string]: any;
}

export interface PlacementRepo {
    etag?: string;
    [property: string]: any;
}

export interface Strategy {
    algorithmID?: string;
    step?:        string;
    strategyID?:  string;
    trafficType?: string;
    treatmentID?: string;
    [property: string]: any;
}

export interface Implementations {
    _experience?: ImplementationsExperience;
    [property: string]: any;
}

export interface ImplementationsExperience {
    adcloud?:   PurpleAdcloud;
    analytics?: FluffyAnalytics;
    idservice?: Idservice;
    target?:    PurpleTarget;
    [property: string]: any;
}

export interface PurpleAdcloud {
    implementation?: AdcloudImplementation;
    [property: string]: any;
}

export interface AdcloudImplementation {
    environment?: string;
    name?:        string;
    version?:     string;
    [property: string]: any;
}

export interface FluffyAnalytics {
    implementation?: AnalyticsImplementation;
    [property: string]: any;
}

export interface AnalyticsImplementation {
    environment?: string;
    name?:        string;
    version?:     string;
    [property: string]: any;
}

export interface Idservice {
    implementation?: IdserviceImplementation;
    [property: string]: any;
}

export interface IdserviceImplementation {
    environment?: string;
    name?:        string;
    version?:     string;
    [property: string]: any;
}

export interface PurpleTarget {
    implementation?: TargetImplementation;
    [property: string]: any;
}

export interface TargetImplementation {
    environment?: string;
    name?:        string;
    version?:     string;
    [property: string]: any;
}

export interface Profile {
    originDatasetID?: string;
    [property: string]: any;
}

export interface FluffyTarget {
    supplementalDataID?: string;
    [property: string]: any;
}

export interface Advertising {
    adAssetReference?:   AdAssetReference;
    adAssetViewDetails?: AdAssetViewDetails;
    adViewability?:      AdViewability;
    clicks?:             AdvertisingClicks;
    completes?:          AdvertisingCompletes;
    conversions?:        Conversions;
    downloadedPlayback?: boolean;
    federated?:          AdvertisingFederated;
    firstQuartiles?:     FirstQuartiles;
    impressions?:        AdvertisingImpressions;
    midpoints?:          Midpoints;
    starts?:             AdvertisingStarts;
    thirdQuartiles?:     ThirdQuartiles;
    timePlayed?:         AdvertisingTimePlayed;
    [property: string]: any;
}

export interface AdAssetReference {
    _dc?:         AdAssetReferenceDc;
    _id?:         string;
    _xmpDM?:      AdAssetReferenceXmpDM;
    advertiser?:  string;
    campaign?:    string;
    creativeID?:  string;
    creativeURL?: string;
    placementID?: string;
    siteID?:      string;
    [property: string]: any;
}

export interface AdAssetReferenceDc {
    title?: string;
    [property: string]: any;
}

export interface AdAssetReferenceXmpDM {
    duration?: any;
    [property: string]: any;
}

export interface AdAssetViewDetails {
    adBreak?:    AdBreak;
    index?:      any;
    playerName?: string;
    [property: string]: any;
}

export interface AdBreak {
    _dc?:    AdBreakDc;
    _id?:    string;
    offset?: any;
    [property: string]: any;
}

export interface AdBreakDc {
    title?: string;
    [property: string]: any;
}

export interface AdViewability {
    activeWindow?:                   boolean;
    adHeight?:                       any;
    adUnitDepth?:                    any;
    adWidth?:                        any;
    implementationDetails?:          AdViewabilityImplementationDetails;
    measuredAdNotVisible?:           MeasuredAdNotVisible;
    measuredMuted?:                  MeasuredMuted;
    measuredWindowInactive?:         MeasuredWindowInactive;
    measurementEligible?:            boolean;
    percentViewable?:                any;
    playerVolume?:                   any;
    unmeasurableIframe?:             UnmeasurableIframe;
    unmeasurableOther?:              UnmeasurableOther;
    viewabilityEligibleImpressions?: ViewabilityEligibleImpressions;
    viewable?:                       boolean;
    viewableCompletes?:              ViewableCompletes;
    viewableFirstQuartiles?:         ViewableFirstQuartiles;
    viewableImpressions?:            ViewableImpressions;
    viewableMidpoints?:              ViewableMidpoints;
    viewableThirdQuartiles?:         ViewableThirdQuartiles;
    viewportHeight?:                 any;
    viewportWidth?:                  any;
    [property: string]: any;
}

export interface AdViewabilityImplementationDetails {
    environment?: string;
    name?:        string;
    version?:     string;
    [property: string]: any;
}

export interface MeasuredAdNotVisible {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface MeasuredMuted {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface MeasuredWindowInactive {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface UnmeasurableIframe {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface UnmeasurableOther {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface ViewabilityEligibleImpressions {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface ViewableCompletes {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface ViewableFirstQuartiles {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface ViewableImpressions {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface ViewableMidpoints {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface ViewableThirdQuartiles {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface AdvertisingClicks {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface AdvertisingCompletes {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Conversions {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface AdvertisingFederated {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FirstQuartiles {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface AdvertisingImpressions {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Midpoints {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface AdvertisingStarts {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface ThirdQuartiles {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface AdvertisingTimePlayed {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Application {
    _dc?:               ApplicationDc;
    applicationCloses?: ApplicationCloses;
    closeType?:         string;
    crashes?:           Crashes;
    featureUsages?:     FeatureUsages;
    firstLaunches?:     FirstLaunches;
    id?:                string;
    installs?:          Installs;
    isClose?:           boolean;
    isInstall?:         boolean;
    isLaunch?:          boolean;
    isUpgrade?:         boolean;
    launches?:          Launches;
    name?:              string;
    sessionLength?:     any;
    upgrades?:          Upgrades;
    userPerspective?:   string;
    version?:           string;
    [property: string]: any;
}

export interface ApplicationDc {
    language?: string;
    [property: string]: any;
}

export interface ApplicationCloses {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Crashes {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FeatureUsages {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FirstLaunches {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Installs {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Launches {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Upgrades {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Channel {
    _id?:           string;
    _type?:         string;
    contentTypes?:  any;
    locationTypes?: any;
    mediaAction?:   string;
    mediaType?:     string;
    metricTypes?:   any;
    mode?:          string;
    typeAtSource?:  string;
    [property: string]: any;
}

export interface Commerce {
    cart?:                    Cart;
    cartAbandons?:            CartAbandons;
    checkouts?:               Checkouts;
    instantPurchase?:         InstantPurchase;
    inStorePurchase?:         InStorePurchase;
    order?:                   Order;
    productListAdds?:         ProductListAdds;
    productListOpens?:        ProductListOpens;
    productListRemovals?:     ProductListRemovals;
    productListReopens?:      ProductListReopens;
    productListViews?:        ProductListViews;
    productViews?:            ProductViews;
    promotionID?:             string;
    purchases?:               Purchases;
    requisitionList?:         RequisitionList;
    requisitionListAdds?:     RequisitionListAdds;
    requisitionListOpens?:    RequisitionListOpens;
    requisitionListRemovals?: RequisitionListRemovals;
    saveForLaters?:           SaveForLaters;
    shipping?:                Shipping;
    [property: string]: any;
}

export interface Cart {
    cartID?:     string;
    cartSource?: string;
    [property: string]: any;
}

export interface CartAbandons {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Checkouts {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface InStorePurchase {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface InstantPurchase {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Order {
    cancelDate?:          any;
    createdDate?:         any;
    currencyCode?:        string;
    discountAmount?:      number;
    lastUpdatedDate?:     any;
    orderType?:           string;
    payments?:            Payment[];
    priceTotal?:          number;
    purchaseID?:          string;
    purchaseOrderNumber?: string;
    refunds?:             Refund[];
    taxAmount?:           number;
    [property: string]: any;
}

export interface Payment {
    currencyCode?:  string;
    paymentAmount?: number;
    paymentType?:   string;
    transactionID?: string;
    [property: string]: any;
}

export interface Refund {
    currencyCode?:      string;
    refundAmount?:      number;
    refundPaymentType?: string;
    refundReason?:      string;
    transactionID?:     string;
    [property: string]: any;
}

export interface ProductListAdds {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface ProductListOpens {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface ProductListRemovals {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface ProductListReopens {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface ProductListViews {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface ProductViews {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Purchases {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface RequisitionList {
    description?: string;
    ID?:          string;
    name?:        string;
    [property: string]: any;
}

export interface RequisitionListAdds {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface RequisitionListOpens {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface RequisitionListRemovals {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface SaveForLaters {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Shipping {
    address?:             Address;
    currencyCode?:        string;
    shipDate?:            any;
    shippingAmount?:      number;
    shippingDestination?: string;
    shippingMethod?:      string;
    trackingNumber?:      number;
    trackingURL?:         string;
    [property: string]: any;
}

export interface Address {
    _id?:                      string;
    _repo?:                    AddressRepo;
    _schema?:                  AddressSchema;
    city?:                     string;
    country?:                  string;
    countryCode?:              string;
    createdByBatchID?:         string;
    dmaID?:                    any;
    label?:                    string;
    lastVerifiedDate?:         string;
    modifiedByBatchID?:        string;
    msaID?:                    any;
    postalCode?:               string;
    postOfficeBox?:            string;
    primary?:                  boolean;
    region?:                   string;
    repositoryCreatedBy?:      string;
    repositoryLastModifiedBy?: string;
    state?:                    string;
    stateProvince?:            string;
    status?:                   string;
    statusReason?:             string;
    street1?:                  string;
    street2?:                  string;
    street3?:                  string;
    street4?:                  string;
    [property: string]: any;
}

export interface AddressRepo {
    createDate?: any;
    modifyDate?: any;
    [property: string]: any;
}

export interface AddressSchema {
    description?: string;
    elevation?:   number;
    latitude?:    number;
    longitude?:   number;
    [property: string]: any;
}

export interface DataSource {
    _id?:  string;
    code?: string;
    tags?: any;
    [property: string]: any;
}

export interface Device {
    colorDepth?:              any;
    isBackgroundPushEnabled?: boolean;
    isLocationEnabled?:       boolean;
    isPushOptIn?:             boolean;
    locationPermission?:      string;
    manufacturer?:            string;
    model?:                   string;
    modelNumber?:             string;
    screenHeight?:            any;
    screenOrientation?:       string;
    screenWidth?:             any;
    type?:                    string;
    typeID?:                  string;
    typeIDService?:           string;
    [property: string]: any;
}

export interface DirectMarketing {
    bounces?:               Bounces;
    clicks?:                DirectMarketingClicks;
    customActions?:         CustomActions;
    emailDelivered?:        EmailDelivered;
    emailVisitorID?:        string;
    excludes?:              Excludes;
    hashedEmail?:           string;
    impressions?:           DirectMarketingImpressions;
    marketingSubscription?: MarketingSubscription;
    messageID?:             string;
    mirrorPages?:           MirrorPages;
    nonDeliverables?:       NonDeliverables;
    notSent?:               NotSent;
    offerOpens?:            OfferOpens;
    opens?:                 Opens;
    sends?:                 Sends;
    unsubscribeReason?:     string;
    unsubscriptions?:       Unsubscriptions;
    userComplaints?:        UserComplaints;
    [property: string]: any;
}

export interface Bounces {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface DirectMarketingClicks {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface CustomActions {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface EmailDelivered {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Excludes {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface DirectMarketingImpressions {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface MarketingSubscription {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface MirrorPages {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface NonDeliverables {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface NotSent {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface OfferOpens {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Opens {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Sends {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Unsubscriptions {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface UserComplaints {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface EndUserIDs {
    _experience?: EndUserIDsExperience;
    [property: string]: any;
}

export interface EndUserIDsExperience {
    aacustomid?:    Aacustomid;
    aaid?:          Aaid;
    acid?:          Acid;
    adcloud?:       FluffyAdcloud;
    emailid?:       Emailid;
    mcid?:          Mcid;
    phonenumberid?: Phonenumberid;
    tntid?:         Tntid;
    [property: string]: any;
}

export interface Aacustomid {
    authenticatedState?: string;
    id?:                 string;
    namespace?:          AacustomidNamespace;
    primary?:            boolean;
    xid?:                string;
    [property: string]: any;
}

export interface AacustomidNamespace {
    code?: string;
    [property: string]: any;
}

export interface Aaid {
    authenticatedState?: string;
    id?:                 string;
    namespace?:          AaidNamespace;
    primary?:            boolean;
    xid?:                string;
    [property: string]: any;
}

export interface AaidNamespace {
    code?: string;
    [property: string]: any;
}

export interface Acid {
    authenticatedState?: string;
    id?:                 string;
    namespace?:          AcidNamespace;
    primary?:            boolean;
    xid?:                string;
    [property: string]: any;
}

export interface AcidNamespace {
    code?: string;
    [property: string]: any;
}

export interface FluffyAdcloud {
    authenticatedState?: string;
    id?:                 string;
    namespace?:          AdcloudNamespace;
    primary?:            boolean;
    xid?:                string;
    [property: string]: any;
}

export interface AdcloudNamespace {
    code?: string;
    [property: string]: any;
}

export interface Emailid {
    authenticatedState?: string;
    id?:                 string;
    namespace?:          EmailidNamespace;
    primary?:            boolean;
    xid?:                string;
    [property: string]: any;
}

export interface EmailidNamespace {
    code?: string;
    [property: string]: any;
}

export interface Mcid {
    authenticatedState?: string;
    id?:                 string;
    namespace?:          McidNamespace;
    primary?:            boolean;
    xid?:                string;
    [property: string]: any;
}

export interface McidNamespace {
    code?: string;
    [property: string]: any;
}

export interface Phonenumberid {
    authenticatedState?: string;
    id?:                 string;
    namespace?:          PhonenumberidNamespace;
    primary?:            boolean;
    xid?:                string;
    [property: string]: any;
}

export interface PhonenumberidNamespace {
    code?: string;
    [property: string]: any;
}

export interface Tntid {
    authenticatedState?: string;
    id?:                 string;
    namespace?:          TntidNamespace;
    primary?:            boolean;
    xid?:                string;
    [property: string]: any;
}

export interface TntidNamespace {
    code?: string;
    [property: string]: any;
}

export interface SchemaEnvironment {
    _dc?:                    EnvironmentDc;
    browserDetails?:         BrowserDetails;
    carrier?:                string;
    colorDepth?:             any;
    connectionType?:         string;
    domain?:                 string;
    duration?:               any;
    ipV4?:                   string;
    ipV6?:                   string;
    ISP?:                    string;
    operatingSystem?:        string;
    operatingSystemVendor?:  string;
    operatingSystemVersion?: string;
    previousScreen?:         string;
    type?:                   string;
    viewedScreen?:           string;
    viewportHeight?:         any;
    viewportWidth?:          any;
    [property: string]: any;
}

export interface EnvironmentDc {
    language?: string;
    [property: string]: any;
}

export interface BrowserDetails {
    acceptLanguage?:           string;
    cookiesEnabled?:           boolean;
    javaEnabled?:              boolean;
    javaScriptEnabled?:        boolean;
    javaScriptVersion?:        string;
    javaVersion?:              string;
    name?:                     string;
    quicktimeVersion?:         string;
    thirdPartyCookiesEnabled?: boolean;
    userAgent?:                string;
    userAgentClientHints?:     UserAgentClientHints;
    vendor?:                   string;
    version?:                  string;
    viewportHeight?:           any;
    viewportWidth?:            any;
    [property: string]: any;
}

export interface UserAgentClientHints {
    architecture?:    string;
    bitness?:         string;
    brands?:          any;
    mobile?:          boolean;
    model?:           string;
    platform?:        string;
    platformVersion?: string;
    wow64?:           boolean;
    [property: string]: any;
}

export interface SchemaImplementationDetails {
    environment?: string;
    name?:        string;
    version?:     string;
    [property: string]: any;
}

export interface Marketing {
    campaignGroup?: string;
    campaignName?:  string;
    trackingCode?:  string;
    [property: string]: any;
}

export interface Media {
    mediaTimed?: MediaTimed;
    [property: string]: any;
}

export interface MediaTimed {
    adCount?:                 AdCount;
    averageMinuteAudience?:   AverageMinuteAudience;
    chapterCount?:            ChapterCount;
    completes?:               MediaTimedCompletes;
    dayPart?:                 string;
    estimatedStreams?:        EstimatedStreams;
    federated?:               MediaTimedFederated;
    idp?:                     string;
    impressions?:             MediaTimedImpressions;
    mediaAuth?:               string;
    mediaChapter?:            MediaChapter;
    mediaSegmentViews?:       MediaSegmentViews;
    pauseImpactedStreams?:    PauseImpactedStreams;
    pauses?:                  Pauses;
    pauseTime?:               PauseTime;
    playhead?:                any;
    primaryAssetReference?:   PrimaryAssetReference;
    primaryAssetViewDetails?: PrimaryAssetViewDetails;
    progress10?:              Progress10;
    progress25?:              Progress25;
    progress50?:              Progress50;
    progress75?:              Progress75;
    progress95?:              Progress95;
    publisher?:               string;
    radioStation?:            string;
    recordLabel?:             string;
    resumes?:                 Resumes;
    starts?:                  MediaTimedStarts;
    timePlayed?:              MediaTimedTimePlayed;
    totalTimePlayed?:         TotalTimePlayed;
    uniqueTimePlayed?:        UniqueTimePlayed;
    [property: string]: any;
}

export interface AdCount {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface AverageMinuteAudience {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface ChapterCount {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface MediaTimedCompletes {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface EstimatedStreams {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface MediaTimedFederated {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface MediaTimedImpressions {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface MediaChapter {
    chapterAssetReference?:   ChapterAssetReference;
    chapterAssetViewDetails?: ChapterAssetViewDetails;
    completes?:               MediaChapterCompletes;
    downloadedPlayback?:      boolean;
    federated?:               MediaChapterFederated;
    impressions?:             MediaChapterImpressions;
    timePlayed?:              MediaChapterTimePlayed;
    [property: string]: any;
}

export interface ChapterAssetReference {
    _dc?:    ChapterAssetReferenceDc;
    _id?:    string;
    _xmpDM?: ChapterAssetReferenceXmpDM;
    [property: string]: any;
}

export interface ChapterAssetReferenceDc {
    title?: string;
    [property: string]: any;
}

export interface ChapterAssetReferenceXmpDM {
    duration?: any;
    [property: string]: any;
}

export interface ChapterAssetViewDetails {
    index?:  any;
    offset?: any;
    [property: string]: any;
}

export interface MediaChapterCompletes {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface MediaChapterFederated {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface MediaChapterImpressions {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface MediaChapterTimePlayed {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface MediaSegmentViews {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PauseImpactedStreams {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PauseTime {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Pauses {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PrimaryAssetReference {
    _dc?:          PrimaryAssetReferenceDc;
    _id?:          string;
    _id3?:         { [key: string]: any };
    _iptc4xmpExt?: PrimaryAssetReferenceIptc4XmpEXT;
    _xmpDM?:       PrimaryAssetReferenceXmpDM;
    Audio?:        PrimaryAssetReferenceAudio;
    firstAirDate?: string;
    showType?:     string;
    streamFormat?: string;
    streamType?:   string;
    [property: string]: any;
}

export interface PrimaryAssetReferenceAudio {
    _dc?:    AudioDc;
    _id3?:   PurpleId3;
    _xmpDM?: AudioXmpDM;
    [property: string]: any;
}

export interface AudioDc {
    creator?: string;
    [property: string]: any;
}

export interface PurpleId3 {
    Audio?: Id3Audio;
    [property: string]: any;
}

export interface Id3Audio {
    _id3?: FluffyId3;
    [property: string]: any;
}

export interface FluffyId3 {
    TPUB?: string;
    TRSN?: string;
    [property: string]: any;
}

export interface AudioXmpDM {
    album?:  string;
    artist?: string;
    [property: string]: any;
}

export interface PrimaryAssetReferenceDc {
    creator?: string;
    title?:   string;
    [property: string]: any;
}

export interface PrimaryAssetReferenceIptc4XmpEXT {
    Creator?: Creator[];
    Episode?: Episode;
    Genre?:   any;
    Rating?:  Rating[];
    Season?:  Season;
    Series?:  Series;
    [property: string]: any;
}

export interface Creator {
    _iptc4xmpExt?: CreatorIptc4XmpEXT;
    [property: string]: any;
}

export interface CreatorIptc4XmpEXT {
    Name?: string;
    [property: string]: any;
}

export interface Episode {
    _iptc4xmpExt?: EpisodeIptc4XmpEXT;
    [property: string]: any;
}

export interface EpisodeIptc4XmpEXT {
    Identifier?: string;
    Name?:       string;
    Number?:     number;
    [property: string]: any;
}

export interface Rating {
    _iptc4xmpExt?: RatingIptc4XmpEXT;
    [property: string]: any;
}

export interface RatingIptc4XmpEXT {
    RatingSourceLink?: string;
    RatingValue?:      string;
    [property: string]: any;
}

export interface Season {
    _iptc4xmpExt?: SeasonIptc4XmpEXT;
    [property: string]: any;
}

export interface SeasonIptc4XmpEXT {
    Identifier?: string;
    Name?:       string;
    Number?:     number;
    [property: string]: any;
}

export interface Series {
    _iptc4xmpExt?: SeriesIptc4XmpEXT;
    [property: string]: any;
}

export interface SeriesIptc4XmpEXT {
    Identifier?: string;
    Name?:       string;
    [property: string]: any;
}

export interface PrimaryAssetReferenceXmpDM {
    duration?:    any;
    releaseDate?: string;
    [property: string]: any;
}

export interface PrimaryAssetViewDetails {
    _id?:                  string;
    adLoadType?:           string;
    broadcastChannel?:     string;
    broadcastContentType?: string;
    broadcastNetwork?:     string;
    closeCaption?:         CloseCaption;
    downloadedPlayback?:   boolean;
    fullScreen?:           FullScreen;
    inFocus?:              InFocus;
    mute?:                 Mute;
    path?:                 string;
    pictureInPicture?:     PictureInPicture;
    playerName?:           string;
    playerSDKVersion?:     PlayerSDKVersion;
    qoe?:                  Qoe;
    sessionTimeout?:       any;
    sourceFeed?:           string;
    statesEnd?:            any;
    statesStart?:          any;
    vhlVersion?:           string;
    videoSegment?:         string;
    [property: string]: any;
}

export interface CloseCaption {
    playerStateCount?: any;
    playerStateSet?:   boolean;
    playerStateTime?:  any;
    [property: string]: any;
}

export interface FullScreen {
    playerStateCount?: any;
    playerStateSet?:   boolean;
    playerStateTime?:  any;
    [property: string]: any;
}

export interface InFocus {
    playerStateCount?: any;
    playerStateSet?:   boolean;
    playerStateTime?:  any;
    [property: string]: any;
}

export interface Mute {
    playerStateCount?: any;
    playerStateSet?:   boolean;
    playerStateTime?:  any;
    [property: string]: any;
}

export interface PictureInPicture {
    playerStateCount?: any;
    playerStateSet?:   boolean;
    playerStateTime?:  any;
    [property: string]: any;
}

export interface PlayerSDKVersion {
    environment?: string;
    name?:        string;
    version?:     string;
    [property: string]: any;
}

export interface Qoe {
    bitrateAverage?:               BitrateAverage;
    bitrateAverageBucket?:         string;
    bitrateChangeImpactedStreams?: BitrateChangeImpactedStreams;
    bitrateChanges?:               BitrateChanges;
    bufferImpactedStreams?:        BufferImpactedStreams;
    buffers?:                      Buffers;
    bufferTime?:                   BufferTime;
    dropBeforeStarts?:             DropBeforeStarts;
    droppedFrameImpactedStreams?:  DroppedFrameImpactedStreams;
    droppedFrames?:                DroppedFrames;
    error?:                        Error;
    errorImpactedStreams?:         ErrorImpactedStreams;
    errors?:                       Errors;
    externalSdkErrors?:            any;
    mediaSdkErrors?:               any;
    playerSdkErrors?:              any;
    stallingImpactedStreams?:      StallingImpactedStreams;
    stalls?:                       Stalls;
    stallTime?:                    StallTime;
    timeToStart?:                  TimeToStart;
    [property: string]: any;
}

export interface BitrateAverage {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface BitrateChangeImpactedStreams {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface BitrateChanges {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface BufferImpactedStreams {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface BufferTime {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Buffers {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface DropBeforeStarts {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface DroppedFrameImpactedStreams {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface DroppedFrames {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Error {
    errorID?:     string;
    errorSource?: string;
    [property: string]: any;
}

export interface ErrorImpactedStreams {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Errors {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface StallTime {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface StallingImpactedStreams {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Stalls {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface TimeToStart {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Progress10 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Progress25 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Progress50 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Progress75 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Progress95 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface Resumes {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface MediaTimedStarts {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface MediaTimedTimePlayed {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface TotalTimePlayed {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface UniqueTimePlayed {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PlaceContext {
    activePOIs?:          ActivePOIs[];
    geo?:                 Geo;
    ianaTimezone?:        string;
    localTime?:           any;
    localTimezoneOffset?: any;
    POIinteraction?:      POIinteraction;
    [property: string]: any;
}

export interface POIinteraction {
    poiDetail?:  PoiDetail;
    poiEntries?: PoiEntries;
    poiExits?:   PoiExits;
    [property: string]: any;
}

export interface PoiDetail {
    beaconInteractionDetails?: PoiDetailBeaconInteractionDetails;
    category?:                 string;
    distanceToPOICenter?:      number;
    geoInteractionDetails?:    PoiDetailGeoInteractionDetails;
    locatingType?:             string;
    metadata?:                 PoiDetailMetadata;
    name?:                     string;
    poiID?:                    string;
    type?:                     string;
    [property: string]: any;
}

export interface PoiDetailBeaconInteractionDetails {
    beaconMajor?:   number;
    beaconMinor?:   number;
    proximity?:     string;
    proximityUUID?: string;
    [property: string]: any;
}

export interface PoiDetailGeoInteractionDetails {
    deviceGeoAccuracy?: number;
    distanceToCenter?:  number;
    geoShape?:          PurpleGeoShape;
    [property: string]: any;
}

export interface PurpleGeoShape {
    _id?:     string;
    _schema?: PurpleSchema;
    ceiling?: number;
    [property: string]: any;
}

export interface PurpleSchema {
    box?:         PurpleBox[];
    circle?:      PurpleCircle;
    description?: string;
    elevation?:   number;
    polygon?:     PurplePolygon[];
    [property: string]: any;
}

export interface PurpleBox {
    _id?:     string;
    _schema?: FluffySchema;
    [property: string]: any;
}

export interface FluffySchema {
    description?: string;
    elevation?:   number;
    latitude?:    number;
    longitude?:   number;
    [property: string]: any;
}

export interface PurpleCircle {
    _id?:     string;
    _schema?: TentacledSchema;
    [property: string]: any;
}

export interface TentacledSchema {
    coordinates?: PurpleCoordinates;
    description?: string;
    radius?:      number;
    [property: string]: any;
}

export interface PurpleCoordinates {
    _id?:     string;
    _schema?: StickySchema;
    [property: string]: any;
}

export interface StickySchema {
    description?: string;
    elevation?:   number;
    latitude?:    number;
    longitude?:   number;
    [property: string]: any;
}

export interface PurplePolygon {
    _id?:     string;
    _schema?: IndigoSchema;
    [property: string]: any;
}

export interface IndigoSchema {
    description?: string;
    elevation?:   number;
    latitude?:    number;
    longitude?:   number;
    [property: string]: any;
}

export interface PoiDetailMetadata {
    list?: PurpleList[];
    [property: string]: any;
}

export interface PurpleList {
    key?:   string;
    value?: string;
    [property: string]: any;
}

export interface PoiEntries {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface PoiExits {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface ActivePOIs {
    beaconInteractionDetails?: ActivePOIsBeaconInteractionDetails;
    category?:                 string;
    distanceToPOICenter?:      number;
    geoInteractionDetails?:    ActivePOIsGeoInteractionDetails;
    locatingType?:             string;
    metadata?:                 ActivePOIsMetadata;
    name?:                     string;
    poiID?:                    string;
    type?:                     string;
    [property: string]: any;
}

export interface ActivePOIsBeaconInteractionDetails {
    beaconMajor?:   number;
    beaconMinor?:   number;
    proximity?:     string;
    proximityUUID?: string;
    [property: string]: any;
}

export interface ActivePOIsGeoInteractionDetails {
    deviceGeoAccuracy?: number;
    distanceToCenter?:  number;
    geoShape?:          FluffyGeoShape;
    [property: string]: any;
}

export interface FluffyGeoShape {
    _id?:     string;
    _schema?: IndecentSchema;
    ceiling?: number;
    [property: string]: any;
}

export interface IndecentSchema {
    box?:         FluffyBox[];
    circle?:      FluffyCircle;
    description?: string;
    elevation?:   number;
    polygon?:     FluffyPolygon[];
    [property: string]: any;
}

export interface FluffyBox {
    _id?:     string;
    _schema?: HilariousSchema;
    [property: string]: any;
}

export interface HilariousSchema {
    description?: string;
    elevation?:   number;
    latitude?:    number;
    longitude?:   number;
    [property: string]: any;
}

export interface FluffyCircle {
    _id?:     string;
    _schema?: AmbitiousSchema;
    [property: string]: any;
}

export interface AmbitiousSchema {
    coordinates?: FluffyCoordinates;
    description?: string;
    radius?:      number;
    [property: string]: any;
}

export interface FluffyCoordinates {
    _id?:     string;
    _schema?: CunningSchema;
    [property: string]: any;
}

export interface CunningSchema {
    description?: string;
    elevation?:   number;
    latitude?:    number;
    longitude?:   number;
    [property: string]: any;
}

export interface FluffyPolygon {
    _id?:     string;
    _schema?: MagentaSchema;
    [property: string]: any;
}

export interface MagentaSchema {
    description?: string;
    elevation?:   number;
    latitude?:    number;
    longitude?:   number;
    [property: string]: any;
}

export interface ActivePOIsMetadata {
    list?: FluffyList[];
    [property: string]: any;
}

export interface FluffyList {
    key?:   string;
    value?: string;
    [property: string]: any;
}

export interface Geo {
    _id?:           string;
    _schema?:       GeoSchema;
    city?:          string;
    countryCode?:   string;
    dmaID?:         any;
    msaID?:         any;
    postalCode?:    string;
    stateProvince?: string;
    [property: string]: any;
}

export interface GeoSchema {
    description?: string;
    elevation?:   number;
    latitude?:    number;
    longitude?:   number;
    [property: string]: any;
}

export interface ProductListItem {
    _experience?:       ProductListItemExperience;
    _id?:               string;
    currencyCode?:      string;
    discountAmount?:    number;
    name?:              string;
    priceTotal?:        number;
    product?:           string;
    productAddMethod?:  string;
    productCategories?: ProductCategory[];
    productImageUrl?:   string;
    quantity?:          any;
    refundAmount?:      number;
    selectedOptions?:   SelectedOption[];
    SKU?:               string;
    unitOfMeasureCode?: string;
    [property: string]: any;
}

export interface ProductListItemExperience {
    analytics?: TentacledAnalytics;
    [property: string]: any;
}

export interface TentacledAnalytics {
    customDimensions?: FluffyCustomDimensions;
    event101to200?:    FluffyEvent101To200;
    event1to100?:      FluffyEvent1To100;
    event201to300?:    FluffyEvent201To300;
    event301to400?:    FluffyEvent301To400;
    event401to500?:    FluffyEvent401To500;
    event501to600?:    FluffyEvent501To600;
    event601to700?:    FluffyEvent601To700;
    event701to800?:    FluffyEvent701To800;
    event801to900?:    FluffyEvent801To900;
    event901to1000?:   FluffyEvent901To1000;
    [property: string]: any;
}

export interface FluffyCustomDimensions {
    eVars?: FluffyEVars;
    [property: string]: any;
}

export interface FluffyEVars {
    eVar1?:   string;
    eVar10?:  string;
    eVar100?: string;
    eVar101?: string;
    eVar102?: string;
    eVar103?: string;
    eVar104?: string;
    eVar105?: string;
    eVar106?: string;
    eVar107?: string;
    eVar108?: string;
    eVar109?: string;
    eVar11?:  string;
    eVar110?: string;
    eVar111?: string;
    eVar112?: string;
    eVar113?: string;
    eVar114?: string;
    eVar115?: string;
    eVar116?: string;
    eVar117?: string;
    eVar118?: string;
    eVar119?: string;
    eVar12?:  string;
    eVar120?: string;
    eVar121?: string;
    eVar122?: string;
    eVar123?: string;
    eVar124?: string;
    eVar125?: string;
    eVar126?: string;
    eVar127?: string;
    eVar128?: string;
    eVar129?: string;
    eVar13?:  string;
    eVar130?: string;
    eVar131?: string;
    eVar132?: string;
    eVar133?: string;
    eVar134?: string;
    eVar135?: string;
    eVar136?: string;
    eVar137?: string;
    eVar138?: string;
    eVar139?: string;
    eVar14?:  string;
    eVar140?: string;
    eVar141?: string;
    eVar142?: string;
    eVar143?: string;
    eVar144?: string;
    eVar145?: string;
    eVar146?: string;
    eVar147?: string;
    eVar148?: string;
    eVar149?: string;
    eVar15?:  string;
    eVar150?: string;
    eVar151?: string;
    eVar152?: string;
    eVar153?: string;
    eVar154?: string;
    eVar155?: string;
    eVar156?: string;
    eVar157?: string;
    eVar158?: string;
    eVar159?: string;
    eVar16?:  string;
    eVar160?: string;
    eVar161?: string;
    eVar162?: string;
    eVar163?: string;
    eVar164?: string;
    eVar165?: string;
    eVar166?: string;
    eVar167?: string;
    eVar168?: string;
    eVar169?: string;
    eVar17?:  string;
    eVar170?: string;
    eVar171?: string;
    eVar172?: string;
    eVar173?: string;
    eVar174?: string;
    eVar175?: string;
    eVar176?: string;
    eVar177?: string;
    eVar178?: string;
    eVar179?: string;
    eVar18?:  string;
    eVar180?: string;
    eVar181?: string;
    eVar182?: string;
    eVar183?: string;
    eVar184?: string;
    eVar185?: string;
    eVar186?: string;
    eVar187?: string;
    eVar188?: string;
    eVar189?: string;
    eVar19?:  string;
    eVar190?: string;
    eVar191?: string;
    eVar192?: string;
    eVar193?: string;
    eVar194?: string;
    eVar195?: string;
    eVar196?: string;
    eVar197?: string;
    eVar198?: string;
    eVar199?: string;
    eVar2?:   string;
    eVar20?:  string;
    eVar200?: string;
    eVar201?: string;
    eVar202?: string;
    eVar203?: string;
    eVar204?: string;
    eVar205?: string;
    eVar206?: string;
    eVar207?: string;
    eVar208?: string;
    eVar209?: string;
    eVar21?:  string;
    eVar210?: string;
    eVar211?: string;
    eVar212?: string;
    eVar213?: string;
    eVar214?: string;
    eVar215?: string;
    eVar216?: string;
    eVar217?: string;
    eVar218?: string;
    eVar219?: string;
    eVar22?:  string;
    eVar220?: string;
    eVar221?: string;
    eVar222?: string;
    eVar223?: string;
    eVar224?: string;
    eVar225?: string;
    eVar226?: string;
    eVar227?: string;
    eVar228?: string;
    eVar229?: string;
    eVar23?:  string;
    eVar230?: string;
    eVar231?: string;
    eVar232?: string;
    eVar233?: string;
    eVar234?: string;
    eVar235?: string;
    eVar236?: string;
    eVar237?: string;
    eVar238?: string;
    eVar239?: string;
    eVar24?:  string;
    eVar240?: string;
    eVar241?: string;
    eVar242?: string;
    eVar243?: string;
    eVar244?: string;
    eVar245?: string;
    eVar246?: string;
    eVar247?: string;
    eVar248?: string;
    eVar249?: string;
    eVar25?:  string;
    eVar250?: string;
    eVar26?:  string;
    eVar27?:  string;
    eVar28?:  string;
    eVar29?:  string;
    eVar3?:   string;
    eVar30?:  string;
    eVar31?:  string;
    eVar32?:  string;
    eVar33?:  string;
    eVar34?:  string;
    eVar35?:  string;
    eVar36?:  string;
    eVar37?:  string;
    eVar38?:  string;
    eVar39?:  string;
    eVar4?:   string;
    eVar40?:  string;
    eVar41?:  string;
    eVar42?:  string;
    eVar43?:  string;
    eVar44?:  string;
    eVar45?:  string;
    eVar46?:  string;
    eVar47?:  string;
    eVar48?:  string;
    eVar49?:  string;
    eVar5?:   string;
    eVar50?:  string;
    eVar51?:  string;
    eVar52?:  string;
    eVar53?:  string;
    eVar54?:  string;
    eVar55?:  string;
    eVar56?:  string;
    eVar57?:  string;
    eVar58?:  string;
    eVar59?:  string;
    eVar6?:   string;
    eVar60?:  string;
    eVar61?:  string;
    eVar62?:  string;
    eVar63?:  string;
    eVar64?:  string;
    eVar65?:  string;
    eVar66?:  string;
    eVar67?:  string;
    eVar68?:  string;
    eVar69?:  string;
    eVar7?:   string;
    eVar70?:  string;
    eVar71?:  string;
    eVar72?:  string;
    eVar73?:  string;
    eVar74?:  string;
    eVar75?:  string;
    eVar76?:  string;
    eVar77?:  string;
    eVar78?:  string;
    eVar79?:  string;
    eVar8?:   string;
    eVar80?:  string;
    eVar81?:  string;
    eVar82?:  string;
    eVar83?:  string;
    eVar84?:  string;
    eVar85?:  string;
    eVar86?:  string;
    eVar87?:  string;
    eVar88?:  string;
    eVar89?:  string;
    eVar9?:   string;
    eVar90?:  string;
    eVar91?:  string;
    eVar92?:  string;
    eVar93?:  string;
    eVar94?:  string;
    eVar95?:  string;
    eVar96?:  string;
    eVar97?:  string;
    eVar98?:  string;
    eVar99?:  string;
    [property: string]: any;
}

export interface FluffyEvent101To200 {
    event101?: FluffyEvent101;
    event102?: FluffyEvent102;
    event103?: FluffyEvent103;
    event104?: FluffyEvent104;
    event105?: FluffyEvent105;
    event106?: FluffyEvent106;
    event107?: FluffyEvent107;
    event108?: FluffyEvent108;
    event109?: FluffyEvent109;
    event110?: FluffyEvent110;
    event111?: FluffyEvent111;
    event112?: FluffyEvent112;
    event113?: FluffyEvent113;
    event114?: FluffyEvent114;
    event115?: FluffyEvent115;
    event116?: FluffyEvent116;
    event117?: FluffyEvent117;
    event118?: FluffyEvent118;
    event119?: FluffyEvent119;
    event120?: FluffyEvent120;
    event121?: FluffyEvent121;
    event122?: FluffyEvent122;
    event123?: FluffyEvent123;
    event124?: FluffyEvent124;
    event125?: FluffyEvent125;
    event126?: FluffyEvent126;
    event127?: FluffyEvent127;
    event128?: FluffyEvent128;
    event129?: FluffyEvent129;
    event130?: FluffyEvent130;
    event131?: FluffyEvent131;
    event132?: FluffyEvent132;
    event133?: FluffyEvent133;
    event134?: FluffyEvent134;
    event135?: FluffyEvent135;
    event136?: FluffyEvent136;
    event137?: FluffyEvent137;
    event138?: FluffyEvent138;
    event139?: FluffyEvent139;
    event140?: FluffyEvent140;
    event141?: FluffyEvent141;
    event142?: FluffyEvent142;
    event143?: FluffyEvent143;
    event144?: FluffyEvent144;
    event145?: FluffyEvent145;
    event146?: FluffyEvent146;
    event147?: FluffyEvent147;
    event148?: FluffyEvent148;
    event149?: FluffyEvent149;
    event150?: FluffyEvent150;
    event151?: FluffyEvent151;
    event152?: FluffyEvent152;
    event153?: FluffyEvent153;
    event154?: FluffyEvent154;
    event155?: FluffyEvent155;
    event156?: FluffyEvent156;
    event157?: FluffyEvent157;
    event158?: FluffyEvent158;
    event159?: FluffyEvent159;
    event160?: FluffyEvent160;
    event161?: FluffyEvent161;
    event162?: FluffyEvent162;
    event163?: FluffyEvent163;
    event164?: FluffyEvent164;
    event165?: FluffyEvent165;
    event166?: FluffyEvent166;
    event167?: FluffyEvent167;
    event168?: FluffyEvent168;
    event169?: FluffyEvent169;
    event170?: FluffyEvent170;
    event171?: FluffyEvent171;
    event172?: FluffyEvent172;
    event173?: FluffyEvent173;
    event174?: FluffyEvent174;
    event175?: FluffyEvent175;
    event176?: FluffyEvent176;
    event177?: FluffyEvent177;
    event178?: FluffyEvent178;
    event179?: FluffyEvent179;
    event180?: FluffyEvent180;
    event181?: FluffyEvent181;
    event182?: FluffyEvent182;
    event183?: FluffyEvent183;
    event184?: FluffyEvent184;
    event185?: FluffyEvent185;
    event186?: FluffyEvent186;
    event187?: FluffyEvent187;
    event188?: FluffyEvent188;
    event189?: FluffyEvent189;
    event190?: FluffyEvent190;
    event191?: FluffyEvent191;
    event192?: FluffyEvent192;
    event193?: FluffyEvent193;
    event194?: FluffyEvent194;
    event195?: FluffyEvent195;
    event196?: FluffyEvent196;
    event197?: FluffyEvent197;
    event198?: FluffyEvent198;
    event199?: FluffyEvent199;
    event200?: FluffyEvent200;
    [property: string]: any;
}

export interface FluffyEvent101 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent102 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent103 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent104 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent105 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent106 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent107 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent108 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent109 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent110 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent111 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent112 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent113 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent114 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent115 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent116 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent117 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent118 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent119 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent120 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent121 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent122 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent123 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent124 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent125 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent126 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent127 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent128 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent129 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent130 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent131 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent132 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent133 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent134 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent135 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent136 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent137 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent138 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent139 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent140 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent141 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent142 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent143 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent144 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent145 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent146 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent147 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent148 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent149 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent150 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent151 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent152 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent153 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent154 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent155 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent156 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent157 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent158 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent159 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent160 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent161 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent162 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent163 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent164 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent165 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent166 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent167 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent168 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent169 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent170 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent171 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent172 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent173 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent174 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent175 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent176 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent177 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent178 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent179 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent180 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent181 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent182 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent183 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent184 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent185 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent186 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent187 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent188 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent189 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent190 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent191 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent192 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent193 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent194 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent195 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent196 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent197 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent198 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent199 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent200 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent1To100 {
    event1?:   FluffyEvent1;
    event10?:  FluffyEvent10;
    event100?: FluffyEvent100;
    event11?:  FluffyEvent11;
    event12?:  FluffyEvent12;
    event13?:  FluffyEvent13;
    event14?:  FluffyEvent14;
    event15?:  FluffyEvent15;
    event16?:  FluffyEvent16;
    event17?:  FluffyEvent17;
    event18?:  FluffyEvent18;
    event19?:  FluffyEvent19;
    event2?:   FluffyEvent2;
    event20?:  FluffyEvent20;
    event21?:  FluffyEvent21;
    event22?:  FluffyEvent22;
    event23?:  FluffyEvent23;
    event24?:  FluffyEvent24;
    event25?:  FluffyEvent25;
    event26?:  FluffyEvent26;
    event27?:  FluffyEvent27;
    event28?:  FluffyEvent28;
    event29?:  FluffyEvent29;
    event3?:   FluffyEvent3;
    event30?:  FluffyEvent30;
    event31?:  FluffyEvent31;
    event32?:  FluffyEvent32;
    event33?:  FluffyEvent33;
    event34?:  FluffyEvent34;
    event35?:  FluffyEvent35;
    event36?:  FluffyEvent36;
    event37?:  FluffyEvent37;
    event38?:  FluffyEvent38;
    event39?:  FluffyEvent39;
    event4?:   FluffyEvent4;
    event40?:  FluffyEvent40;
    event41?:  FluffyEvent41;
    event42?:  FluffyEvent42;
    event43?:  FluffyEvent43;
    event44?:  FluffyEvent44;
    event45?:  FluffyEvent45;
    event46?:  FluffyEvent46;
    event47?:  FluffyEvent47;
    event48?:  FluffyEvent48;
    event49?:  FluffyEvent49;
    event5?:   FluffyEvent5;
    event50?:  FluffyEvent50;
    event51?:  FluffyEvent51;
    event52?:  FluffyEvent52;
    event53?:  FluffyEvent53;
    event54?:  FluffyEvent54;
    event55?:  FluffyEvent55;
    event56?:  FluffyEvent56;
    event57?:  FluffyEvent57;
    event58?:  FluffyEvent58;
    event59?:  FluffyEvent59;
    event6?:   FluffyEvent6;
    event60?:  FluffyEvent60;
    event61?:  FluffyEvent61;
    event62?:  FluffyEvent62;
    event63?:  FluffyEvent63;
    event64?:  FluffyEvent64;
    event65?:  FluffyEvent65;
    event66?:  FluffyEvent66;
    event67?:  FluffyEvent67;
    event68?:  FluffyEvent68;
    event69?:  FluffyEvent69;
    event7?:   FluffyEvent7;
    event70?:  FluffyEvent70;
    event71?:  FluffyEvent71;
    event72?:  FluffyEvent72;
    event73?:  FluffyEvent73;
    event74?:  FluffyEvent74;
    event75?:  FluffyEvent75;
    event76?:  FluffyEvent76;
    event77?:  FluffyEvent77;
    event78?:  FluffyEvent78;
    event79?:  FluffyEvent79;
    event8?:   FluffyEvent8;
    event80?:  FluffyEvent80;
    event81?:  FluffyEvent81;
    event82?:  FluffyEvent82;
    event83?:  FluffyEvent83;
    event84?:  FluffyEvent84;
    event85?:  FluffyEvent85;
    event86?:  FluffyEvent86;
    event87?:  FluffyEvent87;
    event88?:  FluffyEvent88;
    event89?:  FluffyEvent89;
    event9?:   FluffyEvent9;
    event90?:  FluffyEvent90;
    event91?:  FluffyEvent91;
    event92?:  FluffyEvent92;
    event93?:  FluffyEvent93;
    event94?:  FluffyEvent94;
    event95?:  FluffyEvent95;
    event96?:  FluffyEvent96;
    event97?:  FluffyEvent97;
    event98?:  FluffyEvent98;
    event99?:  FluffyEvent99;
    [property: string]: any;
}

export interface FluffyEvent1 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent10 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent100 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent11 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent12 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent13 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent14 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent15 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent16 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent17 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent18 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent19 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent2 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent20 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent21 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent22 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent23 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent24 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent25 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent26 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent27 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent28 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent29 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent3 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent30 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent31 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent32 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent33 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent34 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent35 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent36 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent37 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent38 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent39 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent4 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent40 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent41 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent42 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent43 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent44 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent45 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent46 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent47 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent48 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent49 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent5 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent50 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent51 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent52 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent53 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent54 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent55 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent56 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent57 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent58 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent59 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent6 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent60 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent61 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent62 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent63 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent64 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent65 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent66 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent67 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent68 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent69 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent7 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent70 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent71 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent72 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent73 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent74 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent75 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent76 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent77 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent78 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent79 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent8 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent80 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent81 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent82 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent83 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent84 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent85 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent86 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent87 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent88 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent89 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent9 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent90 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent91 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent92 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent93 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent94 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent95 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent96 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent97 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent98 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent99 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent201To300 {
    event201?: FluffyEvent201;
    event202?: FluffyEvent202;
    event203?: FluffyEvent203;
    event204?: FluffyEvent204;
    event205?: FluffyEvent205;
    event206?: FluffyEvent206;
    event207?: FluffyEvent207;
    event208?: FluffyEvent208;
    event209?: FluffyEvent209;
    event210?: FluffyEvent210;
    event211?: FluffyEvent211;
    event212?: FluffyEvent212;
    event213?: FluffyEvent213;
    event214?: FluffyEvent214;
    event215?: FluffyEvent215;
    event216?: FluffyEvent216;
    event217?: FluffyEvent217;
    event218?: FluffyEvent218;
    event219?: FluffyEvent219;
    event220?: FluffyEvent220;
    event221?: FluffyEvent221;
    event222?: FluffyEvent222;
    event223?: FluffyEvent223;
    event224?: FluffyEvent224;
    event225?: FluffyEvent225;
    event226?: FluffyEvent226;
    event227?: FluffyEvent227;
    event228?: FluffyEvent228;
    event229?: FluffyEvent229;
    event230?: FluffyEvent230;
    event231?: FluffyEvent231;
    event232?: FluffyEvent232;
    event233?: FluffyEvent233;
    event234?: FluffyEvent234;
    event235?: FluffyEvent235;
    event236?: FluffyEvent236;
    event237?: FluffyEvent237;
    event238?: FluffyEvent238;
    event239?: FluffyEvent239;
    event240?: FluffyEvent240;
    event241?: FluffyEvent241;
    event242?: FluffyEvent242;
    event243?: FluffyEvent243;
    event244?: FluffyEvent244;
    event245?: FluffyEvent245;
    event246?: FluffyEvent246;
    event247?: FluffyEvent247;
    event248?: FluffyEvent248;
    event249?: FluffyEvent249;
    event250?: FluffyEvent250;
    event251?: FluffyEvent251;
    event252?: FluffyEvent252;
    event253?: FluffyEvent253;
    event254?: FluffyEvent254;
    event255?: FluffyEvent255;
    event256?: FluffyEvent256;
    event257?: FluffyEvent257;
    event258?: FluffyEvent258;
    event259?: FluffyEvent259;
    event260?: FluffyEvent260;
    event261?: FluffyEvent261;
    event262?: FluffyEvent262;
    event263?: FluffyEvent263;
    event264?: FluffyEvent264;
    event265?: FluffyEvent265;
    event266?: FluffyEvent266;
    event267?: FluffyEvent267;
    event268?: FluffyEvent268;
    event269?: FluffyEvent269;
    event270?: FluffyEvent270;
    event271?: FluffyEvent271;
    event272?: FluffyEvent272;
    event273?: FluffyEvent273;
    event274?: FluffyEvent274;
    event275?: FluffyEvent275;
    event276?: FluffyEvent276;
    event277?: FluffyEvent277;
    event278?: FluffyEvent278;
    event279?: FluffyEvent279;
    event280?: FluffyEvent280;
    event281?: FluffyEvent281;
    event282?: FluffyEvent282;
    event283?: FluffyEvent283;
    event284?: FluffyEvent284;
    event285?: FluffyEvent285;
    event286?: FluffyEvent286;
    event287?: FluffyEvent287;
    event288?: FluffyEvent288;
    event289?: FluffyEvent289;
    event290?: FluffyEvent290;
    event291?: FluffyEvent291;
    event292?: FluffyEvent292;
    event293?: FluffyEvent293;
    event294?: FluffyEvent294;
    event295?: FluffyEvent295;
    event296?: FluffyEvent296;
    event297?: FluffyEvent297;
    event298?: FluffyEvent298;
    event299?: FluffyEvent299;
    event300?: FluffyEvent300;
    [property: string]: any;
}

export interface FluffyEvent201 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent202 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent203 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent204 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent205 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent206 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent207 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent208 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent209 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent210 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent211 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent212 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent213 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent214 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent215 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent216 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent217 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent218 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent219 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent220 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent221 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent222 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent223 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent224 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent225 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent226 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent227 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent228 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent229 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent230 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent231 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent232 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent233 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent234 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent235 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent236 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent237 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent238 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent239 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent240 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent241 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent242 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent243 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent244 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent245 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent246 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent247 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent248 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent249 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent250 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent251 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent252 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent253 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent254 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent255 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent256 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent257 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent258 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent259 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent260 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent261 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent262 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent263 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent264 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent265 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent266 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent267 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent268 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent269 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent270 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent271 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent272 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent273 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent274 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent275 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent276 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent277 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent278 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent279 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent280 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent281 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent282 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent283 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent284 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent285 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent286 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent287 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent288 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent289 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent290 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent291 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent292 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent293 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent294 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent295 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent296 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent297 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent298 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent299 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent300 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent301To400 {
    event301?: FluffyEvent301;
    event302?: FluffyEvent302;
    event303?: FluffyEvent303;
    event304?: FluffyEvent304;
    event305?: FluffyEvent305;
    event306?: FluffyEvent306;
    event307?: FluffyEvent307;
    event308?: FluffyEvent308;
    event309?: FluffyEvent309;
    event310?: FluffyEvent310;
    event311?: FluffyEvent311;
    event312?: FluffyEvent312;
    event313?: FluffyEvent313;
    event314?: FluffyEvent314;
    event315?: FluffyEvent315;
    event316?: FluffyEvent316;
    event317?: FluffyEvent317;
    event318?: FluffyEvent318;
    event319?: FluffyEvent319;
    event320?: FluffyEvent320;
    event321?: FluffyEvent321;
    event322?: FluffyEvent322;
    event323?: FluffyEvent323;
    event324?: FluffyEvent324;
    event325?: FluffyEvent325;
    event326?: FluffyEvent326;
    event327?: FluffyEvent327;
    event328?: FluffyEvent328;
    event329?: FluffyEvent329;
    event330?: FluffyEvent330;
    event331?: FluffyEvent331;
    event332?: FluffyEvent332;
    event333?: FluffyEvent333;
    event334?: FluffyEvent334;
    event335?: FluffyEvent335;
    event336?: FluffyEvent336;
    event337?: FluffyEvent337;
    event338?: FluffyEvent338;
    event339?: FluffyEvent339;
    event340?: FluffyEvent340;
    event341?: FluffyEvent341;
    event342?: FluffyEvent342;
    event343?: FluffyEvent343;
    event344?: FluffyEvent344;
    event345?: FluffyEvent345;
    event346?: FluffyEvent346;
    event347?: FluffyEvent347;
    event348?: FluffyEvent348;
    event349?: FluffyEvent349;
    event350?: FluffyEvent350;
    event351?: FluffyEvent351;
    event352?: FluffyEvent352;
    event353?: FluffyEvent353;
    event354?: FluffyEvent354;
    event355?: FluffyEvent355;
    event356?: FluffyEvent356;
    event357?: FluffyEvent357;
    event358?: FluffyEvent358;
    event359?: FluffyEvent359;
    event360?: FluffyEvent360;
    event361?: FluffyEvent361;
    event362?: FluffyEvent362;
    event363?: FluffyEvent363;
    event364?: FluffyEvent364;
    event365?: FluffyEvent365;
    event366?: FluffyEvent366;
    event367?: FluffyEvent367;
    event368?: FluffyEvent368;
    event369?: FluffyEvent369;
    event370?: FluffyEvent370;
    event371?: FluffyEvent371;
    event372?: FluffyEvent372;
    event373?: FluffyEvent373;
    event374?: FluffyEvent374;
    event375?: FluffyEvent375;
    event376?: FluffyEvent376;
    event377?: FluffyEvent377;
    event378?: FluffyEvent378;
    event379?: FluffyEvent379;
    event380?: FluffyEvent380;
    event381?: FluffyEvent381;
    event382?: FluffyEvent382;
    event383?: FluffyEvent383;
    event384?: FluffyEvent384;
    event385?: FluffyEvent385;
    event386?: FluffyEvent386;
    event387?: FluffyEvent387;
    event388?: FluffyEvent388;
    event389?: FluffyEvent389;
    event390?: FluffyEvent390;
    event391?: FluffyEvent391;
    event392?: FluffyEvent392;
    event393?: FluffyEvent393;
    event394?: FluffyEvent394;
    event395?: FluffyEvent395;
    event396?: FluffyEvent396;
    event397?: FluffyEvent397;
    event398?: FluffyEvent398;
    event399?: FluffyEvent399;
    event400?: FluffyEvent400;
    [property: string]: any;
}

export interface FluffyEvent301 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent302 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent303 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent304 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent305 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent306 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent307 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent308 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent309 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent310 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent311 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent312 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent313 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent314 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent315 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent316 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent317 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent318 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent319 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent320 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent321 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent322 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent323 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent324 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent325 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent326 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent327 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent328 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent329 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent330 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent331 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent332 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent333 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent334 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent335 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent336 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent337 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent338 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent339 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent340 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent341 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent342 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent343 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent344 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent345 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent346 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent347 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent348 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent349 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent350 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent351 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent352 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent353 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent354 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent355 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent356 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent357 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent358 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent359 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent360 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent361 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent362 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent363 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent364 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent365 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent366 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent367 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent368 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent369 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent370 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent371 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent372 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent373 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent374 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent375 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent376 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent377 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent378 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent379 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent380 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent381 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent382 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent383 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent384 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent385 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent386 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent387 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent388 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent389 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent390 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent391 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent392 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent393 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent394 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent395 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent396 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent397 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent398 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent399 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent400 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent401To500 {
    event401?: FluffyEvent401;
    event402?: FluffyEvent402;
    event403?: FluffyEvent403;
    event404?: FluffyEvent404;
    event405?: FluffyEvent405;
    event406?: FluffyEvent406;
    event407?: FluffyEvent407;
    event408?: FluffyEvent408;
    event409?: FluffyEvent409;
    event410?: FluffyEvent410;
    event411?: FluffyEvent411;
    event412?: FluffyEvent412;
    event413?: FluffyEvent413;
    event414?: FluffyEvent414;
    event415?: FluffyEvent415;
    event416?: FluffyEvent416;
    event417?: FluffyEvent417;
    event418?: FluffyEvent418;
    event419?: FluffyEvent419;
    event420?: FluffyEvent420;
    event421?: FluffyEvent421;
    event422?: FluffyEvent422;
    event423?: FluffyEvent423;
    event424?: FluffyEvent424;
    event425?: FluffyEvent425;
    event426?: FluffyEvent426;
    event427?: FluffyEvent427;
    event428?: FluffyEvent428;
    event429?: FluffyEvent429;
    event430?: FluffyEvent430;
    event431?: FluffyEvent431;
    event432?: FluffyEvent432;
    event433?: FluffyEvent433;
    event434?: FluffyEvent434;
    event435?: FluffyEvent435;
    event436?: FluffyEvent436;
    event437?: FluffyEvent437;
    event438?: FluffyEvent438;
    event439?: FluffyEvent439;
    event440?: FluffyEvent440;
    event441?: FluffyEvent441;
    event442?: FluffyEvent442;
    event443?: FluffyEvent443;
    event444?: FluffyEvent444;
    event445?: FluffyEvent445;
    event446?: FluffyEvent446;
    event447?: FluffyEvent447;
    event448?: FluffyEvent448;
    event449?: FluffyEvent449;
    event450?: FluffyEvent450;
    event451?: FluffyEvent451;
    event452?: FluffyEvent452;
    event453?: FluffyEvent453;
    event454?: FluffyEvent454;
    event455?: FluffyEvent455;
    event456?: FluffyEvent456;
    event457?: FluffyEvent457;
    event458?: FluffyEvent458;
    event459?: FluffyEvent459;
    event460?: FluffyEvent460;
    event461?: FluffyEvent461;
    event462?: FluffyEvent462;
    event463?: FluffyEvent463;
    event464?: FluffyEvent464;
    event465?: FluffyEvent465;
    event466?: FluffyEvent466;
    event467?: FluffyEvent467;
    event468?: FluffyEvent468;
    event469?: FluffyEvent469;
    event470?: FluffyEvent470;
    event471?: FluffyEvent471;
    event472?: FluffyEvent472;
    event473?: FluffyEvent473;
    event474?: FluffyEvent474;
    event475?: FluffyEvent475;
    event476?: FluffyEvent476;
    event477?: FluffyEvent477;
    event478?: FluffyEvent478;
    event479?: FluffyEvent479;
    event480?: FluffyEvent480;
    event481?: FluffyEvent481;
    event482?: FluffyEvent482;
    event483?: FluffyEvent483;
    event484?: FluffyEvent484;
    event485?: FluffyEvent485;
    event486?: FluffyEvent486;
    event487?: FluffyEvent487;
    event488?: FluffyEvent488;
    event489?: FluffyEvent489;
    event490?: FluffyEvent490;
    event491?: FluffyEvent491;
    event492?: FluffyEvent492;
    event493?: FluffyEvent493;
    event494?: FluffyEvent494;
    event495?: FluffyEvent495;
    event496?: FluffyEvent496;
    event497?: FluffyEvent497;
    event498?: FluffyEvent498;
    event499?: FluffyEvent499;
    event500?: FluffyEvent500;
    [property: string]: any;
}

export interface FluffyEvent401 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent402 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent403 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent404 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent405 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent406 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent407 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent408 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent409 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent410 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent411 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent412 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent413 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent414 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent415 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent416 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent417 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent418 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent419 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent420 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent421 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent422 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent423 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent424 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent425 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent426 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent427 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent428 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent429 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent430 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent431 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent432 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent433 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent434 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent435 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent436 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent437 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent438 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent439 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent440 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent441 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent442 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent443 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent444 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent445 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent446 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent447 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent448 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent449 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent450 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent451 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent452 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent453 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent454 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent455 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent456 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent457 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent458 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent459 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent460 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent461 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent462 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent463 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent464 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent465 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent466 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent467 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent468 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent469 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent470 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent471 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent472 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent473 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent474 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent475 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent476 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent477 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent478 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent479 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent480 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent481 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent482 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent483 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent484 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent485 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent486 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent487 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent488 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent489 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent490 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent491 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent492 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent493 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent494 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent495 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent496 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent497 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent498 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent499 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent500 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent501To600 {
    event501?: FluffyEvent501;
    event502?: FluffyEvent502;
    event503?: FluffyEvent503;
    event504?: FluffyEvent504;
    event505?: FluffyEvent505;
    event506?: FluffyEvent506;
    event507?: FluffyEvent507;
    event508?: FluffyEvent508;
    event509?: FluffyEvent509;
    event510?: FluffyEvent510;
    event511?: FluffyEvent511;
    event512?: FluffyEvent512;
    event513?: FluffyEvent513;
    event514?: FluffyEvent514;
    event515?: FluffyEvent515;
    event516?: FluffyEvent516;
    event517?: FluffyEvent517;
    event518?: FluffyEvent518;
    event519?: FluffyEvent519;
    event520?: FluffyEvent520;
    event521?: FluffyEvent521;
    event522?: FluffyEvent522;
    event523?: FluffyEvent523;
    event524?: FluffyEvent524;
    event525?: FluffyEvent525;
    event526?: FluffyEvent526;
    event527?: FluffyEvent527;
    event528?: FluffyEvent528;
    event529?: FluffyEvent529;
    event530?: FluffyEvent530;
    event531?: FluffyEvent531;
    event532?: FluffyEvent532;
    event533?: FluffyEvent533;
    event534?: FluffyEvent534;
    event535?: FluffyEvent535;
    event536?: FluffyEvent536;
    event537?: FluffyEvent537;
    event538?: FluffyEvent538;
    event539?: FluffyEvent539;
    event540?: FluffyEvent540;
    event541?: FluffyEvent541;
    event542?: FluffyEvent542;
    event543?: FluffyEvent543;
    event544?: FluffyEvent544;
    event545?: FluffyEvent545;
    event546?: FluffyEvent546;
    event547?: FluffyEvent547;
    event548?: FluffyEvent548;
    event549?: FluffyEvent549;
    event550?: FluffyEvent550;
    event551?: FluffyEvent551;
    event552?: FluffyEvent552;
    event553?: FluffyEvent553;
    event554?: FluffyEvent554;
    event555?: FluffyEvent555;
    event556?: FluffyEvent556;
    event557?: FluffyEvent557;
    event558?: FluffyEvent558;
    event559?: FluffyEvent559;
    event560?: FluffyEvent560;
    event561?: FluffyEvent561;
    event562?: FluffyEvent562;
    event563?: FluffyEvent563;
    event564?: FluffyEvent564;
    event565?: FluffyEvent565;
    event566?: FluffyEvent566;
    event567?: FluffyEvent567;
    event568?: FluffyEvent568;
    event569?: FluffyEvent569;
    event570?: FluffyEvent570;
    event571?: FluffyEvent571;
    event572?: FluffyEvent572;
    event573?: FluffyEvent573;
    event574?: FluffyEvent574;
    event575?: FluffyEvent575;
    event576?: FluffyEvent576;
    event577?: FluffyEvent577;
    event578?: FluffyEvent578;
    event579?: FluffyEvent579;
    event580?: FluffyEvent580;
    event581?: FluffyEvent581;
    event582?: FluffyEvent582;
    event583?: FluffyEvent583;
    event584?: FluffyEvent584;
    event585?: FluffyEvent585;
    event586?: FluffyEvent586;
    event587?: FluffyEvent587;
    event588?: FluffyEvent588;
    event589?: FluffyEvent589;
    event590?: FluffyEvent590;
    event591?: FluffyEvent591;
    event592?: FluffyEvent592;
    event593?: FluffyEvent593;
    event594?: FluffyEvent594;
    event595?: FluffyEvent595;
    event596?: FluffyEvent596;
    event597?: FluffyEvent597;
    event598?: FluffyEvent598;
    event599?: FluffyEvent599;
    event600?: FluffyEvent600;
    [property: string]: any;
}

export interface FluffyEvent501 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent502 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent503 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent504 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent505 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent506 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent507 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent508 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent509 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent510 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent511 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent512 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent513 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent514 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent515 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent516 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent517 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent518 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent519 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent520 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent521 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent522 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent523 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent524 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent525 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent526 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent527 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent528 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent529 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent530 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent531 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent532 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent533 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent534 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent535 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent536 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent537 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent538 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent539 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent540 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent541 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent542 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent543 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent544 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent545 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent546 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent547 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent548 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent549 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent550 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent551 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent552 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent553 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent554 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent555 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent556 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent557 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent558 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent559 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent560 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent561 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent562 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent563 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent564 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent565 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent566 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent567 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent568 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent569 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent570 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent571 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent572 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent573 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent574 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent575 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent576 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent577 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent578 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent579 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent580 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent581 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent582 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent583 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent584 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent585 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent586 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent587 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent588 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent589 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent590 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent591 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent592 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent593 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent594 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent595 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent596 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent597 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent598 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent599 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent600 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent601To700 {
    event601?: FluffyEvent601;
    event602?: FluffyEvent602;
    event603?: FluffyEvent603;
    event604?: FluffyEvent604;
    event605?: FluffyEvent605;
    event606?: FluffyEvent606;
    event607?: FluffyEvent607;
    event608?: FluffyEvent608;
    event609?: FluffyEvent609;
    event610?: FluffyEvent610;
    event611?: FluffyEvent611;
    event612?: FluffyEvent612;
    event613?: FluffyEvent613;
    event614?: FluffyEvent614;
    event615?: FluffyEvent615;
    event616?: FluffyEvent616;
    event617?: FluffyEvent617;
    event618?: FluffyEvent618;
    event619?: FluffyEvent619;
    event620?: FluffyEvent620;
    event621?: FluffyEvent621;
    event622?: FluffyEvent622;
    event623?: FluffyEvent623;
    event624?: FluffyEvent624;
    event625?: FluffyEvent625;
    event626?: FluffyEvent626;
    event627?: FluffyEvent627;
    event628?: FluffyEvent628;
    event629?: FluffyEvent629;
    event630?: FluffyEvent630;
    event631?: FluffyEvent631;
    event632?: FluffyEvent632;
    event633?: FluffyEvent633;
    event634?: FluffyEvent634;
    event635?: FluffyEvent635;
    event636?: FluffyEvent636;
    event637?: FluffyEvent637;
    event638?: FluffyEvent638;
    event639?: FluffyEvent639;
    event640?: FluffyEvent640;
    event641?: FluffyEvent641;
    event642?: FluffyEvent642;
    event643?: FluffyEvent643;
    event644?: FluffyEvent644;
    event645?: FluffyEvent645;
    event646?: FluffyEvent646;
    event647?: FluffyEvent647;
    event648?: FluffyEvent648;
    event649?: FluffyEvent649;
    event650?: FluffyEvent650;
    event651?: FluffyEvent651;
    event652?: FluffyEvent652;
    event653?: FluffyEvent653;
    event654?: FluffyEvent654;
    event655?: FluffyEvent655;
    event656?: FluffyEvent656;
    event657?: FluffyEvent657;
    event658?: FluffyEvent658;
    event659?: FluffyEvent659;
    event660?: FluffyEvent660;
    event661?: FluffyEvent661;
    event662?: FluffyEvent662;
    event663?: FluffyEvent663;
    event664?: FluffyEvent664;
    event665?: FluffyEvent665;
    event666?: FluffyEvent666;
    event667?: FluffyEvent667;
    event668?: FluffyEvent668;
    event669?: FluffyEvent669;
    event670?: FluffyEvent670;
    event671?: FluffyEvent671;
    event672?: FluffyEvent672;
    event673?: FluffyEvent673;
    event674?: FluffyEvent674;
    event675?: FluffyEvent675;
    event676?: FluffyEvent676;
    event677?: FluffyEvent677;
    event678?: FluffyEvent678;
    event679?: FluffyEvent679;
    event680?: FluffyEvent680;
    event681?: FluffyEvent681;
    event682?: FluffyEvent682;
    event683?: FluffyEvent683;
    event684?: FluffyEvent684;
    event685?: FluffyEvent685;
    event686?: FluffyEvent686;
    event687?: FluffyEvent687;
    event688?: FluffyEvent688;
    event689?: FluffyEvent689;
    event690?: FluffyEvent690;
    event691?: FluffyEvent691;
    event692?: FluffyEvent692;
    event693?: FluffyEvent693;
    event694?: FluffyEvent694;
    event695?: FluffyEvent695;
    event696?: FluffyEvent696;
    event697?: FluffyEvent697;
    event698?: FluffyEvent698;
    event699?: FluffyEvent699;
    event700?: FluffyEvent700;
    [property: string]: any;
}

export interface FluffyEvent601 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent602 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent603 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent604 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent605 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent606 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent607 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent608 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent609 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent610 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent611 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent612 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent613 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent614 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent615 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent616 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent617 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent618 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent619 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent620 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent621 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent622 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent623 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent624 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent625 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent626 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent627 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent628 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent629 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent630 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent631 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent632 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent633 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent634 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent635 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent636 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent637 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent638 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent639 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent640 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent641 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent642 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent643 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent644 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent645 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent646 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent647 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent648 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent649 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent650 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent651 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent652 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent653 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent654 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent655 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent656 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent657 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent658 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent659 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent660 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent661 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent662 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent663 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent664 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent665 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent666 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent667 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent668 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent669 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent670 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent671 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent672 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent673 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent674 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent675 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent676 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent677 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent678 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent679 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent680 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent681 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent682 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent683 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent684 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent685 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent686 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent687 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent688 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent689 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent690 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent691 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent692 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent693 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent694 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent695 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent696 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent697 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent698 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent699 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent700 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent701To800 {
    event701?: FluffyEvent701;
    event702?: FluffyEvent702;
    event703?: FluffyEvent703;
    event704?: FluffyEvent704;
    event705?: FluffyEvent705;
    event706?: FluffyEvent706;
    event707?: FluffyEvent707;
    event708?: FluffyEvent708;
    event709?: FluffyEvent709;
    event710?: FluffyEvent710;
    event711?: FluffyEvent711;
    event712?: FluffyEvent712;
    event713?: FluffyEvent713;
    event714?: FluffyEvent714;
    event715?: FluffyEvent715;
    event716?: FluffyEvent716;
    event717?: FluffyEvent717;
    event718?: FluffyEvent718;
    event719?: FluffyEvent719;
    event720?: FluffyEvent720;
    event721?: FluffyEvent721;
    event722?: FluffyEvent722;
    event723?: FluffyEvent723;
    event724?: FluffyEvent724;
    event725?: FluffyEvent725;
    event726?: FluffyEvent726;
    event727?: FluffyEvent727;
    event728?: FluffyEvent728;
    event729?: FluffyEvent729;
    event730?: FluffyEvent730;
    event731?: FluffyEvent731;
    event732?: FluffyEvent732;
    event733?: FluffyEvent733;
    event734?: FluffyEvent734;
    event735?: FluffyEvent735;
    event736?: FluffyEvent736;
    event737?: FluffyEvent737;
    event738?: FluffyEvent738;
    event739?: FluffyEvent739;
    event740?: FluffyEvent740;
    event741?: FluffyEvent741;
    event742?: FluffyEvent742;
    event743?: FluffyEvent743;
    event744?: FluffyEvent744;
    event745?: FluffyEvent745;
    event746?: FluffyEvent746;
    event747?: FluffyEvent747;
    event748?: FluffyEvent748;
    event749?: FluffyEvent749;
    event750?: FluffyEvent750;
    event751?: FluffyEvent751;
    event752?: FluffyEvent752;
    event753?: FluffyEvent753;
    event754?: FluffyEvent754;
    event755?: FluffyEvent755;
    event756?: FluffyEvent756;
    event757?: FluffyEvent757;
    event758?: FluffyEvent758;
    event759?: FluffyEvent759;
    event760?: FluffyEvent760;
    event761?: FluffyEvent761;
    event762?: FluffyEvent762;
    event763?: FluffyEvent763;
    event764?: FluffyEvent764;
    event765?: FluffyEvent765;
    event766?: FluffyEvent766;
    event767?: FluffyEvent767;
    event768?: FluffyEvent768;
    event769?: FluffyEvent769;
    event770?: FluffyEvent770;
    event771?: FluffyEvent771;
    event772?: FluffyEvent772;
    event773?: FluffyEvent773;
    event774?: FluffyEvent774;
    event775?: FluffyEvent775;
    event776?: FluffyEvent776;
    event777?: FluffyEvent777;
    event778?: FluffyEvent778;
    event779?: FluffyEvent779;
    event780?: FluffyEvent780;
    event781?: FluffyEvent781;
    event782?: FluffyEvent782;
    event783?: FluffyEvent783;
    event784?: FluffyEvent784;
    event785?: FluffyEvent785;
    event786?: FluffyEvent786;
    event787?: FluffyEvent787;
    event788?: FluffyEvent788;
    event789?: FluffyEvent789;
    event790?: FluffyEvent790;
    event791?: FluffyEvent791;
    event792?: FluffyEvent792;
    event793?: FluffyEvent793;
    event794?: FluffyEvent794;
    event795?: FluffyEvent795;
    event796?: FluffyEvent796;
    event797?: FluffyEvent797;
    event798?: FluffyEvent798;
    event799?: FluffyEvent799;
    event800?: FluffyEvent800;
    [property: string]: any;
}

export interface FluffyEvent701 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent702 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent703 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent704 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent705 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent706 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent707 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent708 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent709 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent710 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent711 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent712 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent713 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent714 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent715 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent716 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent717 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent718 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent719 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent720 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent721 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent722 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent723 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent724 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent725 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent726 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent727 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent728 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent729 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent730 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent731 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent732 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent733 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent734 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent735 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent736 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent737 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent738 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent739 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent740 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent741 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent742 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent743 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent744 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent745 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent746 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent747 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent748 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent749 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent750 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent751 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent752 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent753 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent754 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent755 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent756 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent757 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent758 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent759 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent760 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent761 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent762 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent763 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent764 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent765 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent766 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent767 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent768 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent769 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent770 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent771 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent772 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent773 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent774 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent775 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent776 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent777 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent778 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent779 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent780 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent781 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent782 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent783 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent784 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent785 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent786 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent787 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent788 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent789 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent790 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent791 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent792 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent793 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent794 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent795 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent796 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent797 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent798 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent799 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent800 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent801To900 {
    event801?: FluffyEvent801;
    event802?: FluffyEvent802;
    event803?: FluffyEvent803;
    event804?: FluffyEvent804;
    event805?: FluffyEvent805;
    event806?: FluffyEvent806;
    event807?: FluffyEvent807;
    event808?: FluffyEvent808;
    event809?: FluffyEvent809;
    event810?: FluffyEvent810;
    event811?: FluffyEvent811;
    event812?: FluffyEvent812;
    event813?: FluffyEvent813;
    event814?: FluffyEvent814;
    event815?: FluffyEvent815;
    event816?: FluffyEvent816;
    event817?: FluffyEvent817;
    event818?: FluffyEvent818;
    event819?: FluffyEvent819;
    event820?: FluffyEvent820;
    event821?: FluffyEvent821;
    event822?: FluffyEvent822;
    event823?: FluffyEvent823;
    event824?: FluffyEvent824;
    event825?: FluffyEvent825;
    event826?: FluffyEvent826;
    event827?: FluffyEvent827;
    event828?: FluffyEvent828;
    event829?: FluffyEvent829;
    event830?: FluffyEvent830;
    event831?: FluffyEvent831;
    event832?: FluffyEvent832;
    event833?: FluffyEvent833;
    event834?: FluffyEvent834;
    event835?: FluffyEvent835;
    event836?: FluffyEvent836;
    event837?: FluffyEvent837;
    event838?: FluffyEvent838;
    event839?: FluffyEvent839;
    event840?: FluffyEvent840;
    event841?: FluffyEvent841;
    event842?: FluffyEvent842;
    event843?: FluffyEvent843;
    event844?: FluffyEvent844;
    event845?: FluffyEvent845;
    event846?: FluffyEvent846;
    event847?: FluffyEvent847;
    event848?: FluffyEvent848;
    event849?: FluffyEvent849;
    event850?: FluffyEvent850;
    event851?: FluffyEvent851;
    event852?: FluffyEvent852;
    event853?: FluffyEvent853;
    event854?: FluffyEvent854;
    event855?: FluffyEvent855;
    event856?: FluffyEvent856;
    event857?: FluffyEvent857;
    event858?: FluffyEvent858;
    event859?: FluffyEvent859;
    event860?: FluffyEvent860;
    event861?: FluffyEvent861;
    event862?: FluffyEvent862;
    event863?: FluffyEvent863;
    event864?: FluffyEvent864;
    event865?: FluffyEvent865;
    event866?: FluffyEvent866;
    event867?: FluffyEvent867;
    event868?: FluffyEvent868;
    event869?: FluffyEvent869;
    event870?: FluffyEvent870;
    event871?: FluffyEvent871;
    event872?: FluffyEvent872;
    event873?: FluffyEvent873;
    event874?: FluffyEvent874;
    event875?: FluffyEvent875;
    event876?: FluffyEvent876;
    event877?: FluffyEvent877;
    event878?: FluffyEvent878;
    event879?: FluffyEvent879;
    event880?: FluffyEvent880;
    event881?: FluffyEvent881;
    event882?: FluffyEvent882;
    event883?: FluffyEvent883;
    event884?: FluffyEvent884;
    event885?: FluffyEvent885;
    event886?: FluffyEvent886;
    event887?: FluffyEvent887;
    event888?: FluffyEvent888;
    event889?: FluffyEvent889;
    event890?: FluffyEvent890;
    event891?: FluffyEvent891;
    event892?: FluffyEvent892;
    event893?: FluffyEvent893;
    event894?: FluffyEvent894;
    event895?: FluffyEvent895;
    event896?: FluffyEvent896;
    event897?: FluffyEvent897;
    event898?: FluffyEvent898;
    event899?: FluffyEvent899;
    event900?: FluffyEvent900;
    [property: string]: any;
}

export interface FluffyEvent801 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent802 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent803 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent804 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent805 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent806 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent807 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent808 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent809 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent810 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent811 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent812 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent813 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent814 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent815 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent816 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent817 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent818 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent819 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent820 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent821 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent822 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent823 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent824 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent825 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent826 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent827 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent828 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent829 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent830 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent831 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent832 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent833 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent834 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent835 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent836 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent837 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent838 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent839 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent840 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent841 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent842 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent843 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent844 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent845 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent846 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent847 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent848 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent849 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent850 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent851 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent852 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent853 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent854 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent855 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent856 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent857 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent858 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent859 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent860 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent861 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent862 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent863 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent864 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent865 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent866 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent867 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent868 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent869 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent870 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent871 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent872 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent873 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent874 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent875 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent876 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent877 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent878 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent879 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent880 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent881 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent882 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent883 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent884 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent885 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent886 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent887 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent888 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent889 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent890 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent891 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent892 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent893 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent894 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent895 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent896 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent897 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent898 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent899 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent900 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent901To1000 {
    event1000?: FluffyEvent1000;
    event901?:  FluffyEvent901;
    event902?:  FluffyEvent902;
    event903?:  FluffyEvent903;
    event904?:  FluffyEvent904;
    event905?:  FluffyEvent905;
    event906?:  FluffyEvent906;
    event907?:  FluffyEvent907;
    event908?:  FluffyEvent908;
    event909?:  FluffyEvent909;
    event910?:  FluffyEvent910;
    event911?:  FluffyEvent911;
    event912?:  FluffyEvent912;
    event913?:  FluffyEvent913;
    event914?:  FluffyEvent914;
    event915?:  FluffyEvent915;
    event916?:  FluffyEvent916;
    event917?:  FluffyEvent917;
    event918?:  FluffyEvent918;
    event919?:  FluffyEvent919;
    event920?:  FluffyEvent920;
    event921?:  FluffyEvent921;
    event922?:  FluffyEvent922;
    event923?:  FluffyEvent923;
    event924?:  FluffyEvent924;
    event925?:  FluffyEvent925;
    event926?:  FluffyEvent926;
    event927?:  FluffyEvent927;
    event928?:  FluffyEvent928;
    event929?:  FluffyEvent929;
    event930?:  FluffyEvent930;
    event931?:  FluffyEvent931;
    event932?:  FluffyEvent932;
    event933?:  FluffyEvent933;
    event934?:  FluffyEvent934;
    event935?:  FluffyEvent935;
    event936?:  FluffyEvent936;
    event937?:  FluffyEvent937;
    event938?:  FluffyEvent938;
    event939?:  FluffyEvent939;
    event940?:  FluffyEvent940;
    event941?:  FluffyEvent941;
    event942?:  FluffyEvent942;
    event943?:  FluffyEvent943;
    event944?:  FluffyEvent944;
    event945?:  FluffyEvent945;
    event946?:  FluffyEvent946;
    event947?:  FluffyEvent947;
    event948?:  FluffyEvent948;
    event949?:  FluffyEvent949;
    event950?:  FluffyEvent950;
    event951?:  FluffyEvent951;
    event952?:  FluffyEvent952;
    event953?:  FluffyEvent953;
    event954?:  FluffyEvent954;
    event955?:  FluffyEvent955;
    event956?:  FluffyEvent956;
    event957?:  FluffyEvent957;
    event958?:  FluffyEvent958;
    event959?:  FluffyEvent959;
    event960?:  FluffyEvent960;
    event961?:  FluffyEvent961;
    event962?:  FluffyEvent962;
    event963?:  FluffyEvent963;
    event964?:  FluffyEvent964;
    event965?:  FluffyEvent965;
    event966?:  FluffyEvent966;
    event967?:  FluffyEvent967;
    event968?:  FluffyEvent968;
    event969?:  FluffyEvent969;
    event970?:  FluffyEvent970;
    event971?:  FluffyEvent971;
    event972?:  FluffyEvent972;
    event973?:  FluffyEvent973;
    event974?:  FluffyEvent974;
    event975?:  FluffyEvent975;
    event976?:  FluffyEvent976;
    event977?:  FluffyEvent977;
    event978?:  FluffyEvent978;
    event979?:  FluffyEvent979;
    event980?:  FluffyEvent980;
    event981?:  FluffyEvent981;
    event982?:  FluffyEvent982;
    event983?:  FluffyEvent983;
    event984?:  FluffyEvent984;
    event985?:  FluffyEvent985;
    event986?:  FluffyEvent986;
    event987?:  FluffyEvent987;
    event988?:  FluffyEvent988;
    event989?:  FluffyEvent989;
    event990?:  FluffyEvent990;
    event991?:  FluffyEvent991;
    event992?:  FluffyEvent992;
    event993?:  FluffyEvent993;
    event994?:  FluffyEvent994;
    event995?:  FluffyEvent995;
    event996?:  FluffyEvent996;
    event997?:  FluffyEvent997;
    event998?:  FluffyEvent998;
    event999?:  FluffyEvent999;
    [property: string]: any;
}

export interface FluffyEvent1000 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent901 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent902 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent903 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent904 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent905 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent906 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent907 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent908 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent909 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent910 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent911 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent912 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent913 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent914 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent915 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent916 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent917 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent918 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent919 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent920 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent921 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent922 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent923 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent924 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent925 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent926 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent927 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent928 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent929 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent930 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent931 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent932 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent933 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent934 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent935 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent936 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent937 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent938 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent939 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent940 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent941 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent942 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent943 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent944 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent945 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent946 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent947 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent948 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent949 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent950 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent951 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent952 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent953 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent954 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent955 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent956 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent957 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent958 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent959 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent960 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent961 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent962 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent963 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent964 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent965 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent966 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent967 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent968 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent969 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent970 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent971 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent972 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent973 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent974 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent975 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent976 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent977 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent978 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent979 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent980 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent981 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent982 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent983 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent984 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent985 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent986 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent987 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent988 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent989 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent990 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent991 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent992 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent993 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent994 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent995 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent996 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent997 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent998 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyEvent999 {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface ProductCategory {
    categoryID?:   string;
    categoryName?: string;
    categoryPath?: string;
    [property: string]: any;
}

export interface SelectedOption {
    attribute?: string;
    value?:     string;
    [property: string]: any;
}

export interface ProfileStitch {
    identityMap?:     any;
    profileStitchID?: ProfileStitchID;
    version?:         string;
    [property: string]: any;
}

export interface ProfileStitchID {
    _id?:       string;
    namespace?: ProfileStitchIDNamespace;
    xid?:       string;
    [property: string]: any;
}

export interface ProfileStitchIDNamespace {
    code?: string;
    [property: string]: any;
}

export interface SchemaSearch {
    isPaid?:         boolean;
    keywords?:       string;
    pageDepth?:      any;
    position?:       any;
    searchEngine?:   string;
    searchEngineID?: string;
    slot?:           string;
    [property: string]: any;
}

export interface UserActivityRegion {
    captureTimestamp?:   any;
    dataCenterLocation?: string;
    [property: string]: any;
}

export interface SchemaWeb {
    webInteraction?: FluffyWebInteraction;
    webPageDetails?: FluffyWebPageDetails;
    webReferrer?:    FluffyWebReferrer;
    [property: string]: any;
}

export interface FluffyWebInteraction {
    linkClicks?: TentacledLinkClicks;
    name?:       string;
    region?:     string;
    type?:       string;
    URL?:        string;
    [property: string]: any;
}

export interface TentacledLinkClicks {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyWebPageDetails {
    isErrorPage?: boolean;
    isHomePage?:  boolean;
    name?:        string;
    pageViews?:   TentacledPageViews;
    server?:      string;
    siteSection?: string;
    URL?:         string;
    viewName?:    string;
    [property: string]: any;
}

export interface TentacledPageViews {
    id?:    string;
    value?: number;
    [property: string]: any;
}

export interface FluffyWebReferrer {
    type?: string;
    URL?:  string;
    [property: string]: any;
}
