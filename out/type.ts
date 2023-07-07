export interface Schema {
  device?: Device;
  environment?: Environment;
  placeContext?: PlaceContext;
}

export interface Device {
  colorDepth?: number;
  isBackgroundPushEnabled?: boolean;
  isLocationEnabled?: boolean;
  isPushOptIn?: boolean;
  locationPermission?: string;
  manufacturer?: string;
  model?: string;
  modelNumber?: string;
  screenHeight?: number;
  screenOrientation?: string;
  screenWidth?: number;
  type?: string;
  typeID?: string;
  typeIDService?: string;
  [property: string]: any;
}

export interface Environment {
  _dc?: Dc;
  browserDetails?: BrowserDetails;
  carrier?: string;
  colorDepth?: number;
  connectionType?: string;
  domain?: string;
  duration?: number;
  ipV4?: string;
  ipV6?: string;
  ISP?: string;
  operatingSystem?: string;
  operatingSystemVendor?: string;
  operatingSystemVersion?: string;
  previousScreen?: string;
  type?: string;
  viewedScreen?: string;
  viewportHeight?: number;
  viewportWidth?: number;
  [property: string]: any;
}

export interface Dc {
  language?: string;
  [property: string]: any;
}

export interface BrowserDetails {
  acceptLanguage?: string;
  cookiesEnabled?: boolean;
  javaEnabled?: boolean;
  javaScriptEnabled?: boolean;
  javaScriptVersion?: string;
  javaVersion?: string;
  name?: string;
  quicktimeVersion?: string;
  thirdPartyCookiesEnabled?: boolean;
  userAgent?: string;
  userAgentClientHints?: UserAgentClientHints;
  vendor?: string;
  version?: string;
  viewportHeight?: number;
  viewportWidth?: number;
  [property: string]: any;
}

export interface UserAgentClientHints {
  architecture?: string;
  bitness?: string;
  brands?: any;
  mobile?: boolean;
  model?: string;
  platform?: string;
  platformVersion?: string;
  wow64?: boolean;
  [property: string]: any;
}

export interface PlaceContext {
  activePOIs?: ActivePOIs[];
  geo?: Geo;
  ianaTimezone?: string;
  localTime?: string;
  localTimezoneOffset?: number;
  POIinteraction?: POIinteraction;
  [property: string]: any;
}

export interface POIinteraction {
  poiDetail?: PoiDetail;
  poiEntries?: PoiEntries;
  poiExits?: PoiExits;
  [property: string]: any;
}

export interface PoiDetail {
  beaconInteractionDetails?: PoiDetailBeaconInteractionDetails;
  category?: string;
  distanceToPOICenter?: number;
  geoInteractionDetails?: PoiDetailGeoInteractionDetails;
  locatingType?: string;
  metadata?: PoiDetailMetadata;
  name?: string;
  poiID?: string;
  type?: string;
  [property: string]: any;
}

export interface PoiDetailBeaconInteractionDetails {
  beaconMajor?: number;
  beaconMinor?: number;
  proximity?: string;
  proximityUUID?: string;
  [property: string]: any;
}

export interface PoiDetailGeoInteractionDetails {
  deviceGeoAccuracy?: number;
  distanceToCenter?: number;
  geoShape?: PurpleGeoShape;
  [property: string]: any;
}

export interface PurpleGeoShape {
  _id?: string;
  _schema?: PurpleSchema;
  ceiling?: number;
  [property: string]: any;
}

export interface PurpleSchema {
  box?: PurpleBox[];
  circle?: PurpleCircle;
  description?: string;
  elevation?: number;
  polygon?: PurplePolygon[];
  [property: string]: any;
}

export interface PurpleBox {
  _id?: string;
  _schema?: FluffySchema;
  [property: string]: any;
}

export interface FluffySchema {
  description?: string;
  elevation?: number;
  latitude?: number;
  longitude?: number;
  [property: string]: any;
}

export interface PurpleCircle {
  _id?: string;
  _schema?: TentacledSchema;
  [property: string]: any;
}

export interface TentacledSchema {
  coordinates?: PurpleCoordinates;
  description?: string;
  radius?: number;
  [property: string]: any;
}

export interface PurpleCoordinates {
  _id?: string;
  _schema?: StickySchema;
  [property: string]: any;
}

export interface StickySchema {
  description?: string;
  elevation?: number;
  latitude?: number;
  longitude?: number;
  [property: string]: any;
}

export interface PurplePolygon {
  _id?: string;
  _schema?: IndigoSchema;
  [property: string]: any;
}

export interface IndigoSchema {
  description?: string;
  elevation?: number;
  latitude?: number;
  longitude?: number;
  [property: string]: any;
}

export interface PoiDetailMetadata {
  list?: PurpleList[];
  [property: string]: any;
}

export interface PurpleList {
  key?: string;
  value?: string;
  [property: string]: any;
}

export interface PoiEntries {
  id?: string;
  value?: number;
  [property: string]: any;
}

export interface PoiExits {
  id?: string;
  value?: number;
  [property: string]: any;
}

export interface ActivePOIs {
  beaconInteractionDetails?: ActivePOIsBeaconInteractionDetails;
  category?: string;
  distanceToPOICenter?: number;
  geoInteractionDetails?: ActivePOIsGeoInteractionDetails;
  locatingType?: string;
  metadata?: ActivePOIsMetadata;
  name?: string;
  poiID?: string;
  type?: string;
  [property: string]: any;
}

export interface ActivePOIsBeaconInteractionDetails {
  beaconMajor?: number;
  beaconMinor?: number;
  proximity?: string;
  proximityUUID?: string;
  [property: string]: any;
}

export interface ActivePOIsGeoInteractionDetails {
  deviceGeoAccuracy?: number;
  distanceToCenter?: number;
  geoShape?: FluffyGeoShape;
  [property: string]: any;
}

export interface FluffyGeoShape {
  _id?: string;
  _schema?: IndecentSchema;
  ceiling?: number;
  [property: string]: any;
}

export interface IndecentSchema {
  box?: FluffyBox[];
  circle?: FluffyCircle;
  description?: string;
  elevation?: number;
  polygon?: FluffyPolygon[];
  [property: string]: any;
}

export interface FluffyBox {
  _id?: string;
  _schema?: HilariousSchema;
  [property: string]: any;
}

export interface HilariousSchema {
  description?: string;
  elevation?: number;
  latitude?: number;
  longitude?: number;
  [property: string]: any;
}

export interface FluffyCircle {
  _id?: string;
  _schema?: AmbitiousSchema;
  [property: string]: any;
}

export interface AmbitiousSchema {
  coordinates?: FluffyCoordinates;
  description?: string;
  radius?: number;
  [property: string]: any;
}

export interface FluffyCoordinates {
  _id?: string;
  _schema?: CunningSchema;
  [property: string]: any;
}

export interface CunningSchema {
  description?: string;
  elevation?: number;
  latitude?: number;
  longitude?: number;
  [property: string]: any;
}

export interface FluffyPolygon {
  _id?: string;
  _schema?: MagentaSchema;
  [property: string]: any;
}

export interface MagentaSchema {
  description?: string;
  elevation?: number;
  latitude?: number;
  longitude?: number;
  [property: string]: any;
}

export interface ActivePOIsMetadata {
  list?: FluffyList[];
  [property: string]: any;
}

export interface FluffyList {
  key?: string;
  value?: string;
  [property: string]: any;
}

export interface Geo {
  _id?: string;
  _schema?: GeoSchema;
  city?: string;
  countryCode?: string;
  dmaID?: number;
  msaID?: number;
  postalCode?: string;
  stateProvince?: string;
  [property: string]: any;
}

export interface GeoSchema {
  description?: string;
  elevation?: number;
  latitude?: number;
  longitude?: number;
  [property: string]: any;
}
